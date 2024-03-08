package main

import "fmt"

func main() {
	var numberOfGrades, currentGrade, problemsCounter,poorGradeCounter int
	var nameOfProblem, lastProblem string
	var sumOfGrades int

	fmt.Scanln(&numberOfGrades)
	fmt.Scanln(&nameOfProblem)

	for nameOfProblem != "Enough" {
		
		lastProblem = nameOfProblem
		fmt.Scanln(&currentGrade)
		
		sumOfGrades += currentGrade
		
		if currentGrade <= 4 {
			poorGradeCounter ++
			if poorGradeCounter == numberOfGrades{
				fmt.Printf("You need a break, %d poor grades.",poorGradeCounter)
				break
			}
			
		}
		problemsCounter++
		fmt.Scanln(&nameOfProblem)
	}

	averageGrade := float64(sumOfGrades) / float64(problemsCounter)
	
	if nameOfProblem == "Enough" {
		fmt.Printf("Average score: %.2f\n", averageGrade)
		fmt.Printf("Number of problems: %d\n", problemsCounter)
		fmt.Printf("Last problem: %s", lastProblem)
	}
}
