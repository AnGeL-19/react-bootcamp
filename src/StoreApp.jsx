
import { ProductList } from "./components/products/ProductList";
import { Error } from "./components/ui/Error";
import { Loading } from "./components/ui/Loading";
import { useProducts } from "./hooks/useProducts";



export const StoreApp = () => {


  const products = useProducts();

  console.log(products);

  if (products.isFetching) return <Loading/>

  if (products.error) return <Error/>

  return (
    <>
        <h1 className="text-3xl font-bold underline">
            StoreApp
        </h1>

        <ProductList products={products.data} />
    </>
    
  )
}
