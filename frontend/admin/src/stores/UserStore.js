import { defineStore } from 'pinia'
import { provideApolloClient } from '@vue/apollo-composable';
import apolloclient from '../apollo.config'
import { LOGIN } from '../Constants/Query/query'
import router from '../router/index'
provideApolloClient(apolloclient);
export const UserStore = defineStore("user", {
    state: () => ({
        user: "am here for a reason not for a season",
    }),
    actions: {
        async login(phone,password) {
            try {
                const response = await apolloclient.mutate({
                    mutation: LOGIN,
                    variables: {
                        phone: phone,
                        password: password
                    }
                })
                console.log(response);
                localStorage.setItem('AdminToken', response.data.login.accestoken)
                // console.log(localStorage.getItem('AdminToken'));
                if(window.localStorage.getItem('AdminToken')){
                    router.push('/')
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
