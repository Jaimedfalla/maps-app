import { computed, defineComponent,ref } from 'vue';
import SearchResults from '../search-results/SearchResults.vue';

export default defineComponent ({
    name:'SearchBar',
    components:{
        SearchResults
    },
    setup() {
        const debounceTimeOut = ref();
        const debounceValued = ref('');

        return {
            searchTerm:computed({
                get(){
                    return debounceValued.value;
                },
                set(value:string){
                    if(debounceTimeOut.value) clearTimeout(debounceTimeOut.value);

                    debounceTimeOut.value =setTimeout(()=>{
                        debounceValued.value = value;
                    },500) 
                }
            })
        }
    }
});