<template>
<section id="Register">
<div class="container">
      <div class="content">
        <header>Register FORM</header>
        <form action="#">
          <div class="field">
            <span class="fa fa-user"></span>
            <input type="text" required placeholder="Email or Phone" v-model="user.username">
          </div>
<div class="field space">
            <span class="fa fa-lock"></span>
            <input type="password" class="pass-key" required placeholder="Password" v-model="user.password">
            <span class="show">SHOW</span>
          </div>
<div class="field space">
            <span class="fa fa-lock"></span>
            <input type="password" class="pass-key" required placeholder="conferm Password">
            <span class="show">SHOW</span>
          </div>
<div class="field space">
            <span ></span>
            <input type="text" class="pass-key" required placeholder="age" v-model="user.age">
            
          </div>
<div class="pass">
            <a href="#">Lost Your Password?</a>
          </div>
<div class="field">
            <input type="submit" value="Register" @click.prevent="adduser">
          </div>
</form>
<div class="login">
Or register with</div>
<div class="links">
          <div class="facebook">
            <i class="fa fa-facebook-f"><span>Facebook</span></i>
          </div>
<div class="instagram">
            <i class="fa fa-instagram" ><span>Instagram</span></i>
          </div>
</div>

</div>
  </div>
  </section>
</template>

<script>
import store from "../store/index"
export default {
    data: function(){
        return{
            user:{
            username: "",
            password: "",
            age: "",


            }
            

        };

    },
    name: 'Register',
    methods:{
        adduser(){
             
      store.state.users.push(this.user);
      this.$router.push("/Profile");
        
        
       
      
    }
        }
    }
   

</script>

<style scoped>

#Register{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}
.container{

  background: url('../assets/IMG_20210209_105026_911.jpg');
  height: 80vh;
  background-size: cover;
  background-position: center;
  margin-top: 30px;
}
.container:after{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.7);
}
.content{
  position: relative;
  top: 50%;
  left: 50%;
  z-index: 999;
  text-align: center;
  padding: 60px 32px;
  width: 370px;
  transform: translate(-50%,-50%);
  background: rgba(230, 8, 8, 0.04);
  box-shadow: -1px 4px 50px 0px rgba(0,0,0,1);
}
.content header{
  color: rgb(60, 41, 172);
  font-size: 33px;
  font-weight: 900;
  margin: 0 0 35px 0;
  font-family: 'Montserrat',sans-serif;
}
.field{
  position: relative;
  height: 45px;
  width: 100%;
  display: flex;
  background: rgba(255,255,255,0.94);
}
.field span{
  color: #222;
  width: 40px;
  line-height: 45px;
}
.field input{
  height: 100%;
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: #222;
  font-size: 16px;
  font-family: 'Poppins',sans-serif;
}
.space{
  margin-top: 16px;
}
.show{
  position: absolute;
  right: 13px;
  font-size: 13px;
  font-weight: 700;
  color: #222;
  display: none;
  cursor: pointer;
  font-family: 'Montserrat',sans-serif;
}
.pass-key:valid ~ .show{
  display: block;
}
.pass{
  text-align: left;
  margin: 10px 0;
}
.pass a{
  color: rgb(60, 41, 172);
  font-weight: 600;
  text-decoration: none;
  font-family: 'Poppins',sans-serif;
}
.pass:hover a{
  text-decoration: underline;
}
.field input[type="submit"]{
  background: #3498db;
  border: 1px solid #2691d9;
  color: rgb(60, 41, 172);
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Montserrat',sans-serif;
}
.field input[type="submit"]:hover{
  background: #2691d9;
}
.login{
  color: rgb(0, 0, 0);
  font-weight: 600;
  margin: 20px 0;
  font-family: 'Poppins',sans-serif;
}
.links{
  display: flex;
  cursor: pointer;
  color: rgb(0, 0, 0);
  margin: 0 0 20px 0;
  font-weight: 900;
}
.facebook,.instagram{
  width: 100%;
  height: 45px;
  line-height: 45px;
  margin-left: 10px;
}
.facebook{
  margin-left: 0;
  background: #4267B2;
  border: 1px solid #3e61a8;
}
.instagram{
  background: #E1306C;
  border: 1px solid #df2060;
}
.facebook:hover{
  background: #3e61a8;
}
.instagram:hover{
  background: #df2060;
}
.links i{
  font-size: 17px;
}
i span{
  margin-left: 8px;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 16px;
  font-family: 'Poppins',sans-serif;
}
.signup{
  font-size: 15px;
  color: rgb(0, 0, 0);
  font-family: 'Poppins',sans-serif;
}
.signup a{
  color: #220783;
  text-decoration: none;
  font-weight: 900;
}
.signup a:hover{
  text-decoration: underline;
}


</style>