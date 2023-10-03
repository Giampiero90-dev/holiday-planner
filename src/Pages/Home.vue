<template>
    <div>
        <h1>BookerZzz Holiday Planner</h1>
        <button type="button" @click.prevent="showForm">Add a new holiday</button>
        <NewHolidayForm v-if="formIsVisible" @sumbmittedNewHoliday="storeData($event)" @closeForm="formIsVisible  = false"/>
        <HolidaysList v-if="newSubmittedHoliday.length > 0" :newHolidays="newSubmittedHoliday"/>
    </div>
</template>

<script>
import HolidaysList from '../components/HolidaysList.vue'
import NewHolidayForm from '../components/NewHolidayForm.vue'

export default {
    name: 'HomePage',
    components: {
        HolidaysList,
        NewHolidayForm
    },
    data() {
        return {
            formIsVisible: false,
            newSubmittedHoliday: [],
        }
    },
    methods: {
        showForm() {
            this.formIsVisible = true;
        },
        storeData(data) {
            console.log(data);
            this.newSubmittedHoliday.unshift(data);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
