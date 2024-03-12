package main

import "fmt"

func main() {
	
	var startNum, endNum, magicNumber, sum, combination int
	var isMagicNumber bool = false

	fmt.Scanln(&startNum)
	fmt.Scanln(&endNum)
	fmt.Scanln(&magicNumber)

	for i := startNum; i <= endNum; i++ {
		for j := startNum; j <= endNum; j++ {

			sum = i + j
			combination ++
			
			if sum == magicNumber {
				isMagicNumber = true
				fmt.Printf("Combination N:%d (%d + %d = %d)", combination, i, j, magicNumber)
				break
			}
		}

		if isMagicNumber {
			break
		}
	
	}
	
	if !isMagicNumber{
		fmt.Printf("%d combinations - neither equals %d",combination, magicNumber)
	}
}