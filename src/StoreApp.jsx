
import { ProductList } from "./components/products/ProductList";
import { useProducts } from "./hooks/useProducts";


export const StoreApp = () => {


  const products = useProducts();

  console.log(products);

  if (products.isFetching) return <span>Loading</span> 

  if (products.error) return <span>Error {products.error.message}</span> 

  return (
    <>
        <h1 className="text-3xl font-bold underline">
            StoreApp
        </h1>

        <ProductList products={products.data} />
    </>
    
  )
}
