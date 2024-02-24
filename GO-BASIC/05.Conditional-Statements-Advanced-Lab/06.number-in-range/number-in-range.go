package main

import "fmt"

func main() {
	
	var number int
	fmt.Scanln(&number)
	var isValid bool = number >= -100 && number <= 100 && number != 0
	
	if isValid{
		fmt.Println("Yes")
	}else{
		fmt.Println("No")
	}
	// if number >= -100 && number <= 100 && number != 0{
	// 	fmt.Println("Yes")
	// }else{
	// 	fmt.Println("No")
	// }
}