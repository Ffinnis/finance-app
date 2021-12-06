<template>
    <label>
        <select @change="$emit('change', sortBy)" v-model="sortBy" name="sort" id="sort">
        <option selected value="date">
            По дате
        </option>
        <option value="price">
            По сумме
        </option>
        <option value="name">
            По названию
        </option>
    </select></label>
</template>

<script>
    import {ref} from "vue";

    export default {
        name: "SortFilterComponent",
        emits: ['change'],
        setup() {
            const sortBy = ref('')

            return {
                sortBy
            }
        }
    }
</script>

<style scoped>

</style>