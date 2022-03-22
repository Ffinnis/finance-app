<template>
  <div class="new-deal">
    <button class="primary-btn" @click="popupHandler = true">
      Создать новую транзакцию
    </button>
    <teleport to="body">
      <transaction-popup
        @close="popupHandler = false"
        title="Новая транзакция"
        :isShow="popupHandler"
      />
    </teleport>
  </div>
</template>

<script>
import TransactionPopup from "./TransactionPopup.vue";
import { ref } from "vue";
import { useDealsStore } from "@/store/dealsStore";
import { useBalanceStore } from "@/store/balanceStore";

export default {
  name: "NewDealComponent",
  components: {
    TransactionPopup,
  },
  props: {
    type: String,
  },
  setup() {
    const popupHandler = ref(false);

    return {
      popupHandler,
    };
  },
};
</script>

<style scoped>
.new-deal {
  margin: 0 0 20px;
}
</style>
