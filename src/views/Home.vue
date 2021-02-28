<template>
  <div class="home">
   <Header></Header>
   <About ></About>
   <Services></Services>
   <Ourteam></Ourteam>
   <Products></Products>
   <Contactus></Contactus>
   <Footer></Footer>
   
   
   
  
</div>





</template>

<script>
// @ is an alias to /src


import About from "../components/About.vue";
import Header from "../components/Header.vue";
import Services from "../components/Services.vue";
import Ourteam from '../components/Ourteam.vue';
import Products from '../components/Products.vue';
import Contactus from '../components/Contactus.vue';
import Footer from '../components/Footer.vue';
export default {
  data(){
    return{
      

    }
  },
  name: "Home",
  components: {
    Header,About,Services,
    Ourteam,Products,Contactus,Footer
   
  
  },
  methods:{
   
  }
};
</script>
<style scoped>





</style>