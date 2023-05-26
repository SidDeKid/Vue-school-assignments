const app = Vue.createApp({                                     // vue-instantie
    data(){                                                     // properties
        return{
            voornaam: "",
            tussenvoegsel: "",
            achternaam: ""
        }
    }
})

app.mount("#app")                                               // binding aan html-element