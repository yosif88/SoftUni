package main

import "fmt"

func main() {
	var age, pricePerToy, lilyMoney, toyCounter int
	var priceForWashingMachine float64
	var birthdayPrice int = 10

	fmt.Scanln(&age)
	fmt.Scanln(&priceForWashingMachine)
	fmt.Scanln(&pricePerToy)

	for i := 1; i <= age; i++ {
		if i%2 == 0 {
			lilyMoney += birthdayPrice
			lilyMoney--
			birthdayPrice += 10

		} else {
			toyCounter++
		}
	}

	lilyMoney += toyCounter * pricePerToy

	if float64(lilyMoney) >= priceForWashingMachine {
		
		diff := float64(lilyMoney) - priceForWashingMachine
		fmt.Printf("Yes! %.2f",diff)
	}else{
		moneyNeeded := priceForWashingMachine - float64(lilyMoney)
		fmt.Printf("No! %.2f", moneyNeeded)
	}

}
