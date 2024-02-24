package main

import "fmt"

func main() {

	var dayOfWeek string

	fmt.Scanln(&dayOfWeek)

	if dayOfWeek == "Monday" || dayOfWeek == "Tuesday" || dayOfWeek == "Friday" {
		fmt.Println(12)
	
		} else if dayOfWeek == "Wednesday" || dayOfWeek == "Thursday" {
		fmt.Println(14)
	
		} else if dayOfWeek == "Saturday" || dayOfWeek == "Sunday" {
		fmt.Println(16)
	}
}
