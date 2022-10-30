//Get all the countries from Asia continent /region using Filter function
//intialize a xml http request
let request=new XMLHttpRequest();
//get the rest countries
request.open('GET','https://restcountries.eu/rest/v2/all','true');
request.send();
//load the data
request.onload=function (){
    var countryData=JSON.parse(this.response);//parse the data
    const asia=countryData.filter((element)=>{//used filter function
        if(element.region==='Asia'){
            return element.name;
        }
    })
    console.log(asia);}
//Get all the countries with population of less than 2 lacs using Filter function
//intialize a xml http request
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);//parse the data
    const popu=countryData.filter((element)=>{//using filter function
        return element.population<200000;
    })
    console.log(popu);}
    

//Print the following details name, capital, flag using forEach function.
//intialize a xml http request
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all','true');
request.send();
//load the data
request.onload=function (){
    var countryData=JSON.parse(this.response);//parse the data
    countryData.forEach((element)=>{//using for each loop
        console.log(element.name,element.capital,element.flag);
    })}

//Print the total population of countries using reduce function 


var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
    const population=countryData.reduce((acc,element)=>{//using reduce function
        return acc+element.population;
    },0)
    console.log(population);}

//Print the country which use US Dollars as currency.

var request = new XMLHttpRequest();
request.open('Get', "https://restcountries.eu/rest/v2/all","true")
request.send();
request.onload = function () {
        var data = JSON.parse(this.response);
        var cur=[];
        for(i=0;i<data.length;i++){
            if(data[i].currencies[0].code==="USD")
            {
                console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
            }
        }
    }