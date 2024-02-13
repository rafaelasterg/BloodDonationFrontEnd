import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
import { useApplicationStore } from '@/stores/application.js';

import BloodDonationHeader from "@/components/BloodDonationHeader.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
          path: '/',
          name: 'home',
          // component: HomeView,
          component: () => import('../views/Home.vue'),
      },
      {
          path: '/login',
          name: 'login',
          component: () => import('../views/Login.vue') ,// Assuming you have a view component for login
          meta: { requiresAuth: true },

      },
      {
          path: '/request',
          name: 'request',
          component: () => import('../views/Request.vue'), // Assuming you have a view component for requests
          meta: { requiresAuth: true },

          children: [
              {
                  path: '', // Matches `/request`
                  name: 'show-requests',
                  component: () => import('../views/ShowRequests.vue'), // Component to show requests
                  meta: { requiresAuth: true }

              },
              {
                  path: 'add', // Matches `/request/add`
                  name: 'add-request',
                  component: () => import('../views/AddRequest.vue'), // Component to add a new request
                  meta: { requiresAuth: true }

              },
              {
                  path: 'appointments/:requestId', // Matches `/request/appointments/{requestId}`
                  name: 'enroll-appointments',
                  meta: { requiresAuth: true },
                  component: () => import('../views/EnrollAppointments.vue') // Component to enroll appointments
              },
              {
                  path: 'appointment/:appointmentId', // Matches `/request/appointment/{appointmentId}`
                  name: 'get-appointment-requests',
                  meta: { requiresAuth: true },
                  component: () => import('../views/GetAppointmentRequests.vue') // Component to get appointment requests
              },
              {
                  path: 'messages', // Matches `/request/messages`
                  name: 'show-messages',
                  component: () => import('../views/ShowMessages.vue'), // Component to show messages
                  meta: { requiresAuth: true }

              }
          ]
      },
      {
          path: '/appointment',
          name: 'appointment',
          component: () => import('../views/Appointment.vue'), // Assuming you have a view component for appointments
          meta: { requiresAuth: true },
          children: [
              {
                  path: '', // Matches `/appointment`
                  name: 'show-appointments',
                  component: () => import('../views/ShowAppointments.vue') ,// Component to show appointments
                  meta: { requiresAuth: true },

              },
              {
                  path: 'add', // Matches `/appointment/add`
                  name: 'add-appointment',
                  component: () => import('../views/AddAppointment.vue'), // Component to add a new appointment
                  meta: { requiresAuth: true }

              }
          ]
      }







      ]
});

//         path: '/donators',
//         name: 'donators',
//         component: () => import('../views/DonatorsView.vue'),
//         meta: { requiresAuth: true }
//     },
//     {
//         path: '/requests/new',
//         name: 'requests-new',
//         component: () => import('../views/CreateRequestView.vue'),
//         meta: { requiresAuth: true },
//         children: [
//             {
//                 path: '',
//                 name: 'student-details',
//                 component: () => import('../views/RequestDetailsView.vue'),
//                 meta: { requiresAuth: true }
//             }]}
//     );

router.beforeEach((to, from, next) => {
    const { isAuthenticated } = useApplicationStore();
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

    if (requiresAuth && !isAuthenticated) {
        console.log('user not authenticated. redirecting to /login');
        next('/login');
    } else {
        next();
    }
});

export default router;