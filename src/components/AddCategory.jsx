import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddCategory({ setCategories }) {

    const [inputValue, setInputValue] = useState("");


    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        setCategories(cats => [...cats, e.target[0].value]);
        setInputValue('');
        e.preventDefault();

    }

    return (
        <form onSubmit={handleSubmit}>
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