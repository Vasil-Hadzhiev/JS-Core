function getPrice(input) {

    let movieTitle = input[0].toLowerCase()
    let day = input[1].toLowerCase()

    let movies = {

        'the godfather-monday': 12,
        'the godfather-tuesday': 10,
        'the godfather-wednesday': 15,
        'the godfather-thursday': 12.50,
        'the godfather-friday': 15,
        'the godfather-saturday': 25,
        'the godfather-sunday': 30,

        'schindler\'s list-monday': 8.50,
        'schindler\'s list-tuesday': 8.50,
        'schindler\'s list-wednesday': 8.50,
        'schindler\'s list-thursday': 8.50,
        'schindler\'s list-friday': 8.50,
        'schindler\'s list-saturday': 15,
        'schindler\'s list-sunday': 15,

        'casablanca-monday': 8,
        'casablanca-tuesday': 8,
        'casablanca-wednesday': 8,
        'casablanca-thursday': 8,
        'casablanca-friday': 8,
        'casablanca-saturday': 10,
        'casablanca-sunday': 10,

        'the wizard of oz-monday': 10,
        'the wizard of oz-tuesday': 10,
        'the wizard of oz-wednesday': 10,
        'the wizard of oz-thursday': 10,
        'the wizard of oz-friday': 10,
        'the wizard of oz-saturday': 15,
        'the wizard of oz-sunday': 15
    }

    let key = `${movieTitle}-${day}`

    if(movies.hasOwnProperty(key)){
        let price = movies[key]
        console.log(price)
    } else {
        console.log('error')
    }
}