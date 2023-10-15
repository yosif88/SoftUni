function createComputerHierarchy() {
    class Component {
        constructor(manufacturer) {
            if (this.constructor === Component) {
                throw new Error("Abstract classes can't be instantiated.")
            }
            this.manufacturer = manufacturer;
        }
    }
    class Keyboard extends Component {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Battery extends Component {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }
    class Monitor extends Component {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }
    class Computer extends Component {
        constructor(manufacture, processorSpeed, ram, hardDiskSpace) {
            super(manufacture);
            if (this.constructor === Computer) {
                throw new Error("Abstract classes can't be instantiated.")
            }
            
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer{
        constructor(manufacture, processorSpeed, ram, hardDiskSpace,weight, color, battery) {   
            super(manufacture, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;

        }
        get battery(){
            return this._battery;
        }
        set battery(value){
            if(!(value instanceof Battery)){
                throw new TypeError;
            }
            this._battery = value;
        }
    }

    class Desktop extends Computer {
        constructor(manufacture, processorSpeed, ram, hardDiskSpace,keyboard, monitor){
            super(manufacture, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard(){
            return this._keyboard;
        }
        set keyboard(value){
            if(!(value instanceof Keyboard)){
                throw new TypeError
            }
            this._keyboard = value;
        }
        
        get monitor(){
            return this._monitor;
        }
        set monitor(value){
            if(!(value instanceof Monitor)){
                throw new TypeError;
            }
            this._monitor = value;
        }
    }


    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}
