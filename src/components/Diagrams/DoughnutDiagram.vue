<template>
    <div class="doughnut-diagram">
        <apexchart width="380" type="donut" :options="options" :series="seriesArray"/>
    </div>
</template>

<script>
    export default {
        name: "DoughnutDiagram",
        props: {
            seriesArray: {
                type: Array,
                required: true
            },
            options: {
                type: Object,
                required: true
            }
        },
    }
</script>

<style scoped>
    .doughnut-diagram {
        display: flex;
        justify-content: center;
    }
</style>