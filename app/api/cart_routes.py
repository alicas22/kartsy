from flask import Flask, Blueprint, jsonify, request
from ..models import db, ShoppingCartItem, Product
from ..forms.cart_item_form import CartItemForm


cart_routes = Blueprint('cart', __name__)

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
        print('>>>>>>>>>>>>>>>>>>item in cart', (item_id))
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
        return "error: could not add to cart"


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
        return 'Cannot update count'


@cart_routes.route('/', methods=['DELETE'])
def delete_cart_item():
    res = request.get_json()
    print('res from delete route', res)
    cart_item = ShoppingCartItem.query.get(res['cartItemId'])

    if cart_item:
        db.session.delete(cart_item)
        db.session.commit()
        return res
    else:
        return 'Cannot delete item'
