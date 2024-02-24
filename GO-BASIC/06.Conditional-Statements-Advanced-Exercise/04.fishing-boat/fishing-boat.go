package main

import "fmt"

func main() {
	var budget int
	var season string
	var numberOfFisherMen int
	var price float64
	
	fmt.Scanln(&budget)
	fmt.Scanln(&season)
	fmt.Scanln(&numberOfFisherMen)

	switch season {
	case "Spring":
		price = 3000
	case "Summer":
		price = 4200
	case "Autumn":
		price = 4200
	case "Winter":
		price = 2600
	}

	if numberOfFisherMen <= 6 {
		price *= 0.90
	} else if 7 <= numberOfFisherMen && numberOfFisherMen <= 11 {
		price *= 0.85
	} else if numberOfFisherMen >= 12 {
		price *= 0.75
	}

	if numberOfFisherMen%2 == 0 && season != "Autumn" {
		price *= 0.95
	}

	if float64(budget) >= price{
		moneyLeft := float64(budget) - price
		fmt.Printf("Yes! You have %.2f leva left.",moneyLeft)
	}else{
		moneyNeeded := price - float64(budget)
		fmt.Printf("Not enough money! You need %.2f leva.",moneyNeeded)
	}
	

}
