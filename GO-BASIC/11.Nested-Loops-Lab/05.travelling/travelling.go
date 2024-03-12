package main

import (
	"fmt"
	
)

func main() {
	var destination string
	var budget, saveMoney, currentMoney float64


	fmt.Scanln(&destination)

	for destination != "End"{
		
		fmt.Scanln(&budget)
		saveMoney = 0
		
		for saveMoney < budget {
			fmt.Scanln(&currentMoney)
			saveMoney += currentMoney
		}
		fmt.Printf("Going to %s!\n",destination)
		
		fmt.Scanln(&destination)
		


	}
}