<template>
 <section id="myacc">
<div class="container">
    <div class="section-info">
      <h1>MyAccount</h1>
     
    </div>
  <div class="row">
    <div class="col">
       <div class="conten">
        <div class="boxx" data-tilt>
            <div class="imgboxx">
                <img src="../../assets/IMG_20210209_104947_565.jpg" alt="">
            </div>
            <div class="contentboxx">
                <h2 class="h">information</h2>
                <p class="p">admin <br>it engineer <br></p>
            </div>
        </div>
      </div>
    </div>
    <div class="col">
        <div class="uld">
      <ul>
        <li> <i class="fa fa-envelope-o"></i> username: <span>{{ $route.params.username }}</span> </li>
        <li>* password: <span>{{ $route.params.password }}</span> </li>
        <li><b-icon icon="calendar2-event" aria-hidden="true"></b-icon> age: <span>23</span> </li>
        <li><i class = "fa fa-home"></i> adress: <span>syria/homs</span> </li>
        <li><i class="fa fa-phone"></i>  phone: <span>+963994335985</span> </li>
        
       
        
      </ul>
      </div>
    </div>
  </div>
</div>
 </section>
</template>

<script>
export default {
    name: "Myaccount",
    props:['username','password']

}

</script>

<style scoped>
#myacc{
    margin-left: 150px;
    

}
.section-info {
  margin-top: 30px;
  font-weight: bold;
  text-align: center;
}
.section-info h1 {
  font-size: 50px;
  font-weight: 900;
}
.section-info p {
  font-size: 25px;
  color: rgb(51, 37, 184);
}






.conten{
    position: relative;
    display: flex;
    
    flex-direction: column;
    padding: 50px 0;
    transform-style: preserve-3d;
}
.conten .boxx{
    padding: 0;
    position: relative;
    width: 450px;
    height: 300px;
    
    background: #000;
    transform-style: preserve-3d;
}
.h{
    color: rgb(4, 8, 65);
    font-weight: 900;
}


img{
    width: 450px;
    height: 400px;
    }
.conten .boxx .imgboxx{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;


}
.p{
    font-weight: 900;
}
.conten .boxx .contentboxx{
    position: absolute;
    width: 350px;
    height: 250px;
    top: 50%;
    left: 50px;
    right: 50px;
   
    background: linear-gradient(blue,#fff);
    border-radius: 50%;
    transform: translateZ(40px) scalex(0);
    padding: 50px 25px;
    transform-origin: top;
    transition: 0.5s;
    transform-style: preserve-3d;
}
.conten .boxx:hover .contentboxx{
    transform: translateZ(20px) scaleY(1);
}
.uld{
    position: absolute;
    top: 150px !important;
}
ul{
    list-style: none;
   

}
li{
    font-size: 20px;
    font-weight: 900;
}


</style>