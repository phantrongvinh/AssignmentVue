<template>
  <div
    v-if="wrapperClass"
    :class="wrapperClass"
    v-for="blogItem in blogItems"
    :key="blogItem.blogID"
  >
    <RouterLink
      :to="`/blogs/detail/${blogItem.blogID}`"
      class="text-decoration-none"
    >
      <div
        class="card w-100 border-0 mb-4 blog-detail-hover"
        :class="backGround"
      >
        <div class="ratio ratio-4x3">
          <img
            :src="`/public/images/${blogItem.img}`"
            alt=""
            class="card-img-top"
            v-if="blogItem.img == 'example.jpg'"
          />
          <img
            :src="`http://localhost:8080/uploads/${blogItem.img}`"
            alt=""
            class="card-img-top"
            v-else
          />
        </div>
        <div class="card-body">
          <h5 class="card-title fw-semibold fs-5">
            {{ truncate(blogItem.title, 40) }}
          </h5>
          <p class="card-text fs-6">
            {{ truncate(blogItem.description, 60) }}
          </p>
          <p class="card-text text-muted">
            {{ formateDate(blogItem.createdAt) }} |
            {{ blogItem.author }}
          </p>
        </div>
      </div>
    </RouterLink>
  </div>

  <div v-else>
    <RouterLink
      :to="`/blogs/detail/${blogItem.blogID}`"
      class="text-decoration-none"
      v-for="blogItem in blogItems"
      :key="blogItem.blogID"
    >
      <div
        class="card w-100 border-0 mb-4 blog-detail-hover"
        :class="backGround"
      >
        <div class="ratio ratio-4x3">
          <img
            :src="`/public/images/${blogItem.img}`"
            alt=""
            class="card-img-top"
            v-if="blogItem.img == 'example.jpg'"
          />
          <img
            :src="`http://localhost:8080/uploads/${blogItem.img}`"
            alt=""
            class="card-img-top"
            v-else
          />
        </div>
        <div class="card-body">
          <h5 class="card-title fw-semibold fs-5">
            {{ truncate(blogItem.title, 40) }}
          </h5>
          <p class="card-text fs-6">
            {{ truncate(blogItem.description, 60) }}
          </p>
          <p class="card-text text-muted">
            {{ formateDate(blogItem.createdAt) }} |
            {{ blogItem.author }}
          </p>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script setup>
import { truncate } from "@/ultils/config";
import { formateDate } from "@/ultils/date";

defineProps(["blogItems", "wrapperClass", "backGround"]);
</script>

<style scoped></style>
