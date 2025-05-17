package main

import "fmt"

func main() {
	var startNumber, endNumber int

	fmt.Scanln(&startNumber)
	fmt.Scanln(&endNumber)

	firstDigitStartNum := startNumber / 1000
	secondDigitStartNum := startNumber / 100 % 10
	thirdDigitStartNum := startNumber / 10 % 10
	fourthDigitStartNum := startNumber % 10

	firstDigitEndNum := endNumber / 1000
	secondDigitEndNum := endNumber / 100 % 10
	thirdDigitEndNum := endNumber / 10 % 10
	fourDigitEndNum := endNumber % 10

	for a := firstDigitStartNum; a <= firstDigitEndNum; a++ {
		for b := secondDigitStartNum; b <= secondDigitEndNum; b++ {
			for c := thirdDigitStartNum; c <= thirdDigitEndNum; c++ {
				for d := fourthDigitStartNum; d <= fourDigitEndNum; d++ {
					if a%2 != 0 && b%2 != 0 && c%2 != 0 && d%2 != 0 {
						fmt.Printf("%d%d%d%d ", a, b, c, d)
					}
				}
			}
		}

	}
}