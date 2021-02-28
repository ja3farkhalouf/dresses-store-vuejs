<template>
  <section id="Products">
    <div class="featured-work text-center">
      <div class="container">
        <div class="section-info">
          <h1>Products</h1>
          <p>this is our category dresses and a few examples of it</p>
        </div>
        <ul class="list-unstyled row">
          <li
            :class="[activetab === '0' ? 'active col-md' : 'col-md']"
            @click="activetab = '0'"
          >
            All
          </li>
          <li
            :class="[activetab === '1' ? 'active col-md' : 'col-md']"
            @click="activetab = '1'"
          >
            party
          </li>
          <li
            :class="[activetab === '2' ? 'active col-md' : 'col-md']"
            @click="activetab = '2'"
          >
            outside
          </li>
          <li
            :class="[activetab === '3' ? 'active col-md' : 'col-md']"
            @click="activetab = '3'"
          >
            zaffa
          </li>
        </ul>
      </div>
      <div class="row shufflte-imges">
        <div class="col-md-2">
          <img
            class="party"
            :style="{ opacity: op1 }"
            src="../assets/products/11.jpg"
            alt=""
          />
        </div>
        <div class="col-md-2">
          <img
            class="outside"
            :style="{ opacity: op2 }"
            src="../assets/products/22.jpg"
            alt=""
          />
        </div>
        <div class="col-md-2">
          <img
            class="zaffa"
            :style="{ opacity: op3 }"
            src="../assets/products/33.jpg"
            alt=""
          />
        </div>
        <div class="col-md-2">
          <img
            class="party"
            :style="{ opacity: op1 }"
            src="../assets/products/44.png"
            alt=""
          />
        </div>
        <div class="col-md-2">
          <img
            class="party"
            :style="{ opacity: op1 }"
            src="../assets/products/55.jpg"
            alt=""
          />
        </div>
        <div class="col-md-2">
          <img
            class="outside"
            :style="{ opacity: op2 }"
            src="../assets/products/66.jpg"
            alt=""
          />
        </div>
        <div class="col-md-2">
          <img
            class="party"
            :style="{ opacity: op2 }"
            src="../assets/products/77.jpg"
            alt=""
          />
        </div>
        <div class="col-md-2">
          <img
            class="zaffa"
            :style="{ opacity: op3 }"
            src="../assets/products/88.jpg"
            alt=""
          />
        </div>
        <div class="col-md-2">
          <img
            class="party"
            :style="{ opacity: op1 }"
            src="../assets/products/99.jpg"
            alt=""
          />
        </div>
        <div class="col-md-2">
          <img
            class="party"
            :style="{ opacity: op1 }"
            src="../assets/products/111.jpg"
            alt=""
          />
        </div>
        <div class="col-md-2">
          <img
            class="outside"
            :style="{ opacity: op2 }"
            src="../assets/products/333.jpg"
            alt=""
          />
        </div>
        <div class="col-md-2">
          <img
            class="zaffa"
            :style="{ opacity: op3 }"
            src="../assets/products/555.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      activetab: "0",
      op1: 1,
      op2: 1,
      op3: 1,
    };
  },
  watch: {
    activetab: function(v) {
      if (v === "0") {
        this.op1 = 1;
        this.op2 = 1;
        this.op3 = 1;
      } else if (v === "1") {
        this.op1 = 1;
        this.op2 = 0.3;
        this.op3 = 0.3;
      } else if (v === "2") {
        this.op1 = 0.3;
        this.op2 = 1;
        this.op3 = 0.3;
      } else {
        this.op1 = 0.3;
        this.op2 = 0.3;
        this.op3 = 1;
      }
    },
  },
};
</script>

<style>

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

  background: linear-gradient(0deg, rgb(172, 164, 164), 70%, rgb(51, 37, 184));
}
</style>
