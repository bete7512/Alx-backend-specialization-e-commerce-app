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
  <div
    class="overlay fixed mt-4 sm:w-1/2 mx-auto md:w-3/4 lg:w-1/2 bg-slate-400 px-10 sm:px-0 z-50 top-0 left-10 right-10 bottom-10 flex items-center justify-center"
  >
    <div
      class="space-y-4 h-full w-full overflow-y-scroll bg-white shadow-lg rounded-md"
    >
      <div class="flex justify-between items-center px-4 pt-3">
        <div></div>
        <button
          class="p-3 hover:bg-black hover:text-white rounded-lg"
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

      <div v-if="error">{{ error }}</div>
      <div
        v-if="loading"
        class="h-full flex justify-center items-center w-full"
      >
        <div class="flex justify-center h-full items-center">
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
      <div v-else class="mx-5 space-y-2">
        <div class="flex flex-wrap justify-between">
          <div class="sm:w-[45%] space-y-2">
            <div class="w-full">
              <img
                :src="result.products_by_pk.product_image.split(',')[0]"
                class="w-full"
              />
            </div>
            <div class="flex space-x-1">
              <div
                class="flex flex-wrap space-x-1"
                v-for="img in result.products_by_pk.product_image.split(',')"
              >
                <img :src="img" class="w-32 h-24" />
              </div>
            </div>
          </div>
          <div class="sm:w-1/2 flex text-left">
            <div class="space-y-3">
              <div
                class="font-bold capitalize text-center text-2xl flex items-center"
              >
                {{ result.products_by_pk.product_name }}
              </div>
              <div class="flex space-x-3">
                <StarRating
                  :rating="result.products_by_pk.average_rate"
                  :read-only="true"
                  :increment="0.005"
                  :star-size="24"
                ></StarRating>
                <div>
                  ({{
                    result.products_by_pk.product_reviews_aggregate.aggregate
                      .count
                  }})Reviews
                </div>
              </div>
              <div class="flex text-green-800 text-xl text-center">
                $ {{ result.products_by_pk.price }}
              </div>
              <div
                class="py-1 text-lg text-gray-800 flex justify-center items-center"
              >
                {{ result.products_by_pk.about_product }}
              </div>
         
           
            </div>
          </div>
        </div>
        <div>
          <h1 class="font-bold">Product reviews</h1>
          <div
            class="py-2"
            v-for="comment in result?.products_by_pk?.product_reviews"
            :key="comment.id"
          >
            <div class="space-x-2">
              <div class="flex space-x-2 items-center">
                <div
                  class="w-12 h-12 bg-gray-500 rounded-full flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                    />
                  </svg>
                </div>
                <button class="text-orange-600 hover:underline">
                  {{
                    comment.customer?.first_name +
                    " " +
                    comment.customer?.last_name
                  }}
                </button>
              </div>
              <div class="font-bold pl-9">
                <div class="flex space-x-2">
                  <StarRating
                    class="justify-end"
                    :read-only="true"
                    v-model:rating="comment.rate"
                    :increment="0.05"
                    active-color="#d6612d"
                    :star-size="8"
                  ></StarRating>
                  <div>
                    {{ comment.created_at.split("T")[0] }}
                  </div>
                </div>
                <div class="">{{ comment.comment }}</div>
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
// import { PRODUCT_QUERY } from "../../Constants/Query/query";
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
        number_of_likes
        is_carted
        is_favorite
        is_liked
        category_id
        category {
          name
        }
        average_rates
        average_rate
        product_reviews {
          comment
          rate
          created_at
          customer {
            first_name
            last_name
          }
        }
        product_reviews_aggregate {
          aggregate {
            count(distinct: false)
          }
        }
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
