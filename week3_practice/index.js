// import { createStore } from 'redux'

const initialState = {
    // hours: 0,
    mins: 00,
    secs: 00,
    laps: [],
    stopTime: true,
  };
  const store = Redux.createStore(reducer);
  let state = store.getState();
  const subscribe = store.subscribe(() => store.getState());
  // console.log(subscribe)
  let time = document.getElementById("timer");
  time.textContent = `
    
      ${store.getState().mins} : 
      ${store.getState().secs}`;
  function start() {
    return { type: "START" };
  }
  function timer() {
    store.dispatch(start());
    console.log(store.getState());
  }
  const startBtn = document.getElementById("startBtn");
  startBtn.addEventListener("click", () => {
    let time = document.getElementById("timer");
    setInterval(() => {
      timer();
      time.textContent = `
      
      ${store.getState().mins} : 
      ${store.getState().secs}`;
    }, 1000);
    console.log(store.getState());
  });
  function stop() {
    return { type: "STOP" };
  }
  function stopTime() {
    store.dispatch(stop());
    console.log(store.getState());
  }
  const stopBtn = document.getElementById("stopBtn");
  stopBtn.addEventListener("click", () => {
    var state = store.getState();
    let time = document.getElementById("timer");
    time.textContent = `

      ${state.mins} : 
      ${state.secs}`;
    console.log(store.getState());
  });
  function reset() {
    return { type: "RESET" };
  }
  function resetTime() {
    store.dispatch(reset());
    console.log(store.getState());
  }
  const resetBtn = document.getElementById("resetBtn");
  resetBtn.addEventListener("click", () => {
    time.textContent = `
    
      ${state.mins} : 
      ${state.secs}`;
  });
  function lap() {
    return { type: "LAP" };
  }
  function laps() {
    store.dispatch(lap());
    console.log(store.getState());
  }
  const lapBtn = document.getElementById("lap");
  lapBtn.addEventListener("click", () => {
    let laps = document.getElementById("laps");
    let times = document.createElement("li");
    times.textContent = time.textContent;
    laps.append(times);
  });
  function reducer(state = initialState, action) {
    switch (action.type) {
      case "START":
        return {
          ...state,
          stopTime: false,
          secs: state.secs < 60 ? state.secs + .01 : 0,
          mins: state.mins < 60 && state.secs > 59 ? state.mins + 1 : 0,
        //   hours: state.mins > 59 ? state.hours + 1 : 0,
        };
      case "STOP":
        return {
          ...state,
          stopTime: true,
          secs: state.secs,
          mins: state.mins,
        //   hours: state.hours,
        };
      case "RESET":
        return { stopTime: true, secs: 0, mins: 0};
      case "LAP":
        return {};
      default:
        return state;
    }
  }