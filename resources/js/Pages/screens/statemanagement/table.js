import { defineStore } from "pinia";
import {ref, computed, onMounted, onUnmounted} from 'vue';
import {usePage} from  '@inertiajs/vue3';

export const useTable = defineStore('useTable', () => {

const {props} = usePage();
const data = ref(props.data || []);

const searchQuery = ref('');
const rowsPerPage = ref(5); // Default rows per page
const currentPage = ref(1);
const dropOption = ref([5, 20, 50, 100]);
const isLoading = ref(false);


const filteredData = computed(() => {
    if (!data.value) return data.value;
    if (!searchQuery.value) return data.value;
    return data.value.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );
  });

  const noResults = computed(() => filteredData.value.length === 0);
  const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
  };

  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * rowsPerPage.value;
    const end = start + rowsPerPage.value;
    return filteredData.value.slice(start, end);
  });

  const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
  };

  const changevaluestate = () => {
    currentPage.value = 1;
  };

  const totalPages = computed(() => {
    return Math.ceil(filteredData.value.length / rowsPerPage.value);
  });




return {
data,
searchQuery ,
rowsPerPage,
currentPage ,
dropOption,
isLoading,
noResults,

prevPage,
changevaluestate,
nextPage,
paginatedData,

}

});