<template>
  <div>
    <NuxtLayout>
      <div class="container">
        <h1>About</h1>
        <div class="description">
          Taniti is a small Pacific island nation. We have a rich history and culture and would be delighted to welcome
          you to our island for your vacation, honeymoon, or even wedding! Enjoy our delicious local cuisine and breathtaking
          beaches to your heart's content. Taniti is the place to be!
        </div>

        <div class="faq">
          <div class="header">
            <h2>FAQ</h2>
          </div>
          <div class="questions">
            <div class="question">
              <h3>Where is Taniti?</h3>
              <div class="answer">
                Taniti is an island nation located in the southern Pacific Ocean. We are about 500 kilometers
                to the northwest of French Polynesia!
              </div>
            </div>

            <div class="question">
              <h3>What languages do people speak in Taniti?</h3>
              <div class="answer">
                While the national language of Taniti is Tanitian (an Austronesian language), many young Tanitians speak
                English, especially in urban areas. We recommend bringing a Tanitian-speaking guide with you if you plan
                to venture out to the more rural areas of Taniti as many people there speak only Tanitian.
              </div>
            </div>

            <div class="question">
              <h3>Will businesses be open during the holidays?</h3>
              <div class="answer">
                Taniti enjoys a large number of national holidays (see the calendar on the official Tanitian government
                website <a href="#">here</a>) and businesses will frequently be closed on those days. Travellers
                should make sure to plan their trips accordingly!
              </div>
            </div>

            <div class="question">
              <h3>What are the rules around alcohol consumption?</h3>
              <div class="answer">
                Alcohol is legal on Taniti, but the sale or serving of alcohol between the hours of midnight and 9 am
                is prohibited on the island. Additionally, the drinking age is 18. We ask that you respect our local
                laws during your visit. Thank you!
              </div>
            </div>

            <div class="question">
              <h3>What currency is used on Taniti?</h3>
              <div class="answer">
                Taniti uses the American dollar (USD). Many businesses will also accept euros or Japanese yen and
                most businesses accept credit cards.
              </div>
            </div>

            <div class="question">
              <h3>What power outlet/current does Taniti use?</h3>
              <div class="answer">
                Power outlets on Taniti use 120 volt current and are US style (three-pronged).
              </div>
            </div>
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

.faq {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
}

.faq .header h2 {
  font-size: 3rem;
}

.question {
  margin-bottom: 3rem;
  max-width: 30rem;
}

.question h3 {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
}
</style>

<script setup>
definePageMeta({
  title: 'About Taniti',
  layout: 'default',
})
</script>