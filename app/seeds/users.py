from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    anton_user = User(
        first_name="Magic", last_name="Mike", username="MagicMike", email="magic@mike.com", password="password")
    meredith_user = User(
        first_name="Jessie", last_name="Robin", username="HelloJessie", email="jessie@robin.com", password="password2")
    katherin_user = User(
        first_name="Jessica", last_name="Cain", username="JessicaHere", email="jessica@cain.com", password="password")
    sophie_user = User(
        first_name="Ryan", last_name="Gosling", username="RyanGosling", email="ryan@gosling.com", password="password4")
    demo = User(
        first_name="Demo", last_name="User", username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        first_name='Marnie', last_name="Green", username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        first_name='Bobbie', last_name='Brown', username='bobbie', email='bobbie@aa.io', password='password')


    db.session.add(anton_user)
    db.session.add(meredith_user)
    db.session.add(katherin_user)
    db.session.add(sophie_user)
    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
