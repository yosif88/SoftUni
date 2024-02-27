package main

import "fmt"

func main() {
	var n int
	fmt.Scanln(&n)
	var sums int

	for i := 0; i < n; i++ {
		var number int
		fmt.Scanln(&number)
		sums += number
	}

	fmt.Println(sums)
}