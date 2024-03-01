package main

import "fmt"

func main() {

	var numberOfOPenTabs, salary int
	var isSalaryLost bool = false

	fmt.Scanln(&numberOfOPenTabs)
	fmt.Scanln(&salary)

	for i := 0; i < numberOfOPenTabs; i++ {
		var currentTab string
		fmt.Scanln(&currentTab)

		switch currentTab {
		case "Facebook":
			salary -= 150
		case "Instagram":
			salary -= 100
		case "Reddit":
			salary -= 50
		}

		if salary <= 0 {
			isSalaryLost = true
			break
		}
	}
	if isSalaryLost{
		fmt.Println("You have lost your salary.")
	}else{
		fmt.Println(salary)
	}
}
