import React, { useEffect, useState } from 'react'
import { Getgifs } from '../helpers/Getgifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getImages = async() => {
        const newImages = await Getgifs(category);
        setImages(newImages);
        setisLoading(false);
    }

    useEffect(() =>{
        getImages();
    },[])

    return{
        images,
        isLoading,
    }

  
}

