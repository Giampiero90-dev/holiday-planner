<template>
    <div>
        <h2>Holidays Overview</h2>
        <router-link to="/create">+ Add a new holiday</router-link>
        <ul>
            <li v-for="(holiday, index) in holidays" :key="index">
                <h3>{{ holiday.title }}</h3>
                <div>{{ holiday.startDate }}</div>
                <div>{{ holiday.endDate }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "HolidaysList",
    data() {
        return {
            list: [],
        }
    },
    props: {
        holidays: {
            type: Array,
            default: null,
            required: false,
        }
    }
}

</script>

<style lang="scss" scoped>

</style>