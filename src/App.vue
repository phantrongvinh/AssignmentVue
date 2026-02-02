<template>
  <Header></Header>
  <Navbar></Navbar>

  <div id="main" class="container my-5">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>

  <Footer></Footer>
</template>

<script setup>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
</script>

<style scoped></style>
