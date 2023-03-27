function User(name, age, status) {
       this.name = name;
       this.age = age;
       this.status = status;
   }

   let user1 = new User('Valera', 40, true);
   let user2 = new User('Sergey', 12, false);

console.log(user1);
console.log(user2);