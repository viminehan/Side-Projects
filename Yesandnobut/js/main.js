document.getElementById('rollButton').addEventListener('click', roll);
let rollCount = 0;

function roll() { 
  document.getElementById('rollResult').innerText = getRollResult();
  updateRollCount();

const options = {
	method: 'GET',
	headers: {
		// API KEY GOES HERE (HAS BEEN REMOVED FOR SECURITY)
	}
};

fetch('https://random-words5.p.rapidapi.com/getMultipleRandom?count=3', options)
	.then(response => response.json())
	.then(response => {
    console.log(response)
    document.getElementById('r1').innerText = response[0];
    document.getElementById('r2').innerText = response[1];
    document.getElementById('r3').innerText = response[2];
  })
}

function getRollResult() {
  let randomNumber = Math.random();
  
  if (randomNumber < 0.25) { 
    console.log('Yes, and');
    return `Yes, and`
  } else if (randomNumber >= 0.25 && randomNumber < 0.5) { 
    console.log('Yes, but');
    return `Yes, but`;
  } else if (randomNumber >= 0.5 && randomNumber < 0.75) { 
    console.log('No, and')
    return `No, and`
  } else if (randomNumber >= 0.75) { 
    console.log('No, but')
    return `No, but`
  } else {
    console.log('rollNumber Error')
  }

}

function updateRollCount () {
  rollCount += 1;
  console.log(rollCount)
  document.getElementById('rollCount').innerText = `Roll Number: ${rollCount}`;
}