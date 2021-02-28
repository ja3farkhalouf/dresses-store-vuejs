<template>
  <section id="sserv">
    <div class="section-info">
      <h1>Services</h1>
      <p>what we provide</p>
    </div>

    <div id="services">
      <div class="container">
        <center>
          <div class="row">
            <div class="card col-md-4">
              <div class="content">
                <h2>party dresess</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, aperiam.
                </p>
                <a href="">Read more</a>
              </div>
            </div>
            <div class="card  col-md-4">
              <div class="content">
                <h2>outside dresses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, aperiam.
                </p>
                <a href="">Read more</a>
              </div>
            </div>
            <div class="card  col-md-4">
              <div class="content">
                <h2>zaffa dresses</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, aperiam.
                </p>
                <a href="">Read more</a>
              </div>
            </div>
           
          </div>
        </center>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
};
</script>

<style scoped>
/* #sserv {
  background: linear-gradient(0deg, #fff, 70%, #34c28c);
  border-radius: 20%;
} */

#services {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
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
.container {
  max-width: 1000px;
  position: relative;
  display: flex;
  justify-content: center;
  transition: 0.5s;
}
.container .card {
  position: relative;
  width: 250px;
  height: 300px;
  background: rgb(199, 199, 204);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}
.container:hover .card {
  filter: blur(5px);
  transform: scale(0.7);
}
.container .card:hover {
  filter: blur(0px);
  transform: scale(1);
}
.container .card::before {
  content: "";
  position: absolute;
  width: 100%;
  background: #fff;
  z-index: 1;
  transition: 0.5s;
}
.container .card:hover {
  background: linear-gradient(0deg, #fff, 70%, #34c28c);
  transform: scaleY(1.15);
  box-shadow: 0 40px 80px rgb(0, 0, 0, 1);
}
.container .card .content {
  text-align: center;
  z-index: 2;
  padding: 0 20px;
  transition: 0.5s;
}
.container .card:hover .content {
  color: rgb(51, 37, 184);
}
.container .card .content h2 {
  font-size: 3em;
}
.container .card .content p {
  font-size: 0.9em;
}
.container .card .content a {
  display: inline-block;
  margin-top: 15px;
  padding: 5px 10px;
  text-decoration: none;
  color: #fff;
  background: #262626;
}
.container .card:hover .content a {
  background: rgb(51, 37, 184);
}
@media only screen and (max-width: 770px) {
  .row {
    margin-left: 40px;
  }
}
</style>
