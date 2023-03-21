from flask import Blueprint, jsonify, request
from ..models import db, Product, Review, ProductImage
from ..forms import ProductForm
from ..forms.review_form import ReviewForm
from flask_login import current_user, login_required
from ..models import Product

product_routes = Blueprint('product', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages



@product_routes.route('/')
def all_products():
    all_prod = Product.query.all()
    products = [product.to_dict() for product in all_prod]
    print('>>>>>>>>>>>>>>>>>>>>from all products route')
    prod_res = []
    for product in products:

        prod_res.append({
            'id': product['id'],
            'name': product['name'],
            'price': product['price'],
            'imagesUrl': product['imagesUrl'],
            'ownerId': product['ownerId'],
            'categoryId':product['categoryId']
        })

    return jsonify(prod_res)

@product_routes.route('/', methods=['POST'])
def create_product():
    print('>>>>>>>>>>>from product post route')
    res = request.get_json()
    product = ProductForm()
    product["csrf_token"].data = request.cookies["csrf_token"]

    if product.validate_on_submit():
        product = Product(
            owner_id=res["ownerId"],
            name=res["name"],
            price=res["price"],
            description=res["description"],
            category_id = res['categoryId']
        )
        image = ProductImage(
            url=res['imageUrl'],
            product = product
        )
        db.session.add(product)
        db.session.add(image)
        db.session.commit()
        return product.to_dict()

    return {'errors': validation_errors_to_error_messages(product.errors)}, 401

@product_routes.route('/<int:id>')
def single_product(id):
    product = Product.query.get(id)
    prod = product.to_dict()
    return jsonify(prod)


@product_routes.route('/<int:id>', methods=["PUT"])
def edit_product(id):
    current_product = Product.query.get(id)
    current_product_image = ProductImage.query.filter_by(product_id=id)

    res = request.get_json()
    product = ProductForm()
    product["csrf_token"].data = request.cookies["csrf_token"]
    if product.validate_on_submit():
        product.populate_obj(current_product)

        current_product.name = res["name"]
        current_product.price = res['price']
        current_product.description = res['description']
        current_product.category_id = res['categoryId']
        current_product_image.url = res['imagesUrl']

        db.session.commit()
        prod = current_product.to_dict()
        return jsonify(prod)
    return {'errors': validation_errors_to_error_messages(product.errors)}, 401



@product_routes.route('/<int:id>', methods=["DELETE"])
def delete_product(id):
    current_product = Product.query.get(id)

    if current_product:
        db.session.delete(current_product)
        db.session.commit()
    else:
        return {'error': 'Coult not delete product'}


@product_routes.route('/<int:id>/reviews', methods=['GET'])
def all_reviews(id):
    foundProduct = Product.query.get(id)
    all_rev = foundProduct.reviews
    reviews = [rev.to_dict() for rev in all_rev]

    review_res = []
    for review in reviews:

        review_res.append({
            'id': review['id'],
            'userId': review['userId'],
            'productId': review['productId'],
            'review': review['review'],
            'star': review['star'],
            'createdAt': review['createdAt'],
            'updatedAt': review['updatedAt'],
            'firstName': review['user'],
        })

    return jsonify(review_res)


@product_routes.route('/<int:id>/reviews', methods=['POST'])
@login_required
def post_review(id):
    foundProduct = Product.query.get(id)
    res = request.get_json()
    form = ReviewForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        form = Review(
            product_id=foundProduct.id,
            user_id=current_user.id,
            review=res['review'],
            star=res['star']
        )

        db.session.add(form)
        db.session.commit()
        return form.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
