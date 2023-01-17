<script lang="ts" src="./SearchResults.ts"></script>

<template>

    <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
        <h5>Searching...</h5>
    </div>

    <ul v-else-if="searchResult.length > 0" class="list-group mt-3">
        <li v-for="place in searchResult" :key="place.id"
            :class="{'active':place.id ===activePlace }"
            class="list-group-item list-group-item-action"
            @click="onPlaceClicked(place)"
        >
            <h5>{{ place.text }}</h5>
            <p>{{ place.place_name }}</p>
            <div align="rigth">
                <button class="btn btn-sm"
                    :class="(place.id===activePlace)? 'btn-outline-light':'btn-outline-primary'"
                    @click.self="getRouteDirections(place)"
                >
                    Direcciones
                </button>
            </div>
        </li>
    </ul>
</template>

<style scoped>
li{
    cursor: pointer;
}
h5{
    font-size: 15px !important;
}
p{
    font-size:10px;
}
</style>