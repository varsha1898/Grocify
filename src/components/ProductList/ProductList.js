// Import images
import Strawberry from "../../assets/strawberry.png";
import Pineapple from "../../assets/pineapple.png";
import Cabbage from "../../assets/Cabbage.png";
import Milk from "../../assets/milk.png";
import Cheese from "../../assets/cheese.png";
import Chicken from "../../assets/chicken.png";
import Tilapia from "../../assets/tilapia.png";
import Broccoli from "../../assets/broccoli.png";
import Shrimp from "../../assets/shrimp.png";
import Butter from "../../assets/butter.png";
import Lettuce from "../../assets/lettuce.png";
import Kale from "../../assets/kale.png";
import Kiwi from "../../assets/kiwi.png";
import Eggplant from "../../assets/eggplant.png";
import Tofu from "../../assets/tofu.png";
import Banana from "../../assets/banana.png";
import Salmon from "../../assets/salmon.png";
import Yogurt from "../../assets/yogurt.png";
import SliceCheese from "../../assets/slice-cheese.png";
import Capsicum from "../../assets/capsicum.png";
import RicottaCheese from "../../assets/ricotta-cheese.png";
import Eggs from "../../assets/eggs.png";

// Product list
const products = [
  {
    id: 1,
    category: "Fruits",
    title: "Strawberry",
    price: "3.00",
    image: Strawberry,
  },
  { id: 4, category: "Dairy", title: "Milk", price: "1.00", image: Milk },
  { id: 9, category: "SeaFood", title: "Shrimp", price: "5.78", image: Shrimp },

  {
    id: 3,
    category: "Vegetables",
    title: "Cabbage",
    price: "1.20",
    image: Cabbage,
  },

  { id: 5, category: "Dairy", title: "Cheese", price: "4.50", image: Cheese },

  {
    id: 21,
    category: "SeaFood",
    title: "Salmon",
    price: "4.50",
    image: Salmon,
  },
  { id: 13, category: "Fruits", title: "Kiwi", price: "5.00", image: Kiwi },

  {
    id: 8,
    category: "Vegetables",
    title: "Broccoli",
    price: "5.20",
    image: Broccoli,
  },

  // Fruits
  {
    id: 2,
    category: "Fruits",
    title: "Pineapple",
    price: "2.50",
    image: Pineapple,
  },
  { id: 16, category: "Fruits", title: "Banana", price: "3.00", image: Banana },

  // Vegetables

  {
    id: 11,
    category: "Vegetables",
    title: "Lettuce",
    price: "3.90",
    image: Lettuce,
  },
  { id: 12, category: "Vegetables", title: "Kale", price: "1.20", image: Kale },
  {
    id: 14,
    category: "Vegetables",
    title: "Eggplant",
    price: "2.60",
    image: Eggplant,
  },
  {
    id: 18,
    category: "Vegetables",
    title: "Capsicum",
    price: "6.20",
    image: Capsicum,
  },
  {
    id: 24,
    category: "Dairy",
    title: "EGGs",
    price: "6.00",
    image: Eggs,
  },

  // Dairy
  { id: 10, category: "Dairy", title: "Butter", price: "1.00", image: Butter },
  { id: 17, category: "Dairy", title: "Yogurt", price: "2.00", image: Yogurt },
  {
    id: 19,
    category: "Dairy",
    title: "Slice Cheese",
    price: "6.00",
    image: SliceCheese,
  },
  {
    id: 20,
    category: "Dairy",
    title: "Ricotta Cheese",
    price: "2.00",
    image: RicottaCheese,
  },

  // Plant-based
  { id: 15, category: "Dairy", title: "Tofu", price: "1.00", image: Tofu },

  // Meat & Seafood
  { id: 6, category: "Meat", title: "Chicken", price: "6.00", image: Chicken },
  {
    id: 7,
    category: "SeaFood",
    title: "Tilapia",
    price: "8.00",
    image: Tilapia,
  },
];

export default products;
