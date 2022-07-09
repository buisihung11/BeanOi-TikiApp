import { constants as c } from "../../constants";

Page({
  data: {
    status: c.SUCCESS,
    gifts: [
      {
        "product_id": 6877,
        "product_in_menu_id": 1246,
        "product_name": "Bao lì xì con Hổ",
        "price": 1,
        "base_price": 50000,
        "pic_url": "https://unideli.s3.amazonaws.com/images/Popup_SM.png",
        "product_type_id": 12,
        "product_type_name": "Quà",
        "category_id": 2106,
        "category_name": "Thú cưng",
        "description": "Test",
        "supplier_id": 25,
        "supplier_name": "BeanFood",
        "product_code": "BAOLIXI",
        "attributes": {},
        "child_products": [],
        "extras": [],
        "product_combination_models": []
      },
      {
        "product_id": 6953,
        "product_in_menu_id": 1247,
        "product_name": "TEST GIFT 20",
        "price": 200,
        "base_price": 0,
        "product_type_id": 12,
        "product_type_name": "Quà",
        "category_id": 44,
        "category_name": "Cơm",
        "supplier_id": 30,
        "supplier_name": "Canteen Q9",
        "product_code": "GIFT-6",
        "attributes": {},
        "child_products": [],
        "extras": [],
        "product_combination_models": []
      },
      {
        "product_id": 6952,
        "product_in_menu_id": 1248,
        "product_name": "TEST GIT PRICE NHO",
        "price": 200,
        "base_price": 0,
        "pic_url": "https://unideli.s3.amazonaws.com/images/%C4%91a%CC%A3%CC%82u%20hu%CC%89%20so%CC%82%CC%81t%20thi%CC%A3t%20xay.jpeg",
        "product_type_id": 12,
        "product_type_name": "Quà",
        "category_id": 45,
        "category_name": "Món Nước",
        "supplier_id": 30,
        "supplier_name": "Canteen Q9",
        "product_code": "GIFT-04",
        "attributes": {},
        "child_products": [],
        "extras": [],
        "product_combination_models": []
      },
      {
        "product_id": 6951,
        "product_in_menu_id": 1249,
        "product_name": "TEST Gift 40 bean",
        "product_name_en": "TEST 3",
        "price": 200,
        "base_price": 0,
        "product_type_id": 12,
        "product_type_name": "Quà",
        "category_id": 44,
        "category_name": "Cơm",
        "supplier_id": 30,
        "supplier_name": "Canteen Q9",
        "product_code": "GIFT-3",
        "attributes": {
          "size": "M"
        },
        "child_products": [],
        "extras": [],
        "product_combination_models": []
      },
      {
        "product_id": 6950,
        "product_in_menu_id": 1250,
        "product_name": "TEST QUA TANG Lan 2",
        "product_name_en": "TEST 2",
        "price": 200,
        "base_price": 0,
        "product_type_id": 12,
        "product_type_name": "Quà",
        "category_id": 45,
        "category_name": "Món Nước",
        "supplier_id": 30,
        "supplier_name": "Canteen Q9",
        "product_code": "GIFT-3",
        "attributes": {
          "size": "M"
        },
        "child_products": [],
        "extras": [],
        "product_combination_models": []
      },
      {
        "product_id": 6949,
        "product_in_menu_id": 1251,
        "product_name": "TEST QUA TANG",
        "product_name_en": "TEST",
        "price": 200,
        "base_price": 0,
        "product_type_id": 12,
        "product_type_name": "Quà",
        "category_id": 2110,
        "category_name": "Món khác",
        "supplier_id": 30,
        "supplier_name": "Canteen Q9",
        "product_code": "GIFT-2",
        "attributes": {
          "size": "M"
        },
        "child_products": [],
        "extras": [],
        "product_combination_models": []
      },
      {
        "product_id": 6946,
        "product_in_menu_id": 1252,
        "product_name": "Test Qua Tang passio",
        "product_name_en": "test",
        "price": 200,
        "base_price": 0,
        "product_type_id": 12,
        "product_type_name": "Quà",
        "category_id": 2103,
        "category_name": "Nước uống",
        "description": "sfsafsaf",
        "supplier_id": 24,
        "supplier_name": "Passio Coffee",
        "product_code": "testgift",
        "attributes": {},
        "child_products": [],
        "extras": [],
        "product_combination_models": []
      },
      {
        "product_id": 6945,
        "product_in_menu_id": 1253,
        "product_name": "Test Muc Qua Tang",
        "product_name_en": "test gif",
        "price": 200,
        "base_price": 0,
        "product_type_id": 12,
        "product_type_name": "Quà",
        "category_id": 15,
        "category_name": "PASSIO COFFEE",
        "description": "dàndslnglag",
        "supplier_id": 24,
        "supplier_name": "Passio Coffee",
        "product_code": "TEST-GIFT",
        "attributes": {},
        "child_products": [],
        "extras": [],
        "product_combination_models": []
      }
    ]
  },
  onSelectGift(gift) {
    // const {gift} = e.target.dataset;
    console.log('selected gift', gift);
  },
  onLoad(query) {
    // TODO: Get list gift from current menu (from App)
    const app = getApp();

    // TODO: Save select gift to app state
    // TODO: Send request to create gift

  },
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
});
