export class BurnoutInv {
    responses: number[];
  
    exhaustion: number;
  
    depersonalisation: number;
  
    unfulfilled: number;

    burnoutStage: number

    depersStage: number
    
    personalStage: number

    overall: number

    constructor(responses: number[]) {
        this.responses = responses
        this.exhaustion = this.responses.slice(0, 7).reduce((a, b) => a + b);
        this.depersonalisation = this.responses.slice(7, 14).reduce((a, b) => a + b);
        this.unfulfilled = this.responses.slice(14).reduce((a, b) => a + (6 - b), 0);

        this.burnoutStage = this.exhaustion <= 17 ? 0 : this.exhaustion > 30 ? 2 : 1;
        this.depersStage = this.depersonalisation <= 17 ? 0 : this.depersonalisation > 30 ? 2 : 1;
        this.personalStage = this.unfulfilled <= 17 ? 0 : this.unfulfilled > 30 ? 2 : 1;
    
        const overallStage = Math.max(this.burnoutStage, this.depersStage, this.personalStage);
    
        this.overall = overallStage
    }
}