from flask_wtf import FlaskForm
from wtforms import StringField, FloatField, TextAreaField, IntegerField, SubmitField
# from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms.validators import DataRequired, ValidationError
# from app.aws import ALLOWED_EXTENSIONS



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
    if len(description) > 4000 or len(description) < 3:
        raise ValidationError('Description must be between 3 and 4000 characters long.')

def images_url_valid(form, field):
    imageUrl = field.data
    if not imageUrl.endswith(('.png', '.jpg', '.gif', '.pdf', '.jpeg')):
        raise ValidationError('Upload failed')

class ProductForm(FlaskForm):
    name= StringField('name', validators=[DataRequired(),name_length])
    price = FloatField('price', validators=[DataRequired(), price_valid])
    description = TextAreaField('description', validators=[DataRequired(), description_length])
    # imageUrl = FileField("Image File", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    categoryId = IntegerField('category_id', validators=[DataRequired()])
    imageUrl = StringField('imageUrl', validators=[DataRequired(), images_url_valid])
    # submit = SubmitField("Create Post")
