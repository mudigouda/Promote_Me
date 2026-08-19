export type ScoreBand="COLD"|"WARM"|"HOT";
export function scoreBand(score:number):ScoreBand{return score>=70?"HOT":score>=40?"WARM":"COLD";}
