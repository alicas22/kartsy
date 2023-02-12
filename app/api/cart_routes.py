from flask import Flask, Blueprint, jsonify, request
from ..models import db, ShoppingCartItem


cart_routes = Blueprint('cart', __name__)

@cart_routes.route('/')
def get_all_cart_items():
    all_cart_items = ShoppingCartItem.query.all()
    cart_items = [cart_item.to_dict() for cart_item in all_cart_items]
    return jsonify(cart_items)


@cart_routes.route('/', methods=['POST'])
def create_cart_item():
    res = request.get_json()
    product = ProductForm()
    product["csrf_token"].data = request.cookies["csrf_token"]

    if product.validate_on_submit():
        product = Product(
            owner_id=res["owner_id"],
            name=res["name"],
            price=res["price"],
            description=res["description"]
        )
        db.session.add(product)
        db.session.commit()
        return product.to_dict()

@cart_routes.route('/<int:id>')
def single_cart_item(id):
    cart_item = ShoppingCartItem.query.get(id)
    item = cart_item.to_dict()
    return jsonify(item)
