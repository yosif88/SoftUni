
type TaskStatus = 'Logged' | 'Started' | 'InProgress' | 'Done';

interface User {
    username: string, signupDate: Date
}


interface Task {
        status: TaskStatus,
        title: string,
        daysRequired: number,
        assignedTo: User | undefined,
        changeStatus(newStatus: TaskStatus): void
}

function assignTask(user: User , task: Task) {

}

let user = {
    username: 'Margaret',
    signupDate: new Date(2022, 1, 13),
    passwordHash: 'random'
}
let task1: Task= {
    status:'Logged',
    title: 'Need assistance',
    daysRequired: 1,
    assignedTo: undefined,
    changeStatus(newStatus: 'Logged' | 'Started' | 'InProgress' | 'Done') { this.status = newStatus; }
}

let task2 = {
    status: <'Logged' | 'Started' | 'InProgress' | 'Done'>'Done',
    title: 'Test',
    daysRequired: 12,
    assignedTo: undefined,
    changeStatus(newStatus: 'Logged' | 'Started' | 'InProgress' | 'Done') { this.status = newStatus; },
    moreProps: 300,
    evenMore: 'wow'
}

assignTask(user, task1);
assignTask(user, task2);