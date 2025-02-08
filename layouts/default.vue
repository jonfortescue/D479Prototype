<template>
  <div>
    <div id="page">
      <Navbar />
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
#page {
  min-height: 80vh;
}
</style>