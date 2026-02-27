<template>
  <div class="m-3">
    <div class="mb-3">
      <input
        type="text"
        class="form-control border-0 border-bottom"
        placeholder="Searching..."
        v-model="keyword"
      />
    </div>
    <BlogList :bloglist="blogBySearch"></BlogList>
  </div>
</template>

<script setup>
import BlogAPI from "@/service/BlogAPI";
import BlogList from "./BlogList.vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { Modal } from "bootstrap";
import router from "@/router";

const blogBySearch = ref([]);
const keyword = ref("");

function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const searchBlog = async (k) => {
  try {
    const rs = await BlogAPI.getBlogBySearch(k);
    blogBySearch.value = rs.data;
  } catch (error) {
    console.error(error);
  }
};

const debouncedSearch = debounce(searchBlog, 500);

watch(keyword, (newVal) => {
  const trimmed = newVal.trim();

  if (!trimmed) {
    blogBySearch.value = [];
    return;
  }

  debouncedSearch(trimmed);
});

const route = useRoute();
</script>
<style scoped></style>
