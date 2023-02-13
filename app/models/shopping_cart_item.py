from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import validates


class ShoppingCartItem(db.Model):
    __tablename__ = 'shopping_cart_item'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable = False)
    count_of_product = db.Column(db.Integer, nullable=False)

    product = db.relationship("Product", back_populates="shopping_cart_item")
    user = db.relationship("User", back_populates="shopping_cart_item")

    @validates('countOfProduct')
    def validate_countOfProduct(self, key, countOfProduct):
        if countOfProduct < 1:
            raise ValueError('Count of product must be at least 1')
        return countOfProduct

    def to_dict(self):
        return {
            'id': self.id,
            'productId':self.product_id,
            'userId': self.user_id,
            'countOfProduct': self.count_of_product,
            # 'product': self.product,
            # 'user': self.user
        }
