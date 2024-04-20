// Question 133
type Student = {
    name:string,
    age:number,
    rollno:number
}

let Student1:Student = {
    name : "Daniyal",
    age : 20,
    rollno : 809
}

console.log(JSON.stringify(Student1));

// Question 134
console.log(JSON.parse('["Pakistan","Islamabad","Lahore","Karachi"]'));

// Question 135
console.log(JSON.stringify(Student1,null,5));
