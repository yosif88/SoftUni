package main

import "fmt"

func main() {
	var typeOfFlowers string
	var numberOfFlowers, budget int

	fmt.Scanln(&typeOfFlowers)
	fmt.Scanln(&numberOfFlowers)
	fmt.Scanln(&budget)

	var price float64

	switch typeOfFlowers {
	case "Roses":
		price = float64(numberOfFlowers) * 5.0
	case "Dahlias":
		price = float64(numberOfFlowers) * 3.80
	case "Tulips":
		price = float64(numberOfFlowers) * 2.80
	case "Narcissus":
		price = float64(numberOfFlowers) * 3.0
	case "Gladiolus":
		price = float64(numberOfFlowers) * 2.50
	}

	if typeOfFlowers=="Roses" && numberOfFlowers  > 80{
		price *= 0.90
	}else if typeOfFlowers=="Dahlias" && numberOfFlowers > 90{
		price *= 0.85
	}else if typeOfFlowers=="Tulips" && numberOfFlowers > 80{
		price *= 0.85
	}else if typeOfFlowers=="Narcissus" && numberOfFlowers < 120 {
		price *= 1.15
	}else if typeOfFlowers =="Gladiolus" && numberOfFlowers < 80{
		price *= 1.20
	}

	if float64(budget) >= price{
		moneyLeft := float64(budget) - price
		fmt.Printf("Hey, you have a great garden with %d %s and %.2f leva left.",numberOfFlowers,typeOfFlowers,moneyLeft)
	}else{
		moneyNeeded := price - float64(budget)
		fmt.Printf("Not enough money, you need %.2f leva more.", moneyNeeded)
	}
}