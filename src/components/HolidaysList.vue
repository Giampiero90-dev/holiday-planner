<template>
    <div>
        <h2>Holidays Overview</h2>
        <ul>
            <li v-for="(newHoliday, index) in newHolidays" :key="index">
                <h3>{{ newHoliday.title }}</h3>
                <div>{{ newHoliday.startDate }}</div>
                <div>{{ newHoliday.endDate }}</div>
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
        newHolidays: {
            type: Array,
            default: null,
            required: false,
        }
    }
}

</script>

<style lang="scss" scoped>

</style>