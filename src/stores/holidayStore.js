import { defineStore } from "pinia";

export const useHolidayStore = defineStore('holidayStore', {
    state: () => ({
        holidays: [
            { title: "Giampiero in Italy", startDate: "01/01/2024", endDate: "10/01/2024" },
            { title: "Tim on holidays", startDate: "23/02/2024", endDate: "03/03/2024" },
            { title: "Sidi working from Albania", startDate: "15/05/2024", endDate: "20/06/2024" },
        ]
    }),
    actions: {
        create(holiday) {
            this.holidays.push({
                ...holiday,
            })
        }
    }
})