from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import validates
from datetime import datetime



class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    review = db.Column(db.String(500), nullable=False)
    star = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime,default=datetime.utcnow,  nullable=False)
    updated_at = db.Column(db.DateTime,default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

    user = db.relationship('User', back_populates='reviews')
    product = db.relationship('Product', back_populates='reviews')

    @validates('star')
    def validate_star(self, key, star):
        if int(star) < 1 or int(star) > 5:
            raise ValueError('Star must be between 1 and 5')
        return star

    @validates('review')
    def validate_review(self, key, review):
        if len(review) < 3:
            raise ValueError('Review must be at least 3 characters long')
        return review

    def to_dict(self):
        return {
            'id': self.id,
            'userId':self.user_id,
            'productId': self.product_id,
            'review': self.review,
            'star': self.star,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at,
            'user': self.user.first_name,
        }
