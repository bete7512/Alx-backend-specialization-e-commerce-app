import { defineStore } from "pinia";
import { provideApolloClient } from "@vue/apollo-composable";
import apolloclient from "../apollo.config";
import { CATEGORY, GET_ALL_PRODUCTS } from "../constants/query";
import router from "../router/index";
import gql from "graphql-tag";
import { notify } from "@kyvg/vue3-notification";        
provideApolloClient(apolloclient);
export const ProductStore = defineStore("products", {
  state: () => ({
    categories: [],
    category: "",
    products: [],
    search: "",
    quantity: 1,
    cart_id:'',
    product_id: ""
  }),
  actions: {
    async getCategories() {
      try {
        const response = await apolloclient.query({
          query: CATEGORY,
        });
        this.categories = response.data.category;
        console.log(this.categories);
      } catch (err) {
        console.log(err);
        return err.message;
      }
    },
    async getProducts() {
      try {
        const response = await apolloclient.query({
          query: GET_ALL_PRODUCTS,
          variables: {
            search: this.search ? `%${this.search}%` : "%%",
          },
        });
        this.products = response.data.products;
        console.log(response.data.products);
        console.log(this.products);
        return response.data.products;
      } catch (err) {
        console.log(err);
        return err.message;
      }
    },

    async add_to_cart(id) {
      if (!localStorage.getItem("ClientToken")) {
        router.push("/login");
        return;
      }
      try {
        const response = await apolloclient.mutate({
          mutation: INSERT_TO_CART,
          variables: {
            id: id,
          },
        });
        console.log(response);
        notify({ 
          type: "success",         
          text: "Product added to cart"         
        })
        return response;
      } catch (error) {
        console.log(error);
        notify({
          type: "error",        
          text: "Product already in cart"     
        })
        return error.message;
      }
    },
    async searchProduct() {
      await this.getProducts();
    },
    async add_to_favorite(id) {
      if (!localStorage.getItem("ClientToken")) {
        router.push("/login");
        return;
      }
      try {
        const response = await apolloclient.mutate({
          mutation: gql`
            mutation MyMutation($product_id: uuid = "") {
              insert_favorite_one(object: { product_id: $product_id }) {
                created_at
              }
            }
          `,
          variables: {
            product_id: id,
          },
        });
        console.log(response);
      notify({
        type: "success",       
        text: "Product added to favorite"    
      })
        return response;
      } catch (error) {
        console.log(error);
        notify({
          type: "error",      
          text: "Product already in favorite"        
        })
        return error.message;
      }
    },
    async remove_from_favorite(id) {
      if (!localStorage.getItem("ClientToken")) {
        router.push("/login");
        return;
      }
      try {
        const response = await apolloclient.mutate({
          mutation: gql`
            mutation MyMutation($id: uuid = "") {
              delete_favorite(where: { product_id: { _eq: $id } }) {
                affected_rows
              }
            }
          `,
          variables: {
            id: id,
          },
        });
        console.log(response);
        notify({
          type: "success",        
          text: "Product removed from favorite"      
        })
        return response;
      } catch (error) {
        console.log(error);
        notify({
          type: "error",      
          text: "Product already removed from favorite"           
        })
        return error.message;
      }
    },
    async remove_from_cart(id) {
      if (!localStorage.getItem("ClientToken")) {
        router.push("/login");
        return;
      }
      try {
        const response = await apolloclient.mutate({
          mutation: REMOVE_FROM_CART,
          variables: {
            id: id,
          },
        });
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
        return error.message;
      }
    },
    async add_to_like(id) {
      if (!localStorage.getItem("ClientToken")) {
        router.push("/login");
        return;
      }
      try {
        const response = await apolloclient.mutate({
          mutation: gql`
            mutation MyMutation($product_id: uuid = "") {
              insert_likes(objects: { product_id: $product_id }) {
                affected_rows
              }
            }
          `,
          variables: {
            product_id: id,
          },
        });
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
        return error.message;
      }
    },
    async remove_from_like(id) {
      if (!localStorage.getItem("ClientToken")) {
        router.push("/login");
        return;
      }
      try {
        const response = await apolloclient.mutate({
          mutation: gql`
            mutation MyMutation($product_id: uuid = "") {
              delete_likes(where: { product_id: { _eq: $product_id } }) {
                affected_rows
              }
            }
          `,
          variables: {
            product_id: id,
          },
        });
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
        return error.message;
      }
    },

    async add_comment(prduct_id, rate, comment) {
      console.log("well initiated", prduct_id, rate, comment);
      try {
        const response = await apolloclient.mutate({
          mutation: gql`
            mutation MyMutation(
              $product_id: uuid = ""
              $rate: Float = 0
              $comment: String = ""
            ) {
              insert_product_reviews_one(
                object: {
                  product_id: $product_id
                  rate: $rate
                  comment: $comment
                }
              ) {
                id
              }
            }
          `,
          variables: {
            product_id: prduct_id,
            rate: rate,
            comment: comment,
          },
        });
        console.log(response.data);
        notify({
          type: "success",       
          text: "Comment added successfully"         
        })
        return response.data
      } catch (error) {
        console.log(error);
      }
    },

    async add_cart(product_id, quantity) {
      console.log(product_id, quantity);
      try {
        const response = await apolloclient.mutate({
          mutation: gql`
            mutation MyMutation($product_id: uuid = "", $quantity: Int = 1) {
              insert_cart(
                objects: { product_id: $product_id, quantity: $quantity }
              ) {
                affected_rows
              }
            }
          `,
          variables: {
            product_id: product_id,
            quantity: quantity,
          },
        });
        console.log(response.data);
        notify({
          type: "success",       
          text: "Product added to cart"          
        })
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },

    async remove_cart(product_id) {
      try {
        console.log(product_id);
        const response = await apolloclient.mutate({
          mutation: gql`
            mutation MyMutation($product_id: uuid = "") {
              delete_cart(where: { product_id: { _eq: $product_id } }) {
                affected_rows
              }
            }
          `,
          variables: {
            product_id: product_id,
          },
        });
        
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async add_order(address) {
      if (!localStorage.getItem("ClientToken")) {
        console.log("not logged in");
        router.push("/login");
        return;
      }
      try {
        console.log("am variable detector",this.product_id, this.cart_id, this.quantity, address);         
        const response = await apolloclient.mutate({
          mutation: gql`
          mutation MyMutation($product_id: String = "", $cart_id: String = "", $quantity: Int = 1, $address: String = "") {
            add_order(inputs: {product_id: $product_id, cart_id: $cart_id, quantity: $quantity, address: $address}) {
              check_out
            }
          }
          
          
          `,
          variables: {
            product_id: this.product_id,
            cart_id: this.cart_id,
            quantity: this.quantity,    
            address: address,
          },
        });
        console.log(response);
        location.replace(response.data.add_order.check_out);
    
        return response.data.add_order.check_out;
      } catch (err) {
        console.log(err);
        return err.message;
      }
    },
  },
  getters: {},
});
