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


## new batch of seed data

    anton_product6 = Product(
    owner_id=1,
    name = "1.72 CT Round Cut Loose Lab Grown Diamond | F Color | VS2 Clarity",
    price=4310.00,
    description= '''1.72 CT Round European cut loose diamond available in F color, VS2 clarity.

    Perfect CVD diamond for engagement rings and fine jewelry - this eco friendly diamond is lab grown which means its conflict free. It is identical to natural diamonds and has no difference visually or chemically. We position ourselves to bring ethical and environmental clarity to fine jewelry buyers and source our lab grown diamonds directly from growers that allows us to create a transparent supply chain and price them at a bargain. The only difference between natural and lab grown is the origin of the diamond - what took millions of years to form has been condensed to a few weeks.

    Mind made, not mined - offering conflict free diamonds of the highest quality at unbeatable prices!

    ✦ Shape : Round
    ✦ Dimension : 7.57 x 7.60 x 4.81 mm
    ✦ Carat weight : 1.72 CT
    ✦ Color : F
    ✦ Clarity : VS2
    ✦ Polish : Excellent
    ✦ Cut : Excellent
    ✦ Symmetry : Excellent
    ✦ Type : Chemical Vapor Deposition (CVD)'''
        )


    anton_product7 = Product(
    owner_id=1,
    name = "Sloth Air Plant Holder, Valentines Day, Small Sloth Planter, Valentine Gift Idea, Small Air Planter, Desk Accessory, Gift for Her",
    price= 38.50,
    description= '''These little sloth air plant holders (approximately 1.5" tall) come with an air plant (approximately 2-3" tall) already in his arms and a care instruction card as well. This listing is for ONE (1) sloth air plant.

    The air plants are between 2" & 3" tall and come with care instructions but please feel free to message with any questions prior to purchase. They are baby air plants, and they will grow well and fill out if cared for properly.

    All of our plants/planters are available by themselves or bundled with a bottle of our Kabloom plant nutrient spray.

    Sloths are handmade from polymer clay and are waterproof. Because they are handmade, each sloth may vary slightly in shape and features but all are approximately 1.5" tall. Plants will also vary in size and shape. Domestic shipping to the US only.

    We are not responsible for the air plant once it is in your care. I guarantee that they are happy, healthy plants but will not be held responsible if the plant dies. I will offer a replacement plant in the event that your plant dies within the first 2 weeks of receiving it.

    **Pen, Washi Tape, and Paperclips are NOT included and just used to show size**

    Colors may vary slightly due to the way they are shown on different monitors or camera lighting, but these pictures represent colors as close as possible.

    Sharing a photo of something you purchased from us? Use the hashtag #funusualsuspects so we can see it! We love seeing our suspects in all kinds of funusual places!'''
        )


    anton_product8 = Product(
    owner_id=1,
    name = "Highland cow canvas wall art Farmhouse decor Cow Brown cow Rustic wall decor Animals painting Scottish cow wall art",
    price=424.79,
    description= '''Highland cow canvas wall art Farmhouse decor Cow Brown cow Rustic wall decor Animals painting Scottish cow wall art arrives ready to hang and no additional framing required.

    ABOUT OUR PRODUCTS:
    • We hand make our products from high quality materials in our own production and ship them directly to your door.
    • Professional handmade. Made to order.
    • We print on high quality canvas 350gcm with highly professional printing equipment.
    • Gallery wrapped canvas.
    • Every canvas is meticulously crafted and hand-stretched.
    • Comes already stretched on pinewood frame 1 inch thick, no additional framing required.
    • Ready to hang right out of the box. Just hang on the wall. A special hole is made inside the frame. For hanging, you just need to put this hole on a hook or nail attached to the wall.
    • You can order individual canvas print art of a non-standard size

    We pack every canvas print with care using specialized cardboard corners, film and wooden box.
    Tracking information will be provided as soon as we ship your order.
    Our friendly, skilled customer service team is ready to answer any questions you have.

    IMPORTANT NOTE:
    - Depending on your monitor settings, colors may appear slightly different on screen than on the actual print.
    - The sizes of the paintings can vary by 1 cm from those indicated because of the characteristics of image, more precise measurements are in centimeters.
    - Please make sure that your address is 100% correct and there are no mistakes. We are not responsible to re-ship if your address has changed from that on your account.
    - Customer is responsible for all import duties and/or taxes that may apply upon delivery.

    SHIPPING:
    • Canvas wall art are shipped in safe wooden box. Items usually ship within 1-2 days from date of completed payment.
    • Free shipping UPS. Delivery times may vary between 4-14 days.
    • All our shipments come insured, you should not worry about your purchase.'''
        )



    anton_product9 = Product(
    owner_id=1,
    name = "Hand Forged Damascus Chef's Knife Set of 5 BBQ Knife Kitchen Knife Gift for Her Valentines Gift Camping Knife Gift for Him Groomsmen gift SM",
    price=129.00,
    description= '''Custom Handmade Damascus chef set of five pieces. Utility set.Damascus kitchen set with leather sheet knife set gift for mom Anniversary gift Groomsmen gift Christmas gift birthday gift.

    Handmade knife set. Materials:

    1:- Carbon steel

    2:- Wangi wood , Red and Blue Razin
    Description:- Please provide us you email address and also your personal contact number along with your address for shipping.
    *About the blade of this chef set The blade of this unique kitchen knife is made up of Damascus steel which is very strong and sharp.
    *About the handle of this chef knife set:- The handle of chef set is made up of
    Pakka wood The handle is designed to have a lovely grip on it.
    BEST GIFT FOR YOUR MOTHER.'''
    )


    anton_product10 = Product(
    owner_id=1,
    name = "Best Dad Keychain - I Love You Charm - Personalized Keychain - Fathers Day - Engraved - Keychain - Husband Gift - Childrens Gift",
    price= 5.95,
    description= '''"Best Dad Penny" Keychain

    Perfect gift for Dad, Hubby, Grandpa, friend, etc.

    We engrave on the penny the words "Best Dad" '''
    )

    meredith_product6 = Product(
    owner_id = 2,
    name = "Massive Coffee table log raw wood - Wood washer - Unique live edge table",
    price= 2115.28,
    description= '''Massive living room table made of raw wood

    This living room table made from raw wood will give warmth and authenticity to your interior.
    The top is protected by a waterproofing protective oil.
    Each model is unique and has characteristics of its own such as stains, cracks, knots.

    The model will be different from the one presented in the announcement, please contact me before placing an order to validate the dimensions / shape of the tray.

    Dimension: Diameter about 80 cm
    Height: about 35 cm'''
    )

    meredith_product7 = Product(
    owner_id = 2,
    name = "It's Fine I'm Fine Everything Is Fine Shirt, I'm Fine Shirt, Cat Shirt, Motivational Shirt, Positivity Shirt, Introvert Shirt, Mental Shirt",
    price= 8.99,
    description= '''The cat shirt features a charming image of a cat with a nonchalant expression and the reassuring phrase "it's fine, i'm fine everything is fine." The cat on the shirt looks like it's just been through a disaster, but the optimistic phrase tells a different story.
    The shirt's cat seems to embody the spirit of resilience and determination in the face of adversity.This cat shirt is the perfect way to express your inner zen, even when everything seems to be falling apart.
    The cat's image on the shirt is both whimsical and relatable, and the accompanying message makes it even more endearing. The shirt's cat looks like it's about to jump into action, ready to face any challenge that comes its way.

    The cat's nonchalant expression is a perfect contrast to the message on the shirt, which is all about keeping calm and carrying on.

    This cat shirt is a great way to show off your love for felines while also expressing a positive and reassuring outlook on life.
    The shirt's design is simple but effective, with a bold image of a cat and a message that's sure to bring a smile to anyone's face. With its adorable image and uplifting message, this cat shirt is the perfect addition to any wardrobe, whether you're a cat lover or just someone who needs a little pick-me-up. '''
    )

    meredith_product8 = Product(
    owner_id=2,
    name = "Samsung S8 Case Galaxy S7 Case Samsung Note 8 Case Clear Case Samsung S8 Plus Case Fox Clear Case Samsung S7 Edge Case Personalized AC1221",
    price= 8.32,
    description= '''Welcome to the Art Cases Design!

    Here you can choose a case for your phone ❤

    Looking for a unique design that speaks your personality? Take a look around. You are in the right place ☺

    What is better than to protect your precious phone from scratches and drops and spoil it with beautiful art from ArtCasesDesign? Cases are built really tough, will last a long time and are fancy and unique!

    Why do you need to purchase this item? ツ

    About my phone cases:

    ❃ All Cases are made from high quality eco-friendly lightweight tough plastic and silicone.
    ❃ There are high resolution images on the cases that make your phone looks excellent, even after using for a long time.
    ❃ Cases give you full access to all the phone buttons and ports.
    ❃ High quality lightweight plastic and silicone will protect your device from scratches and abrasion.
    ❃ Cases are slim and neat, so they perfectly fit the phone providing a marvelous look!

    Please pay attention to the shop policy:
    -Colors can vary a bit due to different monitors and settings, case may differ in colour slightly to the image pictured.
    - Marble/Stone/ Wood/Linen/Fabric/Leather/Oil Art Texture are not real, are PRINTS.
    - If you have any changes to the current order (model\print variation, name\image\color\background adjunction etc.) you can do them only during 24 hours from the moment of purchasing the item, after this period the shop is no more responsible for changes.
    - Make sure you choose correct color, size, quantity etc. on product details page. Please, also make sure that your shipping address and contact telephone number is correct to prevent delivery delays caused by misinformation.'''
        )

    meredith_product9 = Product(
    owner_id=2,
    name = "Birth Flower Jewelry Travel Case, Birth Month Flower Gift, Personalized Birthday Gift, Leather Jewelry Travel Case, Custom Jewelry Case",
    price= 25.95,
        description= '''Personalized Jewelry Boxes, Birth Flower Jewelry Case, Travel Case For Bridesmaids, Minimal Jewelry Box, Jewelry Organizer, Jewelry Box
    Bridesmaid Gifts, Bridesmaid Proposal, Vegan Leather, Jewelry Organizer Box, Jewelry Travel Case, Gift For Her, Custom Jewelry Box,
    Gift For Mother, Travel Case

    --Dimensions: 4 x 4 x 2 inches

    Custom Order: Contact us for custom designs or logo

    -- How to Order:
    ✦ Please choose your birth flower month.
    ✦ Please choose your travel case color.
    ✦ If you have your own design or logo please send us via Etsy Message.
    ✦ If you need express shipping please choose express shipping option during check out and you will receive your order in 2 business days after purchasing.

    SHIPPING
    All shipping will be via UPS when available. USPS and Canada post will be used for all addresses to a PO box.
    Tracking notification will be sent when your order ships.
    Most products will ship in approx. 1-2 business days from date of purchase.
    Shipping times will vary but on average it takes 1-2 business days for items shipped with-in North America.
    If you are in a rush please let me know we will try and speed up the process. All of our items are custom made which take time to create but we will do our best. If express shipping is required there will be additional fees which will be disclosed at time of order. '''
    )

    meredith_product10 = Product(
    owner_id=2,
    name = "Elegant Woman At Tea Time ",
    price= 280.00,
    description= '''Elegant Woman At Tea Time depicts a blue woman drinking tea in a yellow floral dress against a vibrant pink floral background. This item is a giclée print of the original piece made with digital inks and acrylic paints. The print comes in 5 sizes: Small (measures 8” x 10”), Medium (measures 12” x 15”), Large (measures 20” x 25”), Extra Large (measures 24” x 30”), and Grand (measures 32” x 40”). The print comes digitally signed and does not come framed. It is printed at the highest possible resolution on high quality, acid-free, archival paper using Canon LUCIA PRO pigment ink. The giclée printing methods used produce stunning rich and vibrant colors that look absolutely wonderful in person. Each print is carefully packaged and shipped.


    Additional sizes and canvas prints available as well. Please contact me if you have a custom size in mind.
    Thank you! '''
    )

    katherin_product6 = Product(
    owner_id=3,
    name = "Dad keychain, Handyman Keychain, Father keychain, Hammer wrench keychain, personalized keychain, carpenter, handyman keychain, fix it man ",
    price= 12.95,
    description= '''Perfect gift for the special man in your life, whether it is grandpa, your neighbor or your handyman!

    Handyman keychain, carpenter keychain, for father, daddy, construction worker...

    A hammer and wrench charm with a hand stamped initial on a 5/8" disc on a sturdy, 30mm large flat silver key ring.

    Use drop down box to select your initial.


    Hand stamping is a unique craft where each letter is stamped one letter at a time. Letters may not always line up perfectly and this is not meant to take away from the quality of the piece but is meant to add to its charm. No two pieces will ever look the same.

    The round discs are made with Aluminum. There is a much lower rate of skin reaction with aluminum than with sterling silver. It will never tarnish, discolor or rust. It does not leave green marks on your skin like other metals. Aluminum is a metal that is easy to maintain. It polishes to a nice shine with a polishing cloth.'''
    )

    katherin_product7 = Product(
    owner_id=3,
    name = "Party At My Crib Bodysuit, Funny Baby Clothes, Cute Bodysuit, Baby Boy Clothes, Baby Girl Bodysuit, Baby Girl Clothes, Baby Boy Bodysuit ",
    price= 13.99,
    description= '''We ship next day from Vancouver Washington! From there, it takes USPS 2-4 business days to deliver depending. You also have the option to upgrade to 2-day shipping at checkout!

    100% NATURAL ULTRA-SOFT FABRICS

    At Blue Giraffe Apparel©, we pride ourselves on using the softest & highest quality fabric. All apparel items are interlocking knit 100% cotton and CPSIA COMPLIANT.

    For our 24-Month sizes, we use 100% cotton rib fabric Onesies® Brand Bodysuits

    ONESIES® is a registered trademark of Gerber Childrenswear LLC.

    For more information on CPSIA standards go to: https://www.cpsc.gov/Regulations-Laws--Standards/Statutes/The-Consumer-Product-Safety-Improvement-Act/

    Our contract manufacturers and suppliers are Sweat Shop Free, assuring they meet our high standards for working conditions for your peace of mind, and ours as well. '''
    )

    katherin_product8 = Product(
    owner_id=3,
    name = "Large Victorian Birdhouse ",
    price= 129.95,
    description= '''Handcrafted of pine and given a distressed finish, the Large Victorian Birdhouse would truly be a haven for your neighborhood birds, with openings on all four sides. It stands 25" high, 16" wide and 11 1/2" deep. It is available with a hunter green, dark blue, oriental red or burgundy roof (please specify color). The birdhouse is a functional birdhouse finished with a high-quality exterior latex paint, or can be used as a decorator item.'''
    )

    katherin_product9 = Product(
    owner_id=3,
    name = "Destiny Ghost - 3D printed",
    price= 33.60,
    description= '''"In its dying breath, The Traveler created the Ghosts to seek out those who can wield its Light as a weapon - Guardians - to protect us and do what the Traveler itself no longer can."
    — The Speaker, Destiny, Restoration

    A Ghost is a levitating artificial intelligence used by Guardians.

    This item is 3D printed at 20 infill, very sturdy. Printed in black PLA plastic.
    The Ghost can be customized, printed in any color. All you have to do is specify each component and the color you want (Ball, Wings, Wing Insert, Wing Tips and LED color). Just leave a note at the checkout with your selection.
    Main components:
    - Ball color
    - Wings color
    - Wing Insert and Wing Tips color
    - LED color options (Blue, Green, Purple, White, Red, Orange)
    - Display stand and logo colors

    The two body halves have a magnet lock mechanism, and the ball is held together with snaps. There is a dial at the back of the Ghost to turn the LED ON or OFF (the LED is a common "tea light", works with 2x CR2032 batteries replaceable and included. Lights continuously for ~48h).
    The ghost will be shipped partly assembled.

    The Ghost is about 4 inches (100mm) tall.

    ---Shipping---
    -Free shipping with Hungarian Post and it takes 2-3 weeks worldwide.
    -Express shipping with FedEx (TNT for the EU) and it takes 5-8 business days worldwide (they ask for a phone number to be contacted on delivery day if necessary so please leave a phone number) '''
    )

    katherin_product10 = Product(
    owner_id=3,
    name = "Lunch Bag Waxed Canvas , Kitchen Storage Pantry Sack, Canvas Snack Bag, Gift For Him Her for kids , Picnic Bag School Office, Holiday Gift ",
    price=34.00,
    description= '''Back to school, back to office.
    It makes perfect and unique gift as well

    There's nothing better than packing a delicious homemade sandwich and your favorite snacks and drinks in this sturdy brown waxed canvas lunch bag. Healthy and eco friendly.

    This stylish waxed canvas twill lunch bag / daily snack pouch is a must-have for both men and women and also for kids. It’s more than just a place to store your food, it might be an expression of your personality. It is very well made and there's nothing average about it, from the materials chosen to the way we handle fabrication.
    Our sturdy picnic bag is the perfect solution to organizing your day, carry your foods safely with style.


    FEATURES:
    Handmade from rugged/heavyweight waxed twill fabric in our pet-free, smoke-free studio in Brooklyn, NY.
    Color: Navy .
    Length: 12" inches when open / Around 9 " tall when folded/closed
    Width: 7" inches
    Height: 4" inch
    Material details:
    No lining. All fabric edges are overlock stitched to prevent fabric fraying over time.
    Real leather strap and loop in Honey color

    Care: Can be gently hand washed with soap when need be.



    NOTE

    This listing is only for the waxed canvas lunch bag . Props and food are not included, we already devoured them all!
    This waxed canvas bag has an amazing beeswax smell, manufactured in a smoke-free , pet-free environment.'''
        )

    sophie_product6 = Product(
    owner_id=4,
    name = "Air Plant Office Desk Decor - Wall Planter Indoor - Indoor Plant Gift - Unique Succulent - Wood Planter - Air Plant Holder - Plant Stand ",
    price= 142.68,
    description= '''Looking for that perfect gift for your friends and family? (or maybe for yourself?)

    Meet the Mini Man - the greatest natural companion!

    ☘100% Adjustable = Endless Fun
    Handstands and yoga poses are just the beginning. The Mini Man has magnets in both the hands AND legs and can be positioned in many different ways on his natural wood magnetic stand - which means you'll have endless fun and won't be so bored when you're stuck inside! The only limit is your imagination.

    ☘Eco-Friendly Healing
    Made out of natural pine wood, each one holds a beautiful LIVING air plant that has all the benefits and healing properties of nature right in his hands so you can enjoy increased productivity, creativity and less stress which means you will live longer and have less white hairs.

    ☘Brings Nature Inside
    Do you spend too much time indoors these days? We try and bring nature inside instead so you can breathe deeply knowing a touch of nature is always by your side.

    ☘Natural Air Purifier
    Studies show air plants take more toxic particles out of the air then any other plant. Imagine looking down at your Mini Man holding the cutest plant and knowing it's also cleaning the air from nasty toxins present in your home.

    ☘Easy Plant Care
    Air Plants only need a once a week soak / once every two week soak AND they are drought tolerant, which means less worrying when you forget to water your plants!

    ☘Virtually Indestructible
    Black thumb? No worries! Air plants are known to be SUPER easy to care for. Each purchase comes with a care guide so you can relax knowing your plant will live for years, which means you won't have to spend money on a new plant every week.

    The plants sent will be Tillandsia Ionantha and picked for their unique shape and individual character. The plants we send are greenhouse kept and will always be sent healthy. '''
        )

    sophie_product7 = Product(
    owner_id=4,
    name = 'AS IS Bronze Aria "Sonata" Large, Modern Mirror-#P2',
    price= 485.00,
    description= '''SELLING AS IS! WAS USED IN A PHOTOSHOOT. NO RETURNS. READY TO SHIP IN 3 WEEKS

    Mirror: 16" tall x 40" wide
    Tint: Bronze
    Ivory Fringe: 8" long
    Retail Value: $610

    Installation: Product comes with a hanging bracket on the back for ease of installation. Recommend hanging with an anchor in addition to screws for stability and support. Does NOT come with anchors or screws.

    ALL SALES FINAL
    If your mirror breaks in shipping we will do a full refund on your order but it will not be replaced at this sale price.'''
    )

    sophie_product8 = Product(
    owner_id=4,
    name = "Reclaimed Wood Switch Plates",
    price= 16.97,
    description= '''Add some style to your home with these reclaimed wood wall plates. Made from 100% reclaimed wood, these wall plates add a touch of elegance to any room. With multiple sizes and styles to choose from, you're sure to find the perfect wall plate to match your home's unique style. To add hand rubbed finish, please select the size plate you would like with the "Finish" option. If you would like custom text on your switch plate please select the custom text option and send us a note of what you would like it to say
    Please note this is reclaimed wood that has already had a long life as other objects, when installing the plates do not over tighten, this will cause the wood to break.

    THERE CAN BE VARIATION IN HOW YOUR ELECTRICAL OUTLET SITS IN YOUR WALL. IF YOU RECIEVE A PLATE AND IT DOES NOT SIT CORRECTLY DUE TO THIS PLEASE LET US KNOW AND WE WILL MAKE ONE TO WORK WITH YOUR SPECIFIC OUTLET.
    5 STANDARD WALL PLATE SIZES AVAILABLE
    3 GEOMETRIC DESIGNS TO CHOOSE FROM
    HAND RUBBED FINISH AVAILABLE FOR ALL PLATES. FINISH WILL ADD A DRAMATIC LOOK BY DARKENING THE PLATE AND VISUALLY POPPING ALL OF THE CHARACHTER AND GRAIN IN THE WOOD.
    EACH COVER IS A UNIQUE MIX OF GRAIN PATTERN AND VARYING WOOD COLOR
    MADE FROM 100% RECLAIMED MATERIAL
    MADE 100% IN THE USA

    **DOES NOT COME WITH HARDWARE, PLEASE USE THE SCREWS THAT WERE IN THE ORIGINAL WALL PLATE YOU ARE REPLACING**'''
    )

    sophie_product9 = Product(
    owner_id=4,
    name = "6 Pack Solar Lights Outdoor Garden Decorative Solar Garden Lights with Warm Light Waterproof Solar Pathway Landscape Lights for Yard Garden",
    price= 71.85,
    description= '''【Good Decoration】 10 lumens of warm yellow light. These solar landscape lights can project a unique and beautiful pattern. In a dim environment, the garden solar lights can illuminate a corner of the garden and create a beautiful and warm atmosphere. They are very suitable as holiday decorations and gifts for relatives and friends.
    【High Quality】 The materials of these solar pathway lights are all high-quality plastic, IP55 waterproof. These garden decorations can cope with a variety of natural weather, rain, snow, strong wind, etc. (Winter Tips: In a low temperature environment, the working efficiency of solar energy will be reduced.)
    【Multi-scene Use】 You can put these solar yard lights in gardens, corners, flower pots, sidewalks or other places. These solar outdoor lights are very suitable for outdoor decor, yard decorations, pathway decorations, backyard decorations, outdoor decorations for patio.
    【Easy to Use】 These lights do not require additional wiring, using solar energy to save energy and your money. You only need to turn on the switch when you use these outdoor solar lights for the first time, and they can automatically charge during the day and automatically light up at night.''')

    sophie_product10 = Product(
    owner_id=4,
    name = "The Prince, Regal, Custom Dog Portrait, Pet Painting, Pet Portrait Royal, Renaissance Animal Painting, Funny Pet Lover Gift",
    price=67.63,
    description= '''😍 IT'S SO SIMPLE TO ORDER, JUST READ THE INSTRUCTIONS BELOW 😍

    100% MONEY BACK GUARANTEE - If you don't love your portrait - I will give you 100 of your money back no questions asked.

    😀 Really EASY ORDER process –

    1. Add to Basket, Checkout.
    2. Send us a photo (or multiple photos) via Etsy messages. Please try and use high quality images, the
    results will be awesome if you do!
    3. After 2-6 days we will send you the artwork. If you approve, we will start printing your order and it will be
    shipped 3 days later.
    4. Get the portrait and hang it in your house for us humans to admire!

    😀 Why Buy From Us?

    - We have the best pet artist in the business working for us! They produce the most incredible and seamless
    pet portraits.
    - We strive to get your artwork to you in 2-6 business days (but a masterpiece does take time)
    - FREE US Shipping

    😀 Why Is There Shipping on My Digital Version Order?

    If you live outside of the US we charge shipping on all orders, unfortunately there is no way to remove the shipping charge from digital orders; but we WILL refund you, just message us and we will refund the shipping.

    😀 Problems or Questions?

    Message me at any time, I am here to help! If you want a different style than the ones listed, that is fine, you can send me examples and we will try our best.

    😀 Delivery Time

    - It takes us about 2-6 business days to create the artwork
    - It takes us a further 2-4 business days to print the work (it is slow at the moment due to COVID-19)
    - And shipping in the US is 2-6 business days, UK and Europe 2-6 business days.

    Unfortunately we cannot accept returns due to the product being customised! We will help you create an amazing piece of artwork, so you won’t want a refund anyway! '''
    )


    products = [anton_product1, anton_product2, anton_product3, anton_product4, anton_product5,
                meredith_product1, meredith_product2, meredith_product3, meredith_product4, meredith_product5,
                katherin_product1, katherin_product2, katherin_product3, katherin_product4, katherin_product5,
                sophie_product1, sophie_product2, sophie_product3, sophie_product4, sophie_product5,
                anton_product6, anton_product7, anton_product8, anton_product9, anton_product10,
                meredith_product6, meredith_product7, meredith_product8, meredith_product9, meredith_product10,
                katherin_product6, katherin_product7, katherin_product8, katherin_product9, katherin_product10,
                sophie_product6, sophie_product7, sophie_product8, sophie_product9, sophie_product10]

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
