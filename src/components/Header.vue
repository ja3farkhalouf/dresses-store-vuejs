<template>
  <section id="header">
    <div class="banner">
      <video autoplay muted loop>
        <source src="../assets/production ID_4517903.mp4" type="video/mp4" />
      </video>
      <h2>STORE</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.banner {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.banner .video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.banner h2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #fff, 50%, #e70691);
  font-size: 30vw;
  text-align: center;
  text-transform: uppercase;
  color: #000;
  line-height: 50vh;
  mix-blend-mode: screen;
}
</style>
