<template>
    <button @click="popupChanger">
        Создать новую транзакцию
    </button>
    <div v-if="popupHandler" class="popup-transaction">
        <TransactionPopupComponent />
        <div @click="popupChanger" class="close-popup">
            X
        </div>
    </div>
</template>

<script>
    import {useDealsStore} from "../store/dealsStore";
    import TransactionPopupComponent from "./Transaction/TransactionPopupComponent.vue";
    import {ref} from "vue";

    export default {
        name: "NewDealComponent",
        components: {TransactionPopupComponent},
        setup() {
            const popupHandler = ref(true)

            const popupChanger = () => {
                popupHandler.value = !popupHandler.value
                document.body.style.overflow = "hidden"
            }

            return {
                popupHandler,popupChanger
            }
        }
    }
</script>

<style scoped>
    .close-popup{
        position: absolute;
        cursor: pointer;
        z-index: 21;
    }
    .popup-transaction{
        position: fixed;
        padding: 10px;
        width: 280px;
        left: 50%;
        margin-left: -150px;
        height: 180px;
        top: 50%;
        margin-top: -100px;
        background: #FFF;
        z-index: 20;
    }
    .popup-transaction:after {
        position: fixed;
        content: "";
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(0,0,0,0.5);
        z-index: -2;
    }

    .popup-transaction:before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: #FFF;
        z-index: -1;
    }
</style>