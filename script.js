var eventType = prompt('What type of event is it?');
var tempFahr = prompt('What is the Temperature in Farenheit?');
var result = "";

if (eventType == 'casual' && tempFahr < 54) {
  result = 'Since it is ' + tempFahr + ' degrees and you are going to a casual event, you should wear something comfy and a coat';
  console.log(result);
}
else if (eventType === 'casual' && tempFahr >= 54 && eventType === 'casual' && tempFahr<= 70) {
  result = 'Since it is ' + tempFahr + ' degrees and you are going to a casual event, you should wear something comfy and a jacket';
  console.log(result);
}
else if (eventType === 'casual' && tempFahr > 70) {
  result = 'Since it is ' + tempFahr+ ' degrees and you are going to a semi-formal event, you should wear a polo and a coat';
  console.log(result);
}
else if (eventType === 'semi-formal' && tempFahr < 54) {
  result = 'Since it is ' + tempFahr+ ' degrees and you are going to a semi-formal event, you should wear a polo and a coat';
  console.log(result);
}
else if (eventType === 'semi-formal' && tempFahr >= 54 && eventType === 'semi-formal' && tempFahr<= 70) {
  result = 'Since it is ' + tempFahr+ ' degrees and you are going to a semi-formal event, you should wear a polo and a jacket';
  console.log(result);
}
else if (eventType === 'semi-formal' && tempFahr > 70) {
  result = 'Since it is ' +tempFahr+ ' degrees and you are going to a semi-formal event, you should wear a polo and no jacket';
  console.log(result);
}
else if (eventType === 'formal' && tempFahr < 54) {
  result = 'Since it is ' +tempFahr+ ' degrees and you are going to a formal event, you should wear a suit and a coat';
  console.log(result);
}
else if (eventType === 'formal' && tempFahr >= 54 && eventType === 'formal' && tempFahr <= 70) {
  result = 'Since it is ' +tempFahr+ 'degrees and you are going to a formal event, you should wear a suit and a jacket';
  console.log(result);
}
else if (eventType === 'formal' && tempFahr > 70) {
  result = 'Since it is ' +tempFahr+ ' degrees and you are going to a formal event, you should wear a suit and no jacket';
  console.log(result);
}
