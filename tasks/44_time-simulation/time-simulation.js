export class SimTime {
  constructor() {
    this.time = 0;
    this.speed = 1;
    this.realtime = 0;
  }
  get() {
    return this.time;
  }
  setSpeed(newSpeed) {
    this.speed = newSpeed;
  }
  update(time) {
    if (this.realtime > time) {
      return 'Error';
    }
    let newTime = this.time + (time - this.realtime) * this.speed;
    this.time = newTime;
    this.realtime = time;
    return newTime;
  }
}
