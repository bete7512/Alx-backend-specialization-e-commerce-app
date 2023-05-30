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
  <div v-else class="py-3 w-screen">
    <div class="w-screen h-[80vh]">
      <iframe
        src="https://my.spline.design/macbookprocopy-f38a7f36568bf41023e81dac29568951/"
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe>
    </div>

    <div class="justify-center mx-auto container">
      <div class="flex items-center justify-center mt-3">
        <div>
          <div>
            <div class="sm:flex sm:space-y-0 space-y-2 block  relative sm:justify-center justify-start items-center space-x-3">
              <div class="relative w-full sm:w-96 md:96">
                <input
                  v-model="search"
                  type="search"
                  id="default-search"
                  class="block outline-none p-4  text-sm text-gray-900 bg-gray-50 shadow-none bg-transparent  border-b border-gray-700 "
                  placeholder="What are you looking for ..."
                  required
                />
                <button
                  @click="searchProduct()"
                  type="submit"
                  class="text-white absolute flex items-center px-4 space-x-2 right-0 bottom-0 top-0 bg-black  font-medium rounded-lg text-sm py-2"
                >
                <div
                  class="flex  inset-y-0 left-0 items-center pointer-events-none"
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
                  <div class="capitalize">search</div>
                  <!-- <div class="relative"> -->
                  <!-- </div> -->
                </button>
              </div>

              <div class="flex justify-center items-center text-black">
                <div class="flex pl-2">
                  <select v-model="category" class="p-4" id="">
                    <option value="All">All</option>
                    <option
                      v-for="(cat, index) in product.categories"
                      :key="index"
                      :value="cat.name"
                    >
                      {{ cat.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 justify-center space-x-2"
      >
        <div
          class="pt-5 px-4 flex justify-center"
          v-for="product in products.filter((product) =>
            category == 'All' ? product : product.category.name == category
          )"
        >
          <Product
            v-on:refetch="
              refetch({
                offset: offset,
                limit: limit,
              })
            "
            :product="product"
            v-on:detail="handle_detail"
          ></Product>
        </div>
      </div>
      <div class="flex justify-end mr-2 mt-4 pb-5">
        <div class="inline-flex space-x-1">
          <button
            @click="prev_page()"
            class=" text-gray-700 font-bold py-2 px-4 rounded-l"
          >
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
          </button>
 

          <button
            @click="next_page()"
            class="text-gray-700  font-bold py-2 px-4 rounded-r"
          >
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </button>
        </div>
      </div>
    </div>
  </div>

  <product_detail
    v-if="is_product_detail"
    :id="product_id"
    v-on:close="is_product_detail = false"
    v-on:refetch="
              refetch({
                offset: offset,
                limit: limit,
              })"
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
import { GET_ALL_PRODUCTS } from "../constants/query";
import { ProductStore } from "../stores/product_store";
import product_detail from "../components/cards/product_detail.vue";
const offset = ref(0);
const limit = ref(8);
const { error, loading, result, refetch } = useQuery(GET_ALL_PRODUCTS, {
  offset: offset.value,
  limit: limit.value,
});
const products = computed(() => result.value?.products ?? []);
const product = ProductStore();
// onMounted(async ()=>{
//   await product.getProducts()
// })

const product_id = ref("");
const is_product_detail = ref(false);
const handle_detail = (id) => {
  console.log("ghhhhhhhhhhhhhhhhhhhhhhhhhh", id);
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

const search = ref("");
const category = ref("All");
watchEffect(() => {
  category.value
    ? result.value?.products.filter((p) => p.category.name == category.value)
    : result.value?.products;
});

const searchProduct = () => {
  refetch({
    search: search.value ? `%${search.value}%` : "%%",
  });
};
</script>

<style></style>
