const csv = require('csv-parse');
const fs = require('fs');

let i=1,j=0,k=0;
let node_id;
const soil_moisture=[],soil_temperature=[],ambient_humidity=[],ambient_tempreture=[],leaf_wetness=[];
fs.createReadStream(__dirname + '/data.csv')
  .pipe(csv())
  
  .on('data', (datarow) => {
      
    if(i==1)
    {
        node_id=datarow[1];
    }
    
    if(i>7)
      {
        let str=datarow[0]; 
        if(str=="")
        {
            j++;
            k=0;
        }
        else if(k>1)
        {
            var dateString =datarow[1];
            var dateTimeParts = dateString.split(' ');
            var timeParts = dateTimeParts[1].split(':'),    
            dateParts = dateTimeParts[0].split('-');
            var d = new Date(parseInt(dateParts[2]), parseInt(dateParts[1], 10) - 1, parseInt( dateParts[0]), parseInt(timeParts[0]),  parseInt(timeParts[1]), 30, 0);
           
            let arr = [parseFloat(datarow[0]),d,node_id];
            if(j==0)
            {
                soil_moisture.push(arr);
            }
            if(j==0)
            {
                soil_moisture.push(arr);
            }
            if(j==1)
            {
                soil_temperature.push(arr);
            } 
            if(j==2)
            {
                ambient_humidity.push(arr);
            } 
            if(j==3)
            {
                ambient_tempreture.push(arr);
            }
            if(j==4)
            {
                leaf_wetness.push(arr);
            }
        }
        else
        {
            k++;
        }
      }
      i++;
   
  })
  .on('end', () => {
    console.log("csv data of 0");
    console.log(soil_moisture);
    console.log("csv data of 1");
    console.log(soil_temperature);
    console.log("csv data of 2");
    console.log(ambient_humidity);
    console.log("csv data of 3");
    console.log(ambient_tempreture);
    console.log("csv data of 4");
    console.log(leaf_wetness);
  });