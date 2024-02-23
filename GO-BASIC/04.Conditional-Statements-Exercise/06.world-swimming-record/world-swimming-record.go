package main

import (
	"fmt"
	"math"
)

func main() {
	var wordRecord float32
	var distance float32
	var timePerMeter float32

	fmt.Scanln(&wordRecord)
	fmt.Scanln(&distance)
	fmt.Scanln(&timePerMeter)

	timeDistance := distance * timePerMeter
	delayTime := math.Floor(float64(distance)/15)*12.5

	totalTime := float32(timeDistance) + float32(delayTime)

	if totalTime >= wordRecord{
		diff := math.Abs(float64(totalTime)-float64(wordRecord))

		fmt.Printf("No, he failed! He was %.2f seconds slower.",diff)
	}else{
		fmt.Printf("Yes, he succeeded! The new world record is %.2f seconds.",totalTime) 
	}

}