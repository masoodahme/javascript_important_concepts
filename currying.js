//currying using bind
let multiply=function(x,y){
  console.log( x*y);
}

//currying setting x to 1
let multiplyBYTwo=multiply.bind(this,2);

//3 -> to y and 4->ignored
multiplyBYTwo(3);
//currying //setting x to 1 and y->4
let multiplyBYThree=multiply.bind(this,3,4);
//3-->is ignored
multiplyBYThree(3);

//currying using closure

let multiply_closure=function(x)
{
  return function(y)
    {
      console.log(x*y);
    }
}
     
let multiplyByTwo_clo=multiply_closure(2);

multiplyByTwo_clo(10);
     

let multiplyByThree_clo=multiply_closure(3);

multiplyByThree_clo(10);