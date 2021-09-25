<template>
    <h1>Главная</h1>
    <div class="container">
        <TheStepOne v-if="!stepStore.stepOne"/>
        <TheStepTwo v-if="stepStore.stepOne && !stepStore.stepTwo"/>
        <div v-if="stepStore.stepOne && stepStore.stepTwo" class="main">
            <h2>
                Ваш баланс равен <span class="balance-count">{{balanceStore.getBalance}}₽</span>
            </h2>
        </div>
    </div>
</template>

<script>
    import TheStepOne from "@/components/Steps/TheStepOne.vue";
    import {useStepStore} from "@/store/stepStore";
    import TheStepTwo from "@/components/Steps/TheStepTwo.vue";
    import {useBalanceStore} from "@/store/balanceStore";
    export default {
        name: "Home",
        components: {TheStepTwo, TheStepOne},
        setup() {
            const stepStore = useStepStore()
            const balanceStore = useBalanceStore()

            return {
                stepStore, balanceStore
            }
        }
    }
</script>

<style scoped>
    .balance-count{
            color: #45856d;
    }
</style>