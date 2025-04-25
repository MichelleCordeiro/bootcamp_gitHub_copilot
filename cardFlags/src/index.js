function getCardFlag(cardNumber) {
  // Remove any non-digit characters
  const cleanedCardNumber = cardNumber.replace(/\D/g, '');

  // Define the flags and yours patterns with regex
  const flagsPattern = [
    { name: 'Visa', pattern: /^4[0-9]{12}(?:[0-9]{3})?$/ },
    {
      name: 'MasterCard',
      pattern:
      // - Starts with 51-55 followed by 14 digits
      // - OR starts with 2221-2720 followed by 10 digits
      /^5[1-5][0-9]{14}$|^2(2[2-9][0-9]{2}|[3-6][0-9]{3}|7[01][0-9]{2}|720[0-9]{2})[0-9]{10}$/
    },
    { name: 'American Express', pattern: /^3[47][0-9]{13}$/ },
		{ name: 'Elo', pattern: /^(4011|4312|4389)[0-9]{12}$/ },
    { name: 'Discover', pattern: /^6(?:011|4[4-9][0-9]{1}|[5][0-9]{2})[0-9]{12}$/ },
    { name: 'Hipercard', pattern: /^606282\d{10}(\d{3})?$/ },

    { name: 'Diners Club', pattern: /^3(?:0[0-5]|[689][0-9])[0-9]{11}$/ },
    { name: 'EnRoute', pattern: /^(2014|2149)\d{11}$/ },
		{ name: 'JCB', pattern: /^35(2[89]|[3-8][0-9])[0-9]{12}$/ },
    { name: 'Voyager', pattern: /^8699[0-9]{11}$/ },
    { name: 'Aura', pattern: /^50\d{14}$/ },
  ];

  // Check which Flag corresponds to the card number
  for (const flag of flagsPattern) {
    if (flag.pattern.test(cleanedCardNumber)) {
      return flag.name;
    }
  }

  // If no match is found
  return 'Unknown';
}

// Example usage:
// https://www.4devs.com.br/gerador_de_numero_cartao_credito
// const cardNumber = '5410 3939 1972 3736';
// const cardNumber = '4929 6453 6751 5063';
// const cardNumber = '3769 267580 44251';
// const cardNumber = '3009 560897 8643';
// const cardNumber = '6011 8464 9825 8730';
// const cardNumber = '6441 8464 9825 8730';
// const cardNumber = '2014 7980994 3890';
// const cardNumber = '3573 4055 5659 9613';
// const cardNumber = '86992 5388 17698 2';
// const cardNumber = '6062 8243 7500 6306';
const cardNumber = '5060 7734 8667 8582';
console.log(getCardFlag(cardNumber));
