// Create a javascript object  representing with car roperties like brand,model and year.
//write a function that takes two car objects as input and merges them into a new object,
//preserving the properties for both






function mergeCars(car1, car2) {
   
    var mergedCar = {...car1, ...car2 };
    return mergedCar;
  }
  
  var car1 = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
  };
  
  var car2 = {
    color: "Blue",
    fuelType: "Gasoline"
  };
  

  var mergedCar = mergeCars(car1, car2);
  
  
  console.log(mergedCar);
  
