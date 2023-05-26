const app = Vue.createApp({                                      // vue-instantie
    data() {                                                     // properties
        return {
            colors: ["Rood", "Groen", "Blauw", "Zwart"],

            styleObject: {
                height: "25%",
                backgroundColor: "black"
            }
        }
    },
    methods: {                                                   // methods
        changeColor(color) {
            colorEn = ''
            switch (color) {
                case "Rood":
                    colorEn = "Red"
                    break;
                case "Groen":
                    colorEn = "Green"
                    break;
                case "Blauw":
                    colorEn = "Blue"
                    break;
                default:
                    colorEn = "Black"
                    break;
            }
            this.styleObject.backgroundColor = colorEn
        }
    }
})

app.mount("#app")                                               // binding aan html-element