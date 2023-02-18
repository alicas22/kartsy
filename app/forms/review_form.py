from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError

def review_length(form, field):
    review = field.data
    if len(review) < 3:
        raise ValidationError('Review must be between 3 and 500 characters.')

def stars_valid(form, field):
    star = field.data
    if star <= 0:
        raise ValidationError('Stars must be between 1 and 5.')


class ReviewForm(FlaskForm):
    review = StringField('review', validators=[DataRequired(), review_length])
    star = IntegerField('star', validators=[DataRequired(), stars_valid])
