from flask import Blueprint, request, jsonify
from ..forms.search_form import SearchForm
from ..models import db, Product
from sqlalchemy import  or_


search_routes = Blueprint('search', __name__)


@search_routes.route('/', methods=['GET', 'POST'])
def search():

    query = request.args.get('q')
    products = Product.query.filter(or_(Product.name.like("%" + query + "%"),  Product.description.like("%" + query + "%"))).all()
    print(">>>>>>>>>>>>>>>>>>> query results:", products)
    # print(">>>>>>>>>>>>>>>>>>> query results:", results[0].to_dict())

    return jsonify([product.to_dict() for product in products])
