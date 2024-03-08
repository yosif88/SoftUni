package main

import "fmt"

func main() {
	var number,currentNums, sum int
	fmt.Scanln(&number)
	fmt.Scanln(&currentNums)

	for sum < number {
		sum += currentNums

		fmt.Scanln(&currentNums)
		
	}

	fmt.Println(sum)
}