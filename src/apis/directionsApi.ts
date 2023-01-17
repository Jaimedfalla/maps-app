import axios from 'axios';

const directionsApi = axios.create({
    baseURL:'https://api.mapbox.com/directions/v5/mapbox/driving',
    params:{
        alternatives:false,
        geometries:'geojson',
        overview:'simplified',
        steps:false,
        access_token:'pk.eyJ1IjoiYmxhbmNoaW5nOTU0OSIsImEiOiJjbGN6NmIxOTYxaXVlM3ZzNWVncGY2dGVlIn0.VWrVMz2omqPB18MITO1DGg'
    }
});

export default directionsApi;