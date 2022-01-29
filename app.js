// function car(name, model, owner, year, phone, image) {
//     return {
//         name, model, owner,year, phone, image
//     }
// }

const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})
const log = (text, type, date = new Date()) => ({text, type, date})

const cars = [
    car('Ford', 'Focus', 'Max', '2015', '+7 921 123 45 67', 'IMG/focus.webp'),
    car('Ford', 'Mondeo', 'Ben', '2021', '+7 921 777 89 67', 'IMG/mondeo.png'),
    car('Porshe', 'Panamera', 'Chloe', '2020', '+7 921 854 22 67', 'IMG/panamera.png')
]

new Vue({
    el: '#app',
    data: {
        cars: cars, 
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar: function(index) { 
            this.car = cars[index]
            this.selectedCarIndex = index
        },
        newOrder() {
            this.modalVisibility = false
            this.logs.push(
                log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
            )
        },
        cancelOrder() {
            this.modalVisibility = false
            this.logs.push(
                log(`Cancelled order: ${this.car.name} - ${this.car.model}`, 'cnl')
            )
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredCars() {
            const filtered = this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1  || car.model.indexOf(this.search) > -1 
            })

            return filtered
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString()
        }
    }
})