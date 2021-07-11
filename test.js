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


var doors = [];
numberOfDoors = 100


for (let i = 0; i < numberOfDoors; i++){
    doors[i] = false
}

for (let i = 1; i <= numberOfDoors; i++){
    
    for (let j = i - 1; j < numberOfDoors; j++){
        doors[j] = !doors[j];
    }
    
}

console.log(doors);



// var doors = [];
// numberOfDoors = 100



// /*

// To test toggle() method later.

// function Door(state){
//     this.state = state
//     this.toggle = function toggle(){
//         if (state === "OPEN") {
//             this.state = "CLOSE"
//         }
//         else if (state === "CLOSE") {
//             this.state = "OPEN"
//         } else {
//             this.state = "BROKEN DOOR"
//         }
//     }
// }

// var door = new Door("CLOSE")
// console.log(door);
// door.toggle()
// console.log(door);
// door.toggle()
// console.log(door);
// door.toggle()
// console.log(door);

// */


// /*
//     Function to toggle the state of the doors.
//         doorState: State of the door
//         return: toggle state
// */
// function toggle(doorState){
//     if (doorState === "OPEN"){
//         doorState = "CLOSE"
//     } else if (doorState === "CLOSE"){
//         doorState = "OPEN"
//     }
//     return doorState
// }

// // console.log(toggle("CLOSE"))
// // console.log(toggle("OPEN"))

// /*
//     Initially all doors are Closed.
//     All doors initialized to FALSE.
// */
// for (let i = 0; i < numberOfDoors; i++) {
//     doors[i] = "CLOSE"
// }

// console.log("INITIAL DOORS: ", doors);

// /*
//     First Pass: Visit every door and toggle the door.
//     Since all doors are closed.
//     Open all doors in first pass.
// */
// for (let i = 0; i < numberOfDoors; i++) {
//     doors[i] = toggle(doors[i])
// }

// console.log("FIRST PASS: ", doors);

// /*
//     LOGIC
//     Starting from Second Pass till nTH pass.
// */
// for (let i = 1; i <= numberOfDoors; i++) {
//     console.log(doors)
//     for (let j = i - 1; j < numberOfDoors; j++) {
//         doors[j] = toggle(doors[j]);
//     }
// }



// // // console.log(doors)
