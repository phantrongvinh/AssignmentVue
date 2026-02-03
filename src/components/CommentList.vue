<template>
  <div class="row my-4" v-for="comment in commentList" :key="comment.commentID">
    <div class="col-1">
      <img src="../../Assignment/images/avatar-1.jpg" class="w-50 img-fluid" />
    </div>
    <div class="d-flex flex-column col-11">
      <div class="d-flex flex-row align-items-center">
        <div class="fw-semibold fs-6">
          {{ getAuthor(comment.userID).nickname }}
        </div>
        <div class="fs-6 text-muted ms-2">
          {{ formateDate(comment.createdAt) }}
        </div>
      </div>
      <p class="fs-6 d-flex align-items-center mt-2 text-secondary">
        {{ comment.content }}
      </p>
      <div class="">
        <a
          class="btn btn-transparent fs-5 rounded-5 d-inline-flex align-items-center justify-content-center btn-interact-custom border w-fit text-muted"
          style="font-size: 16px !important"
        >
          <FontAwesomeIcon :icon="['fas', 'heart']" />
          <span class="badge bg-transparent text-color-dark">{{
            comment.likes.length
          }}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getAuthor } from "@/ultils/config";
import { formateDate } from "@/ultils/date";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

defineProps(["commentList"]);
</script>

<style scoped></style>
