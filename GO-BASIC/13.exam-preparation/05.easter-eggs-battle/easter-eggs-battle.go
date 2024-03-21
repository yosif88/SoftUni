package main

import "fmt"

func main() {
	var numberOfEggsPlayerOne, numberOfEggsPlayerTwo int
	var input string
	

	fmt.Scanln(&numberOfEggsPlayerOne)
	fmt.Scanln(&numberOfEggsPlayerTwo)
	fmt.Scanln(&input)

	for input != "End" {
		switch input {
		case "one":
			numberOfEggsPlayerTwo -= 1
		case "two":
			numberOfEggsPlayerOne -= 1
		}

		if numberOfEggsPlayerOne <= 0 || numberOfEggsPlayerTwo <= 0 {
			break
		}

		fmt.Scanln(&input)
	}

	if numberOfEggsPlayerOne <= 0 {
		fmt.Printf("Player one is out of eggs. Player two has %d eggs left.\n", numberOfEggsPlayerTwo)

	} else if numberOfEggsPlayerTwo <= 0 {
		fmt.Printf("Player two is out of eggs. Player one has %d eggs left.\n", numberOfEggsPlayerOne)
	}else{
		fmt.Printf("Player one has %d eggs left.\n",numberOfEggsPlayerOne)
		fmt.Printf("Player two has %d eggs left.",numberOfEggsPlayerTwo)
	}
}
