package main

import "fmt"

func main() {
	var name, password, input string
	fmt.Scanln(&name)
	fmt.Scanln(&password)
	fmt.Scanln(&input)

	for password != input {


		fmt.Scanln(&input)
	}

	fmt.Printf("Welcome %s!", name)
}