export function getPhotosByRequest(userRequest) {
    const API_KEY = '42321228-2dc7965d40466a0a646776a28';
    
    const BASE_URL = 'https://pixabay.com';
    const END_POINTS = '/api/';
    const PARAMS = `?key=${API_KEY}&q=${userRequest}&image_type=photo&orientation=horizontal&safesearch=true`;

    const url = BASE_URL + END_POINTS + PARAMS;

    return fetch(url).then(res => res.json());
}