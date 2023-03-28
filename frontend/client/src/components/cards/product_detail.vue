<template>
  <!-- <div> -->
  <div
    class="overlay  fixed px-10 sm:px-0 sm:py-4 py-2 z-50 top-0 left-10 right-10 bottom-10 flex items-center justify-center"
  >
    <div
      class="space-y-4 auto w-full h-full sm:w-1/2 md:w-3/4 lg:w-1/2 overflow-y-scroll bg-white rounded-md"
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

      <div v-if="error">{{ error }}</div>
      <div v-if="loading">loading</div>
      <div v-else class="flex justify-center items-center mx-5">
        <!-- <div class="inline-flex"> -->
        <div>
          <div
            class="font-bold text-center text-lg italic underline flex justify-center items-center"
          >
            {{ result.products_by_pk.product_name }}
          </div>
          <div class="flex justify-between">
            <StarRating
              :rating="result.products_by_pk.average_rate"
              :read-only="true"
              :increment="0.005"
              :star-size="16"
            ></StarRating>
            <div>
              <button
                v-if="!result.products_by_pk.is_carted"
                @click="addcomment"
                class="flex w-auto p-10 py-4 my-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                add to cart
              </button>
              <button
                v-else
                @click="addcomment"
                class="flex w-auto p-10 py-4 my-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                add to cart
              </button>
            </div>
          </div>
          <div
            class="py-1 text-sm font-extrabold italic flex justify-center items-center"
          >
            {{ result.products_by_pk.about_product }}
          </div>
          <div classs="flex justify-center items-center text-sm">
            <div class="font-bold italic flex justify-center items-center">
              Category
            </div>
            <div class="italic px-20">
              {{ result.products_by_pk.category.name }}
            </div>
          </div>
          <div class="">
            <div class="font-bold flex justify-center text-center">price</div>
            <div class="flex justify-center text-center">
              {{ result.products_by_pk.price }}
            </div>
          </div>
          <div class="flex justify-center items-center">
            <div class="flex">
              <div
                class="flex flex-wrap space-x-1"
                v-for="img in result.products_by_pk.product_image.split(',')"
              >
                <img :src="img" class="w-72 h-32" />
              </div>
            </div>
          </div>
          <div>
            <h1>Product reviews</h1>
            <div
              class="py-2"
              v-for="comment in result.products_by_pk.product_reviews"
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
                      (comment.customer.first_name, comment.customer.first_name)
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
                      {{ comment.created_at }}
                    </div>
                  </div>
                  <div class="">{{ comment.comment }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="shadow-black w-full">
            <h1>Give comment and rate</h1>
            <textarea
              name=""
              id=""
              cols="2"
              v-model="comment"
              rows="2"
              class="w-full border border-black rounded-lg"
            ></textarea>
            <StarRating
              v-model:rating="rate"
              :increment="0.5"
              active-color="#000000"
              :star-size="16"
            ></StarRating>
            <button
              @click="add_comment"
              class="flex w-auto p-10 py-4 my-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script setup>
import { useQuery, useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { defineProps, defineEmits } from "vue";
import { ProductStore } from "../../stores/product_store";
import StarRating from "vue-star-rating";
import { ref, computed } from "vue";
import { v4 as uuidv4 } from "uuid";
import router from "../../router";
const props = defineProps({
  id: String,
});

const product_id = ref(props.id);
console.log("am product ID", product_id.value);
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
      }
    }
  `,
  () => ({
    id: props.id,
  })
);

console.log(typeof props.id);
console.log(typeof product_id);
const comment = ref("");
const rate = ref(0);
// const { mutate} = useMutation(
//   gql`
//  `,
// ()=>({
//   product_id:props.id,
//   rate:rate.value,
//   comment:comment.value
// })
// );
const product = ProductStore();
const add_comment = async () => {
  if(comment.value == "" || comment.value == null){
    alert("comment is required")
    return
  }
  if (!localStorage.getItem("Apollotoken")) {
    emits("close");
    router.push("/login");
    location.reload();
  }
  let res = await product.add_comment(props.id, rate.value, comment.value);
  console.log(res);
};
</script>
<style></style>
