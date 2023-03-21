<template>
  <div v-if="error">{{error}}</div>
  <div v-if="loading">{{ loading }}</div>
  <div v-else class="lg:flex lg:flex-wrap  block justify-center space-x-2">
    {{ result  }}
    <div class="pt-5 px-4 flex justify-center" v-for="p in 7">
      <Product ></Product>
    </div>
  </div>
</template>

<script setup>
import { defineProps, reactive, ref } from "vue";
import { useQuery } from '@vue/apollo-composable'
import Product from "../components/cards/Product.vue";
import { GET_ALL_PRODUCTS } from "../constants/query"

const {error,loading,result} = useQuery(GET_ALL_PRODUCTS)
</script>

<style></style>
