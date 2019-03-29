import { assets } from './assets.js'
export const categories = [
  {
    key: '0',
    title: 'Mens Fashion',
    img: assets.mensfashion,
    categories: [
      { key: '0', category: 'Clothing', img: assets.flipkart, url: 'https://www.flipkart.com/mens-clothing/pr?sid=2oq,s9b&otracker=categorytree&otracker=nmenu_sub_Men_0_Clothing' },
      { key: '1', category: 'Footwear', img: assets.snapdeal, url: 'https://www.snapdeal.com/products/mens-footwear' },
      { key: '2', category: 'Top Brands', img: assets.kooves, url: 'https://www.koovs.com/men' },
      { key: '3', category: 'Bags & Luggage', img: assets.amazon, url: 'https://www.amazon.in/Luggage-Bags/b?ie=UTF8&node=2454169031' }
    ]
  },
  {
    key: '1',
    title: 'Womens Fashion',
    img: assets.womensfashion,
    categories: [
      {
        key: '0',
        category: 'Clothing',
        img: assets.amazon,
        url:
          'https://www.amazon.in/Womens-clothing/b/ref=brb_W_Clothing?ie=UTF8&node=1953602031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_s=merchandised-search-left-2&pf_rd_r=211PXP5EHDPZEFTRTBBH&pf_rd_r=211PXP5EHDPZEFTRTBBH&pf_rd_t=101&pf_rd_p=54976ca7-3e77-489b-b08f-7b814f5e89c1&pf_rd_p=54976ca7-3e77-489b-b08f-7b814f5e89c1&pf_rd_i=7459780031'
      },
      { key: '1', category: 'Accessories', img: assets.limeroad, url: 'https://www.limeroad.com/kyc/?noPer=1&top_level=Women&occasion=women_accessories&price=0&page=0' },
      {
        key: '2',
        category: 'Bags & Luggage',
        img: assets.voonik,
        url: 'https://www.voonik.com/collections/women-fashion?lp=true'
      },
      { key: '3', category: 'Footwear', img: assets.myntra, url: 'https://www.myntra.com/women-footwear' }
    ]
  },
  {
    key: '2',
    title: 'Toy & Kids Fashion',
    img: assets.kidsfashion,
    categories: [
      { key: '0', category: 'Clothing', img: assets.firstcry, url: 'http://www.firstcry.com/newborn-baby-clothes-dresses?ref2=menu_dd_catlanding' },
      { key: '1', category: 'Toys', img: assets.flipkart, url: 'https://www.flipkart.com/toys/pr?sid=mgl' },
      { key: '2', category: 'Stationery', img: assets.snapdeal, url: 'https://www.snapdeal.com/products/stationery?sort=plrty' },
      { key: '3', category: 'Footwear', img: assets.amazon, url: 'https://www.snapdeal.com/products/kids-footwear#bcrumbLabelId:461' }
    ]
  },
  {
    key: '3',
    title: 'Electronics',
    img: assets.electronics,
    categories: [
      { key: '0', category: 'TV  Appliances', img: assets.shopclues, url: 'https://www.shopclues.com/tv-large-appliances-and-camera.html' },
      { key: '1', category: 'PayTM Mall', img: assets.paytm, url: 'https://paytmmall.com/electronics-clpid-68' },
      { key: '2', category: 'Health Care Appliances', img: assets.flipkart, url: 'https://www.flipkart.com/health-and-appliances-store?otracker=nmenu_sub_Electronics_0_Health%20Care%20Appliances' },
      { key: '3', category: 'Electronics Store', img: assets.amazon, url: 'https://www.amazon.in/electronics/b/ref=sd_allcat_sbc_tvelec_all_elec?ie=UTF8&node=976419031' }
    ]
  },
  {
    key: '4',
    title: 'Kitchen Appliances',
    img: assets.kitchen,
    categories: [
      { key: '0', category: 'Kitchenware', img: assets.snapdeal, url: 'https://www.snapdeal.com/products/home-kitchen' },
      { key: '1', category: 'Kicthen & Dining', img: assets.flipkart, url: 'https://www.flipkart.com/kitchen-essential-store?otracker=nmenu_sub_Home%20%26%20Furniture_0_Kitchen%20%26%20Dining' },
      { key: '2', category: 'Kitchen Appliances', img: assets.shopclues, url: 'https://www.shopclues.com/appliances-home-kitchen-appliances.html' },
      { key: '3', category: 'Home Appliances', img: assets.amazon, url: 'https://www.amazon.in/kitchen-home-appliances/b/ref=nav_shopall_sbc_tvelec_kitchen_appliances?ie=UTF8&node=4951860031' }
    ]
  },
  {
    key: '5',
    title: 'Flower gift & cakes',
    img: assets.flowersgift,
    categories: [
      { key: '0', category: 'Fernspetals', img: assets.fernspetal, url: 'https://www.fnp.com/' },
      { key: '1', category: 'Archies', img: assets.archies, url: 'https://www.archiesonline.com/' },
      { key: '2', category: 'FlowerAura', img: assets.floweraura, url: 'https://www.floweraura.com/' },
      { key: '3', category: 'ProFlowers', img: assets.proflow, url: 'https://www.proflowers.com/' }
    ]
  },
  {
    key: '6',
    title: 'Beauty & Personal Care Products',
    img: assets.beautylogo,
    categories: [
      { key: '0', category: 'NYKAA', img: assets.nykaa, url: 'https://www.nykaa.com/' },
      { key: '1', category: 'JABONG', img: assets.jabong, url: 'https://www.jabong.com/personal-care?f=Gender%3Awomen%2Cmen%20women' },
      { key: '2', category: 'Myntra', img: assets.myntra, url: 'https://www.myntra.com/women-personal-care' },
      { key: '3', category: 'Flipkart', img: assets.flipkart, url: 'https://www.flipkart.com/beauty-store?otracker=nmenu_sub_Women_0_Beauty%20%26%20Grooming' }
    ]
  },
  {
    key: '7',
    title: 'Jewellery',
    img: assets.jewelrylogo,
    categories: [
      { key: '0', category: 'Bluestone', img: assets.bluestone, url: 'https://www.bluestone.com/' },
      { key: '1', category: 'Cilory', img: assets.cilory, url: 'https://www.cilory.com/64-jewellery' },
      { key: '2', category: 'Kalyan Jewellers', img: assets.kalyan, url: 'https://kalyanjewellers.net/' },
      { key: '3', category: 'PC Jwellers', img: assets.pcj, url: 'https://www.pcjeweller.com/' }
    ]
  },
  {
    key: '8',
    title: 'Travel',
    img: assets.travel,
    categories: [
      { key: '0', category: 'Make My Trip', img: assets.mmp, url: 'https://www.makemytrip.com/' },
      { key: '1', category: 'Yatra', img: assets.yatra, url: 'https://www.yatra.com/' },
      { key: '2', category: 'goibibo', img: assets.goibibo, url: 'https://www.goibibo.com/' },
      { key: '3', category: 'IRCTC', img: assets.irctc, url: 'http://www.irctc.com/displayServlet/' }
    ]
  },
  {
    key: '9',
    title: 'Food',
    img: assets.food,
    categories: [
      { key: '0', category: 'FoodPanda', img: assets.fp, url: 'https://www.foodpanda.in/' },
      { key: '1', category: 'Zomato', img: assets.zomato, url: 'https://www.zomato.com/ncr' },
      { key: '2', category: 'Swiggy', img: assets.swiggy, url: 'https://www.swiggy.com/' },
      { key: '3', category: 'FreshMenu', img: assets.fm, url: 'https://www.freshmenu.com/' }
    ]
  },
  {
    key: '10',
    title: 'GROCERIES',
    img: assets.grocery,
    categories: [
      { key: '0', category: 'BigBasket', img: assets.bb, url: 'https://www.bigbasket.com/' },
      { key: '1', category: 'Grofers', img: assets.grofers, url: 'https://grofers.com/' },
      { key: '2', category: 'AmazonPantry', img: assets.ap, url: 'https://www.amazon.in/pantry-online-grocery-shopping-store/b?ie=UTF8&node=9574332031' },
      { key: '3', category: 'RelianceFresh', img: assets.rf, url: 'https://relianceretail.com/reliance-fresh.html' }
    ]
  },
  {
    key: '11',
    title: 'Mobile Recharge & Bill Payments',
    img: assets.recharge,
    categories: [
      { key: '0', category: 'PAYTM', img: assets.paytm, url: 'https://paytm.com/' },
      { key: '1', category: 'Mobikwik', img: assets.mobikwik, url: 'https://www.mobikwik.com/' },
      { key: '2', category: 'Freecharge', img: assets.freecharge, url: 'https://www.freecharge.in/' },
      { key: '3', category: 'JIO', img: assets.jio, url: 'https://www.jio.com/' }
    ]
  },
  {
    key: '12',
    title: 'Medicines',
    img: assets.medicines,
    categories: [
      { key: '0', category: '1mg', img: assets.onemg, url: 'https://www.1mg.com/' },
      { key: '1', category: 'Netmeds', img: assets.netmeds, url: 'https://www.netmeds.com/' },
      { key: '2', category: 'Pharmeasy', img: assets.pharmeasy, url: 'https://pharmeasy.in/' },
      { key: '3', category: 'Heathmug', img: assets.healthmug, url: 'https://www.healthmug.com/' }
    ]
  }
]
