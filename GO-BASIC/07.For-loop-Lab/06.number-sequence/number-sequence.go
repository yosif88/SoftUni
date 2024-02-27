package main

import (
	"fmt"
	"math"
)

func main() {
	var n int
	fmt.Scanln(&n)

	biggest := math.MinInt32
	smallest := math.MaxInt32

	for i := 0; i < n; i++ {
		var number int
		fmt.Scanln(&number)
		if number > biggest {
			biggest = number
		}
		if number < smallest {
			smallest = number
		}

	}
	fmt.Printf("Max number: %d\n", biggest)
	fmt.Printf("Min number: %d",smallest)
}
