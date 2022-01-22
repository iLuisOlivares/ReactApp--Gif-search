import { useFetchGif } from "../../hooks/useFetchGif";
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas de custom hooks', () => {
    test('debe retornar el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGif('Naruto'));
        const { data, loading } = result.current;
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);

        // const { data, loading } = useFetchGif('One punch man');
    });

    test('debe de retornar un arreglo de imgs y el loading en false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGif('Naruto'));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toBe(3);
        expect(loading).toBe(false);

    });


});
