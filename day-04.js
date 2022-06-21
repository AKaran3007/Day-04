var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload = function(){
   var countryNames = JSON.parse(this.responseText);
   for(let country of countryNames) {
console.log(country.name)
console.log(country.region)
console.log(country.subregion)
console.log(country.population)
console.log(country.flags)
   }
}


// compare two JSON value
var obj1={name:"person 1",age:5}
var obj2={age:5,name:"person 1"}
var flag=true;
if ((obj1).length==(obj2).length) 
{for(let key in obj1 ){
    if (obj1[key]==obj2[key]){continue
        
    } else {
        flag=false;
        break;
        
    }
}
    
}else{flag=false

}
console.log(flag)