// Using a Hash Table to optimize

const times10 = (n) => n * 10;
/* Task 4: Make your memo function generic and accept the times10 
function as a callback rather than defining the n * 10 logic inside the 
if/else or pulling it in from the global scope. */

/* protip: Take advantage of the fact that parameters are saved in the 
closure as well, just like the cache from the previous example. */

const memoize = (func) => {
  let cache = {};
  /* to gain access to args of callback (stored in closure), 
  write parameters in as (n, ...args) */ 
  
  return (n, ...args) => {
    if (n in cache) {
      return cache[n]; // returns n multiplied by 10
    } 
    // save in cache
    let result = func(n, ...args);
    cache[n] = result; // populates cache
    console.log(cache); // showing cache
    return result;
  }
};

// returned function from memoizedAdd
const memoizedTimes10 = memoize(times10);
console.log("~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~");
try {
	console.log("Task 4 calculated value:", memoizedTimes10(9)); // calculated
	console.log("Task 4 cached value:", memoizedTimes10(9)); // cached
} catch (e) {
	console.error("Task 4:", e);
}
