<template>
  <div class="overflow-x-scroll">
    <table
      class="w-full pt-2 text-sm text-left text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th class="py-3 px-2">First Name</th>
          <th class="py-3 px-2">Last Name</th>
          <th class="py-3 px-2">Phone</th>
          <th class="py-3 px-2">Total Product</th>
          <th class="py-3 px-2">Registered At</th>
          <th class="py-3 px-2">Action</th>
        </tr>
      </thead>
      <tbody class="px-2">
        <tr v-if="error">
          {{
            error
          }}
        </tr>
        <tr v-if="loading">
          Loading
        </tr>
        <tr
          v-else
          v-for="user in users"
          :key="user.id"
          class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
        >
          <td class="py-3 px-2">{{ user.first_name }}</td>
          <td class="py-3 px-2">{{ user.last_name }}</td>
          <td class="py-3 px-2">{{ user.phone }}</td>
          <td class="py-3 px-2">
            {{ user.products_aggregate.aggregate?.count || 0 }}
          </td>
          <td class="py-3 px-2">{{ user.created_at.split("T")[0] }}</td>
          <td class="py-3 px-2">
            <div class="flex space-x-2">
              <button
                v-if="user.status"
                @click="update_status(user.id, user.status)"
              >
                <font-awesome-icon
                  :icon="['fas', 'toggle-on']"
                  style="color: #44d70f"
                  size="xl"
                />
              </button>
              <button v-else @click="update_status(user.id, user.status)">
                <font-awesome-icon
                  :icon="['fas', 'toggle-off']"
                  size="xl"
                  style="color: #b71010"
                />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="overflow-hidden h-screen"></div>
  <!-- <Delete v-if="isDelete" v-on:canceldelete="isDelete = false" :id="id_param" v-on:deletenotify="isDelete = false"></Delete> -->
</template>
<script setup>
import { useQuery } from "@vue/apollo-composable";
import { ProductStore } from "../stores/ProductStores";
import gql from "graphql-tag";
import Delete from "./Products/Delete.vue";
import { PRODUCT_QUERY } from "../Constants/Query/query";
import { ref, computed } from "vue";
import { notify } from "@kyvg/vue3-notification";
import apolloclient from "../apollo.config";
const { error, result, loading,refetch } = useQuery(gql`
  query MyQuery($_eq: String = "sellers") {
    users(where: { role: { name: { _eq: $_eq } } }) {
      phone
      id
      products_aggregate {
        aggregate {
          count(distinct: false)
        }
      }
      first_name
      last_name
      status
      created_at
    }
  }
`);
const isDelete = ref(false);
const products = ProductStore();
const users = computed(() => result.value?.users ?? []);
const id_param = ref(0);
const edit_product = () => {};
const delete_product = (id) => {
  id_param.value = id;
  isDelete.value = true;
};
const detail_product = ref(false);

const view_product = (id) => {
  id_param.value = id;
  detail_product.value = true;
};

const update_status = async (id, status) => {
  try {
    let response = await apolloclient.mutate({
      mutation: gql`
      mutation MyMutation($id: uuid = "", $status: Boolean = false) {
          update_users_by_pk(
            pk_columns: { id: $id }
            _set: { status: $status }
          ) {
            id
          }
        }
      `,
      variables: {
        id: id,
        status: !status,
      },
    });
    if (response.data.update_users_by_pk.id) {
      notify({
        type: "success",
        text: "Seller Status Updated Successfully",
      });
      refetch();
    }
    refetch();
  } catch (error) {}
};
const modal = ref(false);
</script>

<style></style>
