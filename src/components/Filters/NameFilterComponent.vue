<template>
    <div class="name-filter">
        <label for="filter-name"></label>
        <input id="filter-name" class="name-filter-input" v-model="filterName" placeholder="Введите название транзакции" type="text">
    </div>
</template>

<script>
    import { ref } from 'vue'
    export default {
        name: "NameFilterComponent",
        setup() {
            const filterName = ref('')

            return {
                filterName
            }
        }
    }
</script>

<style>
    .name-filter-input{
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);
        border-radius: 4px;
        border: none;
        padding: 16px;
        font-size: 16px;
        line-height: 24px;
        color: rgba(17, 17, 17, 0.48);
        transition: all 0.45s ease-in;
        outline: none;
    }
    .name-filter-input:hover{
        box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 56px rgba(51, 51, 51, 0.16);
    }
    .name-filter-input:focus{
        color: #111111;
        box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08);
    }
</style>