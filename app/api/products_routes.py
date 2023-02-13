from flask import Flask, Blueprint, jsonify, request
from ..models import db, Product, Review, ProductImage
from ..forms import ProductForm
from ..forms.review_form import ReviewForm
from flask_login import current_user, login_required



product_routes = Blueprint('product', __name__)

@product_routes.route('/')
def all_products():
    all_prod = Product.query.all()
    products = [product.to_dict() for product in all_prod]

    prod_res = []
    for product in products:

        prod_res.append({
            'name': product['name'],
            'price': product['price'],
            'imagesUrl': product['imagesUrl']
        })

    return jsonify(prod_res)

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
    current_product = Product.query.get(id)
    print("HERE",current_product)

    if current_product:
        db.session.delete(current_product)
        db.session.commit()
    else:
        return 'error'


@product_routes.route('/<int:id>/reviews', methods=['GET'])
def all_reviews(id):
    foundProduct = Product.query.get(id)
    all_rev = foundProduct.reviews
    review = [rev.to_dict() for rev in all_rev]
    return jsonify(review)


@product_routes.route('/<int:id>/reviews', methods=['POST'])
@login_required
def post_review(id):
    foundProduct = Product.query.get(id)
    res = request.get_json()
    form = ReviewForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    print(current_user)
    if form.validate_on_submit():
        form = Review(
            product_id=foundProduct.id,
            # user_id=res['owner_id'],
            review=res['review'],
            star=res['star']
        )
        print(form)
        db.session.add(form)
        db.session.commit()
        return form.to_dict()
