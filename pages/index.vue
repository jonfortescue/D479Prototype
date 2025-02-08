<script setup lang="ts">
const attractions = [
  {
    title: 'Taniti City',
    description: "Native architecture and beautiful beaches",
    image: '/img/taniti_city.jpg',
    imageAlt: 'Aerial photo of Taniti City',
    attribution: 'Asad, Ibrahim. March 27, 2015.',
    link: 'https://commons.wikimedia.org/wiki/File:Male_City_Aerial,_The_Capital_city_of_Maldives_-_panoramio.jpg',
    license: 'CC BY 3.0'
  },
  {
    title: 'Taniti Rainforest',
    description: "The perfect hiking destination",
    image: '/img/taniti_rainforest.jpg',
    imageAlt: 'Aerial photo of Taniti Rainforest',
    attribution: 'Moffat, Tim. February 16, 2013.',
    link: 'https://www.flickr.com/photos/23510510@N03/8477162479',
    license: 'CC BY 2.0'
  },
  {
    title: 'Mount Taniti',
    description: "An active volcano and the mother of Taniti",
    image: '/img/mount_taniti.jpg',
    imageAlt: 'Fiery photo of Mount Taniti actively erupting',
    attribution: 'Ignatius, Howard. January 28, 2018.',
    link: 'https://www.flickr.com/photos/howardignatius/39053763465',
    license: 'CC BY-NC-ND 2.0'
  }
];

definePageMeta({
  title: 'Visit Taniti',
  layout: 'default',
})
</script>

<template>
  <div>
    <NuxtLayout>
      <div class="carousel-container">
        <UCarousel
            v-slot="{ item }"
            loop
            dots
            :autoplay="{ delay: 3000 }"
            :items="attractions"
            :ui="{ item: 'basis-full' }"
            class="ucarousel">
          <div class="carousel">
            <div class="carousel-image">
              <img :src="item.image" :alt="item.imageAlt" />
              <div class="carousel-caption">
                {{ item.attribution }} <NuxtLink :to="item.link" class="special-link" target="_blank">Link</NuxtLink>. Accessed on February 7, 2025. ({{ item.license }})
              </div>
            </div>
            <div class="carousel-description">
              <h1>{{ item.title }}</h1>
              <div>
                {{ item.description }}
              </div>
            </div>
          </div>
        </UCarousel>
      </div>

      <div class="testimonial-section">
        <div class="testimonial">
          <div class="quote">
            Taniti was everything I wanted it to be and more. Our honeymoon was made all the more magical for it!
          </div>
          <div class="quotee">
            Liz Rugbrian
          </div>
        </div>
        <div class="testimonial">
          <div class="quote">
            Could there be a more perfect island? I don't think so!
          </div>
          <div class="quotee">
            Matt Morgerberger
          </div>
        </div>
        <div class="testimonial">
          <div class="quote">
            It's a-me, Mario!
          </div>
          <div class="quotee">
            Mario
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.carousel-container {
  width: 75%;
  margin: auto;
}

.ucarousel {
  width: 100%;
  margin: auto;
  text-align: center;
}

.carousel {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 5rem;
  margin: 7.5rem auto;
}

.carousel-description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
}

.carousel-image {
  width: 500px;
}

.carousel-image img {
  width: 500px;
}

.testimonial-section {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  margin: 2.5rem auto;
}

.testimonial {
  max-width: 20rem;
  margin: auto 0;
}

.quote {
  font-size: 1.3em;
  padding: 2rem 0;
}

.quotee {
  font-style: italic;
}

a {
  color: deepskyblue;
}
a:visited {
  color: deepskyblue;
}
a:hover {
  color: deepskyblue;
  text-decoration-line: underline;
}
</style>