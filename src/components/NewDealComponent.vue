<template>
  <div class="new-deal">
    <button class="primary-btn" @click="popupHandler = true">
      Создать новую транзакцию
    </button>
    <teleport to="body">
      <v-popup
        @close="popupHandler = false"
        title="Новая транзакция"
        :isShow="popupHandler"
      />
    </teleport>
  </div>
</template>

<script>
import TransactionPopupComponent from "./Transaction/TransactionPopupComponent.vue";
import VPopup from "./VPopup.vue";
import { ref } from "vue";
import { useDealsStore } from "@/store/dealsStore";
import { useBalanceStore } from "@/store/balanceStore";

export default {
  name: "NewDealComponent",
  components: {
    TransactionPopupComponent,
    VPopup,
  },
  props: {
    type: String,
  },
  setup() {
    const dealStore = useDealsStore();
    const balanceStore = useBalanceStore();
    const popupHandler = ref(false);

    const setItemStorage = (key, value) => {
      return localStorage.setItem(key, value);
    };

    balanceStore.$subscribe((mutation) => {
      setItemStorage(mutation.events.key, mutation.events.newValue);
    });

    dealStore.$subscribe((mutation) => {
      setItemStorage(mutation.events.key, mutation.events.newValue);
    });

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
