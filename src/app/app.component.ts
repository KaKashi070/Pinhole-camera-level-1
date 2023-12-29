import { Component, OnInit } from '@angular/core';

import {fabric} from 'fabric';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'level1';

  canvas: any;
    value: any;
    size: { width: number; height: number; };
    box: [
      { x: 10, y: 0 },
      { x: 100, y: -40 },
      { x: 100, y: 160 },
      { x: 10, y: 200 },
    ];
    textToDisplay: string;
    invertedBottom2: number;
    invertedBottom1: number;
    invertedY2: number;
    objectCircleRadius: number;
    invertedY1: number;
    objectHeight: number;
    objectDistance: number;
    appertureWidth: number;
    imageBox: any;
    objectBox: any;
    screenBox: any;
    objectBody: any;
    objectHead: any;
    pinholeLine: any;
    appertureWord: any;
    pinhole: any;
    firstMessage: any;
    objectWord: any;
    screenWord: any;
    myModel: number;
    constructor() {
      this.myModel = 0,
      this.appertureWidth=.25,
      this.objectDistance=470,
      this.objectHeight=60,
      this.objectCircleRadius=13,
      this.invertedY1=0,
      this.invertedY2=0,
      this.invertedBottom1=0,
      this.invertedBottom2=0,
      this.textToDisplay="Hi! Change the aperture size.",
    this.box=[
      { x: 10, y: 0 },
      { x: 100, y: -40 },
      { x: 100, y: 160 },
      { x: 10, y: 200 },
    ],
    this.size={width:600,height:300}}
  
    ngOnInit(): void {
      this.canvas = new fabric.Canvas('c',{hoverCursor:"pointer",
      selection:!0,
      backgroundColor:"#339933",
      selectionBorderColor:"blue",
      });
      this.canvas.setWidth(this.size.width),
      this.canvas.setHeight(this.size.height);
      this.canvas.renderAll();

      this.imageBox=new fabric.Polygon(this.box, {

        left:50,top:20,fill:"white",selectable:!1,hasControls:!1,hasBorders: true,
         strokeWidth: 2, stroke: 'black'
      });
        this.canvas.add(this.imageBox);





        this.screenBox=new fabric.Polygon(this.box, {

          left:250,top:20,fill:"white",selectable:!1,hasControls:!1,hasBorders: true,
           strokeWidth: 2, stroke: 'black'
        });
          this.canvas.add(this.screenBox);





          this.objectBox=new fabric.Polygon(this.box, {

            left:450,top:20,fill:"white",selectable:!1,hasControls:!1,hasBorders: true,
             strokeWidth: 2, stroke: 'black'
          });
            this.canvas.add(this.objectBox);






      this.pinhole = new fabric.Circle({
        radius: 6, left: this.screenBox.left + 45 - 6, top: (this.screenBox.top - this.appertureWidth) / 2 +130,
        stroke: "black", fill: "black", opacity: .9, selectable: !1, strokeWidth: 1
      });
      this.canvas.add(this.pinhole);


      this.objectBody = new fabric.Line([
        this.objectDistance + 20, (this.objectBox.height - this.objectHeight) / 2 + 25, this.objectDistance + 20, (this.objectBox.height + this.objectHeight) / 2 + 35],
        { stroke: "DarkBlue", strokeWidth: 10, selectable: !1, evented: !1, fill: "DarkBlue" });
      this.canvas.add(this.objectBody);





      this.objectHead=new fabric.Circle({
  radius:this.objectCircleRadius,left:this.objectDistance+24-this.objectCircleRadius,
  top:(this.objectBox.height-this.objectHeight)/2+20-this.objectCircleRadius,stroke:"blue",
  fill:"blue",opacity:.4,selectable:!1,strokeWidth:2});
  this.canvas.add(this.objectHead);


  this.pinholeLine=new fabric.Line([
  this.objectBox.width+19,(this.objectBox.height-this.appertureWidth)/2+20,this.objectBox.width+19,
  (this.objectBox.height+this.appertureWidth)/2+20],{stroke:"red",strokeWidth:10,selectable:!1,evented:!1,fill:"red",
left: 289,top: 146
});
  this.canvas.add(this.pinholeLine);





  this.firstMessage=new fabric.Textbox(
    this.textToDisplay,{width:200,height:100,top:this.objectBox.height-20,
    left:this.objectBox.width+30,hasControls:!1,fontSize:16,selectable:!1});
    this.canvas.add(this.firstMessage);



  
  // this.displayBox=new fabric.Rect({
  // left:20,top:20,fill:"white",width:this.box.width,height:this.box.height,selectable:!1,hasControls:!1,hasBorders:!1});
  // this.canvas.add(this.displayBox);
  
  // this.objectBody=new fabric.Line([
  // this.objectDistance+20,(this.box.height-this.objectHeight)/2+20,this.objectDistance+20,(this.box.height+this.objectHeight)/2+20],
  // {stroke:"red",strokeWidth:2,selectable:!1,evented:!1,fill:"red"});
  // this.canvas.add(this.objectBody);
  
  // this.objectHead=new fabric.Circle({
  // radius:this.objectCircleRadius,left:this.objectDistance+20-this.objectCircleRadius,
  // top:(this.box.height-this.objectHeight)/2+20-this.objectCircleRadius,stroke:"red",
  // fill:"white",opacity:.4,selectable:!1,strokeWidth:2});
  // this.canvas.add(this.objectHead);
  
  // this.pinholeLine=new fabric.Line([
  // this.box.width+19,(this.box.height-this.appertureWidth)/2+20,this.box.width+19,
  // (this.box.height+this.appertureWidth)/2+20],{stroke:"black",strokeWidth:4,selectable:!1,evented:!1,fill:"black"});
  // this.canvas.add(this.pinholeLine);
  
  // this.pinhole=new fabric.Circle({
  // radius:6,left:this.box.width+19-6,top:(this.box.height-this.appertureWidth)/2+20-6,
  // stroke:"red",fill:"white",opacity:.9,selectable:!1,strokeWidth:1});
  // this.canvas.add(this.pinhole);
  
  // this.firstMessage=new fabric.Textbox(
  // this.textToDisplay,{width:200,height:100,top:this.box.height-20,
  // left:this.box.width+30,hasControls:!1,fontSize:16,selectable:!1});
  // this.canvas.add(this.firstMessage);
  
  // this.appertureWord=new fabric.Text("Aperture",{
  // left:this.box.width+20,top:(this.box.height-this.objectHeight)/2-5,fill:"#5607f2",fontSize:14});
  // this.canvas.add(this.appertureWord);
  
  // this.objectWord=new fabric.Text("Object",{
  // left:this.objectDistance+8,top:(this.box.height-this.objectHeight)/2-5,fill:"#5607f2",fontSize:14});
  // this.canvas.add(this.objectWord);
  
  // this.screenWord=new fabric.Text("Screen",{left:25,top:(this.box.height-this.objectHeight)/2-5,fill:"#5607f2",fontSize:14});
  // this.canvas.add(this.screenWord);
    // this.calculateInvertedTop();
    }







    // only functions 


  
    onIncreaseApperture(): void
    {this.objectBox=this.canvas.getObjects("text");for(let pinholeLine in this.objectBox)"black"!=this.objectBox[pinholeLine].get("fill")&&this.canvas.remove(this.objectBox[pinholeLine]);
    this.objectBody=this.canvas.getObjects("line");for(let pinholeLine in this.objectBody)"red"!=this.objectBody[pinholeLine].get("fill")&&this.canvas.remove(this.objectBody[pinholeLine]);
    this.objectHead=this.canvas.getObjects("circle");for(let pinholeLine in this.objectHead)"red"!=this.objectHead[pinholeLine].get("stroke")&&this.canvas.remove(this.objectHead[pinholeLine]);
    this.appertureWidth=this.appertureWidth+0.25,this.calculateInvertedTop(),this.drawApperture(),
    this.textToDisplay="Aperture size (in px): "+this.appertureWidth+" Trace the edges and the image.",this.displayMessage()
  }

  onDecreaseApperture(): void{
    this.objectBox=this.canvas.getObjects("text");for(let pinholeLine in this.objectBox)"black"!=this.objectBox[pinholeLine].get("fill")&&this.canvas.remove(this.objectBox[pinholeLine]);
    this.objectBody=this.canvas.getObjects("line");for(let pinholeLine in this.objectBody)"red"!=this.objectBody[pinholeLine].get("fill")&&this.canvas.remove(this.objectBody[pinholeLine]);
    this.objectHead=this.canvas.getObjects("circle");for(let pinholeLine in this.objectHead)"red"!=this.objectHead[pinholeLine].get("stroke")&&this.canvas.remove(this.objectHead[pinholeLine]);
  this.appertureWidth>=0.5&&(this.appertureWidth=this.appertureWidth-0.25),this.calculateInvertedTop(),this.drawApperture(),
  this.textToDisplay="Aperture size (in px): "+this.appertureWidth+" Trace the edges and the image.",this.displayMessage()
  }

  drawApperture(): void{
    this.objectBox=new fabric.Line([this.objectBox.height+19,(this.objectBox.height-this.appertureWidth)/2+20,this.objectBox.height+19,
  (this.objectBox.height+this.appertureWidth)/2+20],{stroke:"black",strokeWidth:2,selectable:!1,evented:!1,fill:"black"});
  this.canvas.add(this.objectBox)}

  drawInvertedObject(): void{
    var objectBox,objectBody=this.canvas.getObjects("text");for(let objectWord in objectBody)"black"!=objectBody[objectWord].get("fill")&&objectBody[objectWord].animate({left:800},
    {onChange:this.canvas.renderAll.bind(this.canvas)});
    objectBox=this.invertedY1-this.invertedY2;
    var objectHead=50+4*(this.invertedY1-this.invertedY2),
    pinholeLine="HSL(0,100%,"+objectHead+"%)";

    for(let objectWord=0;objectWord<this.invertedY1-this.invertedY2;objectWord+=5)
    { this.pinhole = new fabric.Line([20,this.invertedY1-objectWord,20,this.invertedY1-objectWord],{stroke:pinholeLine,strokeWidth:objectBox,selectable:!1,
      evented:!1,fill:pinholeLine});
    this.canvas.add(this.pinhole),this.pinhole.animate({x2:20,y2:this.invertedY1-objectWord-this.objectHeight},
    {onChange:this.canvas.renderAll.bind(this.canvas),duration:1e3})}
    this.firstMessage="Try changing the aperture";objectHead>=80&&(this.firstMessage="What Changed?"),objectBox<1&&(this.firstMessage="Is the image quite faint?");
    this.appertureWord=new fabric.Text(this.firstMessage,{left:this.objectBox.height+40,top:this.objectBox.height,fill:"white",fontSize:14});
    this.canvas.add(this.appertureWord)}

 calculateInvertedTop(): void{
  this.objectBox=(this.objectBox.height-this.objectHeight)/2+20,
  this.objectBody=(this.objectBox.height+this.objectHeight)/2+20,
  this.objectHead=this.objectHeight,this.pinholeLine=this.appertureWidth,this.pinhole=this.objectDistance,
  this.firstMessage=this.objectDistance-this.objectBox.height;
  this.invertedY1=this.objectBox+(this.objectHead+this.pinholeLine)/(2*this.firstMessage)*this.pinhole,this.invertedY2=this.objectBox+(this.objectHead-this.pinholeLine)/(2*this.firstMessage)*this.pinhole,
this.invertedBottom1=this.objectBody-(this.objectHead+this.pinholeLine)/(2*this.firstMessage)*this.pinhole,
this.invertedBottom2=this.objectBody-(this.objectHead-this.pinholeLine)/(2*this.firstMessage)*this.pinhole;
}


 drawRayBoundry(): void{
  this.objectBox=this.objectDistance+20,
  this.objectBody=(this.objectBox.height-this.objectHeight)/2+20,
  this.objectHead=(this.objectBox.height+this.objectHeight)/2+20;

  this.pinholeLine=new fabric.Line([this.objectBox,this.objectBody,this.objectBox,this.objectBody],
   {stroke:"orange",strokeWidth:0,selectable:!1,evented:!1,fill:"orange"});
   this.canvas.add(this.pinholeLine);
   this.pinholeLine.animate({x2:20,y2:this.invertedY1,strokeWidth:.5},
    {onChange:this.canvas.renderAll.bind(this.canvas),duration:1e3});
    this.pinhole=new fabric.Line([this.objectBox,this.objectBody,this.objectBox,this.objectBody],{stroke:"orange",strokeWidth:0,selectable:!1,evented:!1,fill:"orange"});
  this.canvas.add(this.pinhole);
  this.pinhole.animate({x2:20,y2:this.invertedY2,strokeWidth:.5},
    {onChange:this.canvas.renderAll.bind(this.canvas),duration:1e3});
    this.firstMessage=new fabric.Line([this.objectBox,this.objectHead,this.objectBox,this.objectHead],{stroke:"orange",strokeWidth:1,selectable:!1,evented:!1,fill:"orange"});
  this.canvas.add(this.firstMessage);
  this.firstMessage.animate({x2:20,y2:this.invertedBottom1,strokeWidth:.5},
    {onChange:this.canvas.renderAll.bind(this.canvas),duration:1e3});
    this.appertureWord=new fabric.Line([this.objectBox,this.objectHead,this.objectBox,this.objectHead],{stroke:"orange",strokeWidth:1,selectable:!1,evented:!1,fill:"orange"});
  this.canvas.add(this.appertureWord);
  this.appertureWord.animate({x2:20,y2:this.invertedBottom2,strokeWidth:.5},
  {onChange:this.canvas.renderAll.bind(this.canvas),duration:1e3});
   new fabric.Text("Top1",{left:22,top:this.invertedY1,fill:"blue",fontSize:10});
   new fabric.Text("Top2",{left:22,top:this.invertedY2-10,fill:"blue",fontSize:10});
   
       
           
this.textToDisplay="Will the image of the object be formed at the top?";
this.displayMessage();}

 fillRayBoundry(): void{
  this.objectBox=this.objectDistance+20,
  this.objectBody=(this.objectBox.height-this.objectHeight)/2+20,
  this.objectHead=(this.objectBox.height+this.objectHeight)/2+20;
   for(let firstMessage=0;firstMessage<this.invertedY1-this.invertedY2;firstMessage++)
   {this.pinholeLine=new fabric.Line([this.objectBox,this.objectBody,this.objectBox,this.objectBody],{stroke:"orange",strokeWidth:0,selectable:!1,evented:!1,fill:"orange"});
   this.canvas.add(this.pinholeLine),this.pinholeLine.animate({x2:20,y2:this.invertedY1-firstMessage,strokeWidth:.5},
       {onChange:this.canvas.renderAll.bind(this.canvas),duration:2e3})}
       for(let firstMessage=0;firstMessage<this.invertedBottom2-this.invertedBottom1;firstMessage++)
       {this.pinhole=new fabric.Line([this.objectBox,this.objectHead,this.objectBox,this.objectHead],{stroke:"orange",strokeWidth:0,selectable:!1,evented:!1,fill:"orange"});
       this.canvas.add(this.pinhole),this.pinhole.animate({x2:20,y2:this.invertedBottom2-firstMessage,strokeWidth:.5},
           {onChange:this.canvas.renderAll.bind(this.canvas),duration:2e3})}
           new fabric.Text("Top1",{left:22,top:this.invertedY1,fill:"blue",fontSize:10}),
           new fabric.Text("Top2",{left:22,top:this.invertedY2-10,fill:"blue",fontSize:10}),
           new fabric.Text("Bottom2",{left:22,top:this.invertedBottom2,fill:"blue",fontSize:10}),
           new fabric.Text("Bottom1",{left:22,top:this.invertedBottom1-10,fill:"blue",fontSize:10})
  }

 drawImage(): void{
  this.objectBox=1;
  this.invertedY1-this.invertedY2<1&&(this.objectBox=.5),
   this.invertedY1-this.invertedY2==1&&(this.objectBox=.8);
   for(let pinholeLine=0;pinholeLine<this.invertedY1-this.invertedY2;pinholeLine+=1)
   {this.objectBody=new fabric.Line([20,this.invertedY1-pinholeLine,20,this.invertedBottom2-pinholeLine],
       {stroke:"orange",strokeWidth:this.objectBox,selectable:!1,evented:!1,fill:"orange",opacity:.4}),
       this.objectHead=new fabric.Circle({radius:this.objectCircleRadius,left:20-this.objectCircleRadius,
           top:this.invertedY1-pinholeLine-this.objectCircleRadius,stroke:"orange",fill:"white",opacity:.3,strokeWidth:this.objectBox});
       this.canvas.add(this.objectBody),this.canvas.add(this.objectHead)}
       this.textToDisplay="Will the image change if you change the aperture?",this.displayMessage()}

displayMessage(): void{
   this.canvas.getObjects("textbox")[0].set("text",this.textToDisplay)}

updateSlider(event: any){
   console.log("got into slider: ",this.value);
   this.appertureWidth=this.value;
   this.objectBody=this.canvas.getObjects("text");
   for(let pinhole in this.objectBody)"black"!=this.objectBody[pinhole].get("fill")&&this.canvas.remove(this.objectBody[pinhole]);
   this.objectHead=this.canvas.getObjects("line");for(let pinhole in this.objectHead)"red"!=this.objectHead[pinhole].get("fill")&&this.canvas.remove(this.objectHead[pinhole]);
   this.pinholeLine=this.canvas.getObjects("circle");for(let pinhole in this.pinholeLine)"red"!=this.pinholeLine[pinhole].get("stroke")&&this.canvas.remove(this.pinholeLine[pinhole]);
   this.calculateInvertedTop(),
   this.drawApperture(),
   this.textToDisplay="Aperture size (in px): "+this.appertureWidth+" Check the Ray Diagram.",this.displayMessage()}

}
