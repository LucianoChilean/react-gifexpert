import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Berserk', 'goblin slayer']);

    const onAddCategory = (newCategory) => {
        
        if(categories.includes(newCategory)) return;
        
        setCategories([newCategory,...categories])
        //setCategories(cat => [ ...cat, 'Dragon Ball'] )
    }

    return (
        <>
    <h1> GifExpertApp</h1>
    <AddCategory 
            //setCategories={ setCategories } 
            onNewCategory={ e => onAddCategory(e)}
            />

        {
        categories.map( category => (
         <GifGrid key={category} 
                  category={ category } />
        ))
        }
        </>
    )
}