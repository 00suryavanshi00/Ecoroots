import { toast } from "sonner";

const { default: axios } = require("axios");

const axiosClient = axios.create({
    // baseURL:'http://localhost:1337/api'
    baseURL:'https://ecoroots-strapicms.onrender.com/api'
})


export const getCategory=()=>axiosClient.get('/categories?populate=*')

export const getProdFromCategory = async (category)=>{
  let response = await axiosClient.get(`/products?filters[categories][name][$in]=${category}`+"&populate=*")

  return response.data.data

}


export const getCategoryList= async ()=> {
    let response = await axiosClient.get('/categories?populate=*')
    return response.data.data
}

// Make sure you are only returning the data from the response, not the full axios object.
export const getSliders = async () => {
  try {
    const response = await axiosClient.get('/sliders?populate=*');
    return response.data.data;  // Only returning the slider data, not the full axios response object
  } catch (error) {
    console.error('Error fetching sliders:', error);
    return [];  // Return an empty array in case of error
  }
};

export const getproducts = async () =>{
    try {
        const response = await axiosClient.get('/products?populate=*');
        return response.data.data;  // Only returning the slider data, not the full axios response object
      } catch (error) {
        console.error('Error fetching sliders:', error);
        return [];  // Return an empty array in case of error
      }
}


export const registerUser = async (uname, email, pass)=>{

  try{
    const response = await axiosClient.post('/auth/local/register',{
      username:uname,
      email: email,
      password: pass
    })
    console.log('(##########################)',response.data)
    return response.data
  }
  catch (error) {
    toast("Oopsieeee!")
    console.log('(##########################)',response.data.code)
    console.error('Error fetching sliders:', error);
    return [];  // Return an empty array in case of error
  }

}

export const logInUser = async(email, pass)=>{
  try{
    console.log('inside try')
    const response = await axiosClient.post('/auth/local',{
      identifier: email,
      password: pass
    })
    console.log('(##########################)',response.data)
    return response.data
}
catch (error) {
  console.log('(##########################)',response.data)
  toast("Oopsieeee!")
  console.error('Error fetching sliders:', error);
  return [];  // Return an empty array in case of error
}
}

