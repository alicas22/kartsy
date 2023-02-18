from flask import  Blueprint, jsonify, request
from flask_login import login_required
from ..models import db, Review
from ..forms.review_form import ReviewForm



review_routes = Blueprint('review', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@review_routes.route('/')
def all_reviews():

    all_rev = Review.query.all()
    reviews = [review.to_dict() for review in all_rev]

    return jsonify(reviews)

@review_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_review(id):
    found_review = Review.query.get(id)
    res = request.get_json()

    form = ReviewForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        form.populate_obj(found_review)

        found_review.review = res["review"]
        found_review.star = res["star"]

        db.session.commit()
        res = found_review.to_dict()
        return jsonify(res)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
    current_review = Review.query.get(id)

    if current_review:
        db.session.delete(current_review)
        db.session.commit()
        return current_review.to_dict()
    else:
        return {'error':'Could not delete review'}
