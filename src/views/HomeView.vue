<template>
  <MapView/>
</template>

<script lang="ts">
import { usePlacesModule } from '@/composables';
import { defineComponent } from 'vue';
import MapView from '@/components/mapView/MapView.vue';

export default defineComponent({
  name: 'HomeView',
  components:{
    MapView
  },
  setup(){
    usePlacesModule()
  }
});
</script>
 