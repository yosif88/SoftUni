package main

import (
	"fmt"
	"math"
	"strconv"
)

func main() {
	
	var input string
	fmt.Scanln(&input)

	minNumber := math.MaxInt32

	for input != "Stop" {
		currentNumber, _ := strconv.Atoi(input)

		if  currentNumber < minNumber {
			minNumber = currentNumber
		}
		fmt.Scanln(&input)
	}
	fmt.Println(minNumber)
}