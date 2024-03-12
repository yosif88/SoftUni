package main

import "fmt"

func main() {
	for i := 0; i <= 23; i++ {
		for j := 0; j <= 59; j++ {
			fmt.Printf("%d:%d\n", i, j)
		}
	}
}