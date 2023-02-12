from flask import Flask, Blueprint, jsonify, request
from ..models import db, Product, Review
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


@product_routes.route('/<int:id>', methods=["PUT"])
def edit_product(id):
    current_product = Product.query.get(id)
    res = request.get_json()

    product = ProductForm()
    product["csrf_token"].data = request.cookies["csrf_token"]

    if current_product:
        product.populate_obj(current_product)

        current_product.name = res["name"]
        current_product.price = res['price']
        current_product.description = res['description']

        db.session.commit()
        prod = current_product.to_dict()
        return jsonify(prod)
    else:
        return 'Product Not Found'

@product_routes.route('/<int:id>', methods=["DELETE"])
def delete_product(id):
    # current_product = Product.query.get(id)
    # print("HERE",current_product)

    # if current_product:
    #     db.session.delete(current_product)
    #     db.session.commit()
    # else:
    return 'WE NEED TO ADD A DELETE CASCADE BETWEEN TABLE PRODUCTS AND TABLE PRODUCT_IMAGES'


@product_routes.route('/<int:id>/reviews', methods=['GET'])
def all_reviews(id):
    foundProduct = Product.query.get(id)
    all_rev = foundProduct.reviews
    review = [rev.to_dict() for rev in all_rev]
    return jsonify(review)
    
