import useQuiosco from '../hooks/useQuiosco';

export default function Category({category}) {
  const { handleClickCategory, currentCategory } = useQuiosco();
  let isActive = currentCategory.id === category.id;
  let bgColorIsActive = isActive ? 'bg-amber-400' : 'bg-white';
  return (
    <button 
      className={`${bgColorIsActive} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}
      type='button'
      onClick={()=>handleClickCategory(category.id)}
      >
        <img 
            src={`/img/icono_${category.icon}.svg`}
            alt="Category Icon"
            className="w-12"
            />
            <p 
              className="text-lg font-bold cursor-pointer truncate"
              >
                {category.name}
            </p>
    </button>
  )
}
