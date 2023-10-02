import {formatStringToDollars} from '../helpers'
import useQuiosco from '../hooks/useQuiosco'

export default function Product({product}) {
  const { modal, handleClickModal, handleSetProduct } = useQuiosco();

  return (
    <div className="border p-3 shadow bg-white">
        <img 
            src={`/img/${product.image}.jpg`} 
            alt={`image: ${product.name}`} 
            className='w-full' />

        <div className='p-5 w-full'>
            <h3 className="font-bold text-2xl">{product.name}</h3>
            <p className="mt-5 font-black text-4xl text-amber-500 ">
                {formatStringToDollars(product.price)}
            </p>
            <button 
                type='buttom'
                className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold'
                onClick={()=>{
                  handleClickModal();
                  handleSetProduct(product);
                }}
                >Añadir al carrito</button>
        </div>
    </div>
  )
}
