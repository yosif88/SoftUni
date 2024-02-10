package main

import "fmt"

func main() {
	var inches float32

	fmt.Scanln(&inches)
	
	var centimeters = inches * 2.54

	fmt.Println(centimeters)
}