import { defineStore } from "pinia";
import { provideApolloClient } from "@vue/apollo-composable";
import apolloclient from "../apollo.config";
import {
  PRODUCT_QUERY,
  CATEGORY,
  INSERT_PRODUCT,
  FILE_UPLOAD,
} from "../Constants/Query/query";
import router from "../router/index";
import { ref, computed } from "vue";
import { notify } from "@kyvg/vue3-notification";              
provideApolloClient(apolloclient);
export const ProductStore = defineStore("product", {
  state: () => ({
    product_name: "",
    about_product: "",
    price: "",
    c_id: "",
    categories: [],
    image_url: [],
    base64str: "",
    type: "",
    f_name: "",
    ObjectFile: [],
    file: "",
    adding_product: false,
  }),
  actions: {
    async products() {
      try {
      } catch (err) {
        console.log(err);
        return err.message;
      }
    },

    /**
         * 
         * @returns  $about_product: String = ""
    $price: Float = 1.5
    $product_description: String = ""
    $product_image: String = ""
    $product_name: String = ""
         */
    async insert_product() {
      try {
        // this.adding_option = true;
        console.log({
          product_name: this.product_name,
          about_product: this.about_product,
          category_id: this.c_id,
          product_image: this.image_url.join(),
          price: this.price,
        });
        try {
          await this.add_image();
        } catch (error) {
          return error;
        }
        const response =await apolloclient.mutate({
          mutation: INSERT_PRODUCT,
          variables: {
            product_name: this.product_name,
            about_product: this.about_product,
            category_id: this.c_id,
            product_image: this.image_url.join(),
            price: this.price,
          },
        });
        notify({
          type: "success",          
          text: "Product Added Successfully",           
        })
        console.log(response);
      } catch (err) {
        console.log(err);
        notify({
          type: "error",
          text: err.message,                  
        })
        return err;
      }
      this.adding_product = false;        
    },
    async category() {
      const { data } = await apolloclient.query({
        query: CATEGORY,
      });
      this.categories = data.category;
      console.log(this.categories);
      return this.categories;
    },
    async add_image() {
      console.log("on loop");
      // console.log(this.ObjectFile);
      try {
        for (let i = 0; i < this.ObjectFile.length; i++) {
          console.log("inside a loop" + this.ObjectFile[i]);
          var hold = this.ObjectFile[i];
          console.log(hold);
          try {
            var tempourl = await fileupload(hold);
            this.image_url.push(tempourl);
            console.log(tempourl);
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {},
});

const fileupload = async (object) => {
  try {
    const response = await apolloclient.mutate({
      mutation: FILE_UPLOAD,
      variables: {
        name: object.file.name,
        type: object.file.type,
        base64str: object.base64str,
      },
    });
    console.log(response.data.fileupload.file_path);
    return response.data.fileupload.file_path;
  } catch (error) {
    console.log(error);
    // alert(error); 
    return error;
  }
};
