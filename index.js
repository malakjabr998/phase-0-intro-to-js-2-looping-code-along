// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
  }
  const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

const thanks = []
names = ["Charlie", "Samip", "Ali"]
events = "birthday"
function writeCards(names, events) {
    for (let i =0; i<3; i++){
        thanks[i] = `Thank you, ${names[i]}, for the wonderful ${events} gift!`
        debugger
    }
    return thanks
}
let count = 10
function countDown (count ){
    while (count >=0){
        console.log(count--)
    }

}