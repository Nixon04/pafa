import { defineStore } from "pinia";
import {onMounted, ref} from 'vue';
import { usePage } from "@inertiajs/vue3";
import { Toaster, toast } from "@steveyuowo/vue-hot-toast";
import axios from "axios";

 
export const useList = defineStore('useList', () => {
    const {props} = usePage();

    const datacall = ref(props.data || []);
    const general = ref(props.general || '');
    const paid = ref(props.paid || '');
    const totalUsers = ref(props.totalUsers || '');


    console.log('Paid ', paid);


    const isVisible = ref(false);
    const isLoading = ref(false);
    const viewlists = ref([]);





    const viewListData = async (item) => {

       const  payload = {
            'itemvalue' : item,
        }
        isVisible.value = true;
        try{
       const response = await axios.post('/viewuserslists', payload);
       if(response.status == 200){
        viewlists.value = response.data.message;
        console.log('View List', viewlists);
        // toast.success('');
       }else{
        toast.error('Not successful, please contact developer');
        console.log('Not successful');
       } 
    }catch(e){
        console.log('error');
    }

    }

    const UnClickActive =  () => {
        isVisible.value = false;
    }

    return {
        viewListData,
        UnClickActive,
        isVisible,
        viewlists,
        datacall,
        general,
        paid,
        totalUsers,

    }


});


