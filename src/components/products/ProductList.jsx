import { FormikBasic } from "../formik/FormikBasic"
import { ProductCard } from "./ProductCard"


export const ProductList = ({products}) => {
  return (
    <div className='grid grid-flow-row min-h-screen'>
        <div className='col-8'>
          <ul>
            {
                products.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))
            }
          </ul>
        </div>
        <div className='col'>
            <FormikBasic />
        </div>
    </div>
  )
}
