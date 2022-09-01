 class Vehicle {
        constructor(name, year){
            this.name = name;
            this.year = year;
        }
        getName(){
            return (`Модель: ${this.name}`);  
        }
        getYear(){
            return (`Год выпуска: ${this.year}`);
        }
        getInfo(){
            console.log(`${this.getName()}. ${this.getYear()}`);
        }
    }
 

    class Car extends Vehicle{
        constructor(name, year, parkingSensors = false){
            super(name, year);
            this.parkingSensors = parkingSensors;
        }
        isHaveParkingSensors(){
            console.log(this.parkingSensors ? "В машине есть парктроники" : "Машина не имеет парктроников");
        }
        getInfo(){
            const _maxSpeed = 160;
            const _wheels = 4;

            function _getMaxSpeed() {
                return (`${_maxSpeed} km/h`);
            }

            console.log(`${this.getName()}
${this.getYear()}
Колес: ${_wheels}
Макс. скорость: ${_getMaxSpeed()}`);
            };
    }
    


    class Moto extends Vehicle {
        constructor(name, year){
            super(name, year);
            this.wheels = 2;
        }  
    }

    const fordFusion = new Car("Ford Fusion", 2015);
    const bmw = new Car("BMW X5", 2018);
    const audi = new Car("Audi A5", 2019, true);
    const yamaha = new Moto("Yamaha RX250", 2021);
    
    bmw.getInfo();
    
    class Driver {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        displayInfo(){
            console.log(`Водитель: ${this.name}; возраст: ${this.age}`);
        }
        driveCar(vehicle){
            console.log(`${this.name} работает на ${vehicle.name} ${vehicle.year} года выпуска`);
        }
    }
  

    const Vasily = new Driver("Вася", 38);
    const Egor = new Driver("Егор", 27);

    Vasily.driveCar(audi);
    Egor.displayInfo(yamaha);
