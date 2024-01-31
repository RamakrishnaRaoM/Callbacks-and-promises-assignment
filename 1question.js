function doublearray(arr,callback)
{
  const doublearr=arr.map((num)=>{
    return callback(num);
  });
  return doublearr
}
const originalarr=[1,2,3,4,5];
function callback(num){
  return num*2;
}
const doublearr=doublearr(originalarr,callback);
console.log(doublearr);