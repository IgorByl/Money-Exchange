module.exports = function makeExchange(currency) {
  let answer = {};
    if (currency <= 0){
      return answer;
     }
    if (currency > 10000) { 
      answer['error'] = 'You are rich, my friend! We don\'t have so much coins for exchange';
     return answer;
     } 
  return  calculateCoins(currency); 
}

let calculateCoins = function (money){

  let obj = {};

 obj['H'] = Math.floor(money/50);
 obj['Q'] = Math.floor((money%50)/25);
 obj['D'] = Math.floor((money%50%25)/10);
 obj['N'] = Math.floor((money%50%25%10)/5);
 obj['P'] = Math.floor(money%50%25%10%5);

  for ( let key in obj) {
      if ( obj[key] == 0) {
      delete obj[key];
      }
    }
  return obj;
}
