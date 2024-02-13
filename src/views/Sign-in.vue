
<script setup>
import { ref } from "vue";
import { useRemoteData } from "@/composables/useRemoteData.js";


const formDataRef = ref({
  "id": "",
  "appointmentDate": "",
  "living_area": "",
  "blood_type": "",
  "last_blood_test": ""
});

const urlRef = ref("http://localhost:8080/request");
const authRef = ref(true);
const methodRef = ref("POST");


const { data, performRequest } = useRemoteData(urlRef, authRef, methodRef, formDataRef);

const onSubmit = () => {
  performRequest();
};
</script>

<template>
 <div class="container mb-4">
    <h1>New Donator</h1>
  </div>
  <div>
    <pre>{{ data }}</pre>
  </div>
  <div class="container mb-4">
    <div class="mb-2">
      <label for="firstName">Your id:</label>
      <input class="form-control" id="firstName" v-model="formDataRef.firstName" type="text" />
    </div>
    <div class="mb-2">
      <label for="lastName">Appointment date:</label>
      <input class="form-control" id="lastName" v-model="formDataRef.lastName" type="text" />
    </div>
    <div class="mb-2">
      <label for="email">Living Area:</label>
      <input class="form-control" id="email" v-model="formDataRef.email" type="email" />
    </div>
    <div class="">
      <button class="btn btn-primary" @click="onSubmit" type="button">Be a donator</button>
    </div>
  </div>
</template>

<style scoped>

</style>