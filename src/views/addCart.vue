<script>
import { mapActions } from "pinia";
import { useCustomerStore } from "../stores/customer";

export default {
  name: "addCart",
  methods: {
    ...mapActions(useCustomerStore, ["addCart"]),
    handleCart() {
      this.addCart(this.$route.params.id);
      this.$router.push({ path: "/detail/" + this.$route.params.id });
    },
  },
  created() {
    this.handleCart();
  },
};
</script>

<style></style>
