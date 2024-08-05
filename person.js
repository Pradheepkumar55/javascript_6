class Person  {
    constructor(name,yob,place,designation="businessman",email,contact){
        this.name=name;
        this.yob=yob;
        this.place=place;
        this.designation=designation;
        this.email=email;
        this.contact=contact;
    }
    getname(){
        return this.name;
    }
    getPlace(){
        return this.place;
    }
    getDesignation(){
        return this.designation;
    }
    getEmail(){
        return this.email;
    }
    getContact(){
        return this.contact;
    }
    getyob(){
        return new Date.getFullYear() - yob;
    }
    toString(){
        return `Hello I'm ${this.name}, from ${this.place}. \nI'm a ${this.designation}, \nthis is my email: ${this.email}, you can also contact me using this number: ${this.contact}`;
    }

}

let me = new Person("pradheep","2000","The nillgiris","Full stock developer","pradheep@gmail.com","9876543210");
console.log(me.toString());

