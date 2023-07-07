const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

// logs => 1
//         2
//         3
//         4
//         5
//         6
//         7
//         8
//         9
//         10

numbers.forEach((num) => {
  console.log(num)
})

// logs => 1
//         2
//         3
//         4
//         5
//         6
//         7
//         8
//         9
//         10
