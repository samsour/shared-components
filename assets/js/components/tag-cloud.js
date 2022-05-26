import BaseComponent from './base-component.js';

class TagCloud extends BaseComponent {
  static rootSelector = '.tag-cloud';

  constructor(root, options) {
    super(root, options);
    // get div and all the objects/links in that div
    this.divObject = document.querySelector('.tag-cloud-container');
    this.textElements = this.divObject.querySelectorAll('a');
    // a list with all our ObjectTags for each textElement
    this.tagList = []
    this.depth = 300;
    this.radius = 200;

    //mouse position
    this.mouseX = 0;
    this.mouseY = 0;
    this.mouseIsOver = true;
    this.velocity = 5;
    this.lastX = 0;
    this.lastY = 0;

    this.startEvent(window, 'load', this.mouseEvaluation());
    //this.update(0.98, 0.98, 0);
  }

  startEvent(divObject, event, func, option) {
    let target = (divObject != undefined) ? divObject : window;
    if (divObject.addEventListener) {
      let opt = option || false;
      target.addEventListener(event, func, opt);
    } else {
      target.attachEvent('on' + event, func);
    }
  }

  // replace mouse by random input
  getRandomValue() {
    let sign = Math.random() < 0.5 ? -1 : 1;
    let randomX = sign * Math.random() * 5;
    let randomY = sign * Math.random() * 5;
    this.mouseX = randomX;
    this.mouseY = randomY;
  }


  //mouse tracking of current state
  mouseOver() {
    this.mouseIsOver = false;
  }

  mouseOut() {
    this.mouseIsOver = true;
  }

  //evaluate the mouse position and update the positions
  mouseEvaluation() {

    this.startEvent(this.divObject, 'mouseover', this.mouseOver());
    this.startEvent(this.divObject, 'mouseout', this.mouseOut());
    this.startEvent(this.divObject, 'mousemove', this.getRandomValue());

    let size = 200;
    console.log(this.mouseIsOver);
    if (this.mouseIsOver) {
      //
      this.mouseY = -(Math.min(Math.max(-this.mouseY, -size)/this.radius) * this.velocity);
      this.mouseX = (Math.min(Math.max(-this.mouseX, -size), size)/this.radius) * this.velocity;

    } else {
      this.mouseY = this.lastY * 0.98;
      this.mouseX = this.lastX * 0.98;
    }

    this.lastY = this.mouseY;
    this.lastX = this.mouseX;

    this.update(this.mouseX, this.mouseY, 0);
  }

  setTags() {
    for (let i = 0; i < this.textElements.length; i++) {
      let tag = {};
      // offsetWidth, offsetHeight, cx, cy, x, y, scale, alpha
      tag.offsetWidth = this.textElements[i].offsetWidth;
      tag.offsetHeight = this.textElements[i].offsetHeight;
      this.tagList.push(tag);
    }
  }


  positionObjects() {
    let phi = 0;
    let theta = 0;
    let i = 0
    let max = this.tagList.length + 1;
    for (i = 1; i < max; i++) {
      phi = Math.acos(-1 + (2 * i + 1 )/max);
      theta = Math.sqrt(max * Math.PI) * phi;

      this.tagList[i -1].cx = this.radius * Math.cos(theta) * Math.sin(phi);
      this.tagList[i -1].cy = this.radius * Math.sin(theta) * Math.sin(phi);
      this.tagList[i -1].cz = this.radius * Math.cos(phi);
    }

  }

  sinCos(a, b, c) {
    const degreeToRadians = Math.PI / 180;
    let sinA =  Math.sin(a * degreeToRadians);
    let cosA =  Math.cos(a * degreeToRadians);
    let sinB =  Math.sin(b * degreeToRadians);
    let cosB =  Math.cos(b * degreeToRadians);
    let sinC =  Math.sin(c * degreeToRadians);
    let cosC =  Math.cos(c * degreeToRadians);
    return { sinA, cosA, sinB, cosB, sinC, cosC };
  }

  rotationMatrix(a, b, c, i) {
    let result = this.sinCos(a, b, c);
    let rx1 = this.tagList[i].cx;
    let ry1 = this.tagList[i].cy * result.cosA + this.tagList[i].cz * (-result.sinA);
    let rz1 = this.tagList[i].cy * result.sinA + this.tagList[i].cz * result.cosA;

    let rx2 = rx1 * result.cosB + rz1 * result.sinB;
    let ry2 = ry1;
    let rz2 = rx1 * (-result.sinB) + rz1 * result.cosB;

    let rx3 = rx2 * result.cosC + ry2 * (-result.sinC);
    let ry3 = rx2 * result.sinC + ry2 * result.cosC;
    let rz3 = rz2;

    let per = this.depth / (this.depth + rz3);
    return { rx3, ry3, rz3, per };
    }

  update(a, b, c) {

    this.setTags();
    this.positionObjects();
    for (let i = 0; i < this.tagList.length; i++) {
      let vector3 = this.rotationMatrix(a, b, c, i);

      this.tagList[i].cx = vector3.rx3;
      this.tagList[i].cy = vector3.ry3;
      this.tagList[i].cz = vector3.rz3;

      this.tagList[i].x = (vector3.rx3 * vector3.per) - 2;
      this.tagList[i].y = vector3.ry3 * vector3.per;

      this.tagList[i].scale = vector3.per;
      this.tagList[i].alpha = vector3.per;
      this.tagList[i].alpha = (this.tagList[i].alpha - 0.6) * (10/6);

    }
    this.doPosition();
  }

  //TODO: doPostion()
  doPosition() {
    let l = this.divObject.offsetWidth / 2;
    let t = this.divObject.offsetHeight / 2;
    for (let i = 0; i < this.tagList.length; i++) {
      this.textElements[i].style.transform = 'translate(' + (this.tagList[i].cx + l - this.tagList[i].offsetWidth / 2)+ 'px, ' + (this.tagList[i].cy + t - this.tagList[i].offsetHeight/2)+ 'px ) scale(' + Math.ceil(this.tagList[i].scale * 100 * 0.7)/100 + ')';

      this.textElements[i].style.filter = 'alpha(opacity=' + (this.tagList[i].alpha + 0.1) * 100 + ')';
      this.textElements[i].style.opacity = this.tagList[i].alpha + 0.1;
    }

  }
}


export default TagCloud;
