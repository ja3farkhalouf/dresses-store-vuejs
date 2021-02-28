<template>
  <section id="Products">
    <div class="featured-work text-center">
      <div class="container text-center">
        <div class="section-info">
          <h1>Products</h1>
          <p>this is our category dresses and a few examples of it</p>
        </div>
        <ul class="list-unstyled row">
          <li
            :class="[activetab === 'All' ? 'active col-md' : 'col-md']"
            @click="activetab = 'All'"
          >
            All
          </li>
          <li
            :class="[activetab === 'party' ? 'active col-md' : 'col-md']"
            @click="activetab = 'party'"
          >
            party
          </li>
          <li
            :class="[activetab === 'outside' ? 'active col-md' : 'col-md']"
            @click="activetab = 'outside'"
          >
            outside
          </li>
          <li
            :class="[activetab === 'zaffa' ? 'active col-md' : 'col-md']"
            @click="activetab = 'zaffa'"
          >
            zaffa
          </li>
        </ul>
      </div>
      </div>
      <div class="hufflte-imges row ">
        
        <div  class="col-md" v-for="p in products" :key="p.id" >
          <div class="card " v-if="activetab === p.productcategory || activetab === 'All' ">
            <div class="imgBx">
                <img :src="p.im">
            </div>
            <div class="content">
                <h2>{{ p.productcategory }}</h2>
                <p>{{ p.productdesc }}</p>
                <p><b-icon icon="star-fill" animation="fade" font-scale="2"></b-icon>price:{{ p.price }}$<b-icon icon="star-fill" animation="fade" font-scale="2"></b-icon></p>
                <button id="btn">Add to cart <i class="fa fa-cart-plus" ></i> </button>
            </div>
        </div>
      </div>
        
        
      
    </div>
  </section>
</template>

<script>
export default {
  name: "Store",
   data() {
    return {
      activetab: 'All',
      op1: 1,
      op2: 1,
      op3: 1,
     
      products:[ {
          id:1,
          productcategory:'zaffa',
          productdesc:'this is made in syria',
          price: 120,
          im: require("../assets/products/11.jpg")
          },
          {
          id:2,
          productcategory:'outside',
          productdesc:'this is made in italy ',
          price: 60,
          im: require("../assets/products/22.jpg") },
          {
          id:3,
          productcategory:'zaffa',
          productdesc:'this is made in china ',
          price: 300,
          im: require("../assets/products/33.jpg") },
          {
          id:4,
          productcategory:'party',
          productdesc:'this is made in Egypt',
          price: 160,
          im: require("../assets/products/44.png") },
          {
          id:5,
          productcategory:'party',
          productdesc:'this is made in vetnam ',
          price: 190,
          im: require("../assets/products/55.jpg") },
          {
          id:6,
          productcategory:'outside',
          productdesc:'this is made in china ',
          price: 75,
          im: require("../assets/products/66.jpg") },
          {
          id:7,
          productcategory:'party',
          productdesc:'this is made in italy ',
          price: 145,
          im: require("../assets/products/77.jpg") },
          {
          id:8,
          productcategory:'zaafa',
          productdesc:'this is made in italy ',
          price: 220,
          im: require("../assets/products/88.jpg") },
          {
          id:9,
          productcategory:'outside',
          productdesc:'this is made in iraq ',
          price: 35,
          im: require("../assets/products/99.jpg") },
          {
          id:10,
          productcategory:'zaffa',
          productdesc:'this is made in italy ',
          price: 300,
          im: require("../assets/products/111.jpg") },
          {
          id:11,
          productcategory:'zaffa',
          productdesc:'this is made in lebanon ',
          price: 300,
          im: require("../assets/products/222.jpg") },
          {
          id:12,
          productcategory:'zaffa',
          productdesc:'this is made in syria ',
          price: 260,
          im: require("../assets/products/333.jpg") },
          {
          id:13,
          productcategory:'zaffa',
          productdesc:'this is made in italy ',
          price: 550,
          im: require("../assets/products/444.jpg") },
          {
          id:14,
          productcategory:'zaffa',
          productdesc:'this is made in brazel ',
          price: 280,
          im: require("../assets/products/555.jpg") },]
    };
  },
 
  watch: {
  
  },
};

</script>

<style scoped>
#Products {
    background: #fff;
  border-radius: 20%;
  width: 51vw;
  height: 100vh;
  margin-left: 200px;
}
.container{
    width: 100%;
   
}
.section-info {
  margin-top: 30px;
  font-weight: bold;
 
}
.section-info h1 {
  font-size: 50px;
  font-weight: 900;
}
.section-info p {
  font-size: 25px;
  color: rgb(51, 37, 184);
}

.featured-work {
  padding: 100px 0;
}

.featured-work ul li {
  cursor: pointer;
  color: #000;
  border: 4px solid blue;
  margin-left: 20px;
  margin-bottom: 20px;
  padding: 10px 20px;
  transition: all 0.6s ease-in-out;
}
/* .featured-work ul{
    margin-top: 50px;
} */
.featured-work ul li.active,
.featured-work ul li:hover {
  background: red;
  border: 4px solid #000;
  color: #fff;
}
img {
  width: 100%;
  height: 100%;
}
.featured-work .shufflte-imges {
  margin-top: 50px;
}
.shufflte-imges .col-md-3 {
  padding: 0 !important;
  border: 2px solid black;

  
}
 .card{
    position: relative;
    max-width: 300px;
    height: 215px;
    background: #fff;
    margin: 30px 10px;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 5);
    transition: 0.3s ease-in-out;
}
.card:hover{
    height: 420px;

}
 .card .imgBx{
    position: relative;
    width: 260px;
    height: 260px;
    top: -60px;
    
    box-shadow: 0 5px 20px rgba(0, 0, 0, 2);
    border-radius: 50%;

}
h2{
    color: red;
    font-weight: 900;
}
p{
    color: rgb(66, 22, 133);
    font-weight: 900;
}
 .card .imgBx img{
    max-width: 100%;
    border-radius: 50%;
    
    
    
}
.card .content{
    position: relative;
    margin-top: -140px;
    padding: 10px 15px;
    text-align: center;
    color: #111;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;

}
.card:hover .content{
    visibility: visible;
    opacity: 1;
    margin-top: -40px;
    transition-delay: 0.3s;
}
#btn{
    
  padding: 10px 20px;
  background: red;
  color: #000;
  font-weight: bold;
}
#btn:hover {
  padding: 10px 20px;
  background: #aeda10;
  color: #000;
  font-weight: bold;
  transition: 0.3s ease-in-out;
}



</style>