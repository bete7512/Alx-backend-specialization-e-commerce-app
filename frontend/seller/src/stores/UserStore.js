import { defineStore } from 'pinia'
import { provideApolloClient } from '@vue/apollo-composable';
import apolloclient from '../apollo.config'
import { LOGIN,SIGNUP } from '../Constants/Query/query'
import router from '../router/index'
import {notify} from '@kyvg/vue3-notification'      
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
                notify({
                    type: 'success',      
                    text: 'Signup Successful',    
                })
                router.push('/login')     
                return ''
            } catch (err) {
                console.log(err);
                notify({ 
                    type: 'error',  
                    text: 'Something Were Wrong',    
                })
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
                localStorage.setItem('Seller_id', response.data.login.id)
                // console.log(localStorage.getItem('SellerToken'));
                if(localStorage.getItem('SellerToken')){
                    router.push('/')
                    console.log("am here");
                }
                notify({  
                    type: 'success',    
                    text: 'Login Successful',      
                })

                return ''
            } catch (err) {
                console.log(err);
                notify({  
                    type: 'error',   
                    text: err.message,     
                })
                return err.message
            }
        }
    },
    getters: {

    }
})
