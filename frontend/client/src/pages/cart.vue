<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="loading">{{ loading }}</div>
    <div v-else class="lg:flex lg:flex-wrap block justify-center space-x-2">
      <div
        class="pt-5 px-4 flex justify-center"
        v-for="product in products"
      >
        <Product :product="product.cart"  v-on:detail="handle_detail"></Product>
      </div>
    </div>
    <div class="flex justify-end mr-2 mt-1 pb-5">
      <div class="inline-flex space-x-1">
        <button
          @click="prev_page()"
          class="bg-[#EF4104] hover:bg-[#a02f05] text-white font-bold py-2 px-4 rounded-l"
        >
          Prev
        </button>
        <button
          class="bg-[#EF4104] hover:bg-[#a02f05] text-white font-bold py-2 px-4 rounded-l"
        >
          1
        </button>
        <button
          class="bg-[#EF4104] hover:bg-[#a02f05] text-white font-bold py-2 px-4 rounded-l"
        >
          2
        </button>
        <button
          @click="next_page()"
          class="bg-[#EF4104] hover:bg-[#a02f05] text-white font-bold py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  <product_detail v-if="is_product_detail" :id="product_id" v-on:close="is_product_detail=false"></product_detail>
  
  </template>
  
  <script setup>
  import { defineProps, reactive, ref, onMounted, watchEffect,computed } from "vue";
  import { useQuery } from "@vue/apollo-composable";
  import Product from "../components/cards/Product.vue";
  import { CART_QUERY } from "../constants/query";
  import { ProductStore } from "../stores/product_store";
  import product_detail from "../components/cards/product_detail.vue";
  const offset = ref(0);
  const limit = ref(5);
  const { error, loading, result, refetch } = useQuery(CART_QUERY,
  {
      offset: offset.value,
      limit: limit.value,
    }
  );
  const products = computed(() => result.value?.favorite ?? []);
  const product = ProductStore();
  // onMounted(async ()=>{
  //   await product.getProducts()
  // })
  const product_id = ref('')
  const is_product_detail = ref(false)
  const handle_detail = (id) => {
    console.log("ghhhhhhhhhhhhhhhhhhhhhhhhhh",id);
    product_id.value = id;
    is_product_detail.value = true;
  }
  const prev_page = () => {
    if (offset.value <= 0) return;
    offset.value -= limit.value;
    refetch({
      offset: offset.value,
      limit: limit.value,
    });
  };
  const next_page = () => {
    if (offset.value >= 100) return;
    offset.value += limit.value;
    refetch({
      offset: offset.value,
      limit: limit.value,
    });
  };
  
  // watchEffect(()=>{
  //   product.category ? result.value?.products.filter((p)=>p.category.name == product.category) : result.value?.products
  // })
  
  // watchEffect(() => {
  //   product.search ? refetch({
  //     search: product.search ? `%${product.search}%` : "%%",
  //   }) : refetch({
  //     offset: offset.value,
  //     limit: limit.value,
  //   })
  // });
  
  
  // watchEffect(()=>{
  //   products.value.filter((p)=>p.category.name == product.category)
  // })
  </script>
  
  <style></style>
  