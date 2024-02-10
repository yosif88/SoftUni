package main

import "fmt"

func main() {
	const pensPackagePrice float32 = 5.80
	const markersPackagePrice float32 = 7.20
	const detergentPricePerLiter float32 = 1.20

	var pensPackageNumber int
	var markersPackageNumber int
	var detergentLiters int
	var percent int

	fmt.Scanln(&pensPackageNumber)
	fmt.Scanln(&markersPackageNumber)
	fmt.Scanln(&detergentLiters)
	fmt.Scanln(&percent)

	var pensPrice float32 = float32(pensPackageNumber) * pensPackagePrice
	var markersPrice float32 = float32(markersPackageNumber) * markersPackagePrice
	var detergentPrice float32 = float32(detergentLiters) * detergentPricePerLiter
	
	var totalSum float32 = pensPrice + markersPrice + detergentPrice
	var discount float32 = totalSum - (totalSum * float32(percent) / 100)

	fmt.Println(discount)

}