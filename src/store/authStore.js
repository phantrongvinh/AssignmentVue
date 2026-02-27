import AuthAPI from "@/service/AuthAPI";
import UserAPI from "@/service/UserAPI";
import { jwtDecode } from "jwt-decode";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("token") || null,
    user: null,
    loading: false,
    userImg: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.user?.role === "ROLE_ADMIN",
  },

  actions: {
    async register(user) {
      const res = await AuthAPI.register(user);
      this.setToken(res.data);
      await this.profile();
    },
    async profile() {
      try {
        this.loading = true;
        const res = await UserAPI.getProfile();
        this.userImg = res.data.img;
      } catch (error) {
        console.error("Fetch profile failed");
        this.logout();
      } finally {
        this.loading = false;
      }
    },

    async login(user) {
      const res = await AuthAPI.login(user);
      this.setToken(res.data);
    },
    setToken(token) {
      this.token = token;
      localStorage.setItem("token", token);
      this.user = jwtDecode(token);
    },

    logout() {
      this.token = null;
      localStorage.removeItem("token");
    },
    async initAuth() {
      if (this.token) {
        await this.profile();
      }
    },
    loadUserFromLocalStorage() {
      const token = localStorage.getItem("token");
      if (token) {
        this.token = token;
        this.user = jwtDecode(token);
      }
    },
  },
});
