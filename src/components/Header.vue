<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar variant="faded" type="light">
        <b-navbar-brand href="/" class="brand-logo">
          <img src="../img/kize-logo.png">
        </b-navbar-brand>
      </b-navbar>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <router-link
              to=""
              tag="b-nav-item"
            >
              <a>ANASAYFA</a>
            </router-link>
            <router-link
              to="/about"
              tag="b-nav-item"
            >
              <a>HAKKIMIZDA</a>
            </router-link>
            <router-link
              to="/services"
              tag="b-nav-item"
            >
              <a>HİZMETLERİMİZ</a>
            </router-link>
            <router-link
              to="/portfolio"
              tag="b-nav-item"
            >
              <a>PORTFOLYO</a>
            </router-link>
            <router-link
              to="/contact"
              tag="b-nav-item"
            >
              <a>İLETİŞİM</a>
            </router-link>
            <b-nav-form>
              <div class="navbar-border-left ml-3"></div>
              <a class="nav-link nav-link-icon ml-3 first-child" href="https://www.google.com" target="_blank">
                <img src="../img/facebook.svg" style="width: 25px;height:30px" alt="">
              </a>
              <a class="nav-link nav-link-icon" href="https://www.google.com" target="_blank">
                <img src="../img/twitter.svg" style="width: 25px;height:30px" alt="">
              </a>
              <a class="nav-link nav-link-icon" href="https://www.instagram.com/kizereklam/" target="_blank">
                <img src="../img/instagram.svg" style="width: 25px;height:30px" alt="">
              </a>
            </b-nav-form>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>


</template>
<script>

export default {}
</script>

<style></style>
