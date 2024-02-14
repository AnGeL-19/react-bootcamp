import axios from "axios"



export const productsApi = axios.create({
        baseURL: 'http://localhost:3000'
});


export const getProducts = async() => {

    const {data} = await productsApi.get('/Products');
    return data;

}

export const createProduct = async (product) => {

    const {data} = await productsApi.post('/Products', product);
    return data;

}