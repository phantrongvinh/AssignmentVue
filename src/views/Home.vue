<template>
  <div class="page">
    <!-- Bắt đầu phần nội dung của trang home -->
    <!-- Chia 3 phần nội dung phần đầu của home -->
    <div class="row border-bottom pb-5">
      <!-- Phần nội dung bên trái 3 cột dùng để chưa các bài gợi ý -->
      <div class="col-lg-3">
        <BlogItem :blogItems="twoNearLastestBlogs"></BlogItem>
      </div>
      <!--  -->

      <!-- Phần nội dung giữa 6 cột chứ bài viết mới nhất -->
      <div
        class="col-lg-6 d-flex justify-content-center border-end border-start px-5"
      >
        <RouterLink
          :to="`/blogs/detail/${latestBlogs.blogID}`"
          data-page="blogDetail"
          class="text-decoration-none"
        >
          <div class="card w-100 border-0">
            <img
              src="/public/images/example.jpg"
              alt=""
              class="card-img-top"
              v-if="latestBlogs.img == 'example.jpg'"
            />
            <img
              :src="`http://localhost:8080/uploads/${latestBlogs.img}`"
              alt=""
              class="card-img-top"
              v-else
            />
            <div class="card-body my-5 text-center d-flex gap-5 flex-column">
              <h5 class="card-title fw-semibold fs-4">
                {{ latestBlogs.title }}
              </h5>
              <p class="card-text fs-5">
                {{ latestBlogs.description }}
              </p>
              <p class="card-text text-muted">
                {{ formateDate(latestBlogs.createdAt) }} |
                {{ latestBlogs.author }}
              </p>
            </div>
          </div>
        </RouterLink>
      </div>
      <!--  -->
      <div class="col-lg-3">
        <BlogList :bloglist="randomBlogs"></BlogList>
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
              id="popular-tab-pane"
              role="tabpanel"
              aria-labelledby="pills-popular-tab"
              tabindex="0"
            >
              <div class="row">
                <BlogItem
                  :blogItems="theMostCommentBlogs"
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
                <!-- <BlogItem
                  :blogItems="blogsByLike"
                  wrapperClass="col-lg-4 mb-5"
                ></BlogItem> -->
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
          <AuthorSide :authors="authors"></AuthorSide>
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
import BlogAPI from "@/service/BlogAPI";
import UserAPI from "@/service/UserAPI";
import { getAuthor } from "@/ultils/config";
import { formateDate } from "@/ultils/date";
import { computed, onMounted, ref } from "vue";

const latestBlogs = ref([]);
const twoNearLastestBlogs = ref([]);
const authors = ref([]);
const theMostCommentBlogs = ref([]);
const randomBlogs = ref([]);

// Newest Blog
onMounted(async () => {
  try {
    const rs = await BlogAPI.getLatestBlog();
    latestBlogs.value = rs.data;
  } catch (error) {
    console.error("Error fetching latest blog: ", error);
  }
});

// 2 near latest blogs
onMounted(async () => {
  try {
    const rs = await BlogAPI.get2NearLatestBLogs();
    twoNearLastestBlogs.value = rs.data;
  } catch (error) {
    console.error("Error fetching 2 near latest blogs: ", error);
  }
});

// The most author
onMounted(async () => {
  try {
    const rs = await UserAPI.getTheMostAuthors();
    authors.value = rs.data;
  } catch (error) {
    console.error("Error fetching authors: ", error);
  }
});

// BLOG BY COMMENT
onMounted(async () => {
  try {
    const rs = await BlogAPI.getTheMostCommentBlogs();
    theMostCommentBlogs.value = rs.data;
  } catch (error) {
    console.error("Error fetching blogs: ", error);
  }
});

// Random blog
onMounted(async () => {
  try {
    const rs = await BlogAPI.getRandomBlogs();
    randomBlogs.value = rs.data;
  } catch (error) {
    console.error("Error fetching blogs: ", error);
  }
});
</script>

<style scoped></style>
