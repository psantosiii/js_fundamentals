class Bike{
    public price: number;
    public maxSpeed: string;
    public miles: number;
    constructor(price:number ,maxSpeed:string){
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.miles = 0;
    }
    displayInfo(){
        console.log(this.price + this.maxSpeed + this.miles)
        return this;
    }
    ride(){
        this.miles += 10;
        console.log("Riding my iron horse")
        return this;
    }
    reverse(){
        this.miles;
        console.log("reversing");
        return this;
    }
}
var bike1 = new Bike(1000, "30mph Trek Bike");
var bike2 = new Bike(2500,"20mph Specialized AWOL");
var bike3 = new Bike(3000,"25mph Cannondale Lefty");
bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().reverse().displayInfo();
bike3.ride().reverse().displayInfo();