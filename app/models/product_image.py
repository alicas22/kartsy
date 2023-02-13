from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy.orm import validates

import re
from urllib.parse import urlparse

def validate_url(url):
    try:
        result = urlparse(url)
        return result.scheme and result.netloc
    except:
        return False


class ProductImage(db.Model):
    __tablename__ = 'product_images'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    url = db.Column(db.String(500), nullable=False)

    product = db.relationship('Product', back_populates='images')


    @validates('url')
    def validate_url(self, key, url):
        if not validate_url(url):
            raise ValueError('Invalid URL')
        return url


    def to_dict(self):
        return {
            'id': self.id,
            'productId':self.product_id,
            'url': self.url,
            # 'product': self.product
        }
