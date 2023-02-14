from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired

class CartItemForm(FlaskForm):
    product_id= IntegerField('product_id', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
    count_of_product = IntegerField('count_of_product', validators=[DataRequired()])
