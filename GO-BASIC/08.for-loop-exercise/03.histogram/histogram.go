package main

import "fmt"

func main() {
	var n, currentNum, p1, p2, p3, p4, p5 int

	fmt.Scanln(&n)

	for i := 0; i < n; i++ {
		fmt.Scanln(&currentNum)

		if currentNum < 200 {
			p1++
		} else if currentNum <= 399 {
			p2++
		} else if currentNum <= 599 {
			p3++
		} else if currentNum <= 799 {
			p4++
		} else if currentNum >= 800 {
			p5++
		}

	}

	percentP1 := float64(p1) / float64(n) * 100
	percentP2 := float64(p2) / float64(n) * 100
	percentP3 := float64(p3) / float64(n) * 100
	percentP4 := float64(p4) / float64(n) * 100
	percentP5 := float64(p5) / float64(n) * 100

	fmt.Printf("%.2f%%\n", percentP1)
	fmt.Printf("%.2f%%\n", percentP2)
	fmt.Printf("%.2f%%\n", percentP3)
	fmt.Printf("%.2f%%\n", percentP4)
	fmt.Printf("%.2f%%", percentP5)
}
