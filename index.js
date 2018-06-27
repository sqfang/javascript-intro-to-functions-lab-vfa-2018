function shout (string){
  return string.toUpperCase();
}

function whisper (string){
  return string.toLowerCase();
}

function logShout(string){
  cont spy = ;
  expect(spy).toHaveBeenCalledWith(string);
  console.log.restore();
}

function logWhisper(string){
  
}

function sayHiToGrandma(){
  
}
