import axios from 'axios';
import { CATEGORIES } from '../Redux/Features/category/category';
const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY

const Header = {
  'X-RapidAPI-Key': RAPID_API_KEY,
  'X-RapidAPI-Host': 'ecommerce-api3.p.rapidapi.com'
}


export const fetchProducts = async (category,) => {
  if (!category) return [];
  try {
    const response = await axios.get(`https://ecommerce-api3.p.rapidapi.com/${category}`,
      { headers: Header }
    );



    return response.data;


  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}














// export const fetchProducts = async () => {
//   try {
//     const response = await axios.get('https://simple-grocery-store-api.glitch.me/products', {
//     });
//     return console.log(response.data);
//   } catch (error) {
//     console.error('Error fetching products:', error);
//   }
// }