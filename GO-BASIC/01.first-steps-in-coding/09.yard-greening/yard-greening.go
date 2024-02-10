package main

import "fmt"

func main() {
	var yard float32

	fmt.Scanln(&yard)

	var price float32 = yard * 7.61

	var finalPrice float32 = price  * 0.82
	var discount float32 =  price * 0.18

	fmt.Printf("The final price is: %f lv.\nThe discount is: %f lv.", finalPrice, discount)
}
