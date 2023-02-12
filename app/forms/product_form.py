from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired, ValidationError

class ProductForm(FlaskForm):
    name= StringField('name', validators=[DataRequired()])
    price = IntegerField('price', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
