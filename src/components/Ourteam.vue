<template>
  <section id="ss">
    <div class="section-info">
      <h1>Our Team</h1>
      <p></p>
    </div>
    <div class="container text-center">
      <div class="row ">
        <div class="col-lg-4">
          <div class="card">
            <div class="imgBx">
              <img src="../assets/1.jpg" alt="" />
            </div>
            <div class="content">
              <div class="contentBx">
                <h3>jaafar khalouf <br /><span>engineer it</span></h3>
              </div>
              <ul class="sci">
                <li style="--i:1;">
                  <a href=""
                    ><i class="fa fa-facebook " aria-hidden="true"></i
                  ></a>
                </li>
                <li style="--i:2;">
                  <a href=""
                    ><i class="fa fa-twitter " aria-hidden="true"></i
                  ></a>
                </li>
                <li style="--i:3;">
                  <a href=""
                    ><i class="fa fa-instagram " aria-hidden="true"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card text-center">
            <div class="imgBx">
              <img src="../assets/IMG_٢٠١٩٠٣٢٤_٠٧٥١٠٠٠٦٦.jpg" alt="" />
            </div>
            <div class="content">
              <div class="contentBx">
                <h3>jaafar khalouf <br /><span>engineer it</span></h3>
              </div>
              <ul class="sci">
                <li style="--i:1;">
                  <a href=""
                    ><i class="fa fa-facebook " aria-hidden="true"></i
                  ></a>
                </li>
                <li style="--i:2;">
                  <a href=""
                    ><i class="fa fa-twitter " aria-hidden="true"></i
                  ></a>
                </li>
                <li style="--i:3;">
                  <a href=""
                    ><i class="fa fa-instagram " aria-hidden="true"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card">
            <div class="imgBx">
              <img src="../assets/IMG_٢٠٢٠٠٩٠٩_١٥١٢٤٨٩٩٣.jpg" alt="" />
            </div>
            <div class="content">
              <div class="contentBx">
                <h3>jaafar khalouf <br /><span>engineer it</span></h3>
              </div>
              <ul class="sci">
                <li style="--i:1;">
                  <a href=""
                    ><i class="fa fa-facebook " aria-hidden="true"></i
                  ></a>
                </li>
                <li style="--i:2;">
                  <a href=""
                    ><i class="fa fa-twitter " aria-hidden="true"></i
                  ></a>
                </li>
                <li style="--i:3;">
                  <a href=""
                    ><i class="fa fa-instagram " aria-hidden="true"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Ourteam",
};
</script>

<style scoped>
#ss {
  background: linear-gradient(160deg, #34c28c 45%, white 0%);
}
.section-info {
  font-weight: bold;
  text-align: center;
}
.section-info h1 {
  font-size: 50px;
  font-weight: 900;
}
.section-info p {
  font-size: 25px;
  color: #e73c3c;
}

.container {
  position: relative;
  display: inline;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 40px 0;
}
.container .card {
  position: relative;
  width: 300px;
  height: 600px;
  margin: 100px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 7);
  border-radius: 20px;
  display: flex;

  align-items: center;
}
.container .card .imgBx {
  align-items: center;
  justify-content: center;
}
.container .card .content {
  position: absolute;
  bottom: -300px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  flex-direction: column;
  backdrop-filter: blur(15px);
  box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(231, 235, 29, 0.2);
  transition: bottom 0.1s;
}
.container .card:hover .content {
  bottom: 0px;
}
.container .card .content .contentBx h3 {
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  margin: 20px;
  line-height: 2em;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(-70px);
}
.imgBx {
  align-items: center;
  justify-content: center;
}
img {
  width: 120%;
  height: 170%;
}
.container .card:hover .content .contentBx h3 {
  font-weight: bold;
  color: black;
  opacity: 1;
  transform: translateX(0px);
}
.container .card .content .contentBx h3 span {
  color: black;
  font-weight: 900 !important;
  font-size: 12px;
  font-weight: 300;
  text-transform: initial;
}
.container .card .content .sci {
  position: relative;
  bottom: 15px;
  display: flex;
}
.container .card .content .sci li {
  list-style: none;
  margin: 0 20px;
  transform: translateY(50px);
  transition: 0.5s;
  opacity: 0;
}
.container .card:hover .content .sci li {
  transform: translateY(0px);
  opacity: 1;
}
.container .card .content .sci li a {
  color: #000;
  font-size: 30px;
}
</style>
