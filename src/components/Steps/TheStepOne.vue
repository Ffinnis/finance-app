<template>
    <p>
        Привет, это приложение созданно для того, <br> чтобы помочь тебе вести финансовую деятельность
    </p>
    <p>
        Для начала введить свой текущий баланс:
    </p>
    <label>
        <input v-model="inputBalance" type="number">
    </label>
    <button @click="submitBalance">
        Подтвердить
    </button>
</template>

<script>
    import {ref} from 'vue'
    import {useBalanceStore} from "@/store/balanceStore";
    import {useStepStore} from "@/store/stepStore";

    export default {
        name: "TheStepOne",
        setup() {
            const balanceStore = useBalanceStore()
            const stepStore = useStepStore()
            const inputBalance = ref(0)
            const submitBalance = () => {
                balanceStore.setBalance(inputBalance.value)
                stepStore.setStepOne(true)
                localStorage.setItem("stepOne", 'true')
            }

            return {
                inputBalance, submitBalance
            }
        }
    }
</script>

<style scoped>

</style>