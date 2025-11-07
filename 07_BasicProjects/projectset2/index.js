const form = document.querySelector('form');
console.log(form);

// This use case return the empty value
// const height = parseInt(document.querySelector('#height').value);
// console.log(height);

form.addEventListener('submit', function (eventObject) {
  eventObject.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const bmi = weight / height ** 2;

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = (weight / (height ** 2 / 10000)).toFixed(2);
    // show the results
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      message = 'Under weight';
    } else if (bmi > 24.9) {
      message = 'Over weight';
    } else {
      message = 'Normal weight';
    }

    let ans = document.createElement('ans');
    ans.textContent = message;

    form.appendChild(ans);
  }
});
