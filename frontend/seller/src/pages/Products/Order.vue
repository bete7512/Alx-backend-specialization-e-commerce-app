<template>
  <div class="overflow-x-scroll">
    <table
      class="w-full pt-2 text-sm text-left text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th class="py-3 px-2">Product name</th>
          <th class="py-3 px-2">Customer name</th>
          <th class="py-3 px-2">Price</th>
          <th class="py-3 px-2">Order Date</th>
          <th class="py-3 px-2">Quantity</th>
          <th class="py-3 px-2">Country</th>
          <th class="py-3 px-2">City</th>
          <th class="py-3 px-2">Zip Code</th>
          <th class="py-3 px-2">Order Status</th>
          <th class="py-3 px-2">Actions</th>
        </tr>
      </thead>
      <tbody class="px-2">
        <tr v-if="error">
          {{
            error
          }}
        </tr>
        <tr v-if="loading">
          {{
            loading
          }}
        </tr>
        <tr
          v-else
          v-for="order in result?.order"
          :key="order.id"
          class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
        >
          <td class="py-3 px-2">{{ order.product?.product_name }}</td>
          <td class="py-3 px-2">
            {{ order.customer?.first_name }} {{ order.customer?.last_name }}
          </td>
          <td class="py-3 px-2">{{ order.product?.price }}</td>
          <td class="py-3 px-2">{{ order.created_at.split("T")[0] }}</td>
          <td class="py-3 px-2">{{ order?.quantity }}</td>
          <td class="py-3 px-2">{{ order?.order_address?.Country }}</td>
          <td class="py-3 px-2">{{ order?.order_address?.City }}</td>
          <td class="py-3 px-2">{{ order?.order_address?.Zip_code }}</td>
          <td class="py-3 px-2">
            {{ order.status ? "Delivered" : "Not Delivered Yet" }}
          </td>
          <td class="py-3 px-2">
            <div class="flex space-x-2">
              <button v-if="order.status" @click="update_status(order.id,order.status)">
                <font-awesome-icon
                  :icon="['fas', 'toggle-on']"
                  style="color: #44d70f"
                  size="xl"
                />
              </button>
              <button v-else @click="update_status(order.id,order.status)">
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
</template>
<script setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ref, reactive } from "vue";
import { notify } from "@kyvg/vue3-notification"               
import apolloclient from "../../apollo.config";
const { error, loading, result,refetch } = useQuery(gql`
  query MyQuery {
    order {
      id
      created_at
      customer {
        email
        last_name
        first_name
        address
      }
      status
      product {
        price
        product_name
        about_product
        average_rate
        average_rates
        product_description
        quantity
      }
      order_address {
        City
        Country
        Zip_code
      }
      quantity
      reference_id
    }
  }
`);

const update_status = async (id, status) => {
  try {
    let response = await apolloclient.mutate({
      mutation: gql`
        mutation MyMutation($id: uuid = "", $status: Boolean = false) {
          update_order_by_pk(
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
    if (response.data.update_order_by_pk.id) {
      notify({
        type: "success",
        text: "Order Status Updated Successfully",
      });
      refetch(); 
    }
    refetch(); 
  } catch (error) {}
};
</script>
<style lang=""></style>
