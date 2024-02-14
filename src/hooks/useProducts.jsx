import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../api/productsApi";



export const useProducts = () => {

    const products = useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    });

    return products;

}
