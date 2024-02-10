package main

import "fmt"

func main() {
	var feeForOneYear int

	fmt.Scanln(&feeForOneYear)

	var basketballSneakers float32 = float32(feeForOneYear) * 0.6
	var basketballOutlet float32 = basketballSneakers * 0.80
	var basketball float32 = basketballOutlet / 4
	var basketballAccessories float32 = basketball / 5

	var totalPriceForEquipment float32= float32(feeForOneYear) + basketballSneakers + basketballOutlet + basketball + basketballAccessories

	fmt.Println(totalPriceForEquipment)

}