from flask import Flask, Blueprint, jsonify, request
from ..models import db, Product
from ..forms import ProductForm



product_routes = Blueprint('product', __name__)

@product_routes.route('/')
def all_products():
    all_prod = Product.query.all()
    products = [product.to_dict() for product in all_prod]
    return jsonify(products)

@product_routes.route('/', methods=['POST'])
def create_product():
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

@product_routes.route('/<int:id>')
def single_product(id):
    product = Product.query.get(id)
    prod = product.to_dict()
    return jsonify(prod)
