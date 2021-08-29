<template>
    <select name="sort" id="sort">
        <option selected value="date">
            По дате
        </option>
        <option value="price">
            По сумме
        </option>
        <option value="name">
            По названию
        </option>
    </select>
</template>

<script>
    export default {
        name: "SortFilterComponent"
    }
</script>

<style scoped>

</style>