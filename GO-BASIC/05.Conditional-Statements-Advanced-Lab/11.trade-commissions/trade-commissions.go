package main

import "fmt"

func main() {
	var town string
	var salesVolume, commission float64
	
	fmt.Scanln(&town)
	fmt.Scanln(&salesVolume)
	
	var isValid bool = salesVolume >= 0
	
	if isValid {
		switch town {
		case "Sofia":
			if 1000 < salesVolume && salesVolume <= 10000 {
				commission = salesVolume * 0.08
			} else if 500 < salesVolume && salesVolume <= 1000 {
				commission = salesVolume * 0.07
			} else if 0 <= salesVolume && salesVolume <= 500 {
				commission = salesVolume * 0.05
			} else if salesVolume > 10000 {
				commission = salesVolume * 0.12
			}
		case "Varna":
			if 1000 < salesVolume && salesVolume <= 10000 {
				commission = salesVolume * 0.1
			} else if 500 < salesVolume && salesVolume <= 1000 {
				commission = salesVolume * 0.075
			} else if 0 <= salesVolume && salesVolume <= 500 {
				commission = salesVolume * 0.045
			} else if salesVolume > 10000 {
				commission = salesVolume * 0.13
			}
		case "Plovdiv":
			if 1000 < salesVolume && salesVolume <= 10000 {
				commission = salesVolume * 0.12
			} else if 500 < salesVolume && salesVolume <= 1000 {
				commission = salesVolume * 0.08
			} else if 0 <= salesVolume && salesVolume <= 500 {
				commission = salesVolume * 0.055
			} else if salesVolume > 10000 {
				commission = salesVolume * 0.145
			}
		default:
			fmt.Println("error")
		}
	}else{
		fmt.Println("error")
	}
	if commission >0{
		fmt.Printf("%.2f",commission)
	}

}
