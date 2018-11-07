var select = document.querySelector('select');
var input = document.querySelector('input');
var result = document.querySelector('p');

select.addEventListener('change', whattowear);

function whattowear() {
  var eventType = select.value;
  var tempFahr = input.value;

  if (eventType === 'casual' && tempFahr < 54) {
    result.textContent = 'Since it is ' + tempFahr + ' outsdide, and you are going to a ' + eventType + ' event, you should wear something comfy and a coat';
  } else if (eventType === 'semi-formal' && tempFahr < 54) {
    result.textContent = 'Since it is ' + tempFahr + ' outsdide, and you are going to a ' + eventType + ' event, you should wear a polo and a coat.';
  } else if (eventType === 'formal' && tempFahr < 54) {
    result.textContent = 'Since it is ' + tempFahr + ' outsdide, and you are going to a ' + eventType + ' event, you should wear a suit and a coat.';
  } else if (eventType === 'casual' && tempFahr <= 70) {
    result.textContent = 'Since it is ' + tempFahr + ' outsdide, and you are going to a ' + eventType + ' event, you should wear something comfy and a jacket';
  } else if (eventType === 'semi-formal' && tempFahr <= 70) {
    result.textContent = 'Since it is ' + tempFahr + ' outsdide, and you are going to a ' + eventType + ' event, you should wear a polo and a jacket.';
  } else if (eventType === 'formal' && tempFahr <= 70) {
    result.textContent = 'Since it is ' + tempFahr + ' outsdide, and you are going to a ' + eventType + ' event, you should wear a suit and a jacket.';
  } else if (eventType === 'casual' && tempFahr > 70) {
    result.textContent = 'Since it is ' + tempFahr + ' outsdide, and you are going to a ' + eventType + ' event, you should wear something comfy and no jacket';
  } else if (eventType === 'semi-formal' && tempFahr > 70) {
    result.textContent = 'Since it is ' + tempFahr + ' outsdide, and you are going to a ' + eventType + ' event, you should wear a polo and no jacket.';
  } else if (eventType === 'formal' && tempFahr > 70) {
    result.textContent = 'Since it is ' + tempFahr + ' outsdide, and you are going to a ' + eventType + ' event, you should wear a suit and no jacket.';
  }
    else {
    result.textContent = '';
  }
}