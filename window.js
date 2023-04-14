var Name='Rahamt';
function add(num1,num2){
   var result=num1+num2;
  console.log('name inside',Name);
  function double (num){
       return num*2;
  }
  var  total=double(result);
  console.log(total);
}
console.log('name outside',Name);
const sum=add(10,15);
console.log(sum);
