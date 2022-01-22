import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid';
import { useFetchGif } from '../../hooks/useFetchGif'
jest.mock('../../hooks/useFetchGif.js')

describe('Test de GifGrid', () => {
    test('Comprobar el snapshot', () => {

        useFetchGif.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category='Naruto'></GifGrid>)

        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar items al usar useFecthGif', () => {

        const gifs = [{
            id: 'ID1',
            url: 'https://localhost/cualquiercosa.jpg',
            title: 'Gif1'
        }]


        useFetchGif.mockReturnValue({
            data: gifs,
            loading: true
        })

        const wrapper = shallow(<GifGrid category='Naruto'></GifGrid>)

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);


    });

});
