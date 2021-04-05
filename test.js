var a=[1,2,[3,4,[5,6],[7,8]]];
res=[];
function arrsort(arr){
	
	if(Array.isArray(arr)){

		for(let i=0;i<arr.length;i++){
			arrsort(arr[i]);
		}
	}
	else{
		res.push(arr);
	}
}

for(let i=0;i<a.length;i++){
	arrsort(a[i]);
}

console.log(res);