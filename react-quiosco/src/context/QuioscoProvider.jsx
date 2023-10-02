import { createContext, useState } from "react";
import { categories as categoriesDB } from '../data/categories';

const QuioscoContext = createContext();

const QuioscoProvider = ({children})=>{
    
    const [categories, setCategories] = useState(categoriesDB);
    const [currentCategory, setCurrentCategory] = useState(categoriesDB[0]);
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({});

    const handleClickCategory = (id) => {
        const filtered = categories.filter(category => category.id === id)[0];
        setCurrentCategory(filtered);
    }

    const handleClickModal = () => {
        setModal(!modal);
    }

    const handleSetProduct = (product) => {
        setProduct(product);
    }

    return (
        <QuioscoContext.Provider 
            value={{
                categories, 
                currentCategory, 
                handleClickCategory,
                modal,
                handleClickModal,
                product,
                handleSetProduct
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}


export {
    QuioscoProvider
}

export default QuioscoContext;