//class 1
class VehicleEngine {
  Fuel() { return "Fuel OK! ," }
  Engine() { return `${this.Fuel()} Engine Started,`; }
};
//class2
class SoundSystem {
  Music() { return "Radio Playing"; }
}

//class 3
class ModernCar {
  constructor() {
    this.engine = new VehicleEngine()
    this.soundSystem = new SoundSystem();
  }
  startTrip() { 
    return `${this.engine.Engine()} ${this.soundSystem.Music()}`;
  }
}

 const myCar = new ModernCar();
 console.log("Ferrai: ", myCar.startTrip());