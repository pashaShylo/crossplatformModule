export interface Voliere {
    getArea(): number;
}

export class FlyingAndSwimmingBirdVoliere implements Voliere {
    private length: number = 15;
    private width: number = 10;
    private heightNet: boolean = true;
    private waterLength: number = 3;
    private waterWidth: number = 3;
  
    getArea(): number {
        const landArea = this.length * this.width;
        const waterArea = this.waterLength * this.waterWidth;
        return waterArea + landArea;
    }
}

export class SwimmingBirdVoliere implements Voliere {
    private length: number = 2;
    private width: number = 4;
    private heightNet: boolean = false;
    private waterLength: number = 3;
    private waterWidth: number = 3;

    getArea(): number {
        const landArea = this.length * this.width;
        const waterArea = this.waterLength * this.waterWidth;
        return waterArea + landArea;
    }
}

export class RunningBirdVoliere implements Voliere {
    private length: number = 15;
    private width: number = 3;
    private heightNet: boolean = true;

    getArea(): number {
        const area = this.length * this.width;
        return area;
    }
}

export class Bird{
    private voliere: Voliere;
    private birdName: string;
    private isSwimming: boolean;
    private isFlying: boolean;
    
    constructor(birdName: string, isSwimming: boolean, isFlying: boolean) {
      this.birdName = birdName
      this.isFlying = isFlying
      this.isSwimming = isSwimming
      if(isSwimming && isFlying){
        this.voliere = new FlyingAndSwimmingBirdVoliere;
      }else if(isSwimming && !isFlying){
        this.voliere = new SwimmingBirdVoliere;
      }else {
        this.voliere = new RunningBirdVoliere;
      }
    }
  
    getVoliere(): Voliere {
      return this.voliere;
    }
    getName(): string {
        return this.birdName;
    }
}
  
