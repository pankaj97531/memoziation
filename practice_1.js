let memo = {};
memo.result = {};
function myfunction(x){

	if(isNaN(x)){
		return false;
	}
	if(x<2){
		return x;
	}
	if(memo.result[x]){
		memo.result[x] = memo.result[x];
	}else{
		memo.result[x] = 0;
	}
	if(!memo.result[x]){
	memo.result[x] = myfunction(x-1) + myfunction(x-2);	
	}
	
	return memo.result[x];
}

function coverFunc(func){
	let result = {};
	return function(){
		let slice = Array.prototype.slice;
		
		let myKey = JSON.stringify(slice.apply(arguments));
		if(!result[myKey]){
			console.log("hello");
			result[myKey]= func.apply(null,arguments);
		}
		return result[myKey];
	}
}

var test1 = coverFunc(myfunction);
var myarr = [];
for(let i=0;i<40;i++){
	myarr.push(test1(i));
}
console.log(myarr);