package main

import (
	"fmt"
	"strconv"
)

func main() {
	var input string
	var totalAmount float64

	fmt.Scanln(&input)

	for input != "NoMoreMoney" {
		currentAmount, _ := strconv.ParseFloat(input,32) 
		
		if currentAmount <= 0 {
			fmt.Println("Invalid operation!")
			break
		}
		totalAmount += currentAmount
		
		fmt.Printf("Increase: %.2f\n", currentAmount)
		
		fmt.Scanln(&input)
	}

	fmt.Printf("Total: %.2f", totalAmount)
}