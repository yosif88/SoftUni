package main

import "fmt"

func main() {
	var budget float64
	var season string
	var destination, vacation string
	var price float64

	fmt.Scanln(&budget)
	fmt.Scanln(&season)

	if budget <= 100 {
		destination = "Bulgaria"
		switch season {
		case "summer":
			vacation = "Camp"
			price = budget * 0.30
		case "winter":
			vacation = "Hotel"
			price = budget * 0.70
		}

	}else if budget <= 1000{
		destination = "Balkans"
		switch season {
		case "summer":
			vacation = "Camp"
			price = budget * 0.40
		case "winter":
			vacation = "Hotel"
			price = budget * 0.80
		}
	}else if budget > 1000{
		destination = "Europe"
		vacation = "Hotel"
		price = budget * 0.90
	}

	fmt.Printf("Somewhere in %s\n",destination)
	fmt.Printf("%s - %.2f",vacation,price)

}
