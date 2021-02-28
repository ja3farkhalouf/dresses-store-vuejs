<template>
  <div class="profile">
    <div class="container">
    <nav id="sidebar">
      <ul class="list-group p-3">
         <li class="list-group-item " >
          <b-icon icon="star-fill" animation="fade" font-scale="2"></b-icon>
          <b-icon icon="people-fill" @click="activate = '5'" font-scale="2"></b-icon>
          <a  @click="activate = '5'" >My Account</a>
          <b-icon icon="star-fill" animation="fade" font-scale="2"></b-icon>
        </li>
        <li class="list-group-item mt-2" >
          <b-icon icon="star-fill" animation="fade" font-scale="2"></b-icon>
          <b-icon icon="people-fill" @click="activate = '0'" font-scale="2"></b-icon>
          <a  @click="activate = '0'" >Users</a>
          <b-icon icon="star-fill" animation="fade" font-scale="2"></b-icon>
        </li>
        <li class="list-group-item mt-2" >
          <b-icon icon="star-fill" animation="fade" font-scale="2"></b-icon>
          <b-icon icon="cart2" @click="activate = '4'" font-scale="2"></b-icon>
          <a  @click="activate = '4'" >Products</a>
          <b-icon icon="star-fill" animation="fade" font-scale="2"></b-icon>
        </li>
        <li class="list-group-item mt-2" >
          <b-icon icon="circle-fill" animation="throb" font-scale="2"></b-icon>
          <b-icon icon="person-fill" @click="activate = '1'" font-scale="2"></b-icon>
          <a  @click="activate = '1'" >Update Ac</a>
          <b-icon icon="circle-fill" animation="throb" font-scale="2"></b-icon>
        </li>
        <li class="list-group-item mt-2">
          <b-icon icon="circle-fill" animation="throb" font-scale="2"></b-icon>
          <b-icon icon="cart4" @click="activate = '2'" font-scale="3"></b-icon>
          <a  @click="activate = '2'">Store</a>
          <b-icon icon="circle-fill" animation="throb" font-scale="2"></b-icon>
        </li>
      </ul>
    </nav>
<!-- start inside admin -->
  <div class="container">
      <Updateuser v-if="activate=== '0'" ></Updateuser>
      <Updateaccount v-if="activate=== '1'"></Updateaccount>
      <Store v-if="activate=== '2'"></Store>
      <Products v-if="activate== '4'"></Products>
      <Myaccount :username="jja" :password="paa"  v-if="activate== '5'"></Myaccount>


    
  </div>
  </div>
  </div>
   <!-- end inside admin -->
</template>

<script>

import Updateuser from "../components/insideAdmin/Updateuser";
import Updateaccount from "../components/insideAdmin/Updateaccount";
import Products from "../components/insideAdmin/Products";
import Myaccount from "../components/insideAdmin/Myaccount";
import Store from "../components/Store";

  export default {
      name: "Profile",
      components:{
        Updateuser,
        Updateaccount,Store,Products,Myaccount
      },
    data() {
      return {
        activate: '5',
        userss:this.$store.getters.get_users ,
        count: 0,
        jja: "jaa",
        paa: "paa"
         
        

      }
    },
    computed: {
      users(){
         return this.$store.getters.get_users[0].id;
      }

    },
    methods: {
     
      
      
    }
 }
</script>
<style scoped>
.profile {
  min-height: 100%;
  width: 100%;
  position: relative;
  display: inline-block;
}

#sidebar {
  width: 20%;
  top: 0px;
  left: 0px;
  bottom: 0px;
  height: 100vh;
  position: absolute;
  background-color: rgb(39, 41, 41);
}
#sidebar li a{
  text-decoration: none;
  cursor: pointer;
}
#content {
  min-height: 500px;
  width: 80%;
  position: relative;
  float: right;
}
#sidebar li a{
  color: rgb(98, 98, 184);
  font-weight: 900;
  font-size: 30px;
  
}
@media only screen and (max-width: 1200px) {
  #sidebar li a{
    visibility: hidden;
  }
  
  
}

</style>