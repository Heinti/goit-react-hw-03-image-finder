import axios from "axios"


const KEY = '31530819-6c3d51b10eadf060d5b479d1e'
axios.defaults.baseURL = `https://pixabay.com/api`

export const getImges = async value =>{
    const response = await axios.get(`/?q=${value}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    return response.data.hits
}