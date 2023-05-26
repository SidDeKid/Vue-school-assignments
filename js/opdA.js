const app = Vue.createApp({                             // vue-instantie
    data(){                                             // properties
        return{
            tekst: "Hallowereld!", 
            toon: true
        }
    },
    methods:{                                           // methods
        schakel(){
            console.log("Schakel is now " + !this.toon)         // zie console in de browser
            this.toon = !this.toon
        }
    }
})

app.mount("#app")                                       // binding aan html-element