async function fetchImages(query) {
    const apiKey = '44095628-d0027d9df3d6429662d87f006';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;
    console.log('url', url);
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
    } catch (error) {
        throw error;
    }
}

export default fetchImages;

