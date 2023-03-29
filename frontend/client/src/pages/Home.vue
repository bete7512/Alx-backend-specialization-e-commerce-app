<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="loading">{{ loading }}</div>
  <div v-else class="lg:flex lg:flex-wrap block justify-center space-x-2">
  <div class="flex  items-center">
       <div>
        <div>
          <div class="flex relative justify-center items-center space-x-3">
            <div class="relative sm:w-96 md:96">
              <div
                class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                v-model="product.search"
                type="search"
                id="default-search"
                class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                placeholder="Search products"
                required
              />
              <button
                @click="searchProduct()"
                type="submit"
                class="text-white absolute right-0 bottom-0 top-0 bg-orange-600 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
            <div class="flex justify-center items-center text-black">
              <!-- <div>
                                Categories
                            </div> -->
              <div class="flex pl-2">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg> -->
                <select v-model="product.category" class="p-4" id="">
                  <option v-for="cat in product.categories" :value="cat.name">
                    <!-- <select  name="" id=""> -->
                      <option :value="cat.name">{{ cat.name }}</option>
                    <!-- </select> -->
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
    <div
      class="pt-5 px-4 flex justify-center"
      v-for="product in products"
    >
      <Product :product="product"  v-on:detail="handle_detail"></Product>
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
import { GET_ALL_PRODUCTS } from "../constants/query";
import { ProductStore } from "../stores/product_store";
import product_detail from "../components/cards/product_detail.vue";
const offset = ref(0);
const limit = ref(5);
const { error, loading, result, refetch } = useQuery(GET_ALL_PRODUCTS,
{
    offset: offset.value,
    limit: limit.value,
  }
);
const products = computed(() => result.value?.products ?? []);
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
