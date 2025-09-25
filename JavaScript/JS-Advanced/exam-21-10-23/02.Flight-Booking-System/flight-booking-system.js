class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        let flight = this.flights.find(number => number.flightNumber === flightNumber);
       

        if (flight) {
            return `Flight ${flightNumber} to ${destination} is already available.`
        }else{
            this.flights.push({
                flightNumber,
                destination,
                departureTime,
                price: Number(price)
            })
            return `Flight ${flightNumber} to ${destination} has been added to the system.`
        }
    }

    bookFlight (passengerName, flightNumber){

        let findNumber = this.flights.find(number => number.flightNumber === flightNumber);

        if (!findNumber){
            return `Flight ${flightNumber} is not available for booking.`
        } else {
            this.bookingsCount ++;
            this.bookings.push({
                passengerName,
                flightNumber,
            })
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
        }

    }

    cancelBooking (passengerName, flightNumber){
        let findPassenger = this.bookings.find(passenger => passenger.passengerName === passengerName);
        let findFlightNumber = this.flights.find(number => number.flightNumber === flightNumber); 
        
        if(!findPassenger || !findFlightNumber){
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`)
        }else{
            this.bookingsCount--;
            let index = this.bookings.indexOf(findPassenger)
            this.bookings.splice(index,1);
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
        }
    }
    showBookings(criteria){
      
        let res = '';
        if (this.bookings.length === 0){
            throw new Error(`No bookings have been made yet.\n`);
        }

        if (criteria === "all"){
            res += `All bookings(${this.bookingsCount}):\n`;
            this.bookings.forEach(booking =>{
                res += `${booking.passengerName} booked for flight ${booking.flightNumber}.\n`
            })
            
        } 
        
        if (criteria === "cheap"){
            let cheap = this.flights.filter(flight => flight.price <= 100);
           
            if(cheap.length === 0){
                res+="No cheap bookings found.\n"
            
            }else{
                res +="Cheap bookings:\n"
               
                cheap.forEach(flight =>{
                 
                    this.bookings.forEach(booking =>{
                      
                        if(booking.flightNumber === flight.flightNumber){
                            res+= `${booking.passengerName} booked for flight ${booking.flightNumber}.\n`

                        }
                    })
                })
            }

        }
        if (criteria === "expensive"){
           let expensive = this.flights.filter(flight =>flight.price > 100);
          
           if (expensive.length <= 0){
            res += "No expensive bookings found.\n"
           }else{
            res += "Expensive bookings:\n"
            expensive.forEach(flight =>{
                this.bookings.forEach(booking =>{
                    if (flight.flightNumber === booking.flightNumber){
                        res+= `${booking.passengerName} booked for flight ${booking.flightNumber}.\n`

                    }
                })
                
            })
           }
        }
        return res.trim();
    } 

}

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("all"));
