package main

import (
	"fmt"
	"math"
	"strconv"
)

func main() {
	
	var input string
	var maxNumber = math.MinInt32
	
	fmt.Scanln(&input)

	for input != "Stop" {
		currentNumber, _ := strconv.Atoi(input)

		if currentNumber > maxNumber {
			maxNumber = currentNumber
		}
		fmt.Scanln(&input)
	}

	fmt.Println(maxNumber)

}