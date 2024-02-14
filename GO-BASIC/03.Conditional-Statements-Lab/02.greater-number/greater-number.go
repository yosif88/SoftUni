package main

import "fmt"

func main(){
	var numOne int
	var numTwo int

	fmt.Scanln(&numOne)
	fmt.Scanln(&numTwo)
	
	if(numOne > numTwo){
		fmt.Println(numOne)
	}else{
		fmt.Println(numTwo)
	}
}