let odds = new Map([
    //First Round found from CBS or something
    ["1vs16", 99],
    ["2vs15", 93], // 
    ["3vs14", 86], // 
    ["4vs13", 79], // 
    ["5vs12", 65], // 
    ["6vs11", 62], // 
    ["7vs10", 61], // 
    ["8vs9", 49], // 
    
    //Round of 32
    ["1vs8", 90], 
    ["1vs9", 88], // Estimated
    ["2vs7", 85], // Estimated
    ["2vs10", 83], // Estimated
    ["3vs6", 65], // Estimated
    ["3vs11", 78], // Estimated
    ["4vs5", 60], 
    ["4vs12", 70], // Estimated
    ["5vs12", 67], // Adjusted for potential first round upset victories
    ["5vs13", 85], // Estimated
    ["6vs11", 65], // Adjusted
    ["6vs14", 80], // Estimated
    ["7vs10", 58], // Close matchups historically
    ["7vs15", 90], // Assuming a rare upset in the first round
    ["8vs16", 95], // Highly hypothetical, considering historical precedents
    ["9vs16", 93],
    
    //sweet 16
    ["1vs5", 83], // Estimated
    ["1vs12", 94], // Estimated
    ["1vs13", 95], // Estimated
    ["1vs3", 74], // Based on the general performance of 1 vs 3 seed matchups
    ["2vs4", 67], // Estimated
    ["2vs6", 75], // Estimated
    ["2vs11", 85], // Estimated
    ["2vs14", 90], // Estimated
    ["3vs7", 70], // Estimated
    ["3vs10", 77], // Estimated
    ["4vs8", 72], // Estimated based on historical trends and performance
    ["4vs9", 70], // Estimated
    ["5vs8", 68], // Adjusted for potential matchups, somewhat speculative
    ["5vs9", 66], // Similar to above, speculative
    ["6vs12", 80], // Hypothetical, considering potential upsets leading to this matchup
    ["7vs14", 85], // Similarly hypothetical
    ["8vs10", 55], // Very close matchup historically when it happens
    ["9vs11", 53], // Also a close matchup, slightly favoring the lower seed
    ["6vs7", 50], // Could go either way, somewhat of a toss-up
    ["10vs12", 50], // Speculative, assuming both teams upset higher seeds
    ["11vs13", 50], // Highly speculative, both teams would need to upset to meet
    ["14vs15", 55], // Extremely rare scenario, favoring the slightly higher seed

    //elite 8
    ["1vs2", 53], // Close matchups historically, slight edge to the 1 seed
    ["1vs4", 68], // 1 seed has a historical advantage over 4 seeds
    ["1vs6", 77], // 1 seed significantly favored against 6 seeds
    ["2vs3", 55], // Close, but 2 seeds have a slight historical edge
    ["2vs5", 70], // 2 seeds generally perform well against 5 seeds
    ["3vs4", 52], // Very close, slight edge to 3 seeds historically
    ["3vs5", 65], // 3 seeds have a decent advantage over 5 seeds
    ["4vs6", 60], // 4 seeds have a historical advantage against 6 seeds
    ["4vs7", 67], // 4 seeds favored over 7 seeds
    ["5vs6", 55], // Close matchup, 5 seeds slightly favored
    ["5vs7", 62], // 5 seeds generally beat 7 seeds
    ["6vs8", 68], // 6 seeds favored against 8 seeds
    ["7vs8", 64], // Close, but 7 seeds have a historical edge
    ["6vs9", 70], // Considering potential upsets, 6 seeds favored over 9
    ["7vs10", 65], // 7 seeds generally outperform 10 seeds in late rounds
    ["8vs12", 75], // 8 seeds would be significantly favored against 12 seeds
    ["9vs13", 80], // 9 seeds would be heavily favored over 13 seeds
    ["10vs14", 85],

    // Final Four potential matchups
    ["1vs1", 50], // When two 1 seeds meet, it's essentially a toss-up
    ["2vs2", 50], // Similarly, two 2 seeds meeting is expected to be evenly matched
    ["3vs3", 50], // Three seeds meeting in the Final Four would also be closely contested
    ["4vs4", 50], // Four seeds, if they meet here, would have no clear historical favorite
    ["1vs2", 53], // Slight edge to the 1 seed based on historical performance
    ["1vs3", 58], // 1 seeds tend to have a moderate advantage over 3 seeds
    ["2vs3", 55], // 2 seeds have a slight historical edge over 3 seeds
    ["1vs4", 60], // 1 seeds generally perform well against 4 seeds
    ["2vs4", 57], // 2 seeds are somewhat favored against 4 seeds
    ["3vs4", 54], // 3 seeds have a slight advantage over 4 seeds
    // Championship potential matchups
    ["1vs2", 53], // Close matchups historically, slight edge to the 1 seed
    ["1vs3", 58], // 1 seeds are generally favored over 3 seeds
    ["2vs3", 55], // 2 seeds slightly favored over 3 seeds
    ["1vs4", 60], // 1 seeds have a significant historical advantage over 4 seeds
    ["2vs4", 57], // 2 seeds also favored against 4 seeds
    // Assuming a broader range of matchups is less likely by this stage, but for completeness:
    ["1vs5", 65], // 1 seeds favored over 5 seeds
    ["2vs5", 62], // 2 seeds also have an advantage over 5 seeds
    ["3vs5", 59], // 3 seeds slightly favored over 5 seeds
    ["4vs5", 55], // Close, with a slight edge to 4 seeds
    // Other theoretical matchups
    ["1vs6", 70], // 1 seeds significantly favored against 6 seeds
    ["2vs6", 67], // 2 seeds also favored against 6 seeds
    ["3vs6", 64] // 3 seeds have a decent advantage over 6 seeds
    // And so on, decreasingly likely as seed disparity increases
]);
    
