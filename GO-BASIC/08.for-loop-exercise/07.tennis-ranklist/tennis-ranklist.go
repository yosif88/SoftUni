package main

import "fmt"

func main() {
	
	var numberOfTournaments, numberOfPoint,currentPoint,winnerTournament int
	
	fmt.Scanln(&numberOfTournaments)
	fmt.Scanln(&numberOfPoint)
	
	
	
	for i := 0; i < numberOfTournaments; i++ {
		var currentTournament string
		fmt.Scanln(&currentTournament)

		switch currentTournament {
		case "W":
			winnerTournament ++
			currentPoint += 2000
		case "F":
			currentPoint += 1200
		case "SF":		
			currentPoint += 720
		}
	}
	finalPoint := numberOfPoint + currentPoint
	averagePoints := currentPoint / numberOfTournaments
	percentWinnerTournament := float32(winnerTournament) /float32 (numberOfTournaments) * 100

	fmt.Printf("Final points: %d\n",finalPoint)
	fmt.Printf("Average points: %d\n",averagePoints)
	fmt.Printf("%.2f%%",percentWinnerTournament)
}