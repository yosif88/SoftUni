package main

import (
	"fmt"
	"strconv"
)

func main() {
	var n, counter int
	var totalGradeSum float64
	var input string

	fmt.Scanln(&n)
	fmt.Scanln(&input)

	for input != "Finish" {
	
		presentation := input
		sumGrade:= 0.0
		
		var currentCounter int
		
		for i := 0; i < n; i++ {
			
			fmt.Scanln(&input)
			grade,_ := strconv.ParseFloat(input,64)
			
			sumGrade += grade
			totalGradeSum += grade
		
			counter ++
			currentCounter++

		}
		currentAverageGrade := sumGrade / float64(currentCounter)
		fmt.Printf("%s - %.2f.\n", presentation, currentAverageGrade)

		fmt.Scanln(&input)
	}

	avgGrade := totalGradeSum / float64(counter)

	fmt.Printf("Student's final assessment is %.2f.", avgGrade)

}
