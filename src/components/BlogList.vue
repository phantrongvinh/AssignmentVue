<template>
  <!-- Phần nội dung bên phải 3 cột dùng để chứa các bài viết nổi bật và có thể xem thêm -->
  <div class="clearfix mb-4 border-bottom pb-2">
    <div class="float-start fw-semibold fs-5">Nổi bật</div>
    <div class="float-end fs-5">
      <a href="#" class="text-secondary text-hover"> Xem tất cả </a>
    </div>
  </div>

  <div class="d-flex flex-column">
    <RouterLink
      :to="`/blogs/detail/${blog.blogID}`"
      class="text-decoration-none mb-5"
      v-for="blog in bloglist"
      :key="blog.blogID"
    >
      <div class="row">
        <div class="col-lg-8 text-dark h-100">
          <h5 class="fw-semibold fs-5">
            {{ truncate(blog.title, 35) }}
          </h5>
          <p class="card-text text-muted fs-6">
            {{ formateDate(blog.createdAt) }} |
            {{ blog.author }}
          </p>
        </div>
        <div class="col-lg-4 h-100">
          <div class="ratio ratio-4x3">
            <img
              src="/public/images/example.jpg"
              alt=""
              class="img-fluid w-100"
              v-if="blog.img == 'example.jpg'"
            />
            <img
              :src="`http://localhost:8080/uploads/${blog.img}`"
              alt=""
              class="img-fluid w-100"
              v-else
            />
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
  <!--  -->
</template>

<script setup>
import { getAuthor, truncate } from "@/ultils/config";
import { formateDate } from "@/ultils/date";

defineProps(["bloglist"]);
</script>

<style scoped></style>
