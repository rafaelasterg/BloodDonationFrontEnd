<template>
    <main>
        <nav class="container bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <router-link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="C:\Users\Rafaela\Pictures\Saved Pictures\licensed-image.jfif" class="h-8" alt="blood" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BloodDonation</span>
      </router-link>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <!-- Purple login button -->
        <button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Login</button>
        <!-- Purple sign-in button -->
        <button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Sign In</button>
        <!-- Hamburger menu button -->
        <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <!-- Navigation links -->
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <router-link to="/home" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</router-link>
          </li>
          <li>
            <router-link to="/requests" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Requests</router-link>
          </li>
          <li>
            <router-link to="/appointment/new" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Appointments</router-link>
          </li>
          <li>
            <router-link to="/about" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</router-link>
          </li>
          <li class="message-icon">
            <router-link to="/messages" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
              Messages
              <span class="badge">1</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
        <Navbar />
        <div class="my-5">
            <div class="mx-auto w-25" style="max-width:100%;">
                <h2 class="text-center mb-3">Add Donator</h2>
                <form @submit.prevent="addDonator">
                    <!-- Appointment Date -->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="appointmentDate" class="form-label">Appointment Date</label>
                            <input id="appointmentDate" type="text" name="appointmentDate" class="form-control" placeholder="Appointment Date" required v-model="donator.appointmentDate">
                        </div>
                    </div>

                    <!-- Living Area -->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="living_area" class="form-label">Living Area</label>
                            <input id="living_area" type="text" name="living_area" class="form-control" placeholder="Living Area" required v-model="donator.living_area">
                        </div>
                    </div>

                    <!-- Blood Type -->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="blood_type" class="form-label">Blood Type</label>
                            <input id="blood_type" type="text" name="blood_type" class="form-control" placeholder="Blood Type" required v-model="donator.blood_type">
                        </div>
                    </div>

                    <!-- Last Blood Test -->
                    <div class="row">
                        <div class="col-md-12 form-group mb-3">
                            <label for="last_blood_test" class="form-label">Last Blood Test</label>
                            <input id="last_blood_test" type="text" name="last_blood_test" class="form-control" placeholder="Last Blood Test" required v-model="donator.last_blood_test">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 form-group">
                            <input class="btn btn-primary w-100" type="submit" value="Submit">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
    name: 'AddDonator',
    components: {
        Navbar
    },

    data() {
        return {
            donator: {
                appointmentDate: '',
                living_area: '',
                blood_type: '',
                last_blood_test: ''
            }
        }
    },

    methods: {
        addDonator() {
            fetch('http://localhost:8080/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.donator)
            })
            .then(response => {
                if (response.ok) {
                    console.log("Donator added successfully");
                    this.$router.push("/");
                } else {
                    console.error("Failed to add donator");
                }
            })
            .catch(error => {
                console.error("Error:", error);
            });
        }
    },
};
</script>