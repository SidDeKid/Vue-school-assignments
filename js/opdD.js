const app = Vue.createApp({                                     // vue-instantie
    data(){                                                     // properties
        return{
            newItem: "",
            items: []
        }
    },
    methods:{                                                   // methods
        Add(){
            let items = this.items
            let newItem = this.newItem

            items.push(newItem)
            console.log(" + " + newItem + " was added.")
            newItem = ""

            if (items.length > 3) {
                console.log(" - " + items.shift() + " was deleted.")
            }
            
            this.items = items
            this.newItem = newItem
        }
    }
})

app.mount("#app")                                               // binding aan html-element