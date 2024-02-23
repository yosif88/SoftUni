package main

import (
	"fmt"
	"math"
)

func main() {
	var budget float32
	var numberOfExtras int
	var outfitOfExtra float32
	

	fmt.Scanln(&budget)
	fmt.Scanln(&numberOfExtras)
	fmt.Scanln(&outfitOfExtra)

	decor := budget * 0.10
	sumOfExtra := outfitOfExtra * float32(numberOfExtras)
	
	
	if (numberOfExtras > 150) {
		sumOfExtra *= 0.9
	}
	totalSum := decor + sumOfExtra
	if totalSum >budget{
		diff:= math.Abs(float64(budget)-float64(totalSum))

		fmt.Printf("Not enough money!\nWingard needs %.2f leva more.",diff)
	}else{
		moneyLeft := math.Abs(float64(budget)-float64(totalSum))

		fmt.Printf("Action!\nWingard starts filming with %.2f leva left.",moneyLeft)
	}

}