from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, TextAreaField
from wtforms.validators import DataRequired, ValidationError


def name_length(form, field):
    name = field.data
    if len(name) < 2:
        raise ValidationError('Name must be at least 2 characters.')

def price_valid(form, field):
    price = field.data
    if price <= 0:
        raise ValidationError('Price must be more than $0.00.')


def description_length(form, field):
    description = field.data
    if 3 < len(description) < 2000:
        raise ValidationError('description must be between 3 and 2000 characters long.')


class ProductForm(FlaskForm):
    name= StringField('name', validators=[DataRequired(),name_length])
    price = FloatField('price', validators=[DataRequired(), price_valid])
    description = TextAreaField('description', validators=[DataRequired(), description_length])
    images_url = StringField('image_url', validators=[DataRequired()])
