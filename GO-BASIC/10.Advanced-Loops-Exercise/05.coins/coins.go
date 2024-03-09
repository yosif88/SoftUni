package main

import (
	"fmt"
	
)

func main() {

	var coins float64
	var counter int

	fmt.Scanln(&coins)

	
	coinsToInt := int(coins * 100)

	for coinsToInt > 0 {

		if coinsToInt >= 200 {
			coinsToInt -= 200
			counter++

		} else if coinsToInt >= 100 {
			coinsToInt -= 100
			counter++

		} else if coinsToInt >= 50 {
			coinsToInt -= 50
			counter++

		} else if coinsToInt >= 20 {
			coinsToInt -= 20
			counter++

		} else if coinsToInt >= 10 {
			coinsToInt -= 10
			counter++

		} else if coinsToInt >= 5 {
			coinsToInt -= 5
			counter++

		} else if coinsToInt >= 2 {
			coinsToInt -= 2
			counter++

		} else if coinsToInt >= 1 {
			coinsToInt -= 1
			counter++
		}
	}

	fmt.Println(counter)

}
