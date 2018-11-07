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
  console.log('Since it is ' +tempFahr+ ' degrees and you are going to a semi-formal event, you should wear a polo and no jacket')
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


//var tempFahr=prompt("What is the temperature?", "");
//var result=("");


//if (eventType === "casual"){
//else if (eventType === "semi-formal"){
//console.log("Wear a polo and a jacket");}
//else if (eventType === "formal"){

//if (tempFahr === "less than 54 degrees"){
//  console.log ("Wear something comfy and a coat");}
//  else if (tempFahr === "54-70 degrees"){
//      console.log ("Wear a polo and a jacket");}
//  else if (tempFahr === "more than 70 degrees"){
//      console.log ("Wear a suit and no jacket");
//    }
