import {products as data} from '../data/products'
import Product from '../components/Product'
import useQuiosco from '../hooks/useQuiosco'

export default function Home() {
  const { currentCategory } = useQuiosco();
  const products = data.filter(p => p.category_id == currentCategory.id);
  return (
    <>
      <h1 className='text-4xl font-black mt-5 w-full '>{currentCategory.name}</h1>
      <p className='text-2xl mt-3 mb-5 '>
        Elige y personaliza tu pedido a continuación
      </p>

    
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          products.map(product =>( 
            <Product key={`home_product_id_${product.id}`} product={product} /> 
          ))
        }
      </div>
    </>
  )
}
