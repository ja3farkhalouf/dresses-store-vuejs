<template>
  <div class="nn">
    <div class="upper-bar">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <i class="fa fa-phone"></i> 963994335985 ,
            <i class="fa fa-envelope-o"></i> jaafar.com
          </div>
          <div class="col-sm text-right">
            lets work togather
          </div>
        </div>
      </div>
    </div>

    <!--end upper power-->
    <!--start navbar-->
    <nav class="navbar navbar-expand-lg navbar-light ">
      <a class="navbar-brand" href="#">
        <span>Dresses</span><span>Store</span>
        <!-- start toast only code html -->
        <b-button @click="$bvToast.show('my-toast')" id="b-btn"
          >show all updates im store</b-button
        >

        <b-toast id="my-toast" variant="warning" solid>
          <template #toast-title>
            <div class="d-flex flex-grow-1 align-items-baseline">
              <!-- <b-img blank blank-color="#ff5555" class="mr-2" width="12" height="12"></b-img> -->
              <strong class="mr-auto">Notice!</strong>
              <small class="text-muted mr-2">42 seconds ago</small>
            </div>
          </template>
          <div class="text-center">
            <b-spinner label="Spinning"></b-spinner>
            <b-spinner type="grow" label="Spinning"></b-spinner>
            <b-spinner variant="primary" label="Spinning"></b-spinner>
            <b-spinner
              variant="primary"
              type="grow"
              label="Spinning"
            ></b-spinner>
            <h1>thers is allot new products in store</h1>
            <b-spinner variant="success" label="Spinning"></b-spinner>
            <b-spinner
              variant="success"
              type="grow"
              label="Spinning"
            ></b-spinner>
          </div>
        </b-toast>
        <b-toast id="my-toast" variant="warning" solid>
          <template #toast-title>
            <div class="d-flex flex-grow-1 align-items-baseline">
              <!-- <b-img blank blank-color="#ff5555" class="mr-2" width="12" height="12"></b-img> -->
              <strong class="mr-auto">Notice!</strong>
              <small class="text-muted mr-2">42 seconds ago</small>
            </div>
          </template>
          <div class="text-center">
            <b-spinner label="Spinning"></b-spinner>
            <b-spinner type="grow" label="Spinning"></b-spinner>
            <b-spinner variant="primary" label="Spinning"></b-spinner>
            <b-spinner
              variant="primary"
              type="grow"
              label="Spinning"
            ></b-spinner>
            <h1>thers is allot new products in store</h1>
            <b-spinner variant="success" label="Spinning"></b-spinner>
            <b-spinner
              variant="success"
              type="grow"
              label="Spinning"
            ></b-spinner>
          </div>
        </b-toast>
        <!-- end toast only code html -->
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#main-nav"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse  navbar-collapse" id="main-nav">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item ">
            <a class="nav-link" href="#"
              ><router-link to="/">Home</router-link>
              <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#"
              ><router-link to="/Register">register</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link to="/Profile/null/null">Profile</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"
              ><router-link to="/Login">Login</router-link></a
            >
          </li>
          
        </ul>
      </div>
    </nav>
  </div>
  <!--end navbar-->
</template>

<script>
export default {};
</script>

<style scoped>
.upper-bar {
  background-color: rgb(33 33 228);
  color: #fff;
  padding: 10px;
}
#b-btn {
  margin-left: 20px;
  border-radius: 20%;
  color: #fff;
  background-color: rgb(51, 37, 184);
  
}
#b-btn:hover {
  background-color: orange;
  color: #fff;
    opacity: 1.8;
    box-shadow: 0 8px 100px rgba(0, 0, 0, 20);
    transition: 0.4s ease;
}

.navbar > .container,
.navbar > .container-fluid {
  margin: 10px 20px;
}
.navbar-brand span:first-child {
  font-weight: 900;
  font-size: 40px;

  color: rgb(51, 37, 184);
}
.navbar-light .navbar-toggler {
  box-shadow: 0 5px 6px rgb(0 0 0);
}
.navbar-brand span:last-child {
  color: rgb(253, 10, 10);
  font-weight: 900;
}
a {
  font-size: 20px;
  color: #000;
  font-weight: 900;
}
.collapse li a:hover {
  background-color: rgb(51, 37, 184);
  color: #fff;
    opacity: 1.8;
    box-shadow: 0 8px 100px rgba(0, 0, 0, 20);
    transition: 0.4s ease;
}
a:hover {
  color: red;
  text-decoration: none;
}
.navbar-nav .nav-link {
  text-transform: uppercase;
  font-size: 15px;
  margin-left: 20px;
  font-weight: bold;
}
.navbar-nav .router-link-exact-active {
  color: red;
}
</style>
