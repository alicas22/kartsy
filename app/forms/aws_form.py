from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired
from wtforms import SubmitField
from app.aws import ALLOWED_EXTENSIONS

class AWSForm(FlaskForm):
    imageUrl = FileField("imageUrl", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    # submit = SubmitField("Create Post")
