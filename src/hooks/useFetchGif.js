import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";

export const useFetchGif = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true

    });

    useEffect(() => {
        getGifs(category)
            .then(img => {
                setState({
                    data: img,
                    loading: false
                })
            })
    }, [category])



    return state // {data: [], loading: true}

};
