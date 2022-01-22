import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddCategory({ setCategories }) {

    const [inputValue, setInputValue] = useState("");


    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('HandleSubmit:', inputValue);
        if (inputValue.trim().length > 2) {
            setCategories(cats => [e.target[0].value, ...cats]);
            setInputValue('');
        }

    }

    return (
        <form className='search' onSubmit={handleSubmit}>
            <input

                type="text"
                value={inputValue}
                onChange={handleOnChange}
            ></input>
        </form>);

}

export default AddCategory;

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}