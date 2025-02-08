<template>
  <div>
    <NuxtLayout>
      <div class="container">
        <h1>Attractions</h1>
        <div class="description">
          From the urban splendor and beautiful beaches of Taniti City to the fiery caldera of Mount Taniti,
          our island has something for everyone to see!
        </div>

        <div class="attractions">
          <Attraction attraction="Taniti City" description="A beautiful city with beautiful beaches, Taniti City's exciting urban landscape is sure to spark joy."
                      img="/img/taniti_city.jpg" img-alt="Aerial view of Taniti City"
                      attribution="Asad, Ibrahim. March 27, 2015." attribution-link="https://commons.wikimedia.org/wiki/File:Male_City_Aerial,_The_Capital_city_of_Maldives_-_panoramio.jpg"
                      license="CC BY 3.0"/>

          <Attraction attraction="Taniti Rainforest" description="A mysterious, heavenly atmosphere makes this rainforest the ultimate hiking destination!"
                      img="/img/taniti_rainforest.jpg" img-alt="Aerial photo of Taniti Rainforest"
                      attribution="Moffat, Tim. February 16, 2013." attribution-link="https://www.flickr.com/photos/23510510@N03/8477162479"
                      license="CC BY 2.0"/>

          <Attraction attraction="Mount Taniti" description="This fiery beauty brought life to Taniti and continues to inspire awe in all those who visit it!"
                      img="/img/mount_taniti.jpg" img-alt="Fiery photo of Mount Taniti actively erupting"
                      attribution="Ignatius, Howard. January 28, 2018." attribution-link="https://www.flickr.com/photos/howardignatius/39053763465"
                      license="CC BY-NC-ND 2.0"/>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  margin: auto;
}

.container h1 {
  text-align: center;
}

.container .description {
  max-width: 50rem;
  margin: 1.5rem auto 4rem auto;
  text-align: center;
}

.attractions {
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
}
</style>

<script setup>
definePageMeta({
  title: 'About Taniti',
  layout: 'default',
})
</script>