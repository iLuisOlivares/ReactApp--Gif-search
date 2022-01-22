import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Add category testing', () => {

    const setCategories = jest.fn();

    let wrapper = shallow(<AddCategory setCategories={setCategories}></AddCategory>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}></AddCategory>);
    });

    test('Debe mostrar el snapshot', () => {
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe cambiar el input', () => {
        const value = 'Ola mundo';
        wrapper.find('input').simulate('change', { target: { value } });

    });

    test('Debe Simular el envio del formulario', () => {
        const form = wrapper.find('form');

        form.simulate('submit', { preventDefault: () => { } });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Llamar a setCategories y limpiar la caja de texto', () => {

        const value = 'Naruto';

        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault: () => { } });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(wrapper.find('input').prop('value')).toBe('');
    });

});
