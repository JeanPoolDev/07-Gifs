import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GIFExpertApp = () => {

  const [categories, setCategories] = useState([ 'kimetsu no yaeba']);
  
  const onAddCategory = (newCategory) => {

    if( categories.includes(newCategory)) return;
    setCategories( [ newCategory  , ...categories ] );
  }

  return (
    <>
        <h1>Gif Expert App</h1>
      
      <AddCategory
        // setCategories={ setCategories }
        onNewCategory = { onAddCategory } 
      />

    { 
      categories.map( category => (
        <GifGrid  
          key={ category }
          category={ category }
        />
      )) 
    }

        {/*Gif Item*/ }
    </>
  )
}
