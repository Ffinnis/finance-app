<template>
    <h1>Главная</h1>
    <div class="container">
        <TheStepOne v-if="!stepStore.stepOne"/>

    </div>
</template>

<script>
    import TheStepOne from "@/components/Steps/TheStepOne.vue";
    import {useStepStore} from "@/store/stepStore";
    export default {
        name: "Home",
        components: {TheStepOne},
        setup() {
            const stepStore = useStepStore()

            return {
                stepStore
            }
        }
    }
</script>

<style scoped>

</style>