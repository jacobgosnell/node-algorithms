// Caching with Closure
// pro tip: use a closure to return a function you can call later

const cache = {};
const memoizedClosureTimes10 = (num) => {
  // Cache is stored in Closed Over Lexically Scoped Variable Environment
  let cache = {};
	return (num) => {
    if (num in cache) {
		  return cache[num]; //  90 (show what its property is)
	  } else {
		  let result = num * 10;
      cache[num] = result; // populate the object
      console.log(cache);
	  	return result;
   }
}
};

const memoClosureTimes10 = memoizedClosureTimes10();

try {
  console.log('Task 3 calculated value:', memoClosureTimes10(9));
  console.log('Task 3 calculated cache:', memoClosureTimes10(10));
} catch {
  console.log('Task 3:')
}
