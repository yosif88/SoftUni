package main

import (
	"fmt"
	"math"
)

func main() {
	var figures string
	var area float32 = 0

	fmt.Scanln(&figures)
	//square, rectangle, circle или triangle
	if figures == "square" {
		var side float32

		fmt.Scanln(&side)
		area = side * side
		fmt.Printf("%.3f", area)

	} else if figures == "rectangle" {
		var sideA float32
		var sideB float32

		fmt.Scanln(&sideA)
		fmt.Scanln(&sideB)

		area = sideA * sideB
		fmt.Printf("%.3f", area)

	} else if figures == "circle" {
		var radius float32
		fmt.Scanln(&radius)

		area = math.Pi * radius * radius
		fmt.Printf("%.3f", area)

	} else if figures == "triangle" {
		var side float32
		var height float32

		fmt.Scanln(&side)
		fmt.Scanln(&height)

		area = side * height / 2
		fmt.Printf("%.3f", area)


	}

}
