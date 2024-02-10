package main

import "fmt"

func main() {
	var fistName string
	var lastName string
	var age int
	var town string

	fmt.Scanln(&fistName)
	fmt.Scanln(&lastName)
	fmt.Scanln(&age)
	fmt.Scanln(&town)

	fmt.Printf("You are %s %s, a %d-years old person from %s.", fistName, lastName, age, town)
}