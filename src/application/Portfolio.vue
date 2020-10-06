<template>
  <b-col cols="12" class="p-5 main-color">
    <b-container class="carousel-area">
      <b-col md="12" sm="6" class="text-center">
        <h2>Portfolyo</h2>
        <hr style="background-color: #5b5b5b;">
        <b-carousel
          class="carousel-area"
          id="carousel-1"
          v-model="slide"
          :interval="3000"
          fade
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide>
            <template v-slot:img>
              <div>
                <div>
                  <b-card-group deck>
                    <b-card img-src="https://res.cloudinary.com/dc96hlyst/image/upload/v1601057422/dogus_logo_gllzb8.png" img-alt="Image" img-top></b-card>
                    <b-card title="Title" img-src="https://res.cloudinary.com/dc96hlyst/image/upload/v1601057800/Adel-sirket_kapak_gorseli_ade573_gupq6f.png" img-alt="Image" img-top></b-card>
                  </b-card-group>
                </div>
              </div>
            </template>
          </b-carousel-slide>

          <!-- Slides with custom text -->

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        </b-carousel>
      </b-col>
      <b-col md="12" sm="6">
        <b-carousel
            class="carousel-area"
            id="carousel-1"
            v-model="slide2"
            :interval="3000"
            fade
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333; margin-top: 20px"
            @sliding-start="onSlideStart2"
            @sliding-end="onSlideEnd2"
        >
          <b-carousel-slide>
            <template v-slot:img>
              <div>
                <div>
                  <b-card-group deck>
                    <b-card img-src="https://res.cloudinary.com/dc96hlyst/image/upload/v1601058196/download_xtyqyy.jpg" img-alt="Image" img-top></b-card>
                    <b-card title="Title" img-src="https://res.cloudinary.com/dc96hlyst/image/upload/v1601992646/kizeLogo_400x400_iaj7vx.png" img-alt="Image" img-top></b-card>
                    <b-card title="Title" img-src="https://res.cloudinary.com/dc96hlyst/image/upload/v1601058279/5afd2559ef87217052018094649_eijilo.jpg" img-alt="Image" img-top></b-card>
                  </b-card-group>
                </div>
              </div>
            </template>
          </b-carousel-slide>
        </b-carousel>
      </b-col>
    </b-container>
  </b-col>
</template>


<script>
</script>



<style src="./Portfolio.css" lang="css" ></style>
