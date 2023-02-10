from app.models import db, Review, environment, SCHEMA
import random

def seed_reviews():

    user1_review6 = Review(user_id=1, product_id=6, review="I recently purchased this kitchen appliance and I am so impressed with its efficiency and versatility. It makes cooking and baking so much easier. I would definitely recommend.", star = random.randint(1,5))
    user1_review7 = Review(user_id=1, product_id=7, review="This laptop was a disappointment. It was slow and lacked the performance I was hoping for. I wouldn't recommend.", star = random.randint(1,5))
    user1_review8 = Review(user_id=1, product_id=8, review="I recently purchased this laptop and I am so impressed with its speed and performance. It's the perfect laptop for my work and personal needs. I would definitely recommend.", star = random.randint(1,5))
    user1_review9 = Review(user_id=1, product_id=9, review="This camping gear was a let down. It was not durable and it didn't provide the comfort I was hoping for. I wouldn't recommend.", star = random.randint(1,5))
    user1_review10 = Review(user_id=1, product_id=10, review="I recently purchased this camping gear and I am so impressed with its versatility and durability. It's the perfect gear for my outdoor adventures. I would definitely recommend.", star = random.randint(1,5))
    user1_review11 = Review(user_id=1, product_id=11, review="This bike was a let down. It was uncomfortable and slow. I wouldn't recommend.", star = random.randint(1,5))
    user1_review12 = Review(user_id=1, product_id=12, review="I recently purchased this camera and I am so impressed with its picture quality. It's easy to use and it captures beautiful memories. I would definitely recommend.", star = random.randint(1,5))
    user1_review13 = Review(user_id=1, product_id=13, review="I recently purchased this bike and I am so impressed with its comfort and speed. It's the perfect bike for my daily commute. I would definitely recommend.", star = random.randint(1,5))
    user1_review14 = Review(user_id=1, product_id=14, review="This video game was a disappointment. The graphics were poor and the gameplay was boring. I wouldn't recommend.", star = random.randint(1,5))
    user1_review15 = Review(user_id=1, product_id=15, review="This product was a let down. It was poorly made and didn't provide the results I was hoping for. I wouldn't recommend.", star = random.randint(1,5))
    user1_review16 = Review(user_id=1, product_id=16, review="I recently purchased this video game and I was blown away by the graphics and gameplay. It was so much fun and I can't wait to play it again. I would definitely recommend.", star = random.randint(1,5))
    user1_review17 = Review(user_id=1, product_id=17, review="I recently purchased this workout equipment and I am so impressed with the results I've seen. It's well-made and helps me get the most out of my workouts. I would definitely recommend.", star = random.randint(1,5))
    user1_review18 = Review(user_id=1, product_id=18, review="This book was a disappointment. The writing was dull and lacked substance. I wouldn't recommend.", star = random.randint(1,5))
    user1_review19 = Review(user_id=1, product_id=19, review="I recently purchased this book and I was blown away by the quality of the writing. It was engaging, thought-provoking, and I couldn't put it down. I would definitely recommend.", star = random.randint(1,5))
    user1_review20 = Review(user_id=1, product_id=20, review="This product was a disappointment. It was not energy efficient and it didn't make my cleaning tasks any easier. I wouldn't recommend.", star = random.randint(1,5))



    user2_review1 = Review(user_id=2, product_id=1, review="I recently purchased this home appliance and I am so impressed with its performance. It makes my cleaning tasks so much easier and it's energy efficient. I would definitely recommend.", star = random.randint(1,5))
    user2_review2 = Review(user_id=2, product_id=2, review="This product was a let down. It was harsh on my skin and it didn't produce any noticeable results. I wouldn't recommend.", star = random.randint(1,5))
    user2_review3 = Review(user_id=2, product_id=3, review="I recently purchased this beauty product and I am so impressed with its results. It's gentle and effective, and it leaves my skin feeling refreshed and revitalized. I would definitely recommend.", star = random.randint(1,5))
    user2_review4 = Review(user_id=2, product_id=4, review="This product was a disappointment. It was difficult to install and it didn't make my car trips any more convenient. I wouldn't recommend.", star = random.randint(1,5))
    user2_review5 = Review(user_id=2, product_id=5, review="I recently purchased this car accessory and I am so impressed with its functionality. It makes my car trips so much more convenient and comfortable. I would definitely recommend.", star = random.randint(1,5))
    user2_review11 = Review(user_id=2, product_id=11, review="This product was a let down. The flashlight was not bright enough and it broke after just a few uses. I wouldn't recommend.", star = random.randint(1,5))
    user2_review12 = Review(user_id=2, product_id=12, review="I recently purchased this flashlight and I am so impressed with its brightness and durability. It's the perfect tool for camping and outdoor adventures. I would definitely recommend.", star = random.randint(1,5))
    user2_review13 = Review(user_id=2, product_id=13, review="This product was a disappointment. It was difficult to use and it didn't save me any time in the kitchen. I wouldn't recommend.", star = random.randint(1,5))
    user2_review14 = Review(user_id=2, product_id=14, review="I recently purchased this kitchen gadget and I am so impressed with how it simplifies my cooking tasks. It's easy to use and it saves me time in the kitchen. I would definitely recommend.", star = random.randint(1,5))
    user2_review15 = Review(user_id=2, product_id=15, review="This product was a let down. The shoes were not comfortable and they didn't provide enough support for my runs. I wouldn't recommend.", star = random.randint(1,5))
    user2_review16 = Review(user_id=2, product_id=16, review="I recently purchased this running shoe and I am so impressed with the comfort and support it provides. It's perfect for my daily runs. I would definitely recommend.", star = random.randint(1,5))
    user2_review17 = Review(user_id=2, product_id=17, review="This product was a disappointment. The sound quality was poor and it didn't have a long battery life. I wouldn't recommend.", star = random.randint(1,5))
    user2_review18 = Review(user_id=2, product_id=18, review="I recently purchased this Bluetooth speaker and I am so impressed with the sound quality. It's portable and has great battery life. I would definitely recommend.", star = random.randint(1,5))
    user2_review19 = Review(user_id=2, product_id=19, review="This product was a let down. The blades were not sharp and it didn't make my gardening tasks any easier. I wouldn't recommend.", star = random.randint(1,5))
    user2_review20 = Review(user_id=2, product_id=20, review="I recently purchased this gardening tool and I am so impressed with its performance. It's lightweight and easy to use, and it makes my gardening tasks so much easier. I would definitely recommend.", star = random.randint(1,5))


    user3_review1 = Review(user_id=3, product_id=1, review="This product was a let down. The graphics were poor and the gameplay was boring. I wouldn't recommend.", star = random.randint(1,5))
    user3_review2 = Review(user_id=3, product_id=2, review="I recently purchased this video game and I am so impressed with the graphics and gameplay. It's an enjoyable game and I would definitely recommend it.", star = random.randint(1,5))
    user3_review3 = Review(user_id=3, product_id=3, review="This product was a disappointment. The picture quality was poor and it was difficult to use all the features. I wouldn't recommend.", star = random.randint(1,5))
    user3_review4 = Review(user_id=3, product_id=4, review="I recently purchased this camera and I am so impressed with the picture quality. It's lightweight and easy to use, and it takes amazing photos. I would definitely recommend.", star = random.randint(1,5))
    user3_review5 = Review(user_id=3, product_id=5, review="This product was a let down. The story was poorly written and it was difficult to get through. I wouldn't recommend.", star = random.randint(1,5))
    user3_review6 = Review(user_id=3, product_id=6, review="I recently purchased this book and I am so impressed with the writing style and story. It was an enjoyable read and I would definitely recommend it.", star = random.randint(1,5))
    user3_review7 = Review(user_id=3, product_id=7, review="This product was a disappointment. The battery life was short and it was difficult to use all the features. I wouldn't recommend.", star = random.randint(1,5))
    user3_review8 = Review(user_id=3, product_id=8, review="I recently purchased this smartwatch and I am so impressed with all the features it offers. It tracks my steps, heart rate and even has a GPS! I would definitely recommend.", star = random.randint(1,5))
    user3_review9 = Review(user_id=3, product_id=9, review="This product was a let down. The sound quality was poor and they were uncomfortable to wear for extended periods of time. I wouldn't recommend.", star = random.randint(1,5))
    user3_review10 = Review(user_id=3, product_id=10, review="This laptop was a disappointment. It was slow and lacked the performance I was hoping for. I wouldn't recommend.", star = random.randint(1,5))
    user3_review16 = Review(user_id=3, product_id=16, review="I recently purchased this pair of headphones and I am so impressed with the sound quality. They are comfortable to wear and the battery life is amazing. I would definitely recommend.", star = random.randint(1,5))
    user3_review17 = Review(user_id=3, product_id=17, review="This product was a waste of money. It didn't clean my floors as well as I expected and I had to constantly empty the dustbin. I wouldn't recommend.", star = random.randint(1,5))
    user3_review18 = Review(user_id=3, product_id=18, review="I love my new vacuum cleaner! It's lightweight and easy to use, and it picks up all the dirt and dust from my floors. I would definitely recommend.", star = random.randint(1,5))
    user3_review19 = Review(user_id=3, product_id=19, review="This product was a huge disappointment. It broke after just a few uses and I was unable to get a refund. I wouldn't recommend.", star = random.randint(1,5))
    user3_review20 = Review(user_id=3, product_id=20, review="I recently purchased this kitchen appliance and I am so impressed with it! It makes cooking so much easier and faster. I love it!", star = random.randint(1,5))


    user4_review1 = Review(user_id=4, product_id=1, review="This product is a game changer! I've been using it for a few weeks and I am so impressed with the results. My skin is smoother and brighter and I love the light, fresh scent.", star = random.randint(1,5))
    user4_review2 = Review(user_id=4, product_id=2, review="I am in love with this product! It's gentle, effective and has a lovely light scent. I will definitely be purchasing again.", star = random.randint(1,5))
    user4_review3 = Review(user_id=4, product_id=3, review="This product was not good for me. It made my skin break out and was too thick to use regularly. I wouldn't recommend.", star = random.randint(1,5))
    user4_review4 = Review(user_id=4, product_id=4, review="I've been using this product for a few months now and I am so impressed with the results. My skin is clearer, brighter and smoother. I would definitely recommend.", star = random.randint(1,5))
    user4_review5 = Review(user_id=4, product_id=5, review="This product was a disappointment. I didn't see any improvement in my skin and it was too thick to use regularly. I wouldn't recommend.", star = random.randint(1,5))
    user4_review6 = Review(user_id=4, product_id=6, review="This product was not good for my skin type. It left my skin feeling greasy and didn't live up to its claims. I wouldn't recommend.", star = random.randint(1,5))
    user4_review7 = Review(user_id=4, product_id=7, review="I love this product! It's gentle on my skin and has improved my complexion in just a few weeks. I will definitely be purchasing again.", star = random.randint(1,5))
    user4_review8 = Review(user_id=4, product_id=8, review="I was excited to try this product, but I was let down. It made my skin break out and the scent was overpowering. I would not recommend.", star = random.randint(1,5))
    user4_review9 = Review(user_id=4, product_id=9, review="This product was a huge waste of money. It did not live up to its claims and I saw no improvement in my skin. I would not recommend.", star = random.randint(1,5))
    user4_review10 = Review(user_id=4, product_id=10, review="I recently purchased this kitchen appliance and I am so impressed with its efficiency and versatility. It makes cooking and baking so much easier. I would definitely recommend.", star = random.randint(1,5))
    user4_review11 = Review(user_id=4, product_id=11, review="This product is amazing! I've been using it for a month now and my skin has never looked better. I love the light, fresh scent and how soft it makes my skin feel.", star = random.randint(1,5))
    user4_review12 = Review(user_id=4, product_id=12, review="I've been using this product for a few weeks now and I am so impressed! It works wonders and leaves my skin feeling smooth and hydrated. I will definitely be purchasing again.", star = random.randint(1,5))
    user4_review13 = Review(user_id=4, product_id=13, review="I recently purchased this gardening tool and I am so impressed with its performance. It's lightweight and easy to use, and it makes my gardening tasks so much easier. I would definitely recommend.", star = random.randint(1,5))
    user4_review14 = Review(user_id=4, product_id=14, review="I recently purchased this coffee maker and I am so impressed with the quality of the coffee it produces. It's easy to use and I love the sleek design. I would definitely recommend.", star = random.randint(1,5))
    user4_review15 = Review(user_id=4, product_id=15, review="This product was a let down. It was not durable and it didn't keep my dog entertained. I wouldn't recommend.", star = random.randint(1,5))

    reviews = [user1_review6,user1_review7,user1_review8,user1_review9,user1_review10,user1_review11, user1_review12, user1_review13, user1_review14, user1_review15,
            user1_review16, user1_review17, user1_review18, user1_review19, user1_review20,user2_review1,user2_review2, user2_review3, user2_review4, user2_review5, user2_review11,
            user2_review12, user2_review13, user2_review14, user2_review15,user2_review16, user2_review17, user2_review19,
            user2_review18, user2_review20, user3_review1,user3_review2, user3_review3, user3_review4, user3_review5,
            user3_review6, user3_review7, user3_review8, user3_review9, user3_review10, user3_review16,
            user3_review17, user3_review18, user3_review19, user3_review20,
            user4_review1, user4_review2, user4_review3, user4_review4, user4_review5, user4_review6,
            user4_review7, user4_review8, user4_review9, user4_review10, user4_review11, user4_review12, user4_review13,
            user4_review14, user4_review15  ]

    for review in reviews:
        db.session.add(review)
    db.session.commit()


def undo_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")

    db.session.commit()
