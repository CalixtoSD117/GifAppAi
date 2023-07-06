import { useState } from 'react'
import { Buscador, GifGrid, Navbar } from './components'

const GifApp = () => {

  const [categories, setcategories] = useState(['Memes','anime','HunterXHunter']);

  const onAddCategory = (NewCategory) => {

      if(categories.includes(NewCategory)) return;

       setcategories([NewCategory,...categories])
      // setcategories(['HunterXHunter',...categories])
  }

  

  return (
    <div>
        
        <Navbar onNewCategory={onAddCategory}/>
        
        
        {categories.map((category)=>(
          <GifGrid
          key={category}
          category={category}
          />
        ))}

    </div>
  )
}

export default GifApp