package main

import "fmt"

func main() {
	var projectionType string
	var rows, cols int
	var price float64
	fmt.Scanln(&projectionType)
	fmt.Scanln(&rows)
	fmt.Scanln(&cols)

	totalPlaces:= rows * cols

	switch projectionType {
	case "Premiere":
		price = float64(totalPlaces) * 12.00
	case "Normal":
		price = float64(totalPlaces) * 7.50
	case "Discount":
		price = float64(totalPlaces) * 5.0
	}
	fmt.Printf("%.2f leva", price)
}
