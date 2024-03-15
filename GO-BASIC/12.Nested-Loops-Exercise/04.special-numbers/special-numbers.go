package main

import "fmt"

func main() {
	
	var n int
	fmt.Scan(&n)

	for a := 1; a < 10; a++ {
		for b := 1; b < 10; b++ {
			for c := 1; c < 10; c++ {
				for d := 1; d < 10; d++ {
					if n % a == 0 && n % b == 0 && n % c == 0 && n % d == 0{
						fmt.Printf("%d%d%d%d ",a,b,c,d)
					}
				}
			}
		}
	}
}