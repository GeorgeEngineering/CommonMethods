/*
    Data generated via: https://json-generator.com/
 */

// importing a copy of the lodash library, version 4.17.21.
import _ from '../Libraries/lodash_4_17_21.js';

const firstObjectArray = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Alice Johnson', age: 28 },
    { id: 4, name: 'Bob Brown', age: 35 },
    { id: 5, name: 'Charlie Davis', age: 22 }
];

// add the ultimate last object to the array.
const addDuplicateObject = (arrayReference) => {
    // get the last element of the array.
    let duplicateObject = arrayReference.at(-1)
    // add it to the array.
    arrayReference.push(duplicateObject);
    return arrayReference;
}

// remove objects that are duplicated.
const removeDuplicateObjects = (arrayReference, key) => {
    let uniqueObjects = [];
    uniqueObjects = _.uniqBy(arrayReference, key);
    return uniqueObjects;
}

// filter the list of arrays based on the specified age.
const filterObjectBasedOnASpecifiedAge = (arrayReference, age) => {
    return arrayReference.filter(item => item.age > age);
}

// add a new field to all the objects. all the objects will have this new specified field and with the specified initial value.
const addNewFieldToObjectInArray = (arrayReference, arrayPosition, newFieldName, initialFieldValue) => {
    _.map(arrayReference, obj => _.assign(obj, { [newFieldName]: initialFieldValue }));
}

const modifyAnElementInsideTheArrayOfObjects = (arrayReference, arrayPosition, fieldName, fieldValue) => {
    const targetObject = _.find(arrayReference, { id: arrayPosition }, 0);
    return _.map(arrayReference, (obj) =>
        // if the object is the one we want to modify, then we will modify it.
        obj === targetObject ?
            _.assign({}, obj, {weight: 80})
            // else, we will return the object as it is.
            : obj
    );
}

const printObjectArray = (arrayReference) => {
    console.log(`Printing the object array: ${JSON.stringify(arrayReference, null, 2)}`);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// execute this file with the shift+f10 key combination.

addDuplicateObject(firstObjectArray);
/*
Based on the following input:
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 30
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "age": 25
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "age": 28
  },
  {
    "id": 4,
    "name": "Bob Brown",
    "age": 35
  },
  {
    "id": 5,
    "name": "Charlie Davis",
    "age": 22
  }
]

Expect the following output:
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 30
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "age": 25
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "age": 28
  },
  {
    "id": 4,
    "name": "Bob Brown",
    "age": 35
  },
  {
    "id": 5,
    "name": "Charlie Davis",
    "age": 22
  },
  {
    "id": 5,
    "name": "Charlie Davis",
    "age": 22
  }
]
 */

// remove the objects that are duplicated. considering the 'id' key.
let arrayWithoutDuplicateObjects = removeDuplicateObjects(firstObjectArray, 'id');

// printing array without duplicates.
printObjectArray(arrayWithoutDuplicateObjects);
/*
Based on the following input:
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 30
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "age": 25
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "age": 28
  },
  {
    "id": 4,
    "name": "Bob Brown",
    "age": 35
  },
  {
    "id": 5,
    "name": "Charlie Davis",
    "age": 22
  },
  {
    "id": 5,
    "name": "Charlie Davis",
    "age": 22
  }
]

Expect the following output:
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 30
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "age": 25
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "age": 28
  },
  {
    "id": 4,
    "name": "Bob Brown",
    "age": 35
  },
  {
    "id": 5,
    "name": "Charlie Davis",
    "age": 22
  }
]
 */


// filtering the array of objects.
let arrayWithObjectsOlderThan25YearsOld = filterObjectBasedOnASpecifiedAge(arrayWithoutDuplicateObjects, 25);

// printing the array of objects for objects with an age greater than 25 years old.
printObjectArray(arrayWithObjectsOlderThan25YearsOld);
/*
Based on the following input:
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 30
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "age": 25
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "age": 28
  },
  {
    "id": 4,
    "name": "Bob Brown",
    "age": 35
  },
  {
    "id": 5,
    "name": "Charlie Davis",
    "age": 22
  }
]

Expect the following output:
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 30
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "age": 28
  },
  {
    "id": 4,
    "name": "Bob Brown",
    "age": 35
  }
]
*/
// adding a new field to all the objects.
addNewFieldToObjectInArray(firstObjectArray, 0, 'weight', '');
printObjectArray(firstObjectArray);
/*
Based on the following input:
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 30
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "age": 25
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "age": 28
  },
  {
    "id": 4,
    "name": "Bob Brown",
    "age": 35
  },
  {
    "id": 5,
    "name": "Charlie Davis",
    "age": 22
  },
  {
    "id": 5,
    "name": "Charlie Davis",
    "age": 22
  }
]

Expect the following output:
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 30,
    "weight": ""
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "age": 25,
    "weight": ""
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "age": 28,
    "weight": ""
  },
  {
    "id": 4,
    "name": "Bob Brown",
    "age": 35,
    "weight": ""
  },
  {
    "id": 5,
    "name": "Charlie Davis",
    "age": 22,
    "weight": ""
  },
  {
    "id": 5,
    "name": "Charlie Davis",
    "age": 22,
    "weight": ""
  }
]
 */

let modifiedArrayOfObjects = modifyAnElementInsideTheArrayOfObjects(firstObjectArray, 1, 'weight', 80);
printObjectArray(modifiedArrayOfObjects);

/*
Based on the following input:
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 30,
    "weight": ""
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "age": 25,
    "weight": ""
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "age": 28,
    "weight": ""
  },
  {
    "id": 4,
    "name": "Bob Brown",
    "age": 35,
    "weight": ""
  },
  {
    "id": 5,
    "name": "Charlie Davis",
    "age": 22,
    "weight": ""
  },
  {
    "id": 5,
    "name": "Charlie Davis",
    "age": 22,
    "weight": ""
  }
]

Expect the following output:
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 30,
    "weight": 80
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "age": 25,
    "weight": ""
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "age": 28,
    "weight": ""
  },
  {
    "id": 4,
    "name": "Bob Brown",
    "age": 35,
    "weight": ""
  },
  {
    "id": 5,
    "name": "Charlie Davis",
    "age": 22,
    "weight": ""
  },
  {
    "id": 5,
    "name": "Charlie Davis",
    "age": 22,
    "weight": ""
  }
]
 */

