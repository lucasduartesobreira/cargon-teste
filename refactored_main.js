class PagesOfPrimes {
  static get NUMBER_OF_PRIMES_TO_FIND() { return 1000 }
  static get MAX_NUMBER_OF_PRIMES_TO_CHECK(){ return 30 }
  static listOfPrimes(numberOfPrimesToFind = this.NUMBER_OF_PRIMES_TO_FIND) {
    return PagesOfPrimes.makeListOfPrimes(numberOfPrimesToFind)
  }

  static isPrime(primes, toTest) {
    return primes.filter(prime => prime * prime <= toTest).every(prime => toTest % prime !== 0)
  }

  static makeListOfPrimes(numberOfPrimesToFind) {
    let [listOfPrimes] = [ ...Array(numberOfPrimesToFind - 1).keys() ].reduce(([primes, toTest]) => {
      while (!this.isPrime(primes,toTest)) {
        toTest+=2
      }

      primes.push(toTest)
      return [primes, toTest + 2]

    }, [[2], 3])

    return [0, ...listOfPrimes]
  }

  static printPages({ COLLUMNS_PER_ROW, ROWS_PER_PAGE, listOfPrimes, numberOfPrimesToPrint }) {
    let rowOffset = 0;
    let collumn = 0;
    let pageNumber = 1;
    let pageOffset = 1;
    while (pageOffset <= numberOfPrimesToPrint) {
      console.log("Page ", pageNumber);
      for (
        rowOffset = pageOffset;
        rowOffset <= pageOffset + ROWS_PER_PAGE - 1;
        rowOffset++
      ) {
        let row = [];
        for (collumn = 0; collumn <= COLLUMNS_PER_ROW - 1; collumn++) {
          let primeIndex = rowOffset + collumn * ROWS_PER_PAGE
          if (primeIndex <= numberOfPrimesToPrint) {
              row.push(listOfPrimes[primeIndex]);
          }
        }
        console.log(row.join('|'));
      }
      pageNumber++;
      pageOffset += ROWS_PER_PAGE * COLLUMNS_PER_ROW;
    }
  }

  static main(args) {
    let listOfPrimes = PagesOfPrimes.listOfPrimes();
    this.printPages({
      COLLUMNS_PER_ROW: 4,
      ROWS_PER_PAGE: 50,
      numberOfPrimesToPrint: this.MAX_NUMBER_OF_PRIMES_TO_CHECK,
      listOfPrimes
    })
  }
}

PagesOfPrimes.main([]);
