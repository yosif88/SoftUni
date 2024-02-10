package main

import "fmt"

func main() {
	var sideA int
	var sideB int

	fmt.Scanln(&sideA)
	fmt.Scanln(&sideB)

	var area int = sideA * sideB
	fmt.Println(area)
}