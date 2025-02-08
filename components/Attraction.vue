<template>
  <div class="attraction">
    <h2>{{ attraction }}</h2>
    <div class="description">
      {{ description }}
    </div>
    <div class="image">
      <img :src="img" :alt="imgAlt"/>
      <div class="attribution">
        {{ attribution }} <a :href="attributionLink" target="_blank">Link</a> Accessed on February 7, 2025.
        ({{ license }})
      </div>
    </div>
  </div>
</template>

<style scoped>
.attraction {
  max-width: 20rem;
  text-align: center;
}

.image img {
  width: 500px;
  height: 300px;
  object-fit: cover;
}

a {
  color: dodgerblue;
}
a:visited {
  color: dodgerblue;
}
a:hover {
  color: dodgerblue;
  text-decoration-line: underline;
}
</style>

<script>
export default {
  props: {
    attraction: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false
    },
    img: {
      type: String,
      required: true
    },
    imgAlt: {
      type: String,
      required: false
    },
    attribution: {
      type: String,
      required: true
    },
    attributionLink: {
      type: String,
      required: true
    },
    license: {
      type: String,
      required: true
    }
  }
}
</script>