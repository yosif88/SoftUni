package main

import "fmt"

func main() {
	var numberOfGroups, numberOfPeopleInTheGroup, totalPeople int
	var climbingMusala, climbingMontBlanc, climbingKilimanjaro, climbingK2, climbingEverest int
	fmt.Scanln(&numberOfGroups)

	for i := 0; i < numberOfGroups; i++ {

		fmt.Scanln(&numberOfPeopleInTheGroup)
		totalPeople += numberOfPeopleInTheGroup

		if numberOfPeopleInTheGroup <= 5 {
			climbingMusala += numberOfPeopleInTheGroup

		} else if numberOfPeopleInTheGroup <= 12 {
			climbingMontBlanc += numberOfPeopleInTheGroup

		} else if numberOfPeopleInTheGroup <= 25 {
			climbingKilimanjaro += numberOfPeopleInTheGroup

		} else if numberOfPeopleInTheGroup <= 40 {
			climbingK2 += numberOfPeopleInTheGroup

		} else if numberOfPeopleInTheGroup >= 41 {
			climbingEverest += numberOfPeopleInTheGroup
		}

	}

	percentMusala := float64(climbingMusala) / float64(totalPeople) * 100
	percentMontBlanc := float64(climbingMontBlanc) / float64(totalPeople) * 100
	percentKilimanjaro := float64(climbingKilimanjaro) / float64(totalPeople) * 100
	percentK2 := float64(climbingK2) / float64(totalPeople) * 100
	percentEverest := float64(climbingEverest) / float64(totalPeople) * 100

	fmt.Printf("%.2f%%\n",percentMusala)
	fmt.Printf("%.2f%%\n",percentMontBlanc)
	fmt.Printf("%.2f%%\n",percentKilimanjaro)
	fmt.Printf("%.2f%%\n",percentK2)
	fmt.Printf("%.2f%%\n",percentEverest)
}
