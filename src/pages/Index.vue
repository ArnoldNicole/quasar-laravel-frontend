<template>
  <q-page class="flex flex-center">
    <q-list bordered v-ripple v-for="(post, p ) in posts" :key="p">
      <q-item clickable>
        <q-item-section> {{post.post}}</q-item-section>
      </q-item>
    </q-list>
    <button v-for="(link, l) in links" :key="l" @click="loadData(link.url)" :disabled="link.url==null"> <span v-html="link.label"></span>   </button>
  </q-page>
</template>

 <script>
import { defineComponent } from "vue";
import {callApi}  from '../utils/plugin';
export default defineComponent({
  name: "PageIndex",
  data(){
    return{
      posts:[],
      first_page_url:null,
      last_page_url:null,
      current_page:null,
      links:[],
      next_page_url:null,
      prev_page_url:null
    }
  },
  methods:{
  async  loadData(url){
  let base_link = `${process.env.API_HOST}`;
        let final_url = url ? url : base_link+"/api/posts";
        const res = await  callApi('get',final_url);
        switch (res.status) {
          case 200:
            this.makePagination(res.data);
            break;

          default:
            alert('Error Occured');
            break;
      }
    },
    makePagination(data){
      this.posts = data.data.length ? data.data : [];
      this.first_page_url = data.first_page_url;
      this.last_page_url = data.last_page_url;
      this.current_page = data.current_page;
      this.links = data.links;
      this.next_page_url = data.next_page_url;
      this.prev_page_url = data.prev_page_url;
    }
  },
created(){
    this.loadData()
 }
});
</script>
