<template>
  <footer>
    <div class="footer-container">
      <div class="links">
        <h2 class="title-logo">
          <NuxtLink href="/" rel="me">Taniti</NuxtLink>
        </h2>
        <div class="menu">
          <div class="socials">
            <NuxtLink href="#">
              <Icon name="fa6-brands:bluesky"/>
            </NuxtLink>
            <NuxtLink href="#">
              <Icon name="fa6-brands:tumblr"/>
            </NuxtLink>
            <NuxtLink href="#">
              <Icon name="fa6-brands:signal-messenger"/>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      &copy; 2025 Taniti Bureau of Tourism
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  display: flex;
  justify-content: center;
  align-self: center;
  margin: 0.75rem auto;
  border-radius: 0.5rem;
  width: 80%;
}

.footer-container .links {
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

.socials {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  font-size: 1.5rem;
}

.links .menu {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.content {
  display: flex;
  justify-content: center;
  align-self: center;
  margin: 0.75rem auto;
  border-radius: 0.5rem;
  width: 80%;
  color: darkgray;
}
</style>
<script setup lang="ts">
</script>