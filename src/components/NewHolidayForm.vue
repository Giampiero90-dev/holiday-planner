<template>
    <div>
        <form>
            <label for="title">Title</label>
            <input id="title" type="text" v-model="holidayTitle" />

            <label for="start-date">Start date</label>
            <input id="start-date" type="date" v-model="startDate" />

            <label for="end-date">End date</label>
            <input id="end-date" type="date" v-model="endDate" />

            <button type="button" @click.prevent="submitForm">Submit</button>
            <button type="button" @click.prevent="closeForm">Cancel</button>
        </form>
    </div>
</template>

<script>
import { useHolidayStore } from '../stores/holidayStore';

export default {
    name: 'NewHolidayForm',
    data() {
        return {
            holidayTitle: null,
            startDate: null,
            endDate: null,
            store: useHolidayStore(),
        }
    },
    methods: {
        submitForm() {
            if (this.holidayTitle && this.startDate && this.endDate) {
                if (this.startDate < this.endDate) {
                    this.store.create({
                        title: this.holidayTitle,
                        startDate: this.startDate,
                        endDate: this.endDate
                    }
                    )
                    this.$router.replace({ path: '/' });
                } else {
                    window.alert("End date must be greater than start date");
                }
            } else {
                window.alert("Fill in all entries");
            }
        },
        closeForm() {
            this.$router.replace({ path: '/' });
        }
    }
}
</script>

<style lang="scss" scoped></style>