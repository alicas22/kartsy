from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import validates
from datetime import datetime


class Like(db.Model):
    __tablename__ = 'likes'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')))
    created_at = db.Column(db.DateTime, default=datetime.utcnow,  nullable=False)

    user = db.relationship('User', back_populates='likes')
    product = db.relationship('Product', back_populates='likes')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'productId': self.product_id,
            'createdAt': self.created_at,
            'userFirstName': self.user.first_name,
            'userLastName': self.user.last_name
        }
