const app = Vue.createApp({                                     // vue-instantie
    data(){                                                     // properties
        return{
            newItem: '',
            items: []
        }
    },
    methods:{                                                   // methods
        Add(){
            let items = this.items
            let newItem = this.newItem

            items.push(newItem)
            console.log(' + ' + newItem + ' was added.')
            newItem = ''
            
            this.items = items
            this.newItem = newItem
        }
    }
})

app.mount('#app')                                               // binding aan html-element