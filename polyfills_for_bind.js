let name = {
    firstname: 'masood',
    lastname: 'ahmed'
  };
  let printName=function(country,state){
    console.log(this.firstname+this.lastname+" "+country+" "+state);
  }
  
  Function.prototype.myBind=function(...args){
    //here this-->to printName()
    console.log(args[0]);
    let obj=this;
    //to get the params after name object
    let params=args.slice(1);
    return function(...args2) //to get params from calling function i.e printMyName();
    {
   //   obj.call(args[0]);//to access firstname and lastname
    //to pass params as a array
      obj.apply(args[0],[...params,...args2]);
    }
  }
  
  let printMyName=printName.myBind(name,"india");
  printMyName("tamil nadu");
  
  
  
  