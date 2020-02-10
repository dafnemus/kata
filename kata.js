function objectEqual(objectOne, objectTwo) {
  
  const keysOne = Object.keys(objectOne);
  const keysTwo = Object.keys(objectTwo);

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
      console.log( 'no son iguales')
      
  };
};

const object1= {
    name: 'Kike',
    age: '25'
}

const object2= {
    name: 'Kike',
    age: '25',
    nacionality: 'colombia'
}

objectEqual(object1, object2);

