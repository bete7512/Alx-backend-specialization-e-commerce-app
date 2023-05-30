<template>
  <div class="fixed w-screen bg-white z-50">
    <div class="flex container  bg-red-400 mx-auto justify-center items-center z-50">
      <div class="flex justify-between container items-center text-black bg-[#ffffff] px-10 h-20">
        <router-link to="/" class="text-6xl font-bold ">Gulit</router-link>
  
        <div class="flex h-full justify-between items-center space-x-3">
          <div
            v-if="!userLoggedin"
            class="flex h-full justify-center items-center space-x-1"
          >
            <router-link
              to="/login"
              class="flex h-full justify-center items-center hover:bg-red-700 hover:text-white px-3 space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-box-arrow-in-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
    
            </router-link>
          </div>
  
          <div class="flex space-x-1 h-full justify-center items-center">
            <router-link
              to="/carts"
              class="text-lg h-full justify-center items-center hover:bg-red-900 hover:text-white px-4 flex space-x-2"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM7 17q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1.975q-.425 0-.7-.288T1 3q0-.425.288-.713T2 2h1.625q.275 0 .525.15t.375.425L5.2 4h14.75q.675 0 .925.5t-.025 1.05l-3.55 6.4q-.275.5-.725.775T15.55 13H8.1L7 15h11.025q.425 0 .7.288T19 16q0 .425-.288.713T18 17H7Z"/></svg>
            </router-link>
          </div>
          <div class="space-x-1 h-full">
            <router-link
              to="/favorite"
              class="text-lg h-full justify-center items-center hover:bg-red-900 hover:text-white px-4 flex space-x-2"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.388 2.25t-1.362 2.412q-.975 1.313-2.625 2.963T13.45 19.7L12 21Z"/></svg>
            </router-link>
          </div>
          <div class="relative" v-if="userLoggedin">
            <button
              @click="dropdownOpen = !dropdownOpen"
              class="relative z-10  w-12 h-12 flex justify-center items-center overflow-hidden rounded-full shadow focus:outline-none"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66zM9.78 12h4.44c1.21 0 2.14-1.06 1.98-2.26l-.32-2.45C15.57 5.39 13.92 4 12 4S8.43 5.39 8.12 7.29L7.8 9.74c-.16 1.2.77 2.26 1.98 2.26z"/></svg>
            </button>
            <div
              v-show="dropdownOpen"
              @click="dropdownOpen = false"
              class="fixed inset-0 z-10 w-full h-full"
            ></div>
  
            <transition
              enter-active-class="transition duration-150 ease-out transform"
              enter-from-class="scale-95 opacity-0"
              enter-to-class="scale-100 opacity-100"
              leave-active-class="transition duration-150 ease-in transform"
              leave-from-class="scale-100 opacity-100"
              leave-to-class="scale-95 opacity-0"
            >
              <div
                v-show="dropdownOpen"
                class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                  >Profile</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                  >Announcement</a
                >
  
                <button
                  @click="logout"
                  class="block px-4 py-2 w-full justify-start text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                >
                  Log out
                </button>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted,onBeforeMount } from "vue";
import router from "../../../router/index";
import { ProductStore } from "../../../stores/product_store";
import { UserStore } from "../../../stores/user_store";
const user = UserStore();
const product = ProductStore();
const userLoggedin = ref(false);
onBeforeMount(() => {
  if (localStorage.getItem("Apollotoken")) {
    user.userLoggedin = true;
    userLoggedin.value =  true
  }
});
onMounted(() => {
  product.getCategories();
  userLoggedin.value = user.userLoggedin;
});
const dropdownOpen = ref(false);
const logout = () => {
  localStorage.removeItem("Apollotoken");
  user.userLoggedin = false;
  router.push("/");
};
</script>
<style></style>
