async function fetchImages(query) {
  const apiKey = '44064586-c85ee0d0f4282a04fbc0070f7';
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;
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




// function fetchImages(query) {
//     const BASE_URL = 'https://pixabay.com';
//     const END_POINT = '/api';
//     const params = new URLSearchParams({
//         key: '44095628-d0027d9df3d6429662d87f006',
//         q: query,
//         image_type: 'photo',
//         orientation: 'horizontal',
//         safesearch: 'true'
//     });

//     const url = `${BASE_URL}${END_POINT}?${params}`;

//     const headers = {
//         'Content-Type': 'application/json'
//     };

//     return fetch(url, { headers })
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return res.json();
//         })
//         .then(data => {
//             if (data.hits.length === 0) {
//                 return 'Sorry, there are no images matching your search query. Please try again!';
//             }
//             return data.hits;
//         })
//         .catch(error => {
//             console.error('There was a problem with the fetch operation:', error);
//             return 'There was an error fetching the images. Please try again later.';
//         });
// }

// export default fetchImages;
