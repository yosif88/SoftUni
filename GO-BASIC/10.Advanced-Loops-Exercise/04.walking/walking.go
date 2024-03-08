package main

import (
	"fmt"
	"strconv"
)

func main() {
	var input string
	var sumOfStep, stepToHome int
	const stepDay = 10000
	fmt.Scanln(&input)

	for sumOfStep < stepDay {

		if input == "GoingHome" {
			
			fmt.Scanln(&stepToHome)
			sumOfStep += stepToHome
			break

		} else {
			stepCount, _ := strconv.Atoi(input)
			sumOfStep += stepCount
		}
		fmt.Scanln(&input)

	}
	if sumOfStep >= stepDay {
		diff := sumOfStep - stepDay
		fmt.Println("Goal reached! Good job!")
		fmt.Printf("%d steps over the goal!", diff)
	} else {
		diff := stepDay - sumOfStep
		fmt.Printf("%d more steps to reach goal.", diff)
	}

}
