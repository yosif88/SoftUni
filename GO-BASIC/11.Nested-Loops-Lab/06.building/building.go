package main

import (
	"fmt"
)

func main() {
	var numberOfFloor, numberOfRoom int

	fmt.Scanln(&numberOfFloor)
	fmt.Scanln(&numberOfRoom)

	for floor := numberOfFloor; floor > 0; floor-- {
		for rooms := 0; rooms < numberOfRoom; rooms++ {
			
			if floor == numberOfFloor {
				fmt.Printf("L%d%d ", floor, rooms)

			} else if floor % 2 == 0 {
				fmt.Printf("O%d%d ", floor, rooms)

			} else {
				fmt.Printf("A%d%d ", floor, rooms)

			}
		}
		fmt.Println()

	}
}
