<script setup>
import NavbarBody from '../assets/components/dash/header.vue';
import {useTable} from '../screens/statemanagement/table.js';
import { storeToRefs } from 'pinia';

const useTableState = useTable();
const {
    data,
    searchQuery ,
rowsPerPage,
currentPage ,
dropOption,
isLoading,
paginatedData,
noResults,
} = storeToRefs(useTableState);


const {
prevPage,
changevaluestate,
} = useTableState;

</script>

<template>
    <div>
        <NavbarBody/>
        <div class="dash-main">
            <div class="dash-header">
              <h1>Hey Yakubu</h1>
            </div>

            <div class="row gy-1 gx-1">
                <div class="col-lg-4 col-md-4 col-12">
                    <div class="dash-card">

                        <div class="dash-icons-flex mb-3">
                           <div class="bash-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M3.955 4.061C3 5.375 3 7.251 3 11v2c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22s5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.625 21 16.749 21 13v-2c0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 2 15.749 2 12 2s-5.625 0-6.939.955A5 5 0 0 0 3.955 4.06M7 8.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zm5.586 5.219a.75.75 0 0 0-1.172-.937l-2 2.5A.75.75 0 0 0 10 16.25h2.44l-1.026 1.282a.75.75 0 1 0 1.172.936l2-2.5A.75.75 0 0 0 14 14.75h-2.44z" clip-rule="evenodd"/></svg>
                          </div>
                        </div>

                        <div class="dashhead-card mb-2">
                            <span>Total Revenue</span>
                        </div>
                        <div class="dashhead-value">
                            <span class="bash-f1">120,000</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-12">
                    <div class="dash-card">

                        <div class="dash-icons-flex mb-3">
                           <div class="bash-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M3.955 4.061C3 5.375 3 7.251 3 11v2c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22s5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.625 21 16.749 21 13v-2c0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 2 15.749 2 12 2s-5.625 0-6.939.955A5 5 0 0 0 3.955 4.06M7 8.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zm5.586 5.219a.75.75 0 0 0-1.172-.937l-2 2.5A.75.75 0 0 0 10 16.25h2.44l-1.026 1.282a.75.75 0 1 0 1.172.936l2-2.5A.75.75 0 0 0 14 14.75h-2.44z" clip-rule="evenodd"/></svg>
                          </div>
                        </div>

                        <div class="dashhead-card mb-2">
                            <span>Total Users</span>
                        </div>
                        <div class="dashhead-value">
                            <span class="bash-f1">120,000</span>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-4 col-12">
                    <div class="dash-card">

                        <div class="dash-icons-flex mb-3">
                           <div class="bash-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M3.955 4.061C3 5.375 3 7.251 3 11v2c0 3.75 0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 22 8.251 22 12 22s5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 18.625 21 16.749 21 13v-2c0-3.75 0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 2 15.749 2 12 2s-5.625 0-6.939.955A5 5 0 0 0 3.955 4.06M7 8.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5zm5.586 5.219a.75.75 0 0 0-1.172-.937l-2 2.5A.75.75 0 0 0 10 16.25h2.44l-1.026 1.282a.75.75 0 1 0 1.172.936l2-2.5A.75.75 0 0 0 14 14.75h-2.44z" clip-rule="evenodd"/></svg>
                          </div>
                        </div>

                        <div class="dashhead-card mb-2">
                            <span>Paid</span>
                        </div>
                        <div class="dashhead-value">
                            <span class="bash-f1">120,000</span>
                        </div>
                    </div>
                </div>


            </div>

            <div class="d-flex justify-content-between px-6">
                <div class="d-flex">
                    <div class="form-input">
                        <input type="text" class="form-control py-2" v-model="searchQuery"  placeholder="Search...">
                    </div>
                </div>
       
                <div class="d-flex gap-4">
                    <div class="form-input">
                        <select v-model="rowsPerPage"  class="form-select py-2" @change="changevaluestate" >
                            <option v-for="option in dropOption" :key="option" :value="option">{{ option }}</option>
                        </select>
                    </div>
                    <div class="meal-form-button">
                        <button @click="ShowCenterModel(item)" class="togglebutton btn bg-button-submit py-3 text-sm">Message</button>
                    </div>
                </div>
            </div>

            <!-- table -->
      

            <div class="table-responsive text-nowrap">
                <table class="table">
                 <thead>
                    <tr>
                    <th>Category Name</th>
                    <th>Category Item</th>
                    <th>Status</th>
                    <th>Action </th>
                    </tr>
                </thead>
                <tbody>


                    <tr v-if="noResults" class="text-center">
                      <td colspan="9 fw-bold">No Registered Category Found</td>
                    </tr>
                    <tr v-for="(item, index) in paginatedData" :key="index.id">
                     <td v-if="noResults">No data found  </td>
                      <td>  <span class="fw-medium">{{item.fullname}}</span></td>
                      <td>  <span class="fw-medium">{{item.contact}}</span></td>
                      <td>  <span class="fw-medium">{{item.email}}</span></td>
                      <td>  <span class="fw-medium">{{item.members == 0 ? 'No' : item.members}} Member(s)</span></td>
                      <td>  <span class="fw-medium">{{item.reg_date}}</span></td>

                      <td>  <span :class="{
                        'bg-rx-success rounded-md p-2 bg-success-text' : item.paid == '1',
                        'bg-rx-pending rounded-md p-2': item.paid  == '0'
                      }">{{item.paid == "1" ? "Paid" : "Unpaid"}}</span></td>

                    <!-- :class="{
                        'position-absolute bg-rx-success rounded-md p-2 shift-call': item.cartstatus == 'Delivered',
                        'position-absolute bg-rx-pending text-main rounded-md p-2 shift-call opacity-4': item.cartstatus == 'pending',
                        'position-absolute bg-rx-warning rounded-md p-2 shift-call': item.cartstatus == 'returns',
                        'position-absolute bg-rx-returns rounded-md p-2 shift-call': item.cartstatus == 'cancelled', --> -->

                      <td>
                        <a @click="DeleteModalButton(item)" class="cursor-pointer"><i class="fa-solid fa-ellipsis"></i></a>
                      </td>
              </tr>
       </tbody>
    </table>
</div>



        </div>
    </div>
</template>