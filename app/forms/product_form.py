from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, TextAreaField
from wtforms.validators import DataRequired, ValidationError

class ProductForm(FlaskForm):
    name= StringField('name', validators=[DataRequired()])
    price = FloatField('price', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
