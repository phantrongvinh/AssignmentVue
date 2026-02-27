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
                :src="`/public/images/${blogDetail.authorImg}`"
                alt=""
                class="img-fluid w-50 rounded-circle"
              />
            </div>
            <div
              class="col-10 text-dark d-flex flex-column justify-content-center"
            >
              <h5 class="fw-semibold fs-6">{{ blogDetail.author }}</h5>
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
            src="/public/images/example.jpg"
            alt=""
            class="img-fluid"
            v-if="blogDetail.img == 'example.jpg'"
          />
          <img
            :src="`http://localhost:8080/uploads/${blogDetail.img}`"
            alt=""
            class="img-fluid"
            v-else
          />
          <p
            class="text-color-dark mt-4 d-flex align-items-center lh-lg"
            v-for="(content, index) in blogDetail.content?.split('\n')"
            :key="index"
          >
            {{ content }}
          </p>
        </div>
        <!--  -->

        <!-- Phần tương tác -->
        <div class="mt-3 pb-3 mb-4 border-bottom d-flex justify-content-end">
          <button
            class="btn btn-transparent fs-5 rounded-5 d-inline-flex align-items-center justify-content-center btn-interact-custom border w-fit text-muted"
            @click.prevent="handleLikeBlog()"
          >
            <FontAwesomeIcon
              :icon="!isLike ? ['far', 'heart'] : ['fas', 'heart']"
            />
            <span class="badge bg-transparent text-color-dark"></span>
          </button>
        </div>

        <!--  -->
        <!-- Phần bình luận -->
        <div>
          <div class="fw-semibold fs-4">Bàn tán</div>
          <div class="row mt-4 mb-5">
            <div class="col-1">
              <img :src="`/public/images/${userImg}`" class="w-50 img-fluid" />
            </div>
            <div class="col-11">
              <form action="">
                <textarea
                  class="form-control mb-3"
                  rows="3"
                  placeholder="Write a comment"
                  v-model="comment.content"
                ></textarea>
                <div class="mb-3 d-flex justify-content-end">
                  <button
                    type="submit"
                    @click.prevent="postComment()"
                    class="btn btn btn-primary btn-auth px-4"
                  >
                    Gửi
                  </button>
                </div>
              </form>
            </div>
          </div>
          <CommentList :commentList="blogDetail.comments"></CommentList>
        </div>
        <!--  -->
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script setup>
import CommentList from "@/components/CommentList.vue";
import BlogAPI from "@/service/BlogAPI";
import CommentAPI from "@/service/comment";
import LikeAPI from "@/service/LikeAPI";
import { useAuthStore } from "@/store/authStore";
import { formateDate } from "@/ultils/date";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

// Lấy param
const route = useRoute();
const blogDetailID = Number(route.params.id);

// Fetch Blog by ID
const blogDetail = ref([]);
const fetchBlog = async () => {
  try {
    const rs = await BlogAPI.getBlogByID(blogDetailID);
    if (rs != null) {
      blogDetail.value = rs.data;
    }
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchBlog();
});

// Lấy từ global state
const authStore = useAuthStore();
const userImg = authStore.userImg;

// Handle post comment event
const comment = ref({
  content: "",
  blogID: blogDetailID,
});
const postComment = async () => {
  try {
    await CommentAPI.postComment(comment.value);
    comment.value = "";
    await fetchBlog();
  } catch (error) {}
};
// Handle like blog

const isLike = ref(false);
const handleIsLike = async () => {
  try {
    const rs = await LikeAPI.isLiked(blogDetailID);
    isLike.value = rs.data;
  } catch (error) {}
};

onMounted(() => handleIsLike());

const handleLikeBlog = async () => {
  try {
    if (isLike.value) {
      await LikeAPI.unLiked(blogDetailID);
      await handleIsLike();
    } else {
      await LikeAPI.toggleLike(blogDetailID);
      await handleIsLike();
    }
  } catch (error) {}
};
</script>

<style scoped></style>
