package main

import "fmt"

func main() {
	for i := 1; i <= 10; i++ {
		for j := 1; j <= 10; j++ {
			result := i * j
			fmt.Printf("%d * %d = %d\n", i, j, result)
		}
	}
}
