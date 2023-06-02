<template>
  <div>
    <div
      class="overlay px-10 sm:px-0 sm:py-4 py-2 z-50 top-0 left-10 right-10 bottom-10  flex items-center justify-center"
    >
      <div
        class="space-y-4 auto w-full h-full sm:w-1/2 md:w-3/4 lg:w-1/2 bg-white rounded-md"
      >
        <div class="flex justify-between items-center px-4 pt-3">
          <div></div>
          <button
            class="p-3 hover:bg-red-800 rounded-lg"
            @click="() => emits('close')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>

        <div v-if="error">error in fetching products</div>
        <div v-if="loading">loading Please Wait</div>
        <div v-else class="flex justify-center items-center">
          <!-- <div class="inline-flex"> -->
          <div>
            <div
              class="font-bold text-lg italic underline flex justify-center items-center"
            >
              {{ result.products_by_pk.product_name }}
            </div>
            <div class="py-3 italic flex justify-center items-center">
              {{ result.products_by_pk.about_product }}
            </div>
            <!-- <div classs="flex justify-center items-center">
                            <div class="font-bold italic flex justify-center items-center">Category</div>
                            <div class="italic px-20">{{ result.products_by_pk.category.name }}</div>
                        </div> -->

            <div class="">
              <div class="font-bold">price</div>
              <div>{{ result.products_by_pk.price }}</div>
              <div class="flex">
                <div
                  class="flex flex-wrap space-x-2"
                  v-for="img in result.products_by_pk.product_image.split(',')"
                >
                  <img :src="img" class="w-20 h-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useQuery } from "@vue/apollo-composable";
import { ProductStore } from "../../stores/ProductStores";
import gql from "graphql-tag";
import { defineProps, defineEmits } from "vue";
import { PRODUCT_QUERY } from "../../Constants/Query/query";
import { ref, computed } from "vue";
const props = defineProps({
  id: Number,
});
const emits = defineEmits(["close"]);
const { error, loading, result } = useQuery(
  gql`
    query MyQuery($id: uuid = "") {
      products_by_pk(id: $id) {
        about_product
        created_at
        id
        price
        product_description
        product_image
        product_name
        updated_at
      }
    }
  `,
  () => ({
    id: props.id,
  }),
 );
const products = ProductStore();
</script>
<style></style>
