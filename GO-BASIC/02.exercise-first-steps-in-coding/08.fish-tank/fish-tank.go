package main

import "fmt"

func main() {
	var length, width, height int
	var percent float32 

	fmt.Scanln(&length)
	fmt.Scanln(&width)
	fmt.Scanln(&height)
	fmt.Scanln(&percent)

	var volumeOfAquarium int = length * width * height
	var volumeInLiters float32 = float32(volumeOfAquarium) * 0.001
	var occupiedSpace float32 =  volumeInLiters *(1-percent/100)
	fmt.Println(occupiedSpace)
	
}