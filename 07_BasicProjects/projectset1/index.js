const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', function (eventObject) {
    console.log(eventObject);
    console.log(eventObject.target);
    console.log(eventObject.target.id);

    if (eventObject.target.id === 'yellow') {
      body.style.backgroundColor = eventObject.target.id;
    } else if (eventObject.target.id === 'grey') {
      body.style.backgroundColor = eventObject.target.id;
    } else if (eventObject.target.id === 'white') {
      body.style.backgroundColor = eventObject.target.id;
    } else if (eventObject.target.id === 'blue') {
      body.style.backgroundColor = eventObject.target.id;
    }
  });
});
