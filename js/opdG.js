const app = Vue.createApp({                                     // vue-instantie
    data(){                                                     // properties
        return{
            smileySrc: "Assets/smiley1.png",

            smileys: [{"name": ":)", "src": "Assets/smiley1.png"},
                {"name": "<3 ;)", "src": "Assets/smiley2.png"},
                {"name": ":D", "src": "Assets/smiley3.png"},
                {"name": "B)", "src": "Assets/smiley4.png"},
                {"name": ";P", "src": "Assets/smiley5.png"},
                {"name": ":'(", "src": "Assets/smiley6.png"}
            ]
        }
    },
    methods:{                                                   // methods
        ChangeSmiley() {
            smileyNmr = Math.floor(Math.random() * this.smileys.length);
            console.log("Smiley changed to " + this.smileys[smileyNmr].name)
            this.smileySrc = this.smileys[smileyNmr].src
        }
    }
})

app.mount("#app")                                               // binding aan html-element