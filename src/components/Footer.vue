<template>
  <b-col cols="12" class="p-5" style="background-color: #000000; color: #ffffff;">
    <hr style="background-color: #5b5b5b;">
    <b-row>
      <b-col md="6" sm="12">
        <b-row>
          <b-col md="6" sm="12">
            <h4>HAKKIMIZDA</h4>
            <p style="font-size: 12px">Sektörün artı ve eksi yönlerini bilen, müşterinin değişen ve gelişen taleplerini yerine getiren, gelişmiş teknolojik alt yapıya sahip deneyimli ekibimiz ile sektöre yenilikler getirmek için yola çıktık.</p>
            <img style="width: 200px;height: 80px" src="../img/kize-logo.png">
          </b-col>
          <b-col md="6" sm="12" class="footer-menu text-left">
            <router-link
              to="/"
            >
              <a>Ana Sayfa</a>
            </router-link>
            <router-link
              to="/about"
            >
              <a>Hakkımızda</a>
            </router-link>
            <router-link
              to="/services"
            >
              <a>Hizmetlerimiz</a>
            </router-link>
            <router-link
              to="/portfolio"
            >
              <a>Portfolyo</a>
            </router-link>
            <router-link
              to="/contact"
            >
              <a>İletişim</a>
            </router-link>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="6" sm="12">
        <b-row>
          <b-col md="8" sm="12" class="footer-news" style="padding: 0 0 0 10rem">
            <p class="news-title text-left">EMAİL BÜLTENİ</p>
            <p class="news-desc text-left">En yeni ürünlerimiz ve tüm gelişmelerden haberdar olmak için mail listemize kayıt olun.</p>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group
                id="input-group-1"
                label-for="input-1"
              >
                <b-form-input
                  style="border-radius: 20px"
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>
            </b-form>
            <div style="text-align: left">
              <b-button href="/contact" class="footer-button" type="submit" size="md" pill>Kayıt Ol</b-button>
            </div>
          </b-col>
          <b-col md="4" sm="12">
            <b-row class="social-group">
              <a class="nav-link nav-link-icon" href="https://www.google.com" target="_blank">
                <img src="../img/facebook.svg" style="width: 25px;height:30px" alt="">
              </a>
              <a class="nav-link nav-link-icon" href="https://www.google.com" target="_blank">
                <img src="../img/twitter.svg" style="width: 25px;height:30px" alt="">
              </a>
              <a class="nav-link nav-link-icon" href="https://www.google.com" target="_blank">
                <img src="../img/instagram.svg" style="width: 25px;height:30px" alt="">
              </a>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <hr style="background-color: #5b5b5b;">
    <b-col cols="12">
      <b-row>
        <b-col cols="6" class="p-0">
          <div>
            ARTIK BİZ VARIZ.
          </div>
        </b-col>
        <b-col cols="6" class="p-0">
          <div class="float-right">
            Copyright SouldyTech 2020 ©
          </div>
        </b-col>
      </b-row>
    </b-col>
  </b-col>
</template>


<script>
export default {
  data() {
    return {
      show: false,
    }
  }
}
</script>

<style></style>
