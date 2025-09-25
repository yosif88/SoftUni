function tickets(data,criterion){
   
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let res = [];

    for (const line of data) {
            let[destination, price, status] = line.split('|');
            res.push(new Ticket(destination, Number(price), status));
    }
   
   return res.sort((a,b)=>{
        return typeof a[criterion] == 'number'?
        a[criterion] - b[criterion]:
        a[criterion].localeCompare(b[criterion])
    })
}

console.log(tickets([
    'Philadelphia|94.20|available',

'New York City|95.99|available',

'New York City|95.99|sold',

'Boston|126.20|departed'],

'destination'))