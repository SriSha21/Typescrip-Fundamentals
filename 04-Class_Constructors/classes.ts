class employee{

    //properties
    firstName:String;  //default public access modifers
    LastName:String;
}

let emp =new employee();//instance
emp.firstName=("Achuytha")
emp.LastName=("Prajna");
console.log(`Hello ${emp.firstName} ${emp.LastName}`);
