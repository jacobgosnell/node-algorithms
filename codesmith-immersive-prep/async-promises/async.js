// const tweets = getTweets("https://twitter.com/will/1")

// // 350ms while request is made

// displayTweets(tweets)

// console.log("I want to runnnn!")

// delaying a function using setTImeout
// - built in higher order function, that takes a callback that occurs when delayed
// - second argument is the ms to delay by

function printHello() {
  console.log("Hello");
}

setTimeout(printHello, 1000);
// the thread of execution does not stop on the setTimeout function call, since
// the function delegates its timer to a c++ engineered web browser api timer feature
// at 1000 ms, the printHello function gets pushed on to the call stack
// even if setTimeout has an argument of 0s, setTimeout still reserves its callback function
// to be pushed to the call stack after all other functions have been executed on the call stack

console.log("Me first!")
// therefore me first gets logged first

/* To understand the block of lines 13-18 and more, we need to understand the 
  - web browser api (js + dom / renderer / timer / console / xmlhttprequest) built with c++  / node background
  - setTimeout() is a facade function, code that calls on the timer web browser feature
  - promises
*/ 
