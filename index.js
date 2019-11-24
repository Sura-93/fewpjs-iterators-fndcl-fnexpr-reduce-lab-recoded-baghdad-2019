const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function totalBatteriesacccout(batteryBatches) {
let totalBatteries  = 0;

batteryBatches.reduce(function(element){
  
  totalBatteries += element;
  
});
return totalBatteries;
}