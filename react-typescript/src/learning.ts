let isDone:boolean = false;
let lines:number = 42;
let name1:string = 'Anders';

let list1:number[] = [1,2,3];
let list2:Array<number> = [1,2,3];

function bigHorribleAlert():void{
    alert('func call alert');
}

let f1 = function(i:number):number{
    return i*i;
}

let f2 = function(i:number){
    return i*i;
}
let f3 = (i:number):number =>{
    return i*i;
}

let f4 = (i:number) => {
    return i*i;
}
let f5 = (i:number) => i*i;

interface Person{
    name:string;
    age?:number;
    move():void;
}

let p:Person = {
    name:'Bobby',
    move:()=>{
        alert('Booby move');
    }
}

let validPerson:Person ={
    name:'Bobby',
    age:42,
    move:()=>{
        alert('Booby move2');
    }
}

interface SearchFunc{
    (source:string,subString:string):boolean;
}

let mySearch:SearchFunc;
mySearch = function(src:string,sub:string){
    return src.search(sub) != -1;
}

class Point{
    x:number;
    constructor(x:number,public y:number = 0){
        this.x = x;
    }
    dist(){
        return Math.sqrt(this.x *this.x +this.y*this.y);
    }
    static origin = new Point(0,0);
}

class PointPerson implements Person{
    name:string
    move(){}
}

let p1 = new Point(10,20);
let p2 = new Point(25);

class Point3D extends Point{
    constructor(x:number,y:number,public z:number){
        super(x,y);
    }
    dist(){
        let d = super.dist();
        return Math.sqrt(d*d + this.z * this.z);
    }
}
module Geometry{
    export class Square{
        constructor(public sideLength:number = 0){

        }
        area(){
            return Math.pow(this.sideLength,2);
        }
    }
}
let s1 = new Geometry.Square(5);

import G = Geometry;
let s2 = new G.Square(10);

class Tuple<T1,T2>{
    constructor(public item1:T1, public item2:T2){

    }
}

interface Pair<T>{
    item1:T;
    item2:T;
}
let pairToTuple = function<T>(p:Pair<T>){
    return new Tuple(p.item1,p.item2);
}
let tuple = pairToTuple({
    item1:'hello',
    item2:'world'
})

