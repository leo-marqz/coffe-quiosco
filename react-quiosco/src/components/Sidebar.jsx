import useQuiosco from '../hooks/useQuiosco';
import Category from './Category';

export default function Sidebar() {
  const {categories} = useQuiosco();
  return (
    <aside className="md:w-72" >
      <div className="p-4">
        <img 
          className="w-40"
          src="img/logo.svg" 
          alt="Logotipo" />
      </div>
      <div className='mt-10 shadow-sm'>
        {
          categories.map((category) => (
            <Category 
              key={`sidebar_category_id_${category.id}`}
              category={category} />
          ))
        }
      </div>
      <div className='my-5 px-1'>
        <button 
          type='buttom'
          className='text-center bg-red-500 w-full p-3 font-bold text-white truncate hover:bg-red-600'
          >Cancelar Orden</button>
      </div>
    </aside>
  )
}
