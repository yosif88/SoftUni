package main

import "fmt"

func main() {
	var moneyForExcursion, jesseMoney, moneyForSpendOrSave float32
	var command string
	var days,spendingCount  int
	var isSave bool = true

	fmt.Scanln(&moneyForExcursion)
	fmt.Scanln(&jesseMoney)
	
	for jesseMoney < moneyForExcursion {
		fmt.Scanln(&command)
		fmt.Scanln(&moneyForSpendOrSave)

		
		if command == "spend"{
			spendingCount ++
			jesseMoney -= moneyForSpendOrSave
			if jesseMoney < 0{
				jesseMoney = 0
			}
			
			}else{
				jesseMoney += moneyForSpendOrSave
				spendingCount = 0
			}
			days++
			
			if spendingCount == 5{
				isSave = false
				break
			}
			
			
			
	}
	if isSave{
		fmt.Printf("You saved the money for %d days.",days)
	}else{
		fmt.Println("You can't save the money.")
		fmt.Println(days)
	}
}