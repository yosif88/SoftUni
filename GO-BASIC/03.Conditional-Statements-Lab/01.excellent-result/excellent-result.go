package main

import "fmt"

func main() {
	var evaluation int

	fmt.Scanln(&evaluation)
	if (evaluation >= 5){
		fmt.Println("Excellent!")
	}

}