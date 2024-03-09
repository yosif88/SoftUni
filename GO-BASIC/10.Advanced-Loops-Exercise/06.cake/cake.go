package main

import (
	"fmt"
	"math"
	"strconv"
)

func main() {
	
	var width, length int
	var input string

	fmt.Scanln(&width)
	fmt.Scanln(&length)
	fmt.Scanln(&input)

	area := width * length

	for input != "STOP" {
		piece,_ := strconv.Atoi(input)
		area -= piece

		if area <= 0 {
			fmt.Printf("No more cake left! You need %.0f pieces more.",math.Abs(float64(area)))
			break
		}

		fmt.Scanln(&input)
	}

	if area > 0 {
		fmt.Printf("%d pieces are left.", area)
	}
}