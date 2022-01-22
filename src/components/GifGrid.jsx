import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getGifs } from '../helpers/getGif';
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setimages] = useState([]);

    // useEffect(() => {
    //     getGifs(category).then(img => setimages(img));

    // }, [category]);

    const { data: images, loading } = useFetchGif(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeInUp texto'>{category}</h3>

            {/* {loading && <p className='animate__animated animate__flash'>Loading</p>} */}


            <div className='card-grid '>
                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        ></GifGridItem>
                    ))
                }
            </div>
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}