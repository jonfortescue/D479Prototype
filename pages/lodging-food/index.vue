<template>
  <div>
    <NuxtLayout>
      <div class="container">
        <h1>Lodging</h1>
        <div class="description">
          From budget hostels to a four-star resort, there are plenty of options for staying in Taniti! These are some
          of our favorite options, but make sure to check with a travel agency for the best deals and the stay that will
          best meet your needs!
        </div>
        <div class="attractions">
          <Attraction attraction="Taniti Grand Resort" description="A beautiful resort with rooms on the ocean and a plethora of amenities!"
                      img="/img/taniti_resort.jpg" img-alt="Gorgeous aerial shot of an oceanside resort"
                      attribution="Pauchok. May 9, 2014." attribution-link="https://www.goodfon.com/landscapes/wallpaper-ostrov-palmy-otel-okean.html"
                      license="CC BY-NC 4.0"/>

          <Attraction attraction="The Gold House" description="A beautiful high-rise hotel conveniently located in central Taniti City."
                      img="/img/taniti_hotel.jpg" img-alt="A tall gold-colored hotel."
                      attribution="Shamih, Easa. September 29, 2008." attribution-link="https://www.flickr.com/photos/eeko/2900288574"
                      license="CC BY 2.0"/>

          <Attraction attraction="Lighthouse Bed & Breakfast" description="A smaller bed-and-breakfast style hotel in an old lighthouse on Taniti's shore!"
                      img="/img/taniti_bnb.jpg" img-alt="A lighthouse bed and breakfast at night."
                      attribution="Thoeny, Peter. March 5, 2023." attribution-link="https://www.flickr.com/photos/peterthoeny/52726741886/in/photostream/"
                      license="CC BY-NC-SA 2.0"/>
        </div>

        <h1>Food</h1>
        <div class="description">
          The local cuisine is the star of the show in Taniti with five restaurants offering delectable seafood fare.
          There are also pan-Asian and American restaurants for those in need of comfort food.
        </div>
        <div class="attractions">
          <Attraction attraction="Under the Sea" description="A one-of-a-kind underwater dining experience with local fare."
                      img="/img/taniti_restaurant1.jpg" img-alt="Underwater restaurant with glass dome above"
                      attribution="Gillaspia, Daniel. March 22, 2018." attribution-link="https://www.flickr.com/photos/bayareaag/27087943638"
                      license="CC BY 2.0"/>

          <Attraction attraction="Beachside Bistro" description="An upscale restaurant with a gorgeous oceanfront view in Yellow Leaf Bay."
                      img="/img/taniti_restaurant2.jpg" img-alt="A table made in Taniti's Beachside Bistro."
                      attribution="Asad Photo Maldives. November 18, 2021." attribution-link="https://www.pexels.com/photo/tropical-dining-experience-in-maldives-resort-29346155/"
                      license="Pexels Free to Use License"/>

          <Attraction attraction="Sun Island Diner" description="Enjoy Tanitian classics with a view of the sea below you in this homey diner."
                      img="/img/taniti_restaurant3.jpg" img-alt="A restaurant lit with multiple colors stands on an oceanside dock."
                      attribution="bielyvlk. October 12, 2012." attribution-link="https://commons.wikimedia.org/wiki/File:Thai_Restaurant_-_Sun_Island_-_Maldives_-_panoramio.jpg"
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