<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="loading">
    <div class="flex justify-center h-screen items-center">
      <div class="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="96"
          viewBox="0 0 24 24"
        >
          <g>
            <circle cx="12" cy="3" r="1" fill="currentColor">
              <animate
                id="svgSpinners12DotsScaleRotate0"
                attributeName="r"
                begin="0;svgSpinners12DotsScaleRotate2.end-0.5s"
                calcMode="spline"
                dur="0.6s"
                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                values="1;2;1"
              />
            </circle>
            <circle cx="16.5" cy="4.21" r="1" fill="currentColor">
              <animate
                id="svgSpinners12DotsScaleRotate1"
                attributeName="r"
                begin="svgSpinners12DotsScaleRotate0.begin+0.1s"
                calcMode="spline"
                dur="0.6s"
                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                values="1;2;1"
              />
            </circle>
            <circle cx="7.5" cy="4.21" r="1" fill="currentColor">
              <animate
                id="svgSpinners12DotsScaleRotate2"
                attributeName="r"
                begin="svgSpinners12DotsScaleRotate4.begin+0.1s"
                calcMode="spline"
                dur="0.6s"
                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                values="1;2;1"
              />
            </circle>
            <circle cx="19.79" cy="7.5" r="1" fill="currentColor">
              <animate
                id="svgSpinners12DotsScaleRotate3"
                attributeName="r"
                begin="svgSpinners12DotsScaleRotate1.begin+0.1s"
                calcMode="spline"
                dur="0.6s"
                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                values="1;2;1"
              />
            </circle>
            <circle cx="4.21" cy="7.5" r="1" fill="currentColor">
              <animate
                id="svgSpinners12DotsScaleRotate4"
                attributeName="r"
                begin="svgSpinners12DotsScaleRotate6.begin+0.1s"
                calcMode="spline"
                dur="0.6s"
                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                values="1;2;1"
              />
            </circle>
            <circle cx="21" cy="12" r="1" fill="currentColor">
              <animate
                id="svgSpinners12DotsScaleRotate5"
                attributeName="r"
                begin="svgSpinners12DotsScaleRotate3.begin+0.1s"
                calcMode="spline"
                dur="0.6s"
                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                values="1;2;1"
              />
            </circle>
            <circle cx="3" cy="12" r="1" fill="currentColor">
              <animate
                id="svgSpinners12DotsScaleRotate6"
                attributeName="r"
                begin="svgSpinners12DotsScaleRotate8.begin+0.1s"
                calcMode="spline"
                dur="0.6s"
                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                values="1;2;1"
              />
            </circle>
            <circle cx="19.79" cy="16.5" r="1" fill="currentColor">
              <animate
                id="svgSpinners12DotsScaleRotate7"
                attributeName="r"
                begin="svgSpinners12DotsScaleRotate5.begin+0.1s"
                calcMode="spline"
                dur="0.6s"
                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                values="1;2;1"
              />
            </circle>
            <circle cx="4.21" cy="16.5" r="1" fill="currentColor">
              <animate
                id="svgSpinners12DotsScaleRotate8"
                attributeName="r"
                begin="svgSpinners12DotsScaleRotatea.begin+0.1s"
                calcMode="spline"
                dur="0.6s"
                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                values="1;2;1"
              />
            </circle>
            <circle cx="16.5" cy="19.79" r="1" fill="currentColor">
              <animate
                id="svgSpinners12DotsScaleRotate9"
                attributeName="r"
                begin="svgSpinners12DotsScaleRotate7.begin+0.1s"
                calcMode="spline"
                dur="0.6s"
                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                values="1;2;1"
              />
            </circle>
            <circle cx="7.5" cy="19.79" r="1" fill="currentColor">
              <animate
                id="svgSpinners12DotsScaleRotatea"
                attributeName="r"
                begin="svgSpinners12DotsScaleRotateb.begin+0.1s"
                calcMode="spline"
                dur="0.6s"
                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                values="1;2;1"
              />
            </circle>
            <circle cx="12" cy="21" r="1" fill="currentColor">
              <animate
                id="svgSpinners12DotsScaleRotateb"
                attributeName="r"
                begin="svgSpinners12DotsScaleRotate9.begin+0.1s"
                calcMode="spline"
                dur="0.6s"
                keySplines=".27,.42,.37,.99;.53,0,.61,.73"
                values="1;2;1"
              />
            </circle>
            <animateTransform
              attributeName="transform"
              dur="6s"
              repeatCount="indefinite"
              type="rotate"
              values="360 12 12;0 12 12"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
  <div
    v-else
    class="mt-16 container grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 justify-center space-x-2"
  >
    <div
      class="pt-5 relative px-4 flex justify-center"
      v-for="product in products"
    >
      <div class="shadow-black bg-white p-8 rounded-lg">
        <Product
          :product="product.product"
          v-on:detail="handle_detail"
        ></Product>
        <!-- <div class="-mt-12 ml-2 absolute">
          <button
            v-if="!product.product.is_ordered"
            @click="add_order(product.product.id)"
            class="bg-blue-700 text-center rounded-lg hover:bg-[#a02f05] text-white font-bold py-2 px-4"
          >
            Order
          </button>
          <button
            v-else
            class="bg-green-500 capitalize rounded-lg text-center text-white font-bold py-2 px-4"
          >
            ordered
          </button>
        </div> -->
      </div>
    </div>
  </div>
  <div class="flex justify-end mr-2 mt-4 pb-5">
    <div class="inline-flex space-x-1">
      <button
        @click="prev_page()"
        class="text-gray-700 font-bold py-2 px-4 rounded-l"
      >
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
      </button>

      <button
        @click="next_page()"
        class="text-gray-700 font-bold py-2 px-4 rounded-r"
      >
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </button>
    </div>
  </div>
  <product_detail
    v-if="is_product_detail"
    :id="product_id"
    v-on:close="is_product_detail = false"
  ></product_detail>
</template>

<script setup>
import {
  defineProps,
  reactive,
  ref,
  onMounted,
  watchEffect,
  computed,
} from "vue";
import { useQuery } from "@vue/apollo-composable";
import Product from "../components/cards/Product.vue";
import { CART_QUERY } from "../constants/query";
import { ProductStore } from "../stores/product_store";
import product_detail from '../components/cards/product_detail.vue'
const offset = ref(0);
const limit = ref(8);
const { error, loading, result, refetch } = useQuery(CART_QUERY, {
  offset: offset.value,
  limit: limit.value,
});
const products = computed(() => result.value?.cart ?? []);
const product = ProductStore();
// onMounted(async ()=>{
//   await product.getProducts()
// })
const product_id = ref("");
const is_product_detail = ref(false);
const handle_detail = (id) => {
  product_id.value = id;
  is_product_detail.value = true;
};
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

const add_order = async (id) => {
  let res = await product.add_order(id);
  refetch({
    offset: offset.value,
    limit: limit.value,
  });
};
</script>

<style></style>
