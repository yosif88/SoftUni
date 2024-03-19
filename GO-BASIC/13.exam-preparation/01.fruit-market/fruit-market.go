package main

import "fmt"

func main() {
	var priceForStrawberry, quantityForBananas, quantityForOrange,  quantityRaspberry, quantityStrawberry float64

	fmt.Scanln(&priceForStrawberry)
	fmt.Scanln(&quantityForBananas)
	fmt.Scanln(&quantityForOrange)
	fmt.Scanln(&quantityRaspberry)
	fmt.Scanln(&quantityStrawberry)

	priceOfRaspberry := priceForStrawberry / 2
	priceOfOrange := priceOfRaspberry * 0.6
	priceOfBananas := priceOfRaspberry * 0.2

	sumOfBananas := priceOfBananas * quantityForBananas
	sumOfRaspberry := priceOfRaspberry * quantityRaspberry
	sumOfOrange := priceOfOrange * quantityForOrange
	sumOfStrawberry := priceForStrawberry * quantityStrawberry

	totalPrice := sumOfBananas + sumOfRaspberry + sumOfOrange + sumOfStrawberry
	fmt.Printf("%.2f",totalPrice)


}