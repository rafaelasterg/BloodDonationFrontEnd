<script setup>
import { onBeforeMount } from 'vue';
import { RouterView } from 'vue-router';
import { useApplicationStore } from '@/stores/application.js';
import BloodDonationHeader from '@/components/BloodDonationHeader.vue';

const { loadUserData } = useApplicationStore();

onBeforeMount(() => {
  // If this method is non-blocking, add a loader.
  loadUserData();
});

</script>
<template>
  <div class="container">
    <BloodDonationHeader />
    <RouterView />
  </div>
</template>




<style>
/* Add global styling for your application here */
body {
  font-family: 'Arial', sans-serif;
}
</style>