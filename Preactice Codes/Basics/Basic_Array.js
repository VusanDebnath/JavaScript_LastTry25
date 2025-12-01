let friends = ["Alice", "Bob", "Charlie", "David"];

// Accessing elements
console.log(friends[0]); // Alice
console.log(friends[2]); // Charlie


// Modifying elements
friends[1] = "Barbara";
console.log(friends); // ["Alice", "Barbara", "Charlie", "David"]


// Adding elements
friends.push("Eve"); // Adds "Eve" to the end of the array
console.log(friends); // ["Alice", "Barbara", "Charlie", "David", "Eve"]


// Removing elements
friends.pop(); // Removes the last element "Eve"
console.log(friends); // ["Alice", "Barbara", "Charlie", "David"]

// Array length
console.log(friends.length); // 4  


// Print last item from the array
console.log(friends[friends.length - 1]); // David


// Looping through the array
for (let i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}

// Output:
// Alice
// Barbara
// Charlie
// David    


// Using for...of loop to iterate through the array
for (let friend of friends) {
    console.log(friend);
}


// How for...of loop works:
// The for...of loop iterates over iterable objects (like arrays) and retrieves each element one by one.
// In each iteration, the variable (friend) holds the current element from the array (friends).
// This loop continues until all elements in the array have been accessed.

