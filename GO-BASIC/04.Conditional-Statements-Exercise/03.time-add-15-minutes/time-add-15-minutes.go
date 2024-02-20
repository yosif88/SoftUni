package main
import "fmt"

func main() {
	var hour int
	var minute int

	fmt.Scanln(&hour)
	fmt.Scanln(&minute)

	minute += 15

	var hours int = hour + minute /60
	var minutes int = minute % 60

	if hours == 24 {
		hours = 0
	}

	
	fmt.Printf("%d:%.2d", hours,minutes)
	


}