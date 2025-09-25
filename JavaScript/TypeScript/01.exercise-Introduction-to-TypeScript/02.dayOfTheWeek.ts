function dayOfTheWeek(num: number): void {
    enum Days{
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday

    }
    console.log(Days[num] || 'error');
    
}

dayOfTheWeek(8)
