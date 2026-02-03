<template>
  <div class="page">
    <!-- Phần nội dung chi tiết của bài viết -->
    <div class="mt-4">
      <div class="w-75 mx-auto">
        <div class="mx-auto border-bottom">
          <!-- Phần header của bài viết -->
          <div class="fs-4 fw-semibold mt-2 mb-3 text-center">
            {{ blogDetail.title }}
          </div>
          <div class="fs-6 text-muted mb-3 text-center">
            {{ blogDetail.description }}
          </div>
          <!--  -->
          <!-- Tác giả -->
          <div class="row my-4">
            <div class="col-2">
              <img
                :src="`/public/images/${author.img}`"
                alt=""
                class="img-fluid w-50 rounded-circle"
              />
            </div>
            <div
              class="col-10 text-dark d-flex flex-column justify-content-center"
            >
              <h5 class="fw-semibold fs-6">{{ author.nickname }}</h5>
              <div class="card-text text-muted fs-7">
                {{ formateDate(blogDetail.createdAt) }}
              </div>
            </div>
          </div>
          <!--  -->
        </div>

        <!-- Phần bài viết -->
        <div class="mt-4 border-bottom pb-2">
          <img
            :src="`/public/images/${blogDetail.img}`"
            alt=""
            class="img-fluid"
          />
          <p
            class="text-color-dark mt-4 d-flex align-items-center lh-lg"
            v-for="content in blogDetail.contents"
          >
            {{ content }}
          </p>
        </div>
        <!--  -->

        <!-- Phần tương tác -->
        <div class="mt-3 pb-3 mb-4 border-bottom">
          <a
            class="btn btn-transparent fs-5 rounded-5 d-inline-flex align-items-center justify-content-center btn-interact-custom border w-fit text-muted"
          >
            <FontAwesomeIcon :icon="['far', 'heart']" />
            <span class="badge bg-transparent text-color-dark">{{
              blogDetail.likes.length
            }}</span>
          </a>
        </div>

        <!--  -->
        <!-- Phần bình luận -->
        <div>
          <div class="fw-semibold fs-4">Bàn tán</div>
          <div class="row mt-4 mb-5">
            <div class="col-1">
              <img
                src="../../Assignment/images/avatar-1.jpg"
                class="w-50 img-fluid"
              />
            </div>
            <div class="col-11">
              <textarea
                class="form-control"
                rows="3"
                placeholder="Write a comment"
              ></textarea>
            </div>
          </div>
          <CommentList :commentList="commentsList"></CommentList>
        </div>
        <!--  -->
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script setup>
import CommentList from "@/components/CommentList.vue";
import { blogs, comments } from "@/db";
import { getAuthor } from "@/ultils/config";
import { formateDate } from "@/ultils/date";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const blogDetailID = Number(route.params.id);

const blogDetail = computed(() => {
  return blogs.value.find((blog) => blog.blogID === blogDetailID);
});
const author = computed(() => {
  return getAuthor(blogDetail.value.authorID);
});
const commentsList = computed(() => {
  return comments.value.filter((comment) => comment.blogID === blogDetailID);
});
</script>

<style scoped></style>
