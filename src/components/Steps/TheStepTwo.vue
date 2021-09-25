<template>
    <h3>
        Добавьте нужные категории для комфортной работы
    </h3>
    <CategoryLogicComponent />
    <button @click="submitStepTwo">
        Далее
    </button>
</template>

<script>
    import CategoryLogicComponent from "../Category/CategoryLogicComponent.vue";
    import {useStepStore} from "@/store/stepStore";
    export default {
        name: "TheStepTwo",
        components: {CategoryLogicComponent},
        setup() {
            const stepStore = useStepStore()
            const submitStepTwo = () => {
                stepStore.setStepTwo(true)
                localStorage.setItem("stepTwo", 'true')
            }

            return {
                submitStepTwo
            }
        }
    }
</script>

<style scoped>
    p{
        margin: 15px 0;
    }
</style>