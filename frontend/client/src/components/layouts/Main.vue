<template>
    <div class=" flex justify-center items-center">
        <div class="container">
           <Nav class="lg:block hidden"></Nav>
           <Mobile class="block sm:hidden"></Mobile>
           <div class="bg-[#dae0ff]">
    
               <slot></slot>
           </div>
        </div>
    </div>
    <Footer></Footer>
</template>
<script setup>
import Footer from './Footer.vue'
import Nav from './nav/Nav.vue';
import Mobile from './nav/Mnav.vue';
</script>
<style>
    
</style>
