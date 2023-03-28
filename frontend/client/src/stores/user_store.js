import { defineStore } from 'pinia'
import { provideApolloClient } from '@vue/apollo-composable';
import apolloclient from '../apollo.config'
import { SIGNUP,LOGIN,USER_PROFILE } from '../constants/query'

import router from '../router/index'
provideApolloClient(apolloclient);
export const UserStore = defineStore("user", {
    state: () => ({
        user:{},
        userLoggedin:localStorage.getItem('Apollotoken') ? true : false,
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
                        password: password
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
                console.log(window.localStorage.getItem('Apollotoken'));
                window.localStorage.removeItem('Apollotoken')
                const response = await apolloclient.mutate({
                    mutation: LOGIN,
                    variables: {
                        phone: phone,
                        password: password
                    }
                })
                localStorage.setItem('Apollotoken', response.data.login.accestoken)
                console.log("njhnjhhhhhhhhhhhhhhhhhhhhhhhjh",response.data);
                if(window.localStorage.getItem('Apollotoken')){
                    await this.user_profile(response.data.login.id)
                    router.push('/')
                }
                return response.data
            } catch (err) {
                console.log(err);
                return err.message
            }
        },
        async user_profile(id){
            try{
                const response = await apolloclient.query({
                    query: USER_PROFILE,
                    variables: {
                        id:id
                    }
                })
                console.log(response.data);
                this.user = response.data
                return response.data
            }catch(err){
                console.log(err);
                return err.message
            }
        }
        

    },
    getters: {

    }
})
