package main

import "fmt"

func main() {
	var hours int
	var day string

	fmt.Scanln(&hours)
	fmt.Scanln(&day)

	// version 1 switch cases
	
	switch day {
	case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday":
		if hours >= 10 && hours <= 18{
			fmt.Println("open")
		}else{
			fmt.Println("closed")
		}
	case "Sunday":
		fmt.Println("closed")
	}

	
	//version 2 nested if else
	
	// if day == "Monday" || day == "Tuesday" || day == "Wednesday" || day=="Thursday" || day=="Friday" || day=="Saturday"{
	// 	if hours >= 10 && hours <= 18{
	// 		fmt.Println("open")
	// 	}else{
	// 		fmt.Println("closed")
	// 	}
	// }else if day=="Sunday"{
	// 	fmt.Println("closed")
	// }
}