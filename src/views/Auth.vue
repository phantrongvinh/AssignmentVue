<template>
  <div class="page">
    <!-- Phần nội dung của trang đăng ký đăng nhập -->
    <!-- Phần mở đầu -->
    <div class="fw-semibold fs-4 col-12 text-center pb-5">
      Cùng nhau lên thuyền ra khơi với những mộng mơ
    </div>
    <!--  -->

    <!-- Phần nội dung trang đăng ký đăng nhập -->
    <div class="d-flex justify-content-center">
      <div class="col-12 col-lg-6 border">
        <!-- Phần tab content -->
        <div class="tab-content" id="pills-tabContent">
          <!-- Phần hiệu ứng trượt của background -->
          <div class="auth-wrapper position-relative overflow-hidden">
            <!-- Phần bg để che -->
            <div
              class="auth-overlay d-flex align-items-center justify-content-center"
              :class="{ 'move-left': !isLoginForm }"
            >
              <img src="/public/images/logo.jpg" alt="" class="img-fluid" />
            </div>

            <div class="row g-0">
              <!-- Phần log in form -->
              <div class="col-12 col-lg-6 auth-panel">
                <div
                  class="tab-pane fade show active"
                  id="pills-logIn"
                  role="tabpanel"
                  aria-labelledby="pills-logIn-tab"
                  tabindex="0"
                >
                  <form action="">
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingEmail"
                        placeholder="name@example.com"
                      />
                      <label for="floatingEmail" class="text-auth"
                        >Email address</label
                      >
                    </div>
                    <div class="form-floating mb-3">
                      <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label for="floatingPassword">Password</label>
                    </div>
                    <div class="row mb-3">
                      <div class="col-lg-6">
                        <div class="form-check d-flex text-nowrap">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="checkDefault"
                          />
                          <label
                            class="form-check-label ms-1"
                            for="checkDefault"
                          >
                            Nhớ mật khẩu
                          </label>
                        </div>
                      </div>
                      <div class="col-lg-6 d-flex justify-content-end">
                        <a
                          href="#forgotPassword"
                          class="text-decoration-none fs-6 text-auth"
                          data-page="forgotPassword"
                          >Quên mật khẩu</a
                        >
                      </div>
                    </div>
                    <div class="d-flex justify-content-end">
                      <button type="submit" class="btn btn-primary btn-auth">
                        Đăng nhập
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <!-- Phần sign up form -->
              <div class="col-12 col-lg-6 auth-panel">
                <div
                  class="tab-pane fade"
                  id="pills-signUp"
                  role="tabpanel"
                  aria-labelledby="pills-signUp-tab"
                  tabindex="0"
                >
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingEmail"
                      placeholder="name@example.com"
                    />
                    <label for="floatingEmail" class="text-auth"
                      >Email address</label
                    >
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floattingName"
                      placeholder="Sói cô độc"
                    />
                    <label for="floattingName" class="text-auth"
                      >Nghệ danh</label
                    >
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="date"
                      class="form-control"
                      id="floatingDate"
                      placeholder="Password"
                    />
                    <label for="floatingDate">Ngày sinh</label>
                  </div>
                  <div class="d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary btn-auth">
                      Đăng ký
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--  -->

        <!-- Phần chia nav của tab -->
        <ul class="nav py-2 border-top" id="pills-tab" role="tablist">
          <div class="row w-100">
            <div class="col-lg-6">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active text-color-dark nav-link-auth mx-auto"
                  @click="switchToLogin"
                  id="pills-logIn-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-logIn"
                  type="button"
                  role="tab"
                  aria-controls="pills-logIn"
                  aria-selected="true"
                >
                  Đăng nhập
                </button>
              </li>
            </div>
            <div class="col-lg-6">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link text-color-dark nav-link-auth mx-auto"
                  @click="switchToSignUp"
                  id="pills-signUp-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-signUp"
                  type="button"
                  role="tab"
                  aria-controls="pills-signUp"
                  aria-selected="false"
                >
                  Đăng ký
                </button>
              </li>
            </div>
          </div>
        </ul>
        <!--  -->
      </div>
    </div>
    <!--  -->
  </div>
</template>
<script setup>
import { ref } from "vue";

const isLoginForm = ref(true);

const switchToLogin = () => {
  isLoginForm.value = true;
  console.log(isLoginForm.value);
};

const switchToSignUp = () => {
  isLoginForm.value = false;
  console.log(isLoginForm.value);
};
</script>

<style scoped>
/* Thiết kế cho nav tabs phần đăng nhập đăng xuất */
.nav-link-auth.active {
  color: var(--auth-color) !important;
}
/* Phần tạo hiệu ứng bg trượt của auth */
.auth-wrapper {
  width: 100%;
  min-height: 420px;
  border-radius: 12px;
  background: #fff;
}

/* Nội dung form nằm trên overlay */
.auth-panel {
  position: relative;
  z-index: 2;
  padding: 2rem;
}

/* Panel phủ */
.auth-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: #fff;
  border-left: var(--auth-color) 1px solid;
  /* bg che */
  transform: translateX(100%);
  transition: transform 0.6s ease;
  z-index: 999;
}

.move-left {
  transform: translateX(0) !important;
  border-right: 1px solid var(--auth-color) !important;
  border-left: none !important;
}
</style>
