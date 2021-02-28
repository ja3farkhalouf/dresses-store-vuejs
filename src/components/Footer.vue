<template>
    <footer class = "footer container">
      <div class = "row">
        <div class = "col">
          <h3 class = "footer-title">about</h3>
          <p class = "text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quia, magnam et deleniti similique voluptates nulla iusto temporibus veritatis asperiores consectetur quidem doloremque id possimus!</p>
          <div class = "social-links">
            <a href = "#"><i class = "fa fa-twitter"></i></a>
            <a href = "#"><i class = "fa fa-facebook"></i></a>
            <a href = "#"><i class = "fa fa-instagram"></i></a>
          </div>
        </div>

        <div class = "col">
          <h3 class = "footer-title">links</h3>
          <div class = "footer-links">
            <a href = "#" class = "text">
              <i class = "fa fa-home"></i>
              home
            </a>
            <a href = "#" class = "text">
              <b-icon icon="back" aria-hidden="true"></b-icon>
              about
            </a>
            <a href = "#" class = "text">
              <b-icon icon="calendar2-event" aria-hidden="true"></b-icon>
              services
            </a>
            <a href = "#" class = "text">
              <i class = "fa fa-envelope"></i>
              contact
            </a>
          </div>
        </div>

        <div class = "col">
          <h3 class = "footer-title">more</h3>
          <div class = "footer-links">
            <a href = "#" class = "text">
              <b-icon icon="circle-fill" animation="throb" font-scale="2"></b-icon>
              web design
            </a>
            <a href = "#" class = "text">
              <b-icon icon="circle-fill" animation="throb" font-scale="2"></b-icon>
              web development
            </a>
            <a href = "#" class = "text">
              <b-icon icon="circle-fill" animation="throb" font-scale="2"></b-icon>
              business strategy
            </a>
            <a href = "#" class = "text">
             <b-icon icon="circle-fill" animation="throb" font-scale="2"></b-icon>
              graphics design
            </a>
          </div>
        </div>

        <div class = "col">
          <h3 class = "footer-title">have a question?</h3>
          <div>
            <span>
              <i class = "fa fa-map-marker-alt"></i>
            </span>
            <span class = "text">Alzahraa Street  homs, syria</span>
          </div>

          <div>
            <span>
              <i class = "fa fa-phone"></i>
            </span>
            <span class = "text"> +963994335985</span>
          </div>

          <div>
            <span>
              <i class = "fa fa-envelope"></i>
            </span>
            <span class = "text">  jafar.khalouf1996@gmail.com</span>
          </div>
        </div>
      </div>

      <div class = "footer-text">
        <p class = "text">Copyright &copy; 2021 All rights reserved | jaafar khalouf</p>
      </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',

}
</script>

<style scoped>
.footer{
    position: relative;
    z-index: 9999;
    padding: 2.5rem 0;
    border-top: 1.5px solid #000000;
    background: rgb(255, 255, 255);
    width: 100%;
    
}
.footer-title{
    text-transform: capitalize;
    font-size: 1.3rem;
    font-family: var(--poppins);
    font-weight: 700;
}
.footer .col{
    text-align: center;
    padding: 1rem 0;
}
.footer .col:first-child .text{
    width: 80%;
    margin: 0 auto;
}
.social-links{
    display: flex;
    justify-content: center;
}
.social-links a{
    background: var(--nero);
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 1.5rem 0.5rem;
    transition: var(--transition);
}
.social-links a:hover{
    background: var(--green);
}
.footer-links a{
    display: block;
    text-transform: capitalize;
    padding: 0.2rem 0;
    transition: var(--transition);
}

.footer-links a:hover{
    color: rgb(255, 0, 0);
    text-decoration: none;
}
.footer .col:last-child div{
    padding: 0.2rem 0;
}

.footer-text .text{
    text-align: center;
}
@media screen and (min-width: 768px){
    /* footer */
    .footer .row{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }



}

</style>