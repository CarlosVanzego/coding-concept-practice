const n = ["A", "B", "C", "D"]

// Prints the entire array
console.log(a)

// Prints: "A"
console.log(a[0])

// Prints: "D"
console.log(a[3])

// Prints length of array (4)
console.log(a.length)

// Prints: ['A', 'B', 'C', 'D', 'E'] (adds "E" to the array)
a.push ("E")

// Prints: ['A', 'B', 'C', 'D', '4'] (adds "4" to the array)
a.push ("4")

// Prints: ['A', 'B', 'C', 'D', Array(2)[1, 2]] (adds another array to the array) 
a.push ([1, 2])


a[0] = 1
// Prints: '1' (overwrote element to make a = 1 instead of "A") 
console.log(a)