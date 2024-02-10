package main

import "fmt"

func main() {
	const chickenMenu = 10.35
	const fishMenu = 12.40
	const veggieMenu = 8.15
	const costOfDelivery = 2.50

	var numberOfChickenMenu, numberOfFishMenu, numberOfVeggieMenu int

	fmt.Scanln(&numberOfChickenMenu)
	fmt.Scanln(&numberOfFishMenu)
	fmt.Scanln(&numberOfVeggieMenu)


	var priceChickenMenus float32 = float32(numberOfChickenMenu) * chickenMenu
	var priceForFishMenus  float32 = float32(numberOfFishMenu) * fishMenu
	var priceForVeggieMenus float32 = float32(numberOfVeggieMenu) * veggieMenu

	var totalPriceOfMenus float32 = priceChickenMenus + priceForFishMenus + priceForVeggieMenus
	var dessertPrice float32 = totalPriceOfMenus * 0.20
	var totalPrice = totalPriceOfMenus  + dessertPrice  + costOfDelivery
	
	fmt.Println(totalPrice)

}