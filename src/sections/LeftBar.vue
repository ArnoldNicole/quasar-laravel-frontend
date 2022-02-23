<template>
  <div class="q-pa-md" style="max-width: 350px">
     <q-icon name="ads_click" size="lg" color="primary" class="q-pa-md"/>
    <q-list >
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" name="home"/>
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">
            Home
          </q-item-section>
      </q-item>
    </q-list>
    <q-separator />
    <q-list >
      <q-item clickable v-ripple @click="end_session" class="fixed-bottom">
        <q-item-section avatar>
          <q-icon color="red" name="logout" class="text-white"/>
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">
            Logout
          </q-item-section>
      </q-item>
    </q-list>
  <!-- <q-btn label="Logout" class="fixed-bottom ml-1" type="button" color="secondary"/> -->
  </div>
</template>
<script>
import { callApi  } from "src/utils/plugin"
// import store from "../store/index"
import { mapActions } from "vuex";

export default {
  data() {
    return {

    }
  },
  methods:{
    ...mapActions('auth',['logOutUser']),
   async end_session(){
      const res = await callApi('post',`${process.env.API_HOST}/logout`);
      if(res.status ==204){
        this.logOutUser();
        window.location = '/login'
      }
    }
  }
}
</script>
<style scoped>
.ml-1{
  margin-left: 3px;
}
</style>
