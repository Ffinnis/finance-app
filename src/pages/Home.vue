<template>
    <h1>Главная</h1>
    <div class="container">
        <TheStepOne v-if="!stepStore.stepOne"/>
        <TheStepTwo v-if="stepStore.stepOne && !stepStore.stepTwo"/>
        <div v-if="stepStore.stepOne && stepStore.stepTwo" class="main">
            <h2>
                Ваш баланс равен <span class="balance-count">{{balanceStore.balance}}₽</span>
            </h2>
            <DoughnutDiagram :options="diagramOptions" :seriesArray="diagramSeries" />
        </div>
    </div>
</template>

<script>
    import TheStepOne from "@/components/Steps/TheStepOne.vue";
    import {useStepStore} from "@/store/stepStore";
    import TheStepTwo from "@/components/Steps/TheStepTwo.vue";
    import DoughnutDiagram from "@/components/Diagrams/DoughnutDiagram.vue";
    import {useBalanceStore} from "@/store/balanceStore";
    import {computed} from 'vue'
    import {useDealsStore} from "@/store/dealsStore";
    export default {
        name: "Home",
        components: {TheStepTwo, TheStepOne, DoughnutDiagram},
        setup() {
            const stepStore = useStepStore()
            const balanceStore = useBalanceStore()
            const dealStore = useDealsStore()

            const sumOfCosts = computed(() => dealStore.sumOfCosts)
            const sumOfIncomes = computed(() => dealStore.sumOfIncomes)


            const diagramOptions = {
                labels: ['Costs', 'Incomes'],
                colors: ['#f60a0a', '#66DA26'],
                plotOptions: {
                    pie: {
                        expandOnClick: false,
                        donut: {
                            labels: {
                                show: true,
                                total: {
                                    show: true,
                                    showAlways: true,
                                    color: '#2e3437',
                                    formatter: function (w) {
                                        return w.globals.seriesTotals.reduce((a, b) => {
                                            return b - a
                                        }, 0)
                                    }
                                },
                            }
                        }
                    }
                }
            }

            const diagramSeries= [sumOfCosts.value, sumOfIncomes.value]

            return {
                stepStore, balanceStore, diagramOptions, diagramSeries
            }
        }
    }
</script>

<style scoped>
    .balance-count{
            color: #45856d;
    }
</style>