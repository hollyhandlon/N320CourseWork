var app = new Vue({
    el: "#app",
    mounted: function() {
        axios.get('data/music.json')
        .then( (response) => {
            this.Albums = response.data.Albums;
        })
        
    },
    data: {
        Albums : [ ]

    },
    methods: {

    }
})