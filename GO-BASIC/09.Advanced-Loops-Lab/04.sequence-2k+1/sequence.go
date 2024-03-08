package main

import "fmt"

func main() {

	var n int

	fmt.Scanln(&n)

	currentNum := 1

	for currentNum <= n {
		fmt.Println(currentNum)
		currentNum = currentNum * 2 + 1
	}
}
