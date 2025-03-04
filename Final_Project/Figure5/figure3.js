const width = 1200;
const height = 900;
let processedData;
let YearMonth= [];  
let Pool= [];  
let Accumulated_Count= [];  
d3.csv("accumulated-counts.csv", function(d){
    console.log("data:",d)
    return{
        YearMonth:d.YearMonth,
        Pool: Number(d.Pool),
        Accumulated_Count: Number(d.Accumulated_Count)
    };
}).catch(function(error){
    console.error("Error loading csv:",error)
})