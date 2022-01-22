export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=3&q=${encodeURI(category)}&api_key=19mXaGamWuIS13aTJv05STItNzt6wv5W`;

    const resp = await fetch(url);

    const { data } = await resp.json();


    // fetch(url)
    //     .then(response => response.json())
    //     .then(data => console.log(data));

    const gifs = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }

    })
    return gifs
}
