package main

import "fmt"

func main() {
	var dogFoodPrice float32 = 2.50
	var catFoodPrice int = 4

	var numberOfDogFood int
	var numberOfCatFood int

	fmt.Scanln(&numberOfDogFood)
	fmt.Scanln(&numberOfCatFood)

	var totalSum =  (float32(numberOfDogFood) * dogFoodPrice) + (float32(numberOfCatFood) * float32(catFoodPrice))

	fmt.Printf("%f lv.", totalSum)

}