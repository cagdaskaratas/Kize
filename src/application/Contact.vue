<template>
  <b-col cols="12" sm="12" class="p-5 main-color">
    <b-container>
      <b-col cols="12" class="text-center">
        <h2>İLETİŞİM</h2>
        <hr style="background-color: #5b5b5b;">
        <div v-if="show_contact == true">

          <div v-if="contact_notice !=''" class="alert alert-warning">
            There was a problem submitting your message {{contact_notice}}
          </div>

          <b-form>
            <label style="float: left">AD SOYAD</label>
            <b-form-input
              id="name"
              v-model="contact_name"
              type="text"
              required
              placeholder=""
              class="mb-4"
            >
            </b-form-input>
              <label style="float: left">EMAİL ADRESİNİZ</label>
              <b-form-input
                id="emailSignup"
                v-model="contact_email"
                type="email"
                required
                placeholder="example@gmail.com"
                class="mb-4"
              >
              </b-form-input>
            <label style="float: left">TELEFON NUMARANIZ</label>
            <b-form-input
              id="name"
              v-model="contact_number"
              type="text"
              required
              placeholder="(053*)"
              class="mb-4"
            >
            </b-form-input>

              <div class="mt-4">
                <label style="float: left">MESAJINIZ</label>
                <b-form-textarea
                  id="textarea"
                  v-model="contact_message"
                  placeholder="....."
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </div>
            <div class="verification-area">
              <form @submit.prevent="sendContactMessage()">
                  <vue-recaptcha @verify="markRecaptchaAsVerified"
                                 sitekey="6LexFdYZAAAAAE9NYklt9W1ps8jsiQheENIGlxCH">
                  </vue-recaptcha>
                <div><strong>{{ loginForm.pleaseTickRecaptchaMessage }}</strong></div>
                <b-button class="mt-3" type="submit" variant="primary">GÖNDER</b-button>
              </form>
            </div>
            <b-col cols="12" class="pt-4">
              <b-row>
                <b-col md="4" sm="12">
                  <b-icon class="mr-2" icon="house-fill" aria-hidden="true"></b-icon>
                  <p>Kize Reklam Sanayi Ticaret Limited Şirketi Ferhatpaşa Mahallesi G-35 Sokak No:16/18 A Ataşehir/Istanbul</p>
                </b-col>
                <b-col md="4" sm="12">
                  <b-icon class="mr-2" icon="envelope-open" aria-hidden="true"></b-icon>
                  <p>burak@kizereklam.com</p>
                  <p>info@kize.com</p>
                </b-col>
                <b-col md="4" sm="12">
                  <b-icon class="mr-2" icon="telephone-fill" aria-hidden="true"></b-icon>
                  <p>M : +90 551 417 24 01 </p>
                  <p>T : +90 216 661 13 11 </p>
                  <p></p>
                </b-col>
              </b-row>
            </b-col>
            <p>{{ message }}</p>
          </b-form>
        </div>
        <div v-else>
          <h3>MESAJINIZ BAŞARILI BİR ŞEKİLDE GÖNDERİLMİŞTİR! İLGİLİ BİRİMİMİZ SİZİNLE EN KISA SÜREDE İLETİŞİME GEÇECEKTİR.</h3>
        </div>
      </b-col>
    </b-container>
    </b-col>
</template>


<script>
import { Auth } from '../firebase/auth.js'
import VueRecaptcha from 'vue-recaptcha';

export default {
  components: { VueRecaptcha },
  data() {
    return {
        name: '',
        email: '',
        message: '',
        show_contact: true,
        contact_email: '' ,
        contact_message: '',
        contact_notice: '',
        contact_name: '',
        contact_number: '',
        recaptcha: null,
      loginForm: {
        recaptchaVerified: false,
        pleaseTickRecaptchaMessage: ''
      }
    }
  },
  methods: {
     addEmail(email) {
      var noticeMessage = "hello world"
       Auth. createUserWithEmailAndPassword(email, 'password').catch(function (error){
        if (error.code != "auth/email-already-in-use") {
          noticeMessage = error.message
        }
      });
      this.message = noticeMessage;
      this.email = '';
      this.contact_name = '';
      this.contact_number = '';
    },
    sendContactMessage() {
       console.log(this.contact_name)
      if (!this.loginForm.recaptchaVerified) {
        this.loginForm.pleaseTickRecaptchaMessage = 'Lütfen robot olmadığınızı doğrulayın.';
        return true; // prevent form from submitting
      }
      if (!(this.contact_email)){
        this.contact_notice = "The email adress is badly formatted.";
      } else if (this.contact_message.length < 10) {
        this.contact_notice = "Your message is too short";
      } else {
        const url = `https://us-central1-kize-5c3f7.cloudfunctions.net/sendEmail?email_from=${this.contact_email}&message=${this.contact_message}&name=${this.contact_name}&number=${this.contact_number}`
        const requestOptions = {
          method: "GET",
          headers: { "Content-Type": "application/json"}
        };
        fetch(url, requestOptions);
        this.show_contact = false;
      }
    },
    markRecaptchaAsVerified() {
      this.loginForm.pleaseTickRecaptchaMessage = '';
      this.loginForm.recaptchaVerified = true;
    },
  },
}
</script>



<style></style>
