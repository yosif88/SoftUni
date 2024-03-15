package main

import (
	"fmt"
	"strconv"
)

func main() {
	
	var input string
	var sumPrime, sumNonPrime int
	
	fmt.Scanln(&input)

	for input != "stop" {
		
		number,_ := strconv.Atoi(input)
		
		if number  < 0{
			fmt.Println("Number is negative.")
			fmt.Scanln(&input)
			continue
		}
		
		isPrime := true
		
		for i := 2; i < number; i++ {
			if number % i == 0{
				isPrime = false
			}
			
		}

		if isPrime {
			sumPrime  += number
		}else{
			sumNonPrime += number
		}

		fmt.Scanln(&input)
	}

	fmt.Printf("Sum of all prime numbers is: %d\n", sumPrime)
	fmt.Printf("Sum of all non prime numbers is: %d", sumNonPrime)
}