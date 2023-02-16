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
    url = 'https://i.etsystatic.com/33160036/r/il/8d8a12/4248551181/il_794xN.4248551181_kws7.jpg'
    )

    katherin_product3_image = ProductImage(
    product_id=13,
    url = 'https://i.etsystatic.com/12174691/r/il/3bd1a2/4624818231/il_794xN.4624818231_i6jl.jpg '
    )

    katherin_product4_image = ProductImage(
    product_id=14,
    url = 'https://i.etsystatic.com/26971380/r/il/702111/3483202701/il_794xN.3483202701_bj16.jpg'
    )

    katherin_product5_image = ProductImage(
    product_id=15,
    url = 'https://i.etsystatic.com/35534452/r/il/2146c2/4051469686/il_794xN.4051469686_rj95.jpg'
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
##### new batch of seed data
    anton_product21_image = ProductImage(
    product_id=21,
    url = 'https://www.etsy.com/img/36108299/r/il/48867d/4682129737/il_794xN.4682129737_j05j.jpg'
    )

    anton_product22_image = ProductImage(
    product_id=22,
    url = 'https://www.etsy.com/img/9271278/r/il/214f66/3936139899/il_794xN.3936139899_78h7.jpg'
    )

    anton_product23_image = ProductImage(
    product_id=23,
    url = 'https://www.etsy.com/img/28674208/r/il/80fa8f/4177697016/il_794xN.4177697016_qwr0.jpg'
    )

    anton_product24_image = ProductImage(
    product_id=24,
    url = 'https://www.etsy.com/img/35001350/r/il/96e0f8/4302314069/il_794xN.4302314069_qdbb.jpg'
    )

    anton_product25_image = ProductImage(
    product_id=25,
    url = 'https://www.etsy.com/img/5903037/r/il/570fd9/1496310818/il_794xN.1496310818_thnb.jpg'
    )

    meredith_product21_image = ProductImage(
    product_id=26,
    url = 'https://www.etsy.com/img/12953790/r/il/385c57/2336200012/il_794xN.2336200012_4ocm.jpg'
    )

    meredith_product22_image = ProductImage(
    product_id=27,
    url = 'https://www.etsy.com/img/35055979/r/il/51c589/3976585740/il_794xN.3976585740_7cu3.jpg'
    )

    meredith_product23_image = ProductImage(
    product_id=28,
    url = 'https://www.etsy.com/img/14217457/r/il/154077/1507211365/il_794xN.1507211365_pum8.jpg'
    )

    meredith_product24_image = ProductImage(
    product_id=29,
    url = 'https://www.etsy.com/img/23702777/r/il/14c918/4184624086/il_794xN.4184624086_s698.jpg'
    )

    meredith_product25_image = ProductImage(
    product_id=30,
    url = 'https://www.etsy.com/img/24017267/r/il/6fa8a3/2716861284/il_794xN.2716861284_q48q.jpg'
    )

    katherin_product21_image = ProductImage(
    product_id=31,
    url = 'https://www.etsy.com/img/11392819/r/il/751cae/1044888712/il_794xN.1044888712_mtm0.jpg'
    )

    katherin_product22_image = ProductImage(
    product_id=32,
    url = 'https://www.etsy.com/img/13343182/r/il/6a50b1/1598844339/il_794xN.1598844339_53j7.jpg'
    )

    katherin_product23_image = ProductImage(
    product_id=33,
    url = 'https://www.etsy.com/img/5485750/r/il/f9d8ee/136709953/il_794xN.136709953.jpg'
    )

    katherin_product24_image = ProductImage(
    product_id=34,
    url = 'https://www.etsy.com/img/13569572/r/il/9627ac/1240451515/il_794xN.1240451515_ok2h.jpg'
    )

    katherin_product25_image = ProductImage(
    product_id=35,
    url = 'https://www.etsy.com/img/9696294/r/il/0e5a1d/3767825094/il_794xN.3767825094_6pkx.jpg'
    )

    Sophie_product21_image = ProductImage(
    product_id=36,
    url= 'https://www.etsy.com/img/18224097/r/il/04097b/1818968298/il_794xN.1818968298_4cvu.jpg'
    )

    Sophie_product22_image = ProductImage(
    product_id=37,
    url='https://www.etsy.com/img/13920181/r/il/d9bdf4/4283905778/il_794xN.4283905778_2z5l.jpg'
    )

    Sophie_product23_image = ProductImage(
    product_id=38,
    url='https://www.etsy.com/img/38673016/r/il/be3cc5/4590192881/il_794xN.4590192881_64pb.jpg'
    )

    Sophie_product24_image = ProductImage(
    product_id=39,
    url='https://www.etsy.com/img/37883994/r/il/877d1e/4384314855/il_794xN.4384314855_2bqb.jpg'
    )

    Sophie_product25_image = ProductImage(
    product_id=40,
    url='https://www.etsy.com/img/23323937/r/il/565a25/2466109634/il_794xN.2466109634_5kcc.jpg'
    )


    images = [anton_product1_image, anton_product2_image, anton_product3_image, anton_product4_image, anton_product5_image,
              meredith_product1_image, meredith_product2_image, meredith_product3_image, meredith_product4_image, meredith_product5_image,
              katherin_product1_image, katherin_product2_image, katherin_product3_image, katherin_product4_image, katherin_product5_image,
              Sophie_product1_image, Sophie_product2_image, Sophie_product3_image, Sophie_product4_image, Sophie_product5_image,
              anton_product21_image, anton_product22_image, anton_product23_image, anton_product24_image, anton_product25_image,
              meredith_product21_image, meredith_product22_image, meredith_product23_image, meredith_product24_image, meredith_product25_image,
              katherin_product21_image, katherin_product22_image, katherin_product23_image, katherin_product24_image, katherin_product25_image,
              Sophie_product21_image, Sophie_product22_image, Sophie_product23_image, Sophie_product24_image, Sophie_product25_image]

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
