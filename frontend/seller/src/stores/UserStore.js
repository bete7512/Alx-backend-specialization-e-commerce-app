import { defineStore } from 'pinia'
import { provideApolloClient } from '@vue/apollo-composable';
import apolloclient from '../apollo.config'
import { LOGIN,SIGNUP } from '../Constants/Query/query'
import router from '../router/index'
provideApolloClient(apolloclient);
export const UserStore = defineStore("user", {
    state: () => ({
        user: "am here for a reason not for a season",
    }),
    actions: {
        async signup(fname, lname, phone, password){
            try {
                const response = await apolloclient.mutate({
                    mutation: SIGNUP,
                    variables: {
                        fname: fname,
                        lname: lname,
                        phone: phone,
                        password: password,
                        types:'sellers'
                    }

                })
                return response.data
            } catch (err) {
                console.log(err);
                return err.message
            }
        },
        async login(phone,password) {
            try {
                const response = await apolloclient.mutate({
                    mutation: LOGIN,
                    variables: {
                        phone: phone,
                        password: password,
                    }
                })
                console.log(response);
                localStorage.setItem('SellerToken', response.data.login.accestoken)
                // console.log(localStorage.getItem('SellerToken'));
                if(localStorage.getItem('SellerToken')){
                    router.push('/')
                    console.log("am here");
                }
                return response.data.login.accestoken
            } catch (err) {
                console.log(err);
                return err.message
            }
        }
    },
    getters: {

    }
})
