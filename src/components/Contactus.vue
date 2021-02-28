<template>
  <section id="contact">
    <div class="section-info">
      <h1>Get in touch</h1>
      <p style="color: aliceblue;">We are Available</p>
    </div>

    <div class="contact-row">
      <div class="contact-left-col">
        <img src="../assets/hero-img.png" alt="" />
      </div>
      <div class="contact-rigth-col">
        <form>
          <h2>connect with us:</h2>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <br />
          <textarea cols="40" rows="10" placeholder="message"></textarea>
          <br />
          <center><button class="c-btn">send</button></center>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contactus",
};
</script>

<style>
#contact {
  padding: 100px 50px;
  background: linear-gradient(160deg, #34c28c 45%, white 0%);
}
.contact-row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.contact-left-col {
  flex-basis: 50%;
}
.contact-right-col {
  flex-basis: 50%;
}
.contact-right-col form {
  text-align: center;
}
.contact-right-col form h2 {
  margin-bottom: 20px;
}
.contact-rigth-col form input {
  box-sizing: border-box;

  border: none;
  border-bottom: 2px solid red;
  font-size: 15px;
  transition: 3s;
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
}
.contact-row .contact-left-col img {
  width: 400px;
  height: 600px;
}
.contact-rigth-col form input:hover {
  border-bottom: 4px solid #aeda10;
  color: #16a085;
  transition: 0.1s;
}
.contact-rigth-col form textarea {
  box-sizing: border-box;

  border-bottom: 2px solid red;
  font-size: 15px;
  transition: 3s;
  width: 80%;
  padding: 10px;
}
.c-btn {
  padding: 10px 20px;
  background: #34c28c;
  color: #000;
  font-weight: bold;
}
.c-btn:hover {
  padding: 10px 20px;
  background: #aeda10;
  color: #000;
  font-weight: bold;
  transition: 0.3s ease-in-out;
}
.contact-rigth-col form textarea:hover {
  border-bottom: 4px solid #aeda10;
  color: #16a085;
  transition: 0.1s;
}
</style>
