<template>
    <div>
        <h1>BookerZzz Holiday Planner</h1>
        <router-view
            @sumbmittedNewHoliday="storeData($event)"></router-view>
    </div>
</template>

<script>
import HolidaysList from './components/HolidaysList.vue'

export default {
    name: 'HomePage',
    components: {
        HolidaysList,
    },
    data() {
        return {
            formIsVisible: false,
            newSubmittedHoliday: [],
        }
    },
    methods: {
        storeData(data) {
            console.log(data);
            this.newSubmittedHoliday.unshift(data);
        }
    }
}

</script>

<style scoped>
</style>
