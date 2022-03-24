// Code your solutions in this file
// Create a thank you card and allow them to send it
const array = ['Guadalupe', 'Ollie', 'Aki']
// const event = 'surprise'

function writeCards(guest, events){
    let reward = [];
    for (let i = 0; i< guest.length; i++){
      reward.push(`Thank you, ${guest[i]}, for the wonderful ${events} gift!`);
    }
    return reward;
  }
  
  writeCards(guest, events)
        // Runs console log and spy
  function countDown(number){
      let countDownNumber = number;
      while (countDownNumber >= 0) {
        console.log(countDownNumber);
        countDownNumber = countDownNumber-1;
    }
}

countDown(number)
  
        // spy-js to trace cmds and output//