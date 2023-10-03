<template>
    <div>
        <form>
            <label for="title">Title</label>
            <input id="title" type="text" v-model="holidayTitle"/>
            
            <label for="start-date">Start date</label>
            <input id="start-date" type="date" v-model="startDate"/>
            
            <label for="end-date">End date</label>
            <input id="end-date" type="date" v-model="endDate"/>
            
            <button type="button" @click.prevent="submitForm">Submit</button>
            <button type="button" @click.prevent="closeForm">Cancel</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'NewHolidayForm',
    data() {
        return {
            holidayTitle: null,
            startDate: null,
            endDate: null,
        }
    },
    methods: {
        submitForm() {
            if(this.holidayTitle && this.startDate && this.endDate) {
                this.$emit("sumbmittedNewHoliday", {
                    title: this.holidayTitle,
                    startDate: this.startDate,
                    endDate: this.endDate
                });
            } else {
                window.alert("Fill in all entries");
            }
        },
        closeForm() {
            this.$emit("closeForm");
        }
    }
}
</script>

<style lang="scss" scoped>

</style>