import React from 'react';
import { shallow } from 'enzyme'
import { GifSearchApp } from '../GifSearchApp';


describe('Test de GifSearchApp', () => {

    test('snapshot GifSearch', () => {
        const wrapper = shallow(<GifSearchApp></GifSearchApp>)
        expect(wrapper).toMatchSnapshot();
    });


});
