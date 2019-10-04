//make a new component to display student data
Vue.component("student-card", {
    props: [ "student", "isforward", "isback" ],
    template: "<div class='student' v-bind:class = '{ cardForward : isforward, cardBack : isback }'> {{ student.name }}  {{ student.skill }} </br> {{ student.message }} </div>"
})

//define app as a new instance of vue
var app = new Vue({
    //name the element
    el: "#app",
    //add data to the element (adjective part)
    data: {
        //set the card active to true
        cardBack: false,
        cardForward: false,
        
        //create an array for the students and their data
        students: [
            { name: "Sienna", skill: 2, joy: 0, message: "I'm always mad, but that makes me a good fighter"},
            { name: "Cyan", skill: 0, joy: 5, message: "Why fight when you can skip around and spread joy!" },
            { name: "Magenta", skill: 3, joy: 3, message: "sup" }
        ],
        //current student starts in Sienna
        currentStudent: { name: "Sienna", skill: 2, joy: 0, message: "I'm always mad, but that makes me a good fighter" },
        //set the id to 0 so it can run in the loop
        curStudentId: 0,
        
    },

    //create methods so the elements can do something (verb part)
    methods: {
        //when the front arrow is clicked go to the next student in the aray
        frontArrowClicked: function() {
            //update current student to next student in array
            //keep adding to id
            this.curStudentId++;
            //use id number to retrieve array item and make it equal to currentStudent
            this.currentStudent = this.students[this.curStudentId];
            //if the position is greater than or equal to the last position in the array (length -1)
            if(this.curStudentId >= this.students.length-1) {
                //set the id to -1 so it can call the 0 position
                this.curStudentId = -1;
            }
            
            //turn its boolean into its opposite
            this.cardForward = !this.cardForward;
    
        },

        //when the back arrow is clickd go in the opposite direction as front arrow
        backArrowClicked: function() {
            //update current id to the previous student in the array
            this.curStudentId--;
            //if curStudent is -1 then set that to the last position in array
            if(this.curStudentId < 0) {
                this.curStudentId = this.students.length-1;
            }
            
            //use id number to ertrieve the array item and make it equal to the currentStudent
            this.currentStudent = this.students[this.curStudentId];
            //turn its boolean into its opposite
            this.cardBack = !this.cardBack;
            
        }
            
    }
    
})