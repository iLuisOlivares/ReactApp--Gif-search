import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifSearchApp = () => {

    const [categories, setCategories] = useState([]);

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Bleach']);
    //     setCategories(cats => [...cats, 'Bleach']);
    // }

    return (
        <>
            <div className='container-white'>
                <h2 className='titulo'>Gif search App</h2>
                <AddCategory
                    setCategories={setCategories}
                ></AddCategory>
            </div>
            <hr />
            {/* <button onClick={handleAdd} > Add </button> */}
            <ul>
                {
                    categories.map((category) =>
                        <GifGrid
                            key={category}
                            category={category}
                        ></GifGrid>
                    )
                }
            </ul>

        </>);
};
