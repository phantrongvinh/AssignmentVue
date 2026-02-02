<template>
  <!-- Phần navbar với các tabs các chủ đề khác nhau trong trang blog -->
  <!-- Màu background của navbar #f8f9fa(bg-color-light) và border trên dưới-->
  <div
    class="navbar container-fluid bg-color-light border-lg-custom bg-color-light border-bottom"
  >
    <!-- Phần nội dung navbar, trong đó tab được active sẽ underline -->
    <ul
      class="nav mx-auto nav-underline flex-nowrap overflow-x-auto scrollbar-none"
      id="navContent"
      role="tablist"
    >
      <li class="nav-item mx-2">
        <RouterLink class="text-color-dark text-hover nav-link" to="/">
          <span class="h-100 d-flex text-nowrap"> Home </span>
        </RouterLink>
      </li>
      <li class="nav-item mx-2">
        <RouterLink class="text-color-dark text-hover nav-link" to="/blogs">
          <span class="h-100 d-flex text-nowrap"> Blog </span>
        </RouterLink>
      </li>
      <li class="nav-item mx-2">
        <RouterLink class="text-color-dark text-hover nav-link" to="/stories">
          <span class="h-100 d-flex text-nowrap"> Truyện ngắn </span>
        </RouterLink>
      </li>
      <li class="nav-item mx-2">
        <RouterLink class="text-color-dark text-hover nav-link" to="/poems">
          <span class="h-100 d-flex text-nowrap"> Thơ </span>
        </RouterLink>
      </li>
      <li class="nav-item mx-2">
        <RouterLink
          class="text-color-dark text-hover nav-link"
          to="/englishWritings"
        >
          <span class="h-100 d-flex text-nowrap"> English Writing </span>
        </RouterLink>
      </li>
      <li class="nav-item mx-2">
        <RouterLink class="text-color-dark text-hover nav-link" to="/about">
          <span class="h-100 d-flex text-nowrap"> About </span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped></style>
