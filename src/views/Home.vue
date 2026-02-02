<template>
  <div class="page">
    <!-- Bắt đầu phần nội dung của trang home -->
    <!-- Chia 3 phần nội dung phần đầu của home -->
    <div class="row border-bottom pb-5">
      <!-- Phần nội dung bên trái 3 cột dùng để chưa các bài gợi ý -->
      <div class="col-lg-3">
        <BlogItem :blogItems="newestBlogs"></BlogItem>
      </div>
      <!--  -->

      <!-- Phần nội dung giữa 6 cột chứ bài viết mới nhất -->
      <div
        class="col-lg-6 d-flex justify-content-center border-end border-start px-5"
      >
        <RouterLink
          :to="`/blogs/detail/${newBlog.blogID}`"
          data-page="blogDetail"
          class="text-decoration-none"
        >
          <div class="card w-100 border-0">
            <img
              :src="`/public/images/${newBlog.img}`"
              alt=""
              class="card-img-top"
            />
            <div class="card-body my-5 text-center d-flex gap-5 flex-column">
              <h5 class="card-title fw-semibold fs-4">
                {{ newBlog.title }}
              </h5>
              <p class="card-text fs-5">
                {{ newBlog.description }}
              </p>
              <p class="card-text text-muted">
                {{ formateDate(newBlog.createdAt) }} |
                {{ getAuthor(newBlog.authorID)?.nickname ?? "Hidden Author" }}
              </p>
            </div>
          </div>
        </RouterLink>
      </div>
      <!--  -->
      <div class="col-lg-3">
        <BlogList :bloglist="mostLikesBlogs"></BlogList>
      </div>
    </div>
    <!--  -->

    <!-- Phần nội dung tiếp theo chứa các tabs chia các loại bài việc và những tác giả -->
    <div class="py-5">
      <div class="row">
        <!-- Phần các tabs loại bài viết bên trái có 9 cột -->
        <div class="col-lg-9">
          <div class="d-flex">
            <ul
              class="nav nav-pills border w-fit p-1 rounded"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item">
                <button
                  class="nav-link active text-color-dark nav-link-bg"
                  data-bs-toggle="tab"
                  id="pills-new-tab"
                  data-bs-target="#new-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="new-tab-pane"
                  aria-selected="true"
                >
                  Mới nhất
                </button>
              </li>
              <li class="nav-item">
                <button
                  class="nav-link text-color-dark nav-link-bg"
                  data-bs-toggle="tab"
                  id="pills-popular-tab"
                  data-bs-target="#popular-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="popular-tab-pane"
                  aria-selected="false"
                >
                  Phổ biến
                </button>
              </li>
              <li class="nav-item">
                <button
                  class="nav-link text-color-dark nav-link-bg"
                  data-bs-toggle="tab"
                  id="pills-like-tab"
                  data-bs-target="#like-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="like-tab-pane"
                  aria-selected="false"
                >
                  Yêu thích
                </button>
              </li>
            </ul>
            <div class="ms-auto">
              <button class="btn bg-transparent btn-hover">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>

          <div class="tab-content mt-5" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="new-tab-pane"
              role="tabpanel"
              aria-labelledby="pills-new-tab"
              tabindex="0"
            >
              <div class="row">
                <BlogItem
                  :blogItems="blogsByTime"
                  wrapperClass="col-lg-4 mb-5"
                ></BlogItem>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="popular-tab-pane"
              role="tabpanel"
              aria-labelledby="pills-popular-tab"
              tabindex="0"
            >
              <div class="row">
                <BlogItem
                  :blogItems="blogsByLike"
                  wrapperClass="col-lg-4 mb-5"
                ></BlogItem>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="like-tab-pane"
              role="tabpanel"
              aria-labelledby="pills-like-tab"
              tabindex="0"
            >
              <div class="row">
                <BlogItem
                  :blogItems="blogsByLike"
                  wrapperClass="col-lg-4 mb-5"
                ></BlogItem>
              </div>
            </div>
          </div>
        </div>
        <!--  -->

        <!-- Phần nội dung bên phải 3 cột chứa nội dung về tác giả -->
        <div class="col-lg-3 ps-5">
          <div class="clearfix mb-4 border-bottom pb-2">
            <div class="float-start fw-semibold fs-5">Tác giả</div>
            <div class="float-end fs-5">
              <a href="#" class="text-secondary text-hover"> Xem tất cả </a>
            </div>
          </div>
          <AuthorSide :users="users"></AuthorSide>
        </div>
        <!--  -->
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script setup>
import AuthorSide from "@/components/AuthorSide.vue";
import BlogItem from "@/components/BlogItem.vue";
import BlogList from "@/components/BlogList.vue";
import { blogs, users } from "@/db";
import { getAuthor } from "@/ultils/config";
import { formateDate } from "@/ultils/date";
import { computed } from "vue";
const newBlog = computed(() => {
  return blogs.value
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
});

const newestBlogs = computed(() => {
  return blogs.value
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(1, 3);
});

const mostLikesBlogs = computed(() => {
  return blogs.value
    .slice()
    .sort((a, b) => b.likes.length - a.likes.length)
    .slice(0, 6);
});

const blogsByTime = computed(() => {
  return blogs.value
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 6);
});

const blogsByLike = computed(() => {
  return blogs.value
    .slice()
    .sort((a, b) => b.likes.length - a.likes.length)
    .slice(0, 6);
});
</script>

<style scoped></style>
