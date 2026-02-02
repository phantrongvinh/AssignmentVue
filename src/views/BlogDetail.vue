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
          <div class="row my-4">
            <div class="col-1">
              <img
                src="../../Assignment/images/avatar-1.jpg"
                class="w-50 img-fluid"
              />
            </div>
            <div class="d-flex flex-column col-11">
              <div class="d-flex flex-row align-items-center">
                <div class="fw-semibold fs-6">Phi hành gia</div>
                <div class="fs-6 text-muted ms-2">05/2025</div>
              </div>
              <p class="fs-6 d-flex align-items-center mt-2 text-secondary">
                Cảm ơn xấp thơ và tấm lòng của Phương. Những bài về mẹ làm mình
                lay động. Nhớ những lần tạm biệt khóc nhiều hơn cười và chẳng ai
                dám ôm ai một cái cho đàng hoàng...
              </p>
              <div class="">
                <a
                  class="text-muted text-decoration-none cursor-pointer"
                  style="font-size: 12px"
                >
                  <i class="fa-regular fa-heart"></i> LIKE
                  <span class="badge bg-transparent text-muted fw-light"
                    >(3)</span
                  >
                </a>
              </div>
            </div>
          </div>

          <div class="row my-4">
            <div class="col-1">
              <img
                src="../../Assignment/images/avatar-1.jpg"
                class="w-50 img-fluid"
              />
            </div>
            <div class="d-flex flex-column col-11">
              <div class="d-flex flex-row align-items-center">
                <div class="fw-semibold fs-6">Phi hành gia</div>
                <div class="fs-6 text-muted ms-2">05/2025</div>
              </div>
              <p class="fs-6 d-flex align-items-center mt-2 text-secondary">
                Cảm ơn xấp thơ và tấm lòng của Phương. Những bài về mẹ làm mình
                lay động. Nhớ những lần tạm biệt khóc nhiều hơn cười và chẳng ai
                dám ôm ai một cái cho đàng hoàng...
              </p>
              <div class="">
                <a
                  class="text-muted text-decoration-none cursor-pointer"
                  style="font-size: 12px"
                >
                  <i class="fa-regular fa-heart"></i> LIKE
                  <span class="badge bg-transparent text-muted fw-light"
                    >(3)</span
                  >
                </a>
              </div>
            </div>
          </div>

          <div class="row my-4">
            <div class="col-1">
              <img
                src="../../Assignment/images/avatar-1.jpg"
                class="w-50 img-fluid"
              />
            </div>
            <div class="d-flex flex-column col-11">
              <div class="d-flex flex-row align-items-center">
                <div class="fw-semibold fs-6">Phi hành gia</div>
                <div class="fs-6 text-muted ms-2">05/2025</div>
              </div>
              <p class="fs-6 d-flex align-items-center mt-2 text-secondary">
                Cảm ơn xấp thơ và tấm lòng của Phương. Những bài về mẹ làm mình
                lay động. Nhớ những lần tạm biệt khóc nhiều hơn cười và chẳng ai
                dám ôm ai một cái cho đàng hoàng...
              </p>
              <div class="">
                <a
                  class="text-muted text-decoration-none cursor-pointer"
                  style="font-size: 12px"
                >
                  <i class="fa-regular fa-heart"></i> LIKE
                  <span class="badge bg-transparent text-muted fw-light"
                    >(3)</span
                  >
                </a>
              </div>
            </div>
          </div>

          <div class="row my-4">
            <div class="col-1">
              <img
                src="../../Assignment/images/avatar-1.jpg"
                class="w-50 img-fluid"
              />
            </div>
            <div class="d-flex flex-column col-11">
              <div class="d-flex flex-row align-items-center">
                <div class="fw-semibold fs-6">Phi hành gia</div>
                <div class="fs-6 text-muted ms-2">05/2025</div>
              </div>
              <p class="fs-6 d-flex align-items-center mt-2 text-secondary">
                Cảm ơn xấp thơ và tấm lòng của Phương. Những bài về mẹ làm mình
                lay động. Nhớ những lần tạm biệt khóc nhiều hơn cười và chẳng ai
                dám ôm ai một cái cho đàng hoàng...
              </p>
              <div class="">
                <a
                  class="text-muted text-decoration-none cursor-pointer"
                  style="font-size: 12px"
                >
                  <i class="fa-regular fa-heart"></i> LIKE
                  <span class="badge bg-transparent text-muted fw-light"
                    >(3)</span
                  >
                </a>
              </div>
            </div>
          </div>

          <div class="row my-4">
            <div class="col-1">
              <img
                src="../../Assignment/images/avatar-1.jpg"
                class="w-50 img-fluid"
              />
            </div>
            <div class="d-flex flex-column col-11">
              <div class="d-flex flex-row align-items-center">
                <div class="fw-semibold fs-6">Phi hành gia</div>
                <div class="fs-6 text-muted ms-2">05/2025</div>
              </div>
              <p class="fs-6 d-flex align-items-center mt-2 text-secondary">
                Cảm ơn xấp thơ và tấm lòng của Phương. Những bài về mẹ làm mình
                lay động. Nhớ những lần tạm biệt khóc nhiều hơn cười và chẳng ai
                dám ôm ai một cái cho đàng hoàng...
              </p>
              <div class="">
                <a
                  class="text-muted text-decoration-none cursor-pointer"
                  style="font-size: 12px"
                >
                  <i class="fa-regular fa-heart"></i> LIKE
                  <span class="badge bg-transparent text-muted fw-light"
                    >(3)</span
                  >
                </a>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script setup>
import { blogs } from "@/db";
import { getAuthor } from "@/ultils/config";
import { formateDate } from "@/ultils/date";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const blogDetailID = route.params.id;

const blogDetail = computed(() => {
  const blogDetailID = route.params.id;
  return blogs.value.find((blog) => blog.blogID == blogDetailID);
});
const author = computed(() => {
  return getAuthor(blogDetail.value.authorID);
});
</script>

<style scoped></style>
