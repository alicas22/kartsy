from flask import Flask, Blueprint, jsonify
from ..models import db, Product



product_routes = Blueprint('product', __name__)

@product_routes.route('/')
def all_products():
    all_prod = Product.query.all()
    print(all_prod[0].to_dict())
    product = [product.to_dict() for product in all_prod]
    return jsonify(product)