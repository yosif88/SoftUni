package main

import "fmt"

func main() {
	var password string = "s3cr3t!P@ssw0rd"
	var input string

	fmt.Scanln(&input)

	if input != password{
		fmt.Println("Wrong password!")
	}else{
		fmt.Println("Welcome")
	}
}