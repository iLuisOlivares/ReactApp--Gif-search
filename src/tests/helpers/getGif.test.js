import { getGifs } from '../../helpers/getGif';


describe('Pruebas de getGif', () => {
    test('debe traer 3 elementos', async () => {
        const gifs = await getGifs('Naruto');
        expect(gifs.length).toBe(3);
    });
    test('Cuando no se le manda categoria', async () => {
        const gif = await getGifs('');
        expect(gif.length).toBe(0);
    });
});

