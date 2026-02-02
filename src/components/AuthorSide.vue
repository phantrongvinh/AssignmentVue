<template>
  <a class="row my-4 text-decoration-none" v-for="user in users">
    <div class="col-lg-4 h-100">
      <img
        :src="`/public/images/${user.img}`"
        alt=""
        class="img-fluid w-100 rounded-circle"
      />
    </div>
    <div
      class="col-lg-8 text-dark h-100 d-flex flex-column justify-content-center"
    >
      <h5 class="fw-semibold fs-5">{{ user.nickname }}</h5>
      <div class="card-text text-muted">{{ user.status }}</div>
    </div>
  </a>
</template>

<script setup>
defineProps(["users"]);
</script>

<style scoped></style>
