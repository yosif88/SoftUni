package main

import "fmt"

func main() {
	const puzzlePrice float32 = 2.60
	const dollPrice float32 = 3
	const teddyBearPrice float32 = 4.10
	const minionPrice float32 = 8.20
	const truckPrice float32 = 2

	var tourPrice float32
	var numberOfPuzzle, numberOfDolls, numberOfTeddyBear, numberOfMinions, numberOfTrucks int

	fmt.Scanln(&tourPrice)
	fmt.Scanln(&numberOfPuzzle)
	fmt.Scanln(&numberOfDolls)
	fmt.Scanln(&numberOfTeddyBear)
	fmt.Scanln(&numberOfMinions)
	fmt.Scanln(&numberOfTrucks)

	sumPrices := (float32(numberOfPuzzle) * float32(puzzlePrice)) + (float32(numberOfDolls) * float32(dollPrice)) + (float32(numberOfTeddyBear) * float32(teddyBearPrice)) + (float32(numberOfMinions) * float32(minionPrice)) + (float32(numberOfTrucks) * float32(truckPrice))
	numbersToys := numberOfPuzzle + numberOfDolls + numberOfTeddyBear + numberOfMinions + numberOfTrucks

	if(numbersToys >= 50){
		sumPrices *= 0.75
	}
	sumPrices *=0.90

	if (sumPrices >= tourPrice){
		moneyLeft := sumPrices - tourPrice
		fmt.Printf("Yes! %.2f lv left.",moneyLeft)
	}else{
		neededMoney := tourPrice - sumPrices
		fmt.Printf("Not enough money! %.2f lv needed.", neededMoney)
	}

	
}
