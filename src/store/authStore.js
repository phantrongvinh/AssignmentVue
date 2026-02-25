import AuthAPI from "@/service/AuthAPI";
import axiosClient from "@/service/axiosClient";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: null,
    isAuthenticated: false,
  }),
  //   getters: {
  //     isAuthenticated: (state) => !!state.token,
  //   },
  actions: {
    async login(email, password) {
      const token = btoa(`${email}:${password}`);
      try {
        await axiosClient.get("/posts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.email = email;
        this.password = password;
        this.isAuthenticated = true;
        localStorage.setItem("email", email);
      } catch (error) {
        this.logout();
        throw error;
      }
    },

    logout() {
      this.user = null;
      this.token = null;
      this.isAuthenticated = false;
      localStorage.removeItem("email");
    },
    loadUserFromLocalStorage() {
      const token = localStorage.getItem("token");
      if (token) {
        this.token = token;
      }
    },
  },
});
