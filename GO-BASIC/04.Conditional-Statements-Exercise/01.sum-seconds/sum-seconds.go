package main

import "fmt"

func main() {
	var firstAthlete int
	var secondAthlete int
	var thirdAthlete int

	fmt.Scanln(&firstAthlete)
	fmt.Scanln(&secondAthlete)
	fmt.Scanln(&thirdAthlete)

	sum := firstAthlete + secondAthlete+thirdAthlete
	minutes := sum /60
	seconds := sum % 60 

	if seconds < 10{
		fmt.Printf("%d:0%d",minutes,seconds)
	}else{
		fmt.Printf("%d:%d",minutes,seconds)
	}

}
