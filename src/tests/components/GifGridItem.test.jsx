import { shallow } from 'enzyme';
import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';


describe('Prueba de GifGridItem', () => {

    const title = 'Title por defecto';
    const url = 'Url por defecto';
    const wrapper = shallow(<GifGridItem title={title} url={url}></GifGridItem>);

    test('Debe mostrar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar un parrafo con el title', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);
    });

    test('Debe mostrar una imagen de la url', () => {
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Debe mostrar la clase animate__fadeInUp del div', () => {
        const div = wrapper.find('div');

        expect(div.prop('className').includes('animate__fadeInUp')).toBe(true);
    });

});
