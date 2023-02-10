from flask import Flask, Blueprint, jsonify
from ..models import db, Product



product_routes = Blueprint('product', __name__)

@product_routes.route('/')
def all_products():
    all_prod = Product.query.all()
    product = [product.to_dict() for product in all_prod]
    print((product[0]))
    return jsonify(product)
