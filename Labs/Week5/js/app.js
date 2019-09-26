//make a new component to display student data
Vue.component("student-card", {
    props: [ "student" ],
    template: "<div class='student'> {{ student.name }} : {{ student.skill }} </div>"
})

var app = new Vue({
    el: "#app",
    data: {
        currentStudent: { name: "Sienna", skill: 2, joy: 0 }
    }
})