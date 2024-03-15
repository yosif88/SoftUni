package main

import (
	"fmt"
	"strconv"
)

func main() {
	var startNum, endNum int

	fmt.Scanln(&startNum)
	fmt.Scanln(&endNum)

	for i := startNum; i <= endNum; i++ {
		
		var oddSum int = 0
		var evenSum int = 0

		var currentNumber string = strconv.Itoa(i)
		
		for j := 0; j < len(currentNumber); j++ {
			digit := currentNumber[j]

			if j % 2 == 0 {
				evenSum += int(digit)

			}else {
				oddSum += int(digit)
			}
		

		}
		if evenSum == oddSum{
			fmt.Printf("%s ", currentNumber)
		}
		
	}
}
