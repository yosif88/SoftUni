package main

import "fmt"

func main() {
	var month string
	var numberOfNights int
	var priceStudio float64
	var priceApartment float64

	fmt.Scan(&month, &numberOfNights)

	if month == "May" || month == "October" {
		priceStudio = 50 * float64(numberOfNights)
		priceApartment = 65 * float64(numberOfNights)
		
		if numberOfNights > 14 {
			
			priceStudio *= 0.7
			priceApartment *= 0.90

		}else if numberOfNights > 7{
			priceStudio *= 0.95
		}
	}else if month == "June" || month == "September"{
		priceStudio = 75.20 * float64(numberOfNights)
		priceApartment = 68.70 * float64(numberOfNights)

		if numberOfNights > 14 {
			priceStudio *= 0.80
			priceApartment *= 0.90
		}

	}else if month == "July" || month == "August"{
		priceStudio = 76 * float64(numberOfNights)
		priceApartment = 77 * float64(numberOfNights)
		
		if numberOfNights > 14 {
			priceApartment *= 0.9
		}
	}

	fmt.Printf("Apartment: %.2f lv.\n", priceApartment)
	fmt.Printf("Studio: %.2f lv.", priceStudio)
}
