package main

import "fmt"

func main() {
	var budget,pricePerNight float64
	var numberOfNights, percentForAdditionalCost int

	fmt.Scanln(&budget)
	fmt.Scanln(&numberOfNights)
	fmt.Scanln(&pricePerNight)
	fmt.Scanln(&percentForAdditionalCost)

	if numberOfNights > 7 {
		pricePerNight *= 0.95
	}

	sumOfNight := pricePerNight * float64(numberOfNights)
	expenses := budget * (float64(percentForAdditionalCost) / 100)

	amountForExpenses := sumOfNight + expenses;

	if amountForExpenses <= budget {
		moneyLeft :=  budget -amountForExpenses
		fmt.Printf("Ivanovi will be left with %.2f leva after vacation.", moneyLeft)
	}else{
		moneyNeeded := amountForExpenses - budget
		fmt.Printf("%.2f leva needed.",moneyNeeded)
	}


}