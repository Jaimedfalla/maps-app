import { computed, defineComponent,ref } from 'vue';
import { usePlacesModule } from '@/composables';
import SearchResults from '../search-results/SearchResults.vue';


export default defineComponent ({
    name:'SearchBar',
    components:{
        SearchResults
    },
    setup() {
        const debounceTimeOut = ref();
        const debounceValued = ref('');
        const {searchPlaceByTerm} = usePlacesModule()

        return {
            searchTerm:computed({
                get(){
                    return debounceValued.value;
                },
                set(value:string){
                    if(debounceTimeOut.value) clearTimeout(debounceTimeOut.value);

                    debounceTimeOut.value =setTimeout(()=>{
                        debounceValued.value = value;
                        searchPlaceByTerm(value);
                    },500) 
                }
            })
        }
    }
});