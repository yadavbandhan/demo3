var a=[350,0,228,950,522,400,520,2500];

var a1=0;
var b1=0;
for(let i=0 ; i<a.length;i++){

	if(a[i+1]>a[i]){
		b1=i+1;
	}
	else{
		if(a1!=b1 ){
		console.log(a1,b1);
		}	
		a1=i+1;
		b1=i+1;
	}
}