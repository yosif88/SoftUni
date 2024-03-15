package main

import "fmt"

func main() {
	var input, command string
	var freePlaces, ticketStandard, tickedStudent, ticketKid, totalTicket, spacesTaken int

	fmt.Scanln(&input)

	for input != "Finish" {

		movieName := input
		
		fmt.Scanln(&freePlaces)
		fmt.Scanln(&command)
		
		spacesTaken = 0

		for command != "End" {

			switch command {
			case "standard":
				ticketStandard++
			case "student":
				tickedStudent++
			case "kid":
				ticketKid++
			}

			spacesTaken++
			if spacesTaken == freePlaces {
				break
			}

			fmt.Scanln(&command)
		}

		percent := float64(spacesTaken) / float64(freePlaces) * 100
		fmt.Printf("%s - %.2f%% full.\n", movieName, percent)

		fmt.Scanln(&input)
	}
	totalTicket   = tickedStudent + ticketStandard + ticketKid 
	percentStandard := float64(ticketStandard) / float64(totalTicket) * 100
	percentStudent := float64(tickedStudent) / float64(totalTicket) * 100
	percentKid := float64(ticketKid) / float64(totalTicket) * 100

	fmt.Printf("Total tickets: %d\n", totalTicket)
	fmt.Printf("%.2f%% student tickets.\n", percentStudent)
	fmt.Printf("%.2f%% standard tickets.\n", percentStandard)
	fmt.Printf("%.2f%% kids tickets.", percentKid)

}
