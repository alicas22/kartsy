from flask import Blueprint, request, jsonify
from ..forms.search_form import SearchForm
from ..models import db, Product
from sqlalchemy import  or_


search_routes = Blueprint('search', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@search_routes.route('', methods=['GET', 'POST'])
def search():

    query = request.args.get('q')
    print('QUERY', query)
    products = Product.query.filter(or_(Product.name.like("%" + query + "%"),  Product.description.like("%" + query + "%"))).all()
    # products = Product.query.filter(Product.name.like("%" + query + "%")).all()
    print('products', products)
    if products:
        return jsonify([product.to_dict() for product in products])
    print('did not find result')
    return {}
