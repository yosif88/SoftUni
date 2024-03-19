package main

import (
	"fmt"
	"math"
)

func main() {
	var numberOfDays, foodDog, foodCat,eatenFoodCat, eatenFoodDog int
	var totalAmountFood, eatenBiscuits,percentFoodEaten,percentFoodDog, percentFoodCat float64

	fmt.Scanln(&numberOfDays)
	fmt.Scanln(&totalAmountFood)

	for day := 1; day <= numberOfDays; day++ {
		fmt.Scanln(&foodDog)
		fmt.Scanln(&foodCat)
		
		
		if day % 3 == 0{
			currentFood := float64(foodDog) + float64(foodCat)
			eatenBiscuits +=  (currentFood * 1.10)-currentFood 
		}
		eatenFoodDog += foodDog
		eatenFoodCat += foodCat
	}
	sumOfEaten := float64(eatenFoodCat) + float64(eatenFoodDog)
	percentFoodEaten = sumOfEaten / totalAmountFood * 100
	percentFoodDog = float64(eatenFoodDog) / sumOfEaten * 100
	percentFoodCat = float64(eatenFoodCat) / sumOfEaten * 100

	fmt.Printf("Total eaten biscuits: %.0fgr.\n",math.Round(eatenBiscuits))
	fmt.Printf("%.2f%% of the food has been eaten.\n",percentFoodEaten)
	fmt.Printf("%.2f%% eaten from the dog.\n", percentFoodDog)
	fmt.Printf("%.2f%% eaten from the cat.",percentFoodCat)
}