<template>
  <nav>
    <div class="content">
      <h2 class="title-logo">
        <NuxtLink href="/" rel="me">Taniti</NuxtLink>
      </h2>
      <div class="menu">
        <div class="nav-links">
          <NuxtLink href="/about" rel="me">About</NuxtLink>
          <NuxtLink href="/attractions" rel="me">Attractions</NuxtLink>
          <NuxtLink href="/lodging-food" rel="me">Lodging & Food</NuxtLink>
          <NuxtLink href="/transportation" rel="me">Transportation</NuxtLink>
          <NuxtLink href="/book" rel="me"><span class="button">Book Your Trip!</span></NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-self: center;
  margin: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  width: 100%;
}

nav .content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.75rem 1.5rem;
}

a {
  color: black;
  text-decoration-line: none;
}

a:visited {
  color: black;
  text-decoration-line: none;
}

a:hover {
  filter: drop-shadow(0 0 0.5rem #000000AA);
}

.nav-links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
}

.content .menu {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.button {
  background-color: black;
  color: white;
  border-radius: 0.5rem;
  padding: 0.75rem;
}
</style>
<script setup lang="ts">
</script>