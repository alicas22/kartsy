from .db import db, environment, SCHEMA, add_prefix_for_prod

class Category(db.Model):
    __tablename__ = 'categories'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)

    products = db.relationship('Product', back_populates='category')

    def to_dict(self):
      products_list = []
      for product in self.products:
            products_list.append({
                'id': product.id,
                'name': product.name,
                'price': product.price,
                'description': product.description
            })
      return {
          'id': self.id,
          'name': self.name,
          'products': products_list
        }
