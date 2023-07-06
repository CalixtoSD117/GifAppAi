import React from 'react'
import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {

    const {images , isLoading} = useFetchGifs(category);

  return (
    <>
        <h3 className='p-2 m-2 text-3xl font-semibold text-slate-800'>{category}</h3>
        {
            isLoading && <h2>Loading...</h2>
        }

        <div className='grid grid-cols-2 lg:grid lg:grid-cols-4 p-2 m-2 gap-4 '>
            {images.map((image)=>(
                <GifItem key={image.id}
                {...image}
                />
            ))}
        </div>
    </>
  )
}

export default GifGrid