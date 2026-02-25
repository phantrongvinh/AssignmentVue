<template>
  <a class="row my-4 text-decoration-none" v-for="author in authors">
    <div class="col-lg-4 h-100">
      <img
        :src="`/public/images/${author.img}`"
        alt=""
        class="img-fluid w-100 rounded-circle"
      />
    </div>
    <div
      class="col-lg-8 text-dark h-100 d-flex flex-column justify-content-center"
    >
      <h5 class="fw-semibold fs-5">{{ author.nickname }}</h5>
      <div class="card-text text-muted">{{ author.description }}</div>
    </div>
  </a>
</template>

<script setup>
defineProps(["authors"]);
</script>

<style scoped></style>
