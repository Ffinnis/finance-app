<template>
    <div class="step">
        <p>
            Привет, это приложение созданно для того, <br> чтобы помочь тебе вести финансовую деятельность
        </p>
        <p>
            Для начала введить свой текущий баланс:
        </p>
        <label>
            <input v-model="inputBalance" type="number">
        </label>
        <button class="primary-btn" @click="submitBalance">
            Подтвердить
        </button>
    </div>
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
                localStorage.setItem("userBalance", JSON.stringify(inputBalance.value))
            }

            return {
                inputBalance, submitBalance
            }
        }
    }
</script>

<style scoped>
    p{
        margin: 15px 0;
    }
    input{
        padding: 7px;
        margin: 0 0 10px;
    }
    .step{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
</style>