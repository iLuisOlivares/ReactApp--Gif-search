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
            <h2>Gif search App</h2>
            <AddCategory
                setCategories={setCategories}
            ></AddCategory>
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
