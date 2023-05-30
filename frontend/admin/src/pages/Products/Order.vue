<template>
     <div class="overflow-x-scroll">

        <table class="w-full pt-2 text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th class="py-3 px-2">Product name</th>
                    <th class="py-3 px-2">Customer name</th>
                    <th class="py-3 px-2">Price</th>
                    <th class="py-3 px-2">Order Date</th>
                    <th class="py-3 px-2">Order Status</th>
                    <th class="py-3 px-2">Actions</th>
                </tr>
            </thead>
            <tbody class="px-2">
                <tr v-if="error">{{ error }}</tr>
                <tr v-if="loading">{{ loading }}</tr>
                <tr v-else v-for="order in result?.order" :key="order.id"
                    class=" bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <td class="py-3 px-2">{{ order.product?.product_name }}</td>
                    <td class="py-3 px-2">{{ order.customer?.first_name }} {{ order.customer?.last_name }}</td>
                    <td class="py-3 px-2">{{ order.product?.price }}</td>
                    <td class="py-3 px-2">{{ order.created_at.split('T')[0] }}</td>
                    <td class="py-3 px-2">{{ order.status ? 'Delivered' : 'Not Delivered Yet' }}</td>
                    <td class="py-3 px-2">
                        <div class="flex space-x-2">
                            <button @click="view_product(order.id)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-eye" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path
                                        d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                            </button>
                            <button @click="edit_product">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green"
                                    class="bi bi-pencil" viewBox="0 0 16 16">
                                    <path
                                        d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                </svg>
                            </button>
                            <button @click="delete_product(order.id)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red"
                                    class="bi bi-trash" viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg>
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
const { error, loading, result } = useQuery(gql`
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
      }
    }
  }
`);
</script>
<style lang=""></style>
