var Completed = [];
var NotCompleted = [];
var todo = [{
        userId: 1,
        id: 1,
        title: 'dishes',
        completed: true,
    },
    {
        userId: 1,
        id: 2,
        title: 'laundry',
        completed: true,
    },
    {
        userId: 1,
        id: 3,
        title: 'make food',
        completed: false,
    },
    {
        userId: 1,
        id: 4,
        title: 'Taking out the trash',
        completed: true,
    },
    {
        userId: 1,
        id: 5,
        title: 'dog walk',
        completed: false,
    },
    {
        userId: 1,
        id: 6,
        title: 'Gym',
        completed: false,
    },
    {
        userId: 1,
        id: 7,
        title: 'clean the room',
        completed: false,
    },
    {
        userId: 1,
        id: 8,
        title: 'Organize the warehouse',
        completed: true,
    },
    {
        userId: 1,
        id: 9,
        title: 'Shopping',
        completed: false,
    },
    {
        userId: 1,
        id: 10,
        title: 'charging the phone',
        completed: false,
    },
]

for (var i = 0; i < todo.length; i++) {
    if (todo[i].completed == true) {
        CompletedFn(todo[i]);
    } else {
        NotCompletedFn(todo[i]);

    }
}



function CompletedFn(ob) {
    Completed.push(ob);
}

function NotCompletedFn(ob) {
    NotCompleted.push(ob);
}
console.log(Completed, NotCompleted)