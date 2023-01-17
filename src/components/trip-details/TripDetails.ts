import { useMapModule } from "@/composables";
import { defineComponent } from "vue";

export default defineComponent({
    name:'TripDetails',
    setup(){
        const {distance,duration} = useMapModule();

        return{
            distance,
            duration
        }
    }
})