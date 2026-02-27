<template>
  <div class="page">
    <div class="row align-items-start" v-if="isAuthenticated">
      <div class="col-lg-3 bg-color-light shadow rounded-3 blog-detail-hover">
        <div
          class="d-flex flex-column justify-content-center align-items-center border-bottom pb-3"
        >
          <img
            :src="`/public/images/${profile.img}`"
            alt=""
            class="rounded-circle img-fluid w-75"
          />
          <div class="fw-bold fs-4 my-2">{{ profile.nickname }}</div>
        </div>
        <div class="d-flex flex-column my-2">
          <div class="fw-semibold fs-5">Email:</div>
          <div class="fs-6 text-muted">{{ profile.email }}</div>
        </div>
        <div class="d-flex flex-column my-2">
          <div class="fw-semibold fs-5">Birth:</div>
          <div class="fs-6 text-muted">{{ formateDate(profile.birthDay) }}</div>
        </div>
        <div class="d-flex justify-content-end my-2">
          <button class="btn btn-primary btn-auth" type="button">
            Cập nhật
          </button>
        </div>
      </div>
      <div
        class="col-lg-5 bg-color-light shadow rounded-3 mx-4 blog-detail-hover"
      >
        <div class="fw-bold fs-4 my-3 border-bottom pb-3 ms-3">
          Đăng bài viết mới
        </div>
        <form action="">
          <div class="m-3">
            <div class="mb-3">
              <label for="title" class="form-label fs-6 fw-semibold"
                >Tiêu đề</label
              >
              <input
                type="text"
                class="form-control bg-color-light"
                id="title"
                v-model="post.title"
              />
            </div>
            <div class="mb-3">
              <label for="description" class="form-label fs-6 fw-semibold"
                >Mô tả</label
              >
              <input
                type="text"
                class="form-control bg-color-light"
                id="description"
                v-model="post.description"
              />
            </div>
            <div class="row mb-2">
              <label
                for="content"
                class="form-label col-lg-6 fs-6 fw-semibold d-flex align-items-end"
                >Nội dung</label
              >
              <div class="col-lg-6">
                <input
                  type="file"
                  accept=".jpg,.png,.jpeg"
                  class="form-control"
                  @change="handleUpImg"
                />
              </div>
            </div>
            <textarea
              name=""
              class="form-control bg-color-light mb-3"
              rows="20"
              id="content"
              v-model="post.content"
            ></textarea>
            <div class="d-flex justify-content-end mb-3">
              <button
                type="submit"
                @click.prevent="postBlog()"
                class="btn btn btn-primary btn-auth"
              >
                Đăng bài
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-lg-3 bg-color-light shadow rounded-3 blog-detail-hover">
        <div class="fw-bold fs-4 my-3 border-bottom pb-3 ms-3">
          Bài viết của tôi
        </div>
        <div class="m-3">
          <BlogItem :blogItems="myBlogs" backGround="bg-color-light"></BlogItem>
        </div>
      </div>
    </div>

    <div v-else>Ban chua dang nhap</div>
  </div>
</template>

<script setup>
import BlogItem from "@/components/BlogItem.vue";
import BlogAPI from "@/service/BlogAPI";
import UserAPI from "@/service/UserAPI";
import { useAuthStore } from "@/store/authStore";
import { formateDate } from "@/ultils/date";
import { onMounted, reactive, ref, watch } from "vue";

const authStore = useAuthStore();

const isAuthenticated = authStore.isAuthenticated;

// Handle fetch profile
const profile = ref([]);

const myBlogs = ref([]);

const fetchMyBlog = async () => {
  try {
    const rs = await UserAPI.getProfile();
    profile.value = rs.data;
    myBlogs.value = rs.data.blogs;
  } catch (error) {
    console.error(error);
  }
};
onMounted(() => {
  fetchMyBlog();
});
// Handle post self blog
const post = reactive({
  title: "",
  description: "",
  content: "",
});

const img = ref(null);

let postAlert = ref("");

const handleUpImg = (event) => {
  img.value = event.target.files[0];
};

const postBlog = async () => {
  const formData = new FormData();

  formData.append(
    "post",
    new Blob([JSON.stringify(post)], {
      type: "application/json",
    }),
  );

  if (img.value) {
    formData.append("file", img.value);
  }

  if (await BlogAPI.postBlog(formData)) {
    postAlert = "Thanh cong";
    console.log(postAlert);
  } else {
    postAlert = "that bai";
    console.log(postAlert);
  }
  fetchMyBlog();
};
</script>

<style scoped></style>
