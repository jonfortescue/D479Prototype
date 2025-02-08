<template>
  <div>
    <NuxtLayout>
      <div class="container">
        <div class="column">
          <h1>Getting Here</h1>
          <div class="description">
            Taniti is accessible either by <b>airplane</b> or by <b>cruise ship</b>.

            <h2>Air</h2>
            Taniti has a small airport that regularly accepts flights from Jakarta, Singapore, and other island airports.
            We are actively working on expanding the airport to make it possible to land larger planes on the island.
            Please look forward to more direct flights to Taniti in the future!

            <h2>Ship</h2>
            The <i>Epic</i> cruise liner docks in Yellow Leaf Bay one night per week. This is a fantastic way to get to
            Taniti if you're interested in seeing other islands in the South Pacific as well!

            <h2>Visa Information</h2>
            Travel to Taniti is visa free except for citizens of North Korea and France. If you are from one of those
            countries, you may apply for a visa at your local embassy or consulate.
          </div>
        </div>
        <div class="column">
          <h1>Getting Around</h1>
          <div class="description">
            Taniti is a small island. Guests staying in Taniti City may find it easiest to simply walk, bike, or make use of the
            city's excellent public transportation. For guests wanting to venture further out, renting a car can be a
            fantastic option to see some of Taniti's sights on your own time.

            <h2>By Foot & Public Transit</h2>
            Taniti City's public buses run from 5 am to 11 pm every day. Taniti City itself is fairly flat and highly walkable,
            but for longer trips, the buses are an affordable option.

            <h2>Biking</h2>
            Biking is a fantastic way to enjoy Taniti's scenery and fresh ocean breeze. Bikes and helmets are available for rent
            several vendors throughout the island. Helmets are required by law, so please ensure you wear one while biking.

            <h2>Private Buses</h2>
            There are a number of private buses available that have routes going to every major destination outside of
            Taniti City proper. To book one of these, please <NuxtLink to="/book">contact a travel agency</NuxtLink>.

            <h2>Rental Car</h2>
            A rental car agency can be found near the airport. Getting around by car is a great way to explore some of the
            more far-flung destinations Taniti has to offer!
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.container h1 {
  text-align: center;
}

.container .description {
  max-width: 40rem;
  margin: 1.5rem auto 4rem auto;
  text-align: center;
}

.description h2 {
  margin: 1.5rem auto 0.5rem auto;
}

a {
  color: dodgerblue;
}
a:hover {
  text-decoration-line: underline;
}
</style>

<script setup>
definePageMeta({
  title: 'About Taniti',
  layout: 'default',
})
</script>