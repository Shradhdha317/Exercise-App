// import Session from "./Session";
const exercise = [
    { 
        src: "images/event/event1.jpg",
        title: "Gym Time",
        description: "Just crushed this workout.",
        time: '7:00PM',
        date:'07 Feb',
    },
    { 
        src: "images/event/event4.jpg",
        title: "Morning Exercise",
        description: "Go for it.",
        time: '9:00AM',
        date:'3 March',
    },
    { 
        src: "images/event/event3.jpg",
        title: "Stretching Exercise",
        description: "Fit and fab!",
        time: '10:00PM',
        date:'02 Jan',
    },
    { 
        src: "images/event/event2.jpg",
        title: "Stretch Your Body",
        description: "Do something today that your future self will thank you for.",
        time: '5:00PM',
        date:'27 Feb',
    },
    { 
        src: "images/event/event5.jpg",
        title: "Morning Exercise",
        description: "Sweat now, shine later.",
        time: '7:00AM',
        date:'12 March',
    },
    { 
        src: "images/event/event6.jpg",
        title: "My Gym Exercise",
        description: "I go to the gym because I think my great personality could use a banging body.",
        time: '8:00AM',
        date:'08 Feb',
    },
 
];

// export function GetMyExerciseLog(){
//     return GetExerciseLogForUser(Session.userData.handle);
// }

// export function GetExerciseLogForUser(id){
//     return exercise.filter( x=> x.user.handle == id );
// }

export function GetExerciseLog(){
    return exercise;
}