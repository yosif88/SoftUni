package main

import (
	"fmt"
	"math"
)

func main() {
	var n,currentNum int
	fmt.Scanln(&n)
	var evenSum,oddSum int

	for i := 0; i < n; i++ {
		fmt.Scanln(&currentNum)
		
		if i % 2 == 0 {
			evenSum += currentNum
		}else{
			oddSum += currentNum

		}
	}

	if evenSum == oddSum{
		fmt.Println("Yes")
		fmt.Printf("Sum = %d",evenSum)
	}else{
		diff := math.Abs(float64(evenSum) - float64(oddSum))
		fmt.Println("No")
		fmt.Printf("Diff = %.0f",diff)
	}

}