from flask import Blueprint, jsonify, request
from ..models import db, ShoppingCartItem



cart_routes = Blueprint('cart', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@cart_routes.route('/')
def get_all_cart_items():
    all_cart_items = ShoppingCartItem.query.all()
    cart_items = [cart_item.to_dict() for cart_item in all_cart_items]
    return jsonify(cart_items)


@cart_routes.route('/<int:id>')
def single_cart_item(id):
    cart_item = ShoppingCartItem.query.get(id)
    item = cart_item.to_dict()
    return jsonify(item)


@cart_routes.route('/', methods=['POST'])
def create_cart_item():
    # cart_item = Product.query.get(id)
    res = request.get_json()

    # check if item already in cart:
    item_in_cart = ShoppingCartItem.query.filter_by(product_id = res['productId']).first()
    if(item_in_cart):
        item_id = item_in_cart.product_id
        item_in_cart.count_of_product += 1
        db.session.commit()
        item = cart_item.to_dict()
        return jsonify(item)
    elif res:
        item = ShoppingCartItem(
            product_id=res["productId"],
            user_id=res["userId"],
            count_of_product=res["countOfProduct"]
            )

        db.session.add(item)
        db.session.commit()
        return item.to_dict()
    else:
        return {"error: could not add to cart"}


@cart_routes.route('/', methods=['PUT'])
def update_cart_item():
    res = request.get_json()
    cart_item = ShoppingCartItem.query.get(res['cartItemId'])

    if cart_item:
        cart_item.count_of_product = res['countOfProduct']

        db.session.commit()
        item = cart_item.to_dict()
        return jsonify(item)
    else:
        return {'error': 'Cannot update count'}

@cart_routes.route('/purchasecomplete/', methods=['DELETE'])
def clear_cart_items():
        print("from clear cart route")
        db.session.query(ShoppingCartItem).delete()
        db.session.commit()
        return {'message':"successfully deleted"}


@cart_routes.route('/', methods=['DELETE'])
def delete_cart_item():
    res = request.get_json()
    cart_item = ShoppingCartItem.query.get(res['cartItemId'])

    if cart_item:
        db.session.delete(cart_item)
        db.session.commit()
        return res
    else:
        return {'error': 'Cannot delete item'}
