<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { useAuthStore } from "@/store/authStore";
import { ref, watch } from "vue";
import router from "@/router";
import Search from "./Search.vue";

const authStore = useAuthStore();
const logout = () => {
  authStore.logout();
  router.push("/");
};

const showModal = ref(false);
</script>

<template>
  <!-- Phần header gồm Logo, tên trang Blog, tìm kiếm chủ đề blog và Đăng nhập hoặc đăng ký để đẳng tải blog -->
  <!-- Màu background của header #f8f9fa(bg-color-light)-->
  <header class="header container-fluid py-1 bg-color-light">
    <!-- Định dang grid cho Header content với 3 col-4 -->
    <div class="row">
      <!-- Phần image logo -->
      <div class="col-6 col-lg-4 d-flex align-items-center pe-1">
        <RouterLink to="/" class="img-wrapper">
          <img
            src="/public/images/logo.jpg"
            alt=""
            class=""
            style="width: 100px"
          />
        </RouterLink>
      </div>
      <!-- Phần tên trang blog -->
      <div
        class="d-none col-lg-4 fs-2 fw-semibold d-lg-flex justify-content-center align-items-center"
        style="color: cornflowerblue"
      >
        Hinva Story
      </div>
      <!-- Phần tìm kiếm chủ đề blog và đăng nhập/đăng ký -->
      <div class="col-6 col-lg-4 d-flex align-items-center justify-content-end">
        <button
          class="btn bg-transparent btn-hover"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <FontAwesomeIcon icon="magnifying-glass" />
        </button>
        <RouterLink
          class="btn bg-transparent btn-hover border-0"
          to="/auth"
          data-page="auth"
          v-if="!authStore.isAuthenticated"
        >
          Sign In
        </RouterLink>

        <a
          class="btn bg-transparent btn-hover border-0"
          data-page="auth"
          @click.prevent="logout()"
          v-else
        >
          Sign out
        </a>
      </div>
    </div>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <Search></Search>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
