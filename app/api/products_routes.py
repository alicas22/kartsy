from flask import Flask, Blueprint, jsonify
from ..models import db, Product



product_routes = Blueprint('product', __name__)

@product_routes.route('/')
def all_products():
    all_prod = Product.query.all()
    products = [product.to_dict() for product in all_prod]
    return jsonify(products)

@product_routes.route('/<int:id>')
def single_product(id):
    product = Product.query.get(id)
    prod = [product.to_dict()]
    return jsonify(prod)
