const app = Vue.createApp({                                     // vue-instantie
    data(){                                                     // properties
        return{
            mile: 1,
            kilometer: 1.61
        }
    },
    methods:{                                                   // methods
        toKm(){
            if (!isNaN(this.mile) && this.mile != "") {
                this.kilometer = (this.mile * 1.61).toFixed(2)
                console.log(this.mile + " miles converted.")
            }
        },
        toMl(){
            if (!isNaN(this.kilometer) && this.kilometer != "") {
                this.mile = (this.kilometer / 1.61).toFixed(2)
                console.log(this.kilometer + " kilometers converted.")
            }
        }
    }
})

app.mount("#app")                                               // binding aan html-element