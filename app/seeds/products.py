from app.models import db, Product, environment, SCHEMA


def seed_products():

    anton_product1 = Product(
    owner_id=1,
    name = "Clip on fan",
    price=29.99,
    description= '''【Upgraded Fan Gaps Protect Baby's Fingers】 GUSGU mini stroller fan with Less than 6mm gaps to avoid the baby's little fingers from entering, while ensuring that the fan is cool enough.
    【Portable & 3-Speed Adjustable】 Portable fan with one button to switch between 3 speeds at any time you need and this flexible tripod fan is compact and lightweight, giving you impressive cooling anywhere.
    【 Rechargeable Design & Ultra-Long Battery Life】Built-in safety battery design, a single charge can be used for 8 hours, and equipped with a type-c charging port, Can be charged at any time with the power bank.
    【Improved Cool & Quiet】Specially designed to keep your baby cool without the noise, The baby fan is equipped with a 3000RPM turbo motor that is powerful and quiet for stroller, bedroom, office, and home.
    【Flexible tripod and 360 ° rotation】Made of high-quality metal and silicone cover tripod can be bent to any angle you want, but also 360 degrees of horizontal rotation, you can stand it on the table, fixed on the stroller, hanging on the tent.
    【What's in the box】1 x USB Fan, 1 x Type C charging cable, 1 x User Manual.
    Further more, We provide 36 months warranty and lifetime after-sales service.'''
        )


    anton_product2 = Product(
    owner_id=1,
    name = "Cooling Towel",
    price=14.50,
    description= '''About this item
    100% Other Fibers
    Imported
    Constructed from Frogg Toggs' exclusive, hyper-evaporative material that retains water while remaining dry to the touch
    Wetting the towel in water will allow it to activate quickly and cool up to 30 degrees
    Perfect for working in the yard, sporting events, working out, golfing, fishing, camping, hot flashes and more
    SINCE 1996 frogg toggs has endeavored to provide the world’s best rainwear, waders, cooling products, footwear, and accessories at the best possible prices
    34 x 13, towel provides reusable cooling relief and sun protection'''
    )


    anton_product3 = Product(
    owner_id=1,
    name = "Cute Frog",
    price=22.39,
    description= '''CUTE FROG PLUSH: Frog stuffed animal features chubby body, smile face, vivid eyes, and little crown make the frog looks cuter. It is made of super soft plush, leaving your kids with a warming and soothing feeling when they cuddle the plush frog.
    GREAT COMPANION: Kids can snuggle on the plush frog pillow and have fun during story time, engage in play, and have fun. Kids will have a great companion to share stories or secrets with them, which will help your child sleep better.
    PERFECT GIFT: Everyone will love this frog plushie for play, as a cute frog pillow for reading, relaxation, and sleepy nap time. A sweet gift for Christmas, Thanksgiving Day, and birthday.
    SOFT MATERIALS: Frog plush is super soft and fluffy, made of natural eco-friendly plush cotton, safe and comfy for children's skin. Careful stitching of fabric makes sure it is durable enough for kids' play.
    EASY to WASH: Frog plush with a zipper makes it easy to take the cotton out and wash the pillows. You can remove or add cotton to achieve the filling level you like.ROCHEMON products run through multiple inspections and are designed with quality in mind. If you don't love it, we'll replace it or refund it!'''
    )



    anton_product4 = Product(
    owner_id=1,
    name = "Fuzzy Red Slippers",
    price=71.84,
    description= '''【Upgraded Fan Gaps Protect Baby's Fingers】 GUSGU mini stroller fan with Less than 6mm gaps to avoid the baby's little fingers from entering, while ensuring that the fan is cool enough.
    【Portable & 3-Speed Adjustable】 Portable fan with one button to switch between 3 speeds at any time you need and this flexible tripod fan is compact and lightweight, giving you impressive cooling anywhere.
    【 Rechargeable Design & Ultra-Long Battery Life】Built-in safety battery design, a single charge can be used for 8 hours, and equipped with a type-c charging port, Can be charged at any time with the power bank.
    【Improved Cool & Quiet】Specially designed to keep your baby cool without the noise, The baby fan is equipped with a 3000RPM turbo motor that is powerful and quiet for stroller, bedroom, office, and home.
    【Flexible tripod and 360 ° rotation】Made of high-quality metal and silicone cover tripod can be bent to any angle you want, but also 360 degrees of horizontal rotation, you can stand it on the table, fixed on the stroller, hanging on the tent.
    【What's in the box】1 x USB Fan, 1 x Type C charging cable, 1 x User Manual.
    Further more, We provide 36 months warranty and lifetime after-sales service.'''
    )


    anton_product5 = Product(
    owner_id=1,
    name = "Taco Fighter",
    price=33.33,
    description= '''Wildly Popular All-Ages Card Game - TvB soared on Kickstarter, surpassing the initial goal by 2,400%! A sensation at the Indie Game Showcase at Emerald City Comicon!
    Surprisingly Strategic - Basic gameplay is easy to master but the Action Cards shift the game into unpredictable territory. Exciting up to the very last card!
    Create by a Kid, Perfect for Everyone - Alex dreamed up TvB at age 7, but this crazy, fun strategic food fight is a smash with kids and adults alike! Ideal for ages from 7-107.
    Easy to Learn and Quick to Play - Takes only a few minutes to learn. Gameplay runs 10-15 minutes. Optimal for 2-4 players.
    Brilliant Gift Idea - Makes the perfect birthday for boys, girls, parents, adults, friends, or family as well as any board game or card game lover. Great for birthdays, Mothers Day, Fathers Day, and Taco Tuesday
    ens are made of high-quality, moisture wicking faux rabbit fur material to help keep your feet warm and dry at all times, You could enjoy cushy feel on your feet. Fuzzy women slippers memory foam is a superior great gift for someone who likes comfort and warmth on their toes in cold winter time.'''
    )

    meredith_product1 = Product(
    owner_id = 2,
    name = "14K Gold Love Ring",
    price=14.95,
    description= '''14k Solid Gold 1mm Thin Wedding Band / Minimalist Wedding Ring for Women / Thin Stacking Ring Hers / Dainty Simple Plain 1mm Ring

    Made to perfection, this thin wedding band is perfect for people looking for a subtle and modern look. It's made in 14k or 18k solid gold and is very durable.
    '''
    )

    meredith_product2 = Product(
    owner_id = 2,
    name = "Handmade Candles Clean Essential Oil Candles - Vegan",
    price=17.00,
    description= '''Simple. Clean. Aesthetically pleasing. Our candles are made with 100% soy wax and not a soy wax BLEND like most competitors. Candles come with all natural wood wicks from non-treated fruit trees. The vast majority of our scents are infused with essential oils; these are notated in the fragrance description. Essential oils are essentially aroma compounds that are removed from the seeds, flowers, leaves, roots and stems or bark of plants through methods such as distillation or extraction.'''
    )

    meredith_product3 = Product(
    owner_id=2,
    name = "Handmade Flat Shoes for Women, Leather Slippers",
    price=69.00,
    description= '''This kind of shoes are made of soft leather making them super comfortable for everyday wear. You'll keep walking all day! Great work shoes. The unique shoes would become an attractive one in your shoe box. THIS SHOES IS REALLY VALUABLE FOR YOU! It would be fit beautifully with trousers or dress.'''
    )

    meredith_product4 = Product(
    owner_id=2,
    name = "Nikon Fun Touch 6 35mm Point and Shoot camera in working condition (no flash)",
    price=30.60,
    description= '''Nikon Fun Touch 35mm Point and shoot camera in good working condition. Ships via 3 Day USPS Priority Mail. PLEASE NOTE: the flash no longer works on this camera, this can only be used as a daytime or early evening camera! Price has been significantly reduced, this is a great and cheap way to get your feet wet with film photography though!'''
    )

    meredith_product5 = Product(
    owner_id=2,
    name = "Personalized Dibsies Butterfly Snuggle Doll - 15 Inch",
    price=29.95,
    description= '''Snuggles are going to be so much more comforting for your little one. Our Butterfly Snuggle Doll is as soft and cuddly as can be. Her beautiful pigtails are made of yarn and makes her so cute! Facial features are all embroidered for your child's safety. Your Little Girl will love her Butterfly Snuggle Doll. A great gift for birthdays, Christmas or just to tell her how special she is to you. Dibsies will personalized your doll FOR FREE up to 9 letters max.'''
    )

    katherin_product1 = Product(
    owner_id=3,
    name = "True love monogram glasses - custom rock glasses, set of 6",
    price=96.00,
    description= '''We will personalize this heart with two letters of your choosing. Simply provide us with the letters you'd like (in the order you'd like them), and choose an ink color. It will take approximately 1-2 weeks for us to print the glasses and ship them out!
    Price includes all artwork and screen charges. This is our smallest custom glassware listing.
    Please send us a convo if you have any questions, or would like a quote for a larger number of glasses.
    set of Six 11 oz (old fashioned) glasses
    Glasses printed in USA
    These glasses make fantastic father's day or graduation gifts!.'''
    )

    katherin_product2 = Product(
    owner_id=3,
    name = "Personalized Gifts for Him, Christmas Gifts, Engraved Leather Wallet for Men,Personalized Wallet, Handmade Custom Engraved Wallet for Men",
    price=12.90,
    description= '''I handcraft high-quality top-grain leather wallets. You can personalized with engraving on the front side with a monogram, name, logo. For inside you can add your message or your hand-written which making it very special for someone who will receive it.
    Functional and trendy, this Custom Leather Wallet is the perfect place to hold your most important cards. Designed with the person who’s on the go in mind, this leather wallet features an array of conveniences. Not only is it easy to get your cards out of, it also can be customized with your monogram.
    Great as a gift, this credit card wallet is something that your loved ones will appreciate as a trendy and functional holiday gift. Gift this amazing leather wallet to someone that you know that loves to shop!'''
    )

    katherin_product3 = Product(
    owner_id=3,
    name = "Personalized Mens Leather Bracelet with Silver Beads, Valentines Day Gift For Husband or Boyfriend, Custom Kids Name Gift For Him",
    price=20.66,
    description= '''A perfect Christmas Gifts for your loved ones!
    This handmade personalized bracelet is made of high quality leather and customizable silver beads, making it a unique and thoughtful gift for your spouse, a friend, or a member of your family. Additionally, these are wonderful presents for birthdays, Christmas, Valentine's Day, Mother's Day, Father's Day, and other special occasions.
    This personalized bracelet features a handsomely braided band that fastens with a sturdy adjustable lobster or magnetic clasp of your choice.'''
    )

    katherin_product4 = Product(
    owner_id=3,
    name = "Custom Neon Sign | Neon Sign | Personalized Gifts | Wedding Signs | Name Signs | Led Neon Lights | Neon Signs | Neon Sign bar",
    price=40.00,
    description= '''The listed price 40$ is only a deposit price as every sign is different and costs different. We encourage you to send us your sign details(text, font and color) in message to see a visual of your sign before purchasing. Know the size, price and delivery details before you make the purchase.
    Note: if you place a deposit order, we will send you a mock-up and a price quote in message. If you agree with the price, we will proceed with processing your order for the rest of the amount. Otherwise, we will issue you full refund and cancel the deposit for you. Your money is safe even you order at deposit price :) Decor your room wall with these amazing neon signs, which do not add just colors to your room but bring positive energy in you as well. All of our neon signs are safe to use and do not get heat up; that's why you can place them at any place without any threat.
    What's more! You can also personalize these neon signs by text, color, size, font, and acrylic shape.'''
    )

    katherin_product5 = Product(
    owner_id=3,
    name = "Grinder Rubik's Cube",
    price=13.59,
    description= '''Unique shape design.
    Our grinder is made of high-grade zinc alloy and ABS.
    Its 2.3-inch compact size and lightweight is small enough to fit in your pocket so you can take it with you.The magnet at the top of the mill is very stable and makes access quick and easy.'''
    )

    sophie_product1 = Product(
    owner_id=4,
    name = "Decorative Throw Pillow",
    price=75.62,
    description= '''The soft color and the abstract design is perfect for any kind of home decoration. Made out of high-quality plushy material that is super soft and resilient.

    Materials: fiber, cloth'''
    )

    sophie_product2 = Product(
    owner_id=4,
    name = "Medium Gold Splatter Geode Bowl",
    price=120.00,
    description= '''This unique bowl is completely hand formed and textured from porcelain clay. It is unglazed on the textured exterior and glazed on the interior. This bowl is glazed with a clear glaze and splatter painted with real 18k gold.

    This glaze is food safe, but not dishwasher or microwave safe.

    This bowl measures approximately 7 1/4” in diameter x 2 1/2” high.**

    *All of these items are handmade, so the measurements are approximate.'''
    )

    sophie_product3 = Product(
    owner_id=4,
    name = "New Yorker Magazine Cover Poster Set Of 6",
    price=9.00,
    description= '''New Yorker Magazine Cover Poster Set Of 6, Vintage Art, Retro Poster, Mid Century Art Print, Magazine Cover Art, Gallery Wall Set, High Jpeg

    INSTANT DOWNLOAD NO PHYSICAL PRODUCT WILL BE SHIPPED!

    Simply download, print and frame!

    Give your space a fashion look with this awesome wall art print.INCLUDED FILES:


    You will receive 1 text file includes 5 scalable high resolution JPEG image files at 300 dpi for each design

    1. After placing your order and payment is confirmed you will be able to download your files.
    2. Unzip your files on your computer.'''
    )

    sophie_product4 = Product(
    owner_id=4,
    name = "Mushroom Bedside Lamp, Table Lamp, Side Light, Orange Desk Lamp",
    price=100.04,
    description= '''The Minimalist Table Lamp fits well into your home in all areas and becomes a distinctive addition to your interior. Contemporary minimalist and modern design table lamp.

    This is the perfect bedside lamp for mood lighting or as a centerpiece in your home. Blends seamlessly into any room, inviting a relaxing feel with its cozy, warm look. Place the table lamp on a side table or coffee table in the living room, on the desk in the study, on the windowsill in the kitchen, on a shelf in the hallway or on the bedside table in the bedroom. Ideal for creating a relaxed atmosphere.'''
    )

    sophie_product5 = Product(
    owner_id=4,
    name = "Set of 3 Ceramic Planters - 12, 9 and 6 inch - Matte Finish, Kiln Fired and Hand Glazed - Sturdy and Large Plant Pots for Indoor and Outdoor",
    price=79.95,
    description= '''Are you looking for plant pots which will optimize the health of your plants without compromising on style?
    Our planters are created by plant lovers, for plant lovers. We designed the Mid-Century Plant Lovers Dream Set with both appearance and functionality in mind, making it the ideal choice for proud plant owners who wish to display the natural beauty of their plants whilst ensuring they remain healthy.'''
    )


    products = [anton_product1, anton_product2, anton_product3, anton_product4, anton_product5,
                meredith_product1, meredith_product2, meredith_product3, meredith_product4, meredith_product5,
                katherin_product1, katherin_product2, katherin_product3, katherin_product4, katherin_product5,
                sophie_product1, sophie_product2, sophie_product3, sophie_product4, sophie_product5]
    for product in products:
        db.session.add(product)
    db.session.commit()

def undo_products():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM products")

    db.session.commit()
