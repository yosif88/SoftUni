package main

import "fmt"

func main() {
	var favoriteBook, currentBook string
	var numberBook int
	var isFindBook bool = false

	fmt.Scanln(&favoriteBook)
	fmt.Scanln(&currentBook)

	for currentBook != "NoMoreBooks"{
		if favoriteBook == currentBook{
			isFindBook = true
			break;
			
		}
		
		numberBook ++
		fmt.Scanln(&currentBook)
	}

	if isFindBook{
		fmt.Printf("You checked %d books and found it.",numberBook)
	}else{
		fmt.Println("The book you search is not here!")
		fmt.Printf("You checked %d books.",numberBook)
	}
}