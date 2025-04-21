async function main() {
  class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.odometer = 0;
      this.engine = engine;
      let myEngine = new Engine()
    }

    startEngine() {
      this.engine.running = true;
     }
   
     stopEngine() {
      this.engine.running = false;
     }
   
     drive(distance){
      if(!this.engine.running){
        throw new error("Cannot drive: The engine is not running!");
      }
      this.odometer += distance;
     }
    }


  class Engine{
      constructor(cylinderCount) {
        this.cylinderCount = cylinderCount
        this.isRunning = false
      }
  }

  let myCar = new Car
  myCar.start(myEngine)
  myCar.drive(100)
  myCar.stop()
  myCar.start()
  myCar.drive(50)
  myCar.stop()
  output(`Final odometer reading: ${myEngine.odometer}`);
  output("Car as JSON:", JSON.stringify(myCar));
}





  
  

 
  
  







