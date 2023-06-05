<template>
  <div v-if="loading" class="h-screen flex justify-center items-center">
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
  <div v-else class="h-screen w-screen flex justify-center items-center mt-20">
    <div class="w-4/6 mx-auto">
      <h1 class="text-lg font-bold">Enter Details Of Your Address</h1>
      <div class="mb-4 w-full">
        <label for="country" class="block mb-1">Country:</label>
        <input
          type="text"
          v-model="Country"
          id="country"
          required
          class="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div class="mb-4 w-full">
        <label for="city" class="block mb-1">City:</label>
        <input
          type="text"
          v-model="City"
          id="city"
          required
          class="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div class="mb-4 w-full">
        <label for="zip_code" class="block mb-1">Zip Code:</label>
        <input
          type="text"
          v-model="Zip_code"
          id="zip_code"
          required
          class="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        @click="insert_order"
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script setup>
import gql from "graphql-tag";
import apolloclient from "../apollo.config";
import { useQuery, useMutation } from "@vue/apollo-composable";
import { reactive, ref, computed } from "vue";
import { ProductStore } from "../stores/product_store";
import { notify } from "@kyvg/vue3-notification";
const product = ProductStore();
const City = ref("");
const Country = ref("");
const Zip_code = ref("");
const processing = ref(false);
const INSERT_ADRESS = gql`
  mutation MyMutation(
    $City: String = ""
    $Country: String = ""
    $Zip_code: String = ""
  ) {
    insert_order_address_one(
      object: { City: $City, Country: $Country, Zip_code: $Zip_code }
    ) {
      id
    }
  }
`;
const loading = ref(false);
const customer_address = ref("");
async function insert_order() {
  loading.value = true;
  try {
    const response = await apolloclient.mutate({
      mutation: INSERT_ADRESS,
      variables: {
        City: City.value,
        Country: Country.value,
        Zip_code: Zip_code.value,
      },
    });
    console.log(response.data.insert_order_address_one.id);
    customer_address.value = response.data.insert_order_address_one.id;
    await product.add_order(customer_address.value);
    notify({
      type: "success",
      text: "Order added successfully",
      duration: 1000,
    });
  } catch (error) {
    console.log(error);
    notify({
      type: "error",
      text: "Error",
      duration: 1000,
    });
  }
//   loading.value = false;
}
</script>
<style></style>
