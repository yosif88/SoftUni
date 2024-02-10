package main

import "fmt"

func main() {
	var nameOfArchitect string
	var projectNumbers int
	
	fmt.Scanln(&nameOfArchitect)
	fmt.Scanln(&projectNumbers)

	var hoursRequired int = projectNumbers * 3

	fmt.Printf("The architect %s will need %d hours to complete %d project/s.", nameOfArchitect, hoursRequired, projectNumbers)
	
}