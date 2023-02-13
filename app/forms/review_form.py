from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, NumberRange



class ReviewForm(FlaskForm):
    review = StringField('review', validators=[DataRequired()])
    star = IntegerField('star', validators=[DataRequired(), NumberRange(min=1, max=5)])
