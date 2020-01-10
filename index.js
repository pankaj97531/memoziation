const myfunc = function(x,y,z){
	return x+y+z;
}

const memoziation = function(func){
	let cacheResult = {};
	
	return function(){
		let slice = Array.prototype.slice;
		let key = JSON.stringify(slice.apply(arguments));
		//console.log(arguments[0]);
		if(!cacheResult[key]){
			console.log("cache")
			cacheResult[key] = func.apply(null, arguments);
		}
		
		return cacheResult[key];
	}
}

const memorize1 = memoziation(myfunc);

console.log(memorize1(10,20,10));

console.log(memorize1(10,20,10));

console.log(memorize1(10,30,10));

console.log(memorize1(10,30,10));

console.log(memorize1(30,30,10));

console.log(memorize1(30,30,10));

console.log(memorize1(40,30,10));

console.log(memorize1(40,30,10));