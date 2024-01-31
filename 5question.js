function greet(name){
  return new Promise((resolve)=>{
    const greeting =`hello , ${name}`;
    resolve(greeting);
  });
}
greet("ram").then((msg)=>console.log(message));