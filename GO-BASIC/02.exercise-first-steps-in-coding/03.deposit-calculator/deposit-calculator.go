package main

import "fmt"

func main() {
	var amountDeposited float32
	var timeForDeposit int
	var percent float32

	fmt.Scanln(&amountDeposited)
	fmt.Scanln(&timeForDeposit)
	fmt.Scanln(&percent)

	var profit float32 = amountDeposited * percent / 100
	var interestPerMonth float32 = profit / 12
	var totalSum = amountDeposited  + float32(timeForDeposit) * interestPerMonth 

	fmt.Println(totalSum)

}
