from app.models import db, ProductImage, environment, SCHEMA


def seed_product_images():
    anton_product1_image = ProductImage(
    product_id=1,
    url = 'https://m.media-amazon.com/images/I/61JJbk3HYhS._AC_SL1200_.jpg'
    )

    anton_product2_image = ProductImage(
    product_id=2,
    url = 'https://m.media-amazon.com/images/I/71HbuF7R-eL._AC_SL1500_.jpg'
    )

    anton_product3_image = ProductImage(
    product_id=3,
    url = 'https://m.media-amazon.com/images/I/91+ay4Nj02L._AC_SX466_.jpg'
    )

    anton_product4_image = ProductImage(
    product_id=4,
    url = 'https://m.media-amazon.com/images/I/91RzXNT7ntL._AC_UY625_.jpg'
    )

    anton_product5_image = ProductImage(
    product_id=5,
    url = 'https://m.media-amazon.com/images/I/81pEwkv-KVL._AC_SX466_.jpg'
    )

    meredith_product1_image = ProductImage(
    product_id=6,
    url = 'https://i.etsystatic.com/36747487/r/il/5c5458/4251418111/il_1588xN.4251418111_sk24.jpg'
    )

    meredith_product2_image = ProductImage(
    product_id=7,
    url = 'https://i.etsystatic.com/13889575/r/il/cea625/4606468676/il_1588xN.4606468676_gv8s.jpg'
    )

    meredith_product3_image = ProductImage(
    product_id=8,
    url = 'https://i.etsystatic.com/8660202/r/il/c14c50/1233724812/il_1588xN.1233724812_up1g.jpg'
    )

    meredith_product4_image = ProductImage(
    product_id=9,
    url = 'https://i.etsystatic.com/20889344/r/il/c3cefc/2552488485/il_1588xN.2552488485_2ppg.jpg'
    )

    meredith_product5_image = ProductImage(
    product_id=10,
    url = 'https://i.etsystatic.com/10683502/r/il/6ed889/3506798335/il_1588xN.3506798335_k1cf.jpg'
    )

    katherin_product1_image = ProductImage(
    product_id=11,
    url = 'https://i.etsystatic.com/5153755/r/il/58f978/3606302592/il_794xN.3606302592_f1zq.jpg'
    )

    katherin_product2_image = ProductImage(
    product_id=12,
    url = 'https://i.etsystatic.com/35534452/r/il/2146c2/4051469686/il_794xN.4051469686_rj95.jpg'
    )

    katherin_product3_image = ProductImage(
    product_id=13,
    url = 'https://i.etsystatic.com/26971380/r/il/702111/3483202701/il_794xN.3483202701_bj16.jpg'
    )

    katherin_product4_image = ProductImage(
    product_id=14,
    url = 'https://i.etsystatic.com/12174691/r/il/3bd1a2/4624818231/il_794xN.4624818231_i6jl.jpg'
    )

    katherin_product5_image = ProductImage(
    product_id=15,
    url = 'https://i.etsystatic.com/33160036/r/il/8d8a12/4248551181/il_794xN.4248551181_kws7.jpg'
    )

    Sophie_product1_image = ProductImage(
    product_id=16,
    url= 'https://i.etsystatic.com/31079448/r/il/893506/3362443999/il_794xN.3362443999_1ruw.jpg'
    )

    Sophie_product2_image = ProductImage(
    product_id=17,
    url='https://i.etsystatic.com/5183084/r/il/0cfcee/4375730600/il_794xN.4375730600_z92x.jpg'
    )

    Sophie_product3_image = ProductImage(
    product_id=18,
    url='https://i.etsystatic.com/39604639/r/il/107022/4585671543/il_794xN.4585671543_etmn.jpg'
    )

    Sophie_product4_image = ProductImage(
    product_id=19,
    url='https://i.etsystatic.com/34097531/r/il/6d7250/4236899089/il_794xN.4236899089_6ixt.jpg'
    )

    Sophie_product5_image = ProductImage(
    product_id=20,
    url='https://i.etsystatic.com/7496102/r/il/df9477/3256139941/il_794xN.3256139941_124l.jpg'
    )

    images = [anton_product1_image, anton_product2_image, anton_product3_image, anton_product4_image, anton_product5_image,
              meredith_product1_image, meredith_product2_image, meredith_product3_image, meredith_product4_image, meredith_product5_image,
              katherin_product1_image, katherin_product2_image, katherin_product3_image, katherin_product4_image, katherin_product5_image,
              Sophie_product1_image, Sophie_product2_image, Sophie_product3_image, Sophie_product4_image, Sophie_product5_image]

    for image in images:
        db.session.add(image)
    db.session.commit()

def undo_product_images():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.product_images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM product_images")

    db.session.commit()
