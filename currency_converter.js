const input = require('sync-input');

const currencies = new Map();
currencies.set('USD', 1);
currencies.set('JPY', 113.5);
currencies.set('EUR', 0.89);
currencies.set('RUB', 74.36);
currencies.set('GBP', 0.75);

function welcome() {
  console.log(`\
Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals ${currencies.get('JPY')} JPY
1 USD equals ${currencies.get('EUR')} EUR
1 USD equals ${currencies.get('RUB')} RUB
1 USD equals ${currencies.get('GBP')} GBP
What do you want to do?
1-Convert currencies 2-Exit program`)
}

welcome(); // Display welcome message only once

while (true) {
  let choice = input('Your choice: ');

  if (choice === '1') {
    console.log("What do you want to convert?")
    let convertFrom = input('From: ').toUpperCase();
    if (![...currencies.keys()].includes(convertFrom)) {
      console.log('Unknown currency');
      continue;
    }
    
    let convertTo = input('To: ').toUpperCase();
    if (![...currencies.keys()].includes(convertTo)) {
      console.log('Unknown currency');
      continue;
    }
    
    let amountFrom = Number(input('Amount: '));
    if (isNaN(amountFrom)) {
      console.log('The amount has to be a number');
      continue;
    } else if (amountFrom < 1) {
      console.log('The amount cannot be less than 1');
      continue;
    }
    
    let amountTo = amountFrom / currencies.get(convertFrom) * currencies.get(convertTo);
    
    let result = `Result: ${amountFrom} ${convertFrom} equals ${amountTo.toFixed(4)} ${convertTo}`;
    console.log(result);
  } else if (choice === '2') {
    console.log('Have a nice day!');
    break;
  } else {
    console.log('Unknown input');
    continue;
  }
}
