function calcAverageCalories(days) {
    const daysCalories = [];
 for (const day of days){
    daysCalories.push(day.calories);
 }
 let allCalory = 0;
 for ( const calory of daysCalories){
    allCalory += calory;
 }
 return allCalory / daysCalories.length;
}


console.log(
    calcAverageCalories([
      { day: "monday", calories: 3010 },
      { day: "tuesday", calories: 3200 },
      { day: "wednesday", calories: 3120 },
      { day: "thursday", calories: 2900 },
      { day: "friday", calories: 3450 },
      { day: "saturday", calories: 3280 },
      { day: "sunday", calories: 3300 }
    ])
  );
  
  console.log(
    calcAverageCalories([
      { day: "monday", calories: 2040 },
      { day: "tuesday", calories: 2270 },
      { day: "wednesday", calories: 2420 },
      { day: "thursday", calories: 1900 },
      { day: "friday", calories: 2370 },
      { day: "saturday", calories: 2280 },
      { day: "sunday", calories: 2610 }
    ])
  );
  
  console.log(
    calcAverageCalories([])
  );