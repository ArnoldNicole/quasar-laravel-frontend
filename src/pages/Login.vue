<template>
  <q-layout>
    <q-page-container v-if="show_login">
      <q-page class="flex bg-image flex-center">
        <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'30%'}">
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img src="profile.svg">
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Log in
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form
              class="q-gutter-md"
            >
              <q-input
                filled
                v-model="username"
                label="Username"
                lazy-rules
              />

              <q-input
                type="password"
                filled
                v-model="password"
                label="Password"
                lazy-rules

              />

              <div class="flex-container">
                <q-btn :label="loading ? 'logging in...' : 'Login'" :disabled="loading" @click="attemptLogin" type="button" color="primary"/>
                <q-btn label="Register" type="button" color="secondary"/>

              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import {defineComponent} from 'vue'
import {mapActions ,  mapGetters} from 'vuex'
import {callApi, showValidationErrors, showErrorMessage}  from '../utils/plugin';
export default defineComponent({
  data(){
return {
  base_link:'',
  username:'',
  password:'',
  loading:false,
  show_login:false
}
  },

  created(){
    const session_key = window.localStorage.clear();
    // console.log(session_key);
  this.base_link = `${process.env.API_HOST}`;
  this.loadCsrfToken();
  if(this.isAuthenticated){
    this.$router.push('/');
  }
    },
    computed:{
     ...mapGetters('auth', ['isAuthenticated']),
    },
  methods:{
    ...mapActions('auth', ["logIn","logOut"]),
   async attemptLogin(){
     this.loading = true;
     let obj ={username:this.username, password:this.password};
     const res =  await callApi('post', `${this.base_link}/login`, obj)
     switch (res.status) {
       case 200:
          this.loadUserAccount();
        break;
        case 302:
         this.loadUserAccount();
         break;
       case 422:
          showValidationErrors(res);
         break;
     case 429:
       showErrorMessage(res.data);
       break;
       default:
         break;
     }
     this.loading = false;
    },
    async loadUserAccount(){
     const res = await callApi('get',`${this.base_link}/api/user/info`);
      if(res.status == 200){
          this.logIn(res.data)
          this.$router.push('/')
      }else{
        if(res.status == 401){
          this.show_login = true;
        }
      }
    },
  async loadCsrfToken(){
      const r =   await callApi('get', `${this.base_link}/sanctum/csrf-cookie`);
      if(r.status ==204){
        this.loadUserAccount();
      }
  },
  },
})
</script>

<style scoped>
.flex-container{
  display: flex;
  justify-content: space-between;
}
.bg-image {
  background-image: linear-gradient(135deg, #7028e4 0%, #e5b2ca 100%);
}
</style>
