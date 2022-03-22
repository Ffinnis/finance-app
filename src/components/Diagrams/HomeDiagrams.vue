<template>
  <div class="diagrams">
    <apexchart
      v-if="incomesByDate.length && costsByDate.length"
      width="380"
      type="donut"
      :options="diagramDoughnutOptions"
      :series="diagramDoughnutSeries"
    />
    <apexchart
      v-if="costsByDate.length"
      type="bar"
      :series="diagramCostsDateSeries"
      :options="diagramCostsDateOptions"
    />
    <apexchart
      v-if="incomesByDate.length"
      type="bar"
      :series="diagramIncomesDateSeries"
      :options="diagramIncomesDateOptions"
    />
  </div>
</template>

<script>
import { useBalanceStore } from "@/store/balanceStore";
import { computed } from "vue";
import { useDealsStore } from "@/store/dealsStore";
export default {
  name: "HomeDiagrams",
  setup() {
    const balanceStore = useBalanceStore();
    const dealStore = useDealsStore();

    const sumOfCosts = computed(() => dealStore.sumOfCosts);
    const sumOfIncomes = computed(() => dealStore.sumOfIncomes);
    const costsByDate = computed(() => dealStore.getCostsByDate);
    const incomesByDate = computed(() => dealStore.getIncomesByDate);

    const diagramDoughnutOptions = {
      labels: ["Costs", "Incomes"],
      colors: ["#f60a0a", "#66DA26"],
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                showAlways: true,
                color: "#2e3437",
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => {
                    return b - a;
                  }, 0);
                },
              },
            },
          },
        },
      },
    };
    const diagramDoughnutSeries = [sumOfCosts.value, sumOfIncomes.value];

    const diagramCostsDateSeries = [
      {
        data: costsByDate.value.map((item) => {
          return {
            x: item.date,
            y: item.amount,
          };
        }),
      },
    ];
    const diagramCostsDateOptions = {
      colors: ["#f60a0a"],
      chart: {
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
    };

    const diagramIncomesDateSeries = [
      {
        data: incomesByDate.value.map((item) => {
          return {
            x: item.date,
            y: item.amount,
          };
        }),
      },
    ];
    const diagramIncomesDateOptions = {
      colors: ["#66DA26"],
      chart: {
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
    };

    return {
      balanceStore,
      diagramDoughnutOptions,
      diagramDoughnutSeries,
      diagramCostsDateSeries,
      diagramCostsDateOptions,
      diagramIncomesDateSeries,
      diagramIncomesDateOptions,
      incomesByDate,
      costsByDate,
    };
  },
};
</script>

<style scoped>
.diagrams {
  display: flex;
  flex-direction: column;
  gap: 100px 0px;
}
</style>
