package main

import "fmt"

func main() {
	var nums int
	fmt.Scanln(&nums)

	for i := nums; i > 0; i-- {
		fmt.Println(i)
	}
}
