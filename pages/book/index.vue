<template>
  <div>
    <NuxtLayout>
      <div class="container">
        <h1>Book Your Trip!</h1>
        <div class="description">
          Fill out this form to get in touch with the official travel agency of Taniti: Taniti Tourist Travel Trainers (TTTT)!
        </div>
        <div class="form">
          <div>
            <input type="text" placeholder="Name"/>
          </div>
          <div>
            <input type="text" placeholder="Email"/>
          </div>
          <div>
            <textarea placeholder="Tell us about your trip!" rows="10"/>
          </div>
          <div>
            <button type="submit">Submit</button>
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
}

.container h1 {
  text-align: center;
}

.container .description {
  max-width: 50rem;
  margin: 1.5rem auto 4rem auto;
  text-align: center;
}

.container .form {
  max-width: 50rem;
  margin: 4rem auto 0 auto;
  text-align: center;
}

input {
  background-color: white;
  margin: 0.5rem;
  width: 20rem;
}
textarea {
  background-color: white;
  margin: 0.5rem;
  width: 20rem;
}

button {
  width: 20rem;
  background-color: black;
  color: white;
  border-radius: 0.5rem;
  padding: 0.75rem;
}
button:active {
  background-color: gray;
}

</style>

<script setup>
definePageMeta({
  title: 'About Taniti',
  layout: 'default',
})
</script>