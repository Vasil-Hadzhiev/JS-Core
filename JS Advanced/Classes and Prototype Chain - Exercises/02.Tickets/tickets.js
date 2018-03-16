function getTickets(arr, sortCriteria) {
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (let str of arr) {
        let tokens = str.split('|');
        let destination = tokens[0];
        let price = Number(tokens[1]);
        let status = tokens[2];
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }

    switch (sortCriteria){
        case 'destination':
            tickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            tickets = tickets.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            tickets = tickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    return tickets;
}

console.log(getTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));