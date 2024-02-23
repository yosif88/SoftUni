package main

import (
	"fmt"
	"math"
)

func main() {

	var budget float64
	var numberOfVGA int
	var numberOfCPU int
	var numberOfRAM int

	fmt.Scanln(&budget)
	fmt.Scanln(&numberOfVGA)
	fmt.Scanln(&numberOfCPU)
	fmt.Scanln(&numberOfRAM)

	vgaPrice := float64(numberOfVGA) * 250
	cpuPrice := float64(numberOfCPU) * (vgaPrice * 0.35)
	ramPrice := float64(numberOfRAM) * (vgaPrice * 0.10)

	totalSum := vgaPrice + cpuPrice + ramPrice

	if numberOfVGA > numberOfCPU {
		totalSum *= 0.85
	}

	if budget >= totalSum {

		moneyLeft := math.Abs(totalSum - budget)
		fmt.Printf("You have %.2f leva left!", moneyLeft)
	}else{
		moneyNeeded := math.Abs(budget - totalSum)
		fmt.Printf("Not enough money! You need %.2f leva more!",moneyNeeded)
	}

}
