package main

import "fmt"

func main() {

	var n, combination int

	fmt.Scanln(&n)

	for a := 0; a <= n; a++ {
		for b := 0; b <= n; b++ {
			for c := 0; c <= n; c++ {
				
				if a + b + c == n  {
					combination ++
					
				}
			}
		}
	}

	fmt.Println(combination)
}
