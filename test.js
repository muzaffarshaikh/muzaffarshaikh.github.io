function getFinalOpenedDoors (numDoors) {

    let doorArr = new Array(numDoors).fill(0);
  
    for(let i = 1; i <= numDoors;i++){
        console.log(doorArr);
      for(let j = 1; j <= numDoors; j++){
        console.log("\ni = ", i);
        console.log("j = ", j);
        if (j%i === 0){
          if (doorArr[j-1] === 0){
            doorArr[j-1] = j;

            console.log("j mod i = ", j%i);
            console.log("j-1 = ", j-1,"\n");
            console.log(doorArr);
          }else{
            doorArr[j-1] = 0;
            console.log("j mod i = ", j%i);
            console.log("j-1 = ", j-1,"\n");
            console.log(doorArr);
          }
        }
        console.log("j mod i = ", j%i);
        console.log("j-1 = ", j-1,"\n");
      }
    }
    return doorArr
  }


  console.log(getFinalOpenedDoors(5));
