// Напишите функцию sumPPG, которая принимает два объекта игрока 
// NBA / struct / Hash / Dict / Class и суммирует их PPG.

// let iverson = new NBAplayer("Iverson", "76ers", 11.2);
// let jordan = new NBAplaer("Jordan", "bulls", 20.2);
// sumPPG(iverson, jordan); 

function NBAplayer(name, team, ppg){
  this.name=name;
  this.team=team;
  this.ppg=ppg;
}
let iverson = new NBAplayer("Iverson", "76ers", 11.2);
let jordan = new NBAplayer("Jordan", "bulls", 20.2);
function sumPPG (a, b) {
  return a.ppg + b.ppg
}
console.log(sumPPG(iverson, jordan));

