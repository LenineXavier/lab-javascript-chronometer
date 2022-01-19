class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
    
  }

  start() {
    // ... your code goes here
    this.intervalId = setInterval( () => {
      this.currentTime += 1;
    }, 1000);
  }

  getMinutes() {
    
    let currentTimeMin = Math.floor(this.currentTime/60);
    return currentTimeMin;

  }

  getSeconds() {
    // ... your code goes here
    let curretnTimeSec = (this.currentTime*60);
    return curretnTimeSec;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
