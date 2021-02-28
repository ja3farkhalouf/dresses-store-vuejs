<template>
  <section id="about">
    <div class="section-info">
      <h1>About</h1>
      <p>this is our story</p>
    </div>
    <section class="ss">
      <div class="circle circle1">
        <img src="../assets/pexels-photo-1078958.jpeg" alt="" />
      </div>
      <div class="circle circle2">
        <img src="../assets/pexels-photo-3767359.jpeg" alt="" />
      </div>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima sequi
          velit dolorum maiores. Adipisci cumque vitae, iusto est ullam libero
          molestias! Velit, quidem? Libero earum repudiandae, itaque omnis
          dolore, corporis ab ratione nisi placeat excepturi inventore dolores
          harum magnam culpa facilis architecto quam quisquam aut et recusandae
          veniam temporibus molestias ipsa. Sed laborum fuga cum delectus
          accusamus consequatur pariatur quis ipsa quisquam? Repudiandae
          architecto cupiditate fuga tenetur tempore, ea consequatur provident
          debitis accusamus voluptatem reiciendis minus odio ipsa eius labore
          aperiam quos, deserunt ex, nesciunt delectus! Nisi mollitia voluptatum
          minima quaerat, deserunt harum, explicabo ad labore sequi veniam
          asperiores error possimus provident qui dolorum in et cumque quasi
          nostrum! Tempora aliquam quos omnis fuga, vel quae veniam nemo nihil
          vero numquam, maxime, iusto debitis sit excepturi reprehenderit! Vel a
          dicta est architecto cupiditate quasi at velit ipsum. Autem quod
          voluptatem quae nihil consectetur ex possimus! Adipisci expedita velit
          facere quidem illum nesciunt nostrum, culpa, doloremque amet
          cupiditate nam quia aut corrupti. Corporis rerum tempore pariatur
          provident nesciunt sit facere deserunt esse perferendis in? Quos
          adipisci distinctio eligendi delectus magnam laboriosam, expedita
          molestias reprehenderit dignissimos modi fuga id natus! Totam eius
          aperiam nihil consequatur numquam atque placeat iste, laborum rem
          debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
          voluptates sunt aliquid atque tempore nemo possimus fugit et nostrum
          qui corrupti sit, voluptatibus hic rem at perspiciatis quam eaque
          cupiditate dolorem voluptas, incidunt provident omnis magni. Totam,
          libero repellendus, iste hic iure perferendis velit molestias laborum
          nesciunt temporibus illo! Tempora assumenda, illo recusandae ratione
          quis mollitia eius eveniet saepe commodi minus velit, iure
          necessitatibus similique rem asperiores! Nihil fuga asperiores
          veritatis facere fugit accusantium quibusdam ipsam maxime deserunt?
          Quia veniam unde cum, porro ex placeat pariatur est commodi adipisci
          laudantium, nesciunt sequi iusto perspiciatis impedit veritatis
          asperiores, repellat id repudiandae? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Velit consectetur quidem ab praesentium
          iusto repellendus, ducimus nam? Illum voluptas a fuga facilis rem id
          veritatis expedita cum error laborum, est, non distinctio deleniti
          asperiores suscipit voluptates quibusdam. Assumenda, itaque tempora
          eos atque ullam asperiores saepe suscipit officiis beatae est, ut iure
          a adipisci natus! Aspernatur fugiat qui, nihil quod expedita nam
          nesciunt ea quo a consequatur,
        </p>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
#about {
  padding: 100px 50px;
  background-image: url("../assets/image.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: fixed;
  overflow: hidden;
  clip-path: polygon(40% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0);
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
.ss {
  position: relative;
  width: 100%;
  padding: 50px;
  overflow: hidden;
}
.circle {
  position: relative;
  overflow: hidden;
}
.circle img {
  position: absolute;
  top: 0;
  left: 0%;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.circle.circle1 {
  width: 500px;
  height: 500px;
  float: left;
  border-radius: 50%;
  margin: 20px;
  shape-outside: circle();
}

.ss p {
  color: #000;
  font-weight: bold;
}
.circle.circle2 {
  width: 300px;
  height: 300px;
  float: right;
  border-radius: 50%;
  margin: 20px;
  shape-outside: circle();
}
@media only screen and (max-width: 770px) {
  #about {
    background-image: none;
  }
}
</style>
