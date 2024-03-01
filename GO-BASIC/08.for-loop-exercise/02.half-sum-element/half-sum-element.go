package main

import (
	"fmt"
	"math"
)

func main() {
	var n,currentNum,sum int
	fmt.Scanln(&n)

	var maxNum int32 = math.MinInt32

	for i := 0; i < n; i++ {
		
		fmt.Scanln(&currentNum)

		if int32(currentNum) > maxNum {
			maxNum = int32(currentNum)
		}
		sum += currentNum
	}
	sum -= int(maxNum)
	
	if sum == int(maxNum){
		fmt.Println("Yes")
		fmt.Printf("Sum = %d",sum)
	}else{
		diff := math.Abs(float64(sum) - float64(maxNum))
		fmt.Println("No")
		fmt.Printf("Diff = %.0f",diff)
	}
}