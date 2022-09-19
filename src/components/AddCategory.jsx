import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
    const [ inputValue, setInputValue ] = useState("");
    
    const handleOnInputChange = e => {
        setInputValue(e.target.value);
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue("");
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <input
                type={'text'}
                placeholder={'Buscar gifs'}
                value={inputValue}
                onChange={handleOnInputChange}
            />
            <button type={'submit'}>Agregar</button>
        </form>
  );
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
};