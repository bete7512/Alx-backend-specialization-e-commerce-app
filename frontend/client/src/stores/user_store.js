import { defineStore } from 'pinia'
import { provideApolloClient } from '@vue/apollo-composable';
import apolloclient from '../apollo.config'
import { SIGNUP,LOGIN } from '../constants/query'

import router from '../router/index'
provideApolloClient(apolloclient);
export const UserStore = defineStore("user", {
    state: () => ({
        userLoggedin:localStorage.getItem('Apollotoken') ? true : false,
    }),
    actions: {
        async signup(fname, lname, phone, password, address) {
            try {
                const response = await apolloclient.mutate({
                    mutation: SIGNUP,
                    variables: {
                        fname: fname,
                        lname: lname,
                        phone: phone,
                        password: password,
                        // address: address
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
                        password: password
                    }
                })
                localStorage.setItem('Apollotoken', response.data)
                if(window.localStorage.getItem('Apollotoken')){
                    router.push('/home')
                }
                return response.data
            } catch (err) {
                console.log(err);
                return err.message
            }
        }

    },
    getters: {

    }
})
