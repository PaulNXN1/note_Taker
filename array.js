const array = [1,2,3,4,5,6];

const target = 3;

var targetIndex;

// Code to find #4 - print out index position 


for (var i = 0; i < array.length; i++) {
    
    if (array[i] === target) {
        targetIndex = i;
    }
}


const newArray = [];

for (var i = 0; i < array.length; i++) {
    if ( i != targetIndex ) {
        newArray.push(array[i])
    }
    
}

console.log(newArray);

 // let newArray = array.filter((num) => num !== target)
