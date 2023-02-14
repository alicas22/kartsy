from flask import Flask, Blueprint, jsonify, request
from flask_login import login_required
from ..models import db, Review
from ..forms.review_form import ReviewForm



review_routes = Blueprint('review', __name__)




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
    else:
        return 'Review Not Found'


@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
    current_review = Review.query.get(id)

    if current_review:
        db.session.delete(current_review)
        db.session.commit()
        return current_review.to_dict()
    else:
        return 'error'
