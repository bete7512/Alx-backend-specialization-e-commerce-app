<template>
  <div v-if="error">{{ error }}</div>
  <div v-else-if="loading">
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
    class="lg:flex mt-24 block justify-center w-screen mx-10 lg:space-x-2 lg:space-y-0 space-y-3 mb-4"
  >
    <div
      class="flex bg-white relative rounded-lg shadow-lg border py-6 border-gray-300 p-3 mx-2 justify-center"
    >
      <div></div>
      <div class="space-y-2 w-full px-4">
        <div class="w-full flex justify-center items-center">
          <img
            src="../assets/man.png"
            alt="technician.first_name"
            class="w-32 -m-px h-32 rounded-full object-cover bg-slate-200"
          />
        </div>
        <div class="space-y-2 w-full flex justify-center items-center">
          <div class="space-y-2 w-full">
            <div class="flex justify-between">
              <h1 class="font-bold text-2xl">
                {{ users?.first_name + " " + users?.last_name }}
              </h1>
            </div>

            <div class="flex w-full justify-between items-center">
              <div>
                <h1 class="text-black font-bold">
                  <span class="">Phone</span>
                </h1>
                <p class="space-x-2">
                  <span><font-awesome-icon :icon="['fas', 'phone']" /></span>
                  <span>
                    {{ users?.phone }}
                  </span>
                </p>
              </div>
              <div class="flex space-x-1 text-gray-700 items-center">
                <div>
                  <h1 class="text-black font-bold">Registration Date</h1>
                  <p>{{ users?.created_at.split("T")[0] }}</p>
                </div>
              </div>
            </div>
            <button
              @click="resetPassword = !resetPassword"
              class="px-2 py-2 bg-blue-900 text-stone-50 rounded-lg"
            >
              Reset Password
            </button>
            <div v-if="resetPassword" class="flex space-x-2">
              <div class="space-y-2">
                <input
                  class="w-full rounded-lg border outline-none p-1 text-black"
                  type="password"
                  placeholder="New Password"
                  v-model="password"
                />
                <input
                  class="w-full rounded-lg border outline-none p-1 text-black"
                  type="password"
                  placeholder="Confirm Password"
                  v-model="confirmPassword"
                />
                <button
                  @click="update_user_password"
                  class="px-2 py-1 bg-blue-900 text-stone-50 rounded-lg"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
        <h1 class=" ">Order History</h1>
        <div
    class="w-screen mt-20 flex justify-center items-center"
    v-if="orders.length == 0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      width="647.63626"
      height="632.17383"
      viewBox="0 0 647.63626 632.17383"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z"
        transform="translate(-276.18187 -133.91309)"
        fill="#f2f2f2"
      />
      <path
        d="M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z"
        transform="translate(-276.18187 -133.91309)"
        fill="#3f3d56"
      />
      <path
        d="M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z"
        transform="translate(-276.18187 -133.91309)"
        fill="#6c63ff"
      />
      <circle cx="190.15351" cy="24.95465" r="20" fill="#6c63ff" />
      <circle cx="190.15351" cy="24.95465" r="12.66462" fill="#fff" />
      <path
        d="M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z"
        transform="translate(-276.18187 -133.91309)"
        fill="#e6e6e6"
      />
      <path
        d="M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z"
        transform="translate(-276.18187 -133.91309)"
        fill="#3f3d56"
      />
      <path
        d="M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z"
        transform="translate(-276.18187 -133.91309)"
        fill="#6c63ff"
      />
      <circle cx="433.63626" cy="105.17383" r="20" fill="#6c63ff" />
      <circle cx="433.63626" cy="105.17383" r="12.18187" fill="#fff" />
    </svg>
  </div>
  
        <div
          class="w-full container grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 justify-center space-x-2"
        >
          <div
            class="pt-5 relative px-4 flex justify-center"
            v-for="order in orders"
            :key="order.id"
          >
            <div
              class="card justify-between h-full p-3 hover:border hover:shadow-xl hover:border-sky-800 duration-100 mt-2 hover:scale-100 sm:px-0 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <div class="relative">
                <img
                  class="rounded-t-lg"
                  :src="order.product.product_image.split(',')[0]"
                />
                <div class="absolute top-2 right-2">
                  <span
                    :class="[order.status ? 'bg-green-500' : 'bg-red-500']"
                    class="px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full"
                    >{{ order.status ? "Delivered" : "Pending" }}</span
                  >
                </div>
              </div>
              <div class="flex flex-grow"></div>
              <div class="p-5 h-[50%]">
                <div>
                  <h5
                    class="mb-2 hover:underline text-lg font-bold tracking-tight text-gray-900 dark:text-white"
                  >
                    <strong class="text-xl">{{
                      order.product.product_name
                    }}</strong>
                  </h5>
                </div>

                <div class="line-clamp-3">
                  {{ order.product.about_product }}
                </div>
                <div class="line-clamp-3">
                  <span class="text-lg font-bold"> Price: </span>
                  <span> {{ order.product.price }}$</span>
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
import { ref, computed, onMounted, watchEffect } from "vue";
import { notify } from "@kyvg/vue3-notification";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@vue/apollo-composable";
import { UserStore } from "../stores/user_store";
import apolloclient from "../apollo.config";
import { USER_PROFILE } from "../constants/query";
import * as bcrypt from 'bcryptjs'
const user = UserStore();
const adding_email = ref(false);
const email = ref("");
const user_id = ref(localStorage.getItem("client_id"));
console.log(localStorage.getItem("client_id"));
const { error, loading, result, refetch } = useQuery(USER_PROFILE, () => ({
  id: user_id.value,
}));
const resetPassword = ref(false);
const password = ref("");
const confirmPassword = ref("");
const users = computed(() => {
  if (result.value) {
    console.log(result.value);
    return result.value.customers[0];
  }
});
// const saltRounds = 10;
// const salt = bcrypt.genSaltSync(10);
var salt = bcrypt.genSaltSync(10);

const orders = computed(() => {
  if (result.value) {
    console.log(result.value);
    return result.value.order;
  }
});

async function update_user_password() {
  if (password.value !== confirmPassword.value || password.value === ""  ) {
    notify({
      type: "error",
      text: "Password does not match or empty",
    });
    return;
  }
  try {
    // alert(hashed)
    var hash = bcrypt.hashSync(confirmPassword.value, salt);
    const res = await apolloclient.mutate({
      mutation: gql`
        mutation MyMutation($id: uuid = "", $password: String = "") {
          update_users_by_pk(
            pk_columns: { id: $id }
            _set: { password: $password }
          ) {
            id
            password
          }
        }
      `,
      variables: {
        id: user_id.value,
        password: hash,
      },
    });
    console.log(res);
    notify({
      type: "success",
      text: "Password Updated",
    });
    resetPassword.value = false;
  } catch (error) {
    console.log(error);
    notify({
      type: "error",
      text: "Error",
    });
  }
}
</script>
<style></style>
