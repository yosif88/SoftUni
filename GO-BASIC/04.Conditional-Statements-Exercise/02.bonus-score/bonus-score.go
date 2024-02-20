package main

import "fmt"

func main() {
	var score int
	fmt.Scanln(&score)

	var bonusPoints float32

	if score <= 100 {
		bonusPoints = 5
	} else if score > 1000 {
		bonusPoints = float32(score) * 0.1
	} else if score > 100 {
		bonusPoints = float32(score) * 0.2
	}

	if score % 2==0{
		bonusPoints += 1
	}else if score % 10 == 5{
		bonusPoints += 2
	}

	fmt.Println(bonusPoints)
	fmt.Println(float32(score) + bonusPoints)
}
