package main

import (
	"fmt"
	"math"
)

func main() {
	var n int
	fmt.Scan(&n)

	for i := 0; i <= n; i+=2 {
		fmt.Println(math.Pow(2, float64(i)))
	}
}
