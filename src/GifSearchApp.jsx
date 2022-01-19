import React, { useState } from 'react';
import AddCategory from './components/AddCategory';

export const GifSearchApp = () => {

    const [categories, setCategories] = useState(['One punch man', 'Naruto', 'One Piece']);

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Bleach']);
    //     setCategories(cats => [...cats, 'Bleach']);
    // }

    return (
        <>
            <h2>Gif search App</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr />
            {/* <button onClick={handleAdd} > Add </button> */}
            <ul>
                {
                    categories.map((category) => <li key={category}>{category}</li>)
                }
            </ul>

        </>);
};
