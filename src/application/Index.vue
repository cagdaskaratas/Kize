<template>
  <div>
    <div>
      <b-carousel
        id="carousel-fade"
        v-model="slide"
        :interval="5000"
        controls
        indicators
        fade
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- 1 -->
        <b-carousel-slide img-src="https://res.cloudinary.com/dc96hlyst/image/upload/v1601400614/slider-1_copy_uvfaf6.jpg"></b-carousel-slide>

        <!-- 2 -->
        <b-carousel-slide img-src="https://res.cloudinary.com/dc96hlyst/image/upload/v1601401573/slider-2_copy_f8lofl.jpg"></b-carousel-slide>

        <!-- 3 -->
        <b-carousel-slide img-src="https://res.cloudinary.com/dc96hlyst/image/upload/v1601401908/slider-3_copy_lx10lz.jpg"></b-carousel-slide>

        <!-- 4 -->
        <b-carousel-slide img-src="https://res.cloudinary.com/dc96hlyst/image/upload/v1601402329/slider-4_copy_flotwu.jpg"></b-carousel-slide>

      </b-carousel>
    </div>
    <b-col cols="12">
      <b-row>
        <b-col md="6" sm="12" class="d-none-area">
          <b-img src="https://res.cloudinary.com/dc96hlyst/image/upload/v1601398935/WhatsApp_Image_2020-09-29_at_19.00.16_plozug.jpg"></b-img>
        </b-col>
        <b-col md="6" sm="12" class="text-area">
          <div class="title">
            <p>YAKLAŞIK 15 YILLIK TECRÜBEMİZİ YENİ KURDUĞUMUZ <span style="color: #f5de00">KİZE REKLAM</span> FİRMAMIZ İLE SİZ REKLAM VERENLERİN HİZMETİNE SUNUYORUZ.</p>
          </div>
          <div class="description">
            <p>Sektörün artı ve eksi yönlerini bilen, müşterinin değişen ve gelişen taleplerini yerine getiren, gelişmiş teknolojik alt yapıya sahip deneyimli ekibimiz ile sektöre yenilikler getirmek için yola çıktık.</p>
            <p>Nitelikli hizmet için teknolojiyi önemsiyor ve ekibimizle beraber teknolojik yatırımlarımıza son hızla devam ediyoruz.</p>
          </div>
        </b-col>
      </b-row>
    </b-col>
    <b-col cols="12" class="services-bgc">
      <h2 class="pt-5" style="color:#f5de00; text-align: center">HİZMETLERİMİZ</h2>
      <p style="text-align: center; font-size: 18px;margin-bottom: 0">Kurumsal kimlik uygulamalarınızın her noktasında mobilya dahil çözüm üretir.</p>
      <p style="text-align: center;font-size: 18px">Üretimden montaja tüm aşamalarında yer alır.</p>
      <b-col cols="12" class="brand-table">
          <b-img src="https://res.cloudinary.com/dc96hlyst/image/upload/v1600268225/I%CC%87nfografik_eak1m0.png" fluid alt="Responsive image"></b-img>
      </b-col>
    </b-col>
    <b-col cols="12">
      <b-row>
        <b-col md="6" sm="12" class="footer-text-area">
          <h3>YENİ NESİL REKLAMCILIK DENEYİMİNİ YAŞAYIN</h3>
          <p>Girişimciyiz, Tecrübeliyiz</p>
          <p>Yenilikçiyiz, Yaratıcıyız</p>
          <p>Dürüstüz, Güveniliriz</p>
          <p>İş takibini iyi yapan</p>
          <p>Anında geri bildirim veren</p>
          <p>Sağlam ekip ile sağlam iş planına sahip olan KİZE REKLAM ile</p>
          <p>Sizde yeni bir deneyim yaşayın</p>
          <b-button pill size="sm" href="/portfolio">PORTFOLYO</b-button>
        </b-col>
        <b-col md="6" sm="12" class="p-0">
          <div>
            <b-carousel
              class="footer-sliding"
              id="carousel-fade"
              v-model="slide"
              :interval="5000"
              fade
              background="#ababab"
              style="text-shadow: 1px 1px 2px #333;"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <!-- 1 -->
              <b-carousel-slide img-src="https://res.cloudinary.com/dc96hlyst/image/upload/v1600279600/alt-slider-1_pecvtb.jpg"></b-carousel-slide>

              <!-- 2 -->
              <b-carousel-slide img-src="https://res.cloudinary.com/dc96hlyst/image/upload/v1600279621/alt-slider-2_o4fqji.jpg"></b-carousel-slide>

              <!-- 3 -->
              <b-carousel-slide img-src="https://res.cloudinary.com/dc96hlyst/image/upload/v1600279638/alt-slider-3_ikccn9.jpg"></b-carousel-slide>

              <!-- 4 -->
              <b-carousel-slide img-src="https://res.cloudinary.com/dc96hlyst/image/upload/v1600279658/alt-slider-4_fs40jj.jpg"></b-carousel-slide>

            </b-carousel>
          </div>
        </b-col>
        </b-row>
    </b-col>
    <b-col cols="12" class="footer-contact" style="background-color:#939291;">
      <div class="grey-area">
        <p>ARTIK SİZDE "BEN VARIM" DEYİN !</p>
        <b-button size="md" pill href="/contact">İLETİŞİM</b-button>
      </div>
    </b-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
    onSlideStart() {
      this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
}
</script>
