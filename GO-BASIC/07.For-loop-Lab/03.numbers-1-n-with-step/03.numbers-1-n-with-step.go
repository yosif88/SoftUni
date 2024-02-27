package main

import "fmt"

func main() {
	var nums int
	fmt.Scanln(&nums)

	for i := 1; i <= nums; i += 3 {
		fmt.Println(i)
	}
}