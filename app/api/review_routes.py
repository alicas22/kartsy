from flask import Flask, Blueprint, jsonify
from flask_login import login_required
from ..models import db, Review
from ..forms.review_form import ReviewForm



review_routes = Blueprint('review', __name__)




# @review_routes.route('/<:reviewId>', methods=['PUT'])
# @login_required
# def edit_review(id):
#     form = ReviewForm()
#     updated_review = Item.query.get(id)
#     form["csrf_token"].data = request.cookies["csrf_token"]
#     res = request.get_json()
#     if form.validate_on_submit():
#         review = Review(
#             updated_review.review= res["review"]
#             updated_review.star=res["star"]
#         )
#         db.session.add(review)
#         db.session.commit()
#         return review.to_dict()
