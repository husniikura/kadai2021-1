

let count = 99;

function bottlesOfBeer() {
    while (count >= 0) {
        if (count > 0) {
            console.log(count + " bottles of beer on the wall, " + count + " bottles of beer,");
            count--;
            console.log(" take one down, pass it around, " + count + " bottles of beer on the wall.");  
        };

        if (count === 0) {
            console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Go to the store, buy some more, 99 bottles of beer on the wall.");
        } //*this is where I tried the break statement*
    }
};

bottlesOfBeer();