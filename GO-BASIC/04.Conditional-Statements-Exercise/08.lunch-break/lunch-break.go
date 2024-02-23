package main

import (
	"fmt"
	"math"
)

func main() {
	var movieName string
	var movieLength, durationOfBreak int

	fmt.Scanln(&movieName)
	fmt.Scanln(&movieLength)
	fmt.Scanln(&durationOfBreak)

	timeForBreak := float64(durationOfBreak ) / 8.0
	timeToRelax := float64(durationOfBreak) /4.0

	timeLeft :=float64(durationOfBreak) - timeForBreak - timeToRelax

	if timeLeft >= float64(movieLength) {
		
		diff := math.Ceil(float64(timeLeft)-float64(movieLength))
		fmt.Printf("You have enough time to watch %s and left with %.0f minutes free time.",movieName,diff)
	
	}else{
		timeNeeded:= math.Ceil(float64(movieLength)-float64(timeLeft))
		fmt.Printf("You don't have enough time to watch %s, you need %.0f more minutes.",movieName,timeNeeded)
	}
}
