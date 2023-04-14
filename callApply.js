const normalPerson={
  firstName:'Mizanur',
  lastName:'Rahman',
  salary:15000,
  getFullName:function(){
    console.log(this.firstName,this.lastName);
  },
     chargeBill:function(amount ,tips,tax){
      this.salary = this.salary-amount-tips-tax;
      return this.salary;
     }
}

//console.log(normalPerson.firstName);


//  normalPerson.chargeBill(150);
//  normalPerson.chargeBill(3000);
//  console.log(normalPerson.salary);

const heroPerson={
  firstName:'hero',
  lastName:'alom',
  salary:25000
}

const friendPerson={
  firstName:'Akil',
  lastName:'Hossain',
  salary:20000
}

//  const heroChargeBill=normalPerson.chargeBill.bind(heroPerson);
//  heroChargeBill(2000);
//  heroChargeBill(3000);
//  console.log(heroPerson.salary);


//  const friendChargeBill=normalPerson.chargeBill.bind(friendPerson);
//  friendChargeBill(15000);
//  console.log(friendPerson.salary);


// normalPerson.chargeBill.call(heroPerson,1000,100,10);
// normalPerson.chargeBill.call(heroPerson,2000,200,20);
// console.log(heroPerson.salary);


// normalPerson.chargeBill.call(friendPerson,5000,500,50);
// console.log(friendPerson.salary);


normalPerson.chargeBill.apply(heroPerson,[3000,300,50]);
normalPerson.chargeBill.apply(heroPerson,[5000,500,50]);
console.log(heroPerson.salary);