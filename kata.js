function objectEqual(objectOne, objectTwo){
  let keysOne = Object.keys(objectOne);
  let keysTwo = Object.keys(objectTwo);

  if(keysOne.length === keysTwo.length) {
    let equal;
    let valueOne; 
    let valueTwo;
    
    for(let i = 0; i<keysOne.length; i++){
      valueOne = objectOne[keysOne[i]];
      valueTwo = objectTwo[keysTwo[i]];
  
      if(keysOne[i] === keysTwo[i] && valueOne == valueTwo){
        equal = 'son iguales';
      } else{
        equal = ' no son iguales';
        break;
      };
  
    };
      console.log(equal);
  } else{
      return 'no son iguales'
  };
};

const object1= {
    name: 'Kike',
    age: '25'
}
const object2 = {
    name: 'Batu',
    age: '?'
}

objectEqual(object1, object2);