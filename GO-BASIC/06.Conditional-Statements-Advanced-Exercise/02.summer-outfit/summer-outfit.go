package main

import "fmt"

func main() {
	var degrees int
	var timeOfDay string
	var outfit, shoes string

	fmt.Scanln(&degrees)
	fmt.Scanln(&timeOfDay)

	switch timeOfDay {
	case "Morning":
		if 10 <= degrees && degrees <= 18 {
			outfit = "Sweatshirt"
			shoes = "Sneakers"
		} else if 18 <= degrees && degrees <= 24 {
			outfit = "Shirt"
			shoes = "Moccasins"
		} else if degrees >= 25 {
			outfit = "T-Shirt"
			shoes = "Sandals"
		}

	case "Afternoon":
		if 10 <= degrees && degrees <= 18 {
			outfit = "Shirt"
			shoes = "Moccasins"
		} else if 18 <= degrees && degrees <= 24 {
			outfit = "T-Shirt"
			shoes = "Sandals"
		} else if degrees >= 25 {
			outfit = "Swim Suit"
			shoes = "Barefoot"
		}

	case "Evening":
		if 10 <= degrees && degrees <= 18 {
			outfit = "Shirt"
			shoes = "Moccasins"
		} else if 18 <= degrees && degrees <= 24 {
			outfit = "Shirt"
			shoes = "Moccasins"
		} else if degrees >= 25 {
			outfit = "Shirt"
			shoes = "Moccasins"
		}
	}

	fmt.Printf("It's %d degrees, get your %s and %s.",degrees,outfit,shoes)
}
