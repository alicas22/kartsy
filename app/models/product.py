from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import validates


class Product(db.Model):
    __tablename__ = 'products'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.String(2000), nullable=False)

    owner = db.relationship('User', back_populates='products')
    reviews = db.relationship('Review', back_populates='product')
    images = db.relationship('ProductImage', back_populates='product')
    shopping_cart_item = db.relationship("ShoppingCartItem", back_populates="product")

    @validates('price')
    def validate_price(self, key, price):
        if price <= 0:
            raise ValueError('Price must be greater than 0')
        return price

    @validates('name')
    def validate_name(self, key, name):
        if len(name) < 1:
            raise ValueError('Name must be at least 1 characters long')
        return name

    def to_dict(self):
        return {
            'id': self.id,
            'ownerId':self.owner_id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
        }
