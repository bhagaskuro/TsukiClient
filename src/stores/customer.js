import { defineStore } from "pinia";
import axios from "axios";

export const useCustomerStore = defineStore("customer", {
  state: () => ({
    baseUrl: "https://tsuki.moonshard.cloud",
    cuisines: [],
    cuisineDetail: {},
    carts: [],
    Total: 0,
    categories: null,
    totalPage: null,
    currentPage: null,
    isLogin: false,
  }),
  getters: {
    formattedRupiah: (state) => (price) => {
      const formatted = price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      });
      return formatted;
    },
  },

  actions: {
    async showError(error) {
      let title;
      if (error.response.data.message === "Invalid Token") {
        title = "You have to log in first.";
      } else {
        title = error.response.data.message;
      }
      Swal.fire({
        icon: "error",
        title: title,
      });
    },

    async showNotif(title) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: title,
      });
    },

    async handleRegister(value) {
      try {
        const { data } = await axios({
          method: "POST",
          url: this.baseUrl + "/pub/register",
          data: value,
        });
        this.showNotif("Success register");
        this.router.push({ path: "/login" });
      } catch (error) {
        this.showError(error);
      }
    },

    async handleLogin(value) {
      try {
        const { data } = await axios({
          method: "POST",
          url: this.baseUrl + "/login",
          data: value,
        });
        this.showNotif("Signed in successfully");
        localStorage.access_token = data.access_token;
        localStorage.role = data.role;
        this.fetchAll();
        this.isLogin = true;
        this.router.push("/");
      } catch (error) {
        this.showError(error);
      }
    },

    async googleOauth(response) {
      try {
        const access = await axios({
          method: "post",
          url: this.baseUrl + "/pub/auth/google-sign-in",
          headers: {
            google_token: response.credential,
          },
        });
        this.showNotif("Signed in successfully");
        localStorage.access_token = data.access_token;
        this.isLogin = true;
        this.router.push("/");
      } catch (error) {
        this.showError(error);
      }
    },

    async cartPaid() {
      try {
        const { data } = await axios({
          method: "patch",
          url: this.baseUrl + "/pub/paid",
          headers: {
            access_token: localStorage.access_token,
          },
        });

        this.showNotif("Payment success");
        this.fetchAll();

        this.router.push("/");
      } catch (error) {
        this.showError(error);
      }
    },

    async doPayment() {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/pub/generateToken",
          headers: {
            access_token: localStorage.access_token,
          },
          data: {
            ammount: this.Total,
          },
        });

        const cb = this.cartPaid;

        window.snap.pay(data.token, {
          onSuccess: function (result) {
            cb();
          },
        });
      } catch (error) {
        this.showError(error);
      }
    },

    async fetchCuisines(query) {
      const { page, name, category } = query;
      try {
        const { data } = await axios({
          method: "GET",
          url: this.baseUrl + "/pub/",
          params: {
            page,
            category,
            name,
          },
        });
        this.cuisines = data.data;
        this.totalPage = data.totalPage;
        this.currentPage = data.currentPage;
      } catch (error) {
        this.showError(error);
      }
    },

    async fetchCuisinesAdmin() {
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + "/cuisines",
          headers: {
            access_token: localStorage.access_token,
          },
        });

        this.cuisinesAdmin = data;
        this.totalPost = data.length;
      } catch (error) {
        this.showError(error);
      }
    },

    async fetchCart() {
      try {
        const { data } = await axios({
          method: "GET",
          url: this.baseUrl + "/pub/cart",
          headers: { access_token: localStorage.access_token },
        });
        this.carts = data;

        this.Total = 0;
        data.forEach((el) => {
          this.Total += el.total * el.cuisine.price;
        });
      } catch (error) {
        this.showError(error);
      }
    },

    async fetchDetail(id) {
      try {
        let { data } = await axios({
          method: "get",
          url: this.baseUrl + "/pub/detail/" + id,
        });
        this.cuisineDetail = data;
      } catch (error) {
        this.showError(error);
      }
    },

    async addCart(id) {
      try {
        let { data } = await axios({
          method: "post",
          url: this.baseUrl + "/pub/cart/" + id,
          headers: { access_token: localStorage.access_token },
        });
        this.showNotif("Success adding cuisine to cart");
      } catch (error) {
        this.showError(error);
      }
    },

    async fetchCategories() {
      try {
        const { data } = await axios({
          method: "GET",
          url: this.baseUrl + "/categories",
        });
        this.categories = data;
      } catch (error) {
        this.showError(error);
      }
    },

    async SubmitAdd(newData) {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/cuisines",
          headers: {
            access_token: localStorage.access_token,
          },
          data: newData,
        });

        this.showNotif("Success");
      } catch (error) {
        this.showError(error);
      }
    },

    async deleteCuisine(id) {
      try {
        const { data } = await axios({
          method: "delete",
          url: this.baseUrl + "/cuisines/" + id,
          headers: {
            access_token: localStorage.access_token,
          },
        });

        this.showNotif(data.message);
        this.fetchCuisinesAdmin();
      } catch (error) {
        this.showError(error);
      }
    },
    async fetchAll() {
      this.fetchCategories();
      this.fetchCuisines();
      this.fetchCuisinesAdmin();
    },
  },
});
