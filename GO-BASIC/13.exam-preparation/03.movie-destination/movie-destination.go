package main

import "fmt"

func main() {
	var budget, price float64
	var destination, season string
	var numberOfDays int

	fmt.Scanln(&budget)
	fmt.Scanln(&destination)
	fmt.Scanln(&season)
	fmt.Scanln(&numberOfDays)

	switch destination {
	case "Dubai":
		switch season {
		case "Winter":
			price = float64(numberOfDays) * 45000.0
		case "Summer":
			price = float64(numberOfDays) * 40000.0

		}
		price *= 0.70
	case "Sofia":
		switch season {
		case "Winter":
			price = float64(numberOfDays) * 17000.0
		case "Summer":
			price = float64(numberOfDays) * 12500.0

		}
		price *= 1.25
	case "London":
		switch season {
		case "Winter":
			price = float64(numberOfDays) * 24000.0
		case "Summer":
			price = float64(numberOfDays) * 20250.0

		}
	}
	if budget >= price{
		budgetLeft := budget - price
		fmt.Printf("The budget for the movie is enough! We have %.2f leva left!", budgetLeft)
	}else{
		moneyNeeded := price - budget
		fmt.Printf("The director needs %.2f leva more!", moneyNeeded)
	}
}