let east = [1, 16, 8, 9, 5, 12, 4, 13, 6, 11, 3, 14, 7, 10, 2, 15];
let west = [1, 16, 8, 9, 5, 12, 4, 13, 6, 11, 3, 14, 7, 10, 2, 15];
let south = [1, 16, 8, 9, 5, 12, 4, 13, 6, 11, 3, 14, 7, 10, 2, 15];
let midwest = [1, 16, 8, 9, 5, 12, 4, 13, 6, 11, 3, 14, 7, 10, 2, 15];

function round(region, iteration = 1){
    if(region.length === 1){
        return region
    }
    
    for(let i = 0; i <= region.length - 2; i++){
        let j = i+1
        let favored = 0
        let notFavored = 0
        if(region[i] < region[j]){
            favored = region[i]
            notFavored = region[j]
        }
        else{
            favored = region[j]
            notFavored = region[i]
        }
        let matchup = favored.toString() + "vs" + notFavored.toString()
        let odd = 0
        if(odds.has(matchup)){
            odd = odds.get(matchup)
        }else{
            odd = 50
        }
        let over = new Array(odd).fill("win")
        let under = new Array(100-odd).fill("lose")
        let totalOdds = over.concat(under)
        let pick = Math.floor(Math.random() * 100)
        let result = totalOdds[pick]
        if(result === "win"){
            region.splice(region.indexOf(notFavored), 1)
        }
        else{
            region.splice(region.indexOf(favored), 1)
        }
    }
    console.log(`the winners of round ${iteration} are ${region}`)
    return round(region, iteration + 1)    
}
console.log("let's get our East results...")
let eastWinner = round(east)
console.log("let's get our West results...")
let westWinner = round(west)
console.log("let's get our Midwest results...")
let midwestWinner = round(midwest)
console.log("let's get our South results...")
let southWinner = round(south)


let final4 = [
    { seed: eastWinner, region: 'East' },
    { seed: westWinner, region: 'West' },
    { seed: southWinner, region: 'South' },
    { seed: midwestWinner, region: 'Midwest' }
];

console.log(`The final four is in. Your East champ is the ${eastWinner[0]} seed. Your West champ is the ${westWinner[0]} seed. Your South champ is the ${southWinner[0]} seed. Your Midwest champ is the ${midwestWinner[0]} seed. Let's find the true champ!`);

function finals(teams, final = false){
    for (let i = 0; i <= teams.length - 2; i++) {
        let team1 = teams[i];
        let team2 = teams[i + 1];
        let favored, notFavored;

        if (team1.seed < team2.seed) {
            favored = team1;
            notFavored = team2;
        } else {
            favored = team2;
            notFavored = team1;
        }

        let matchup = `${favored.seed}vs${notFavored.seed}`;
        let odd = odds.has(matchup) ? odds.get(matchup) : 50;
        let result = Math.random() < odd / 100 ? "win" : "lose";

        if (result === "win") {
            teams.splice(teams.indexOf(notFavored), 1);
        } else {
            teams.splice(teams.indexOf(favored), 1);
        }
    }

    if (!final) {
        console.log(`Here we go! The finals are between the ${teams[0].region} ${teams[0].seed} seed and the ${teams[1].region} ${teams[1].seed} seed.`);
        finals(teams, true);
    } else {
        console.log(`And the championship winner is... the ${teams[0].region} ${teams[0].seed} seed! Congratulations!`);
    }

    return teams[0]; // Return the winner for external use if needed
}

finals(final4);


