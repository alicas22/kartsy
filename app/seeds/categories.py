from app.models import db, Category, environment, SCHEMA


def seed_categories():
    category1= Category(name ='Art')
    category2= Category(name ='Clothing')
    category3= Category(name ='Electronics')
    category4= Category(name ='Gifts')
    category5= Category(name ='Home')
    category6= Category(name ='Toys')

    categories = [category1, category2, category3,
                  category4, category5, category6]

    for cat in categories:
        db.session.add(cat)
    db.session.commit()


def undo_categories():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM categories")

    db.session.commit()
