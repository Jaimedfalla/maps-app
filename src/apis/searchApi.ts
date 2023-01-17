import axios from 'axios';

const searchApi = axios.create({
    baseURL:'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{
        limit:5,
        language:'es',
        access_token:'pk.eyJ1IjoiYmxhbmNoaW5nOTU0OSIsImEiOiJjbGN6NmIxOTYxaXVlM3ZzNWVncGY2dGVlIn0.VWrVMz2omqPB18MITO1DGg'
    }
});

export default searchApi;