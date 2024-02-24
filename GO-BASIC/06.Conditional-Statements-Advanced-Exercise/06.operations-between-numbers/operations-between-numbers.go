package main

import "fmt"

func main() {
	var numOne, numTwo int
	var operator string
	var isEvenOrOdd string
	var result int

	fmt.Scan(&numOne, &numTwo, &operator)

	switch operator {
	case "+":
		result = numOne + numTwo
		if result%2 == 0 {
			isEvenOrOdd = "even"
		} else {
			isEvenOrOdd = "odd"
		}
		fmt.Printf("%d %s %d = %d - %s", numOne, operator, numTwo, result, isEvenOrOdd)
	case "-":
		result = numOne - numTwo
		if result%2 == 0 {
			isEvenOrOdd = "even"
		} else {
			isEvenOrOdd = "odd"
		}
		fmt.Printf("%d %s %d = %d - %s", numOne, operator, numTwo, result, isEvenOrOdd)
	case "*":
		result = numOne * numTwo
		if result%2 == 0 {
			isEvenOrOdd = "even"
		} else {
			isEvenOrOdd = "odd"
		}
		fmt.Printf("%d %s %d = %d - %s", numOne, operator, numTwo, result, isEvenOrOdd)

	case "/":
		if numTwo == 0{
			fmt.Printf("Cannot divide %d by zero", numOne)
		}else{
			result := float64(numOne) / float64(numTwo)
			fmt.Printf("%d %s %d = %.2f ", numOne, operator, numTwo, result)
		}
	case "%":
		if numTwo == 0{
			fmt.Printf("Cannot divide %d by zero", numOne)
		}else{
			result = numOne % numTwo
			fmt.Printf("%d %s %d = %d ", numOne, operator, numTwo, result)
		}
	}
}
