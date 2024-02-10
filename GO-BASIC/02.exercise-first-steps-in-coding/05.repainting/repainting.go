package main

import "fmt"

func main() {
	const priceForSafetyNylon float32 = 1.50
	const priceForPain float32 = 14.50
	const priceForThinner float32 = 5
	const pricePerBags float32 = 0.40

	var amountOfNylon, amountOfPaint, amountOfThinner, hoursForMaster int

	fmt.Scanln(&amountOfNylon)
	fmt.Scanln(&amountOfPaint)
	fmt.Scanln(&amountOfThinner)
	fmt.Scanln(&hoursForMaster)

	var sumOfNylon float32 = (float32(amountOfNylon) + 2) * priceForSafetyNylon
	var sumOfPain float32 = float32(amountOfPaint) * 1.10 * priceForPain
	var sumOfThinner float32 = float32(amountOfThinner) * priceForThinner

	var sumOfMaterials = sumOfNylon + sumOfPain + sumOfThinner + pricePerBags
	var sumOfMasters = sumOfMaterials * 0.30 * float32(hoursForMaster)
	var totalSum = sumOfMasters + sumOfMaterials

	fmt.Println(totalSum)

}
