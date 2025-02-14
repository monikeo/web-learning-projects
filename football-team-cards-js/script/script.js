import myFavoriteFootballTeam from '../data/data.js';

const titleText = "Team Stats";
const title = document.getElementById("title");
const teamName = document.getElementById("teamName");
const teamSport = document.getElementById("teamSport");
const teamYear = document.getElementById("teamYear");
const teamHeadCoach = document.getElementById("teamHeadCoach");
const filterTeammatesSelectOptions = document.getElementById("filterTeammatesSelectOptions");
const playersCardBlock = document.getElementById("playersCardBlock");

const filterOptions = {
    defautl: "All players",
    nickname: "Nicknames",
    forward: "Position Forward",
    midfielder: "Position Midfielder",
    defender: "Position Defender",
    goalkeeper: "Position Goalkeeper"
};
const {players} = myFavoriteFootballTeam;

const objectDeepFreeze = (obj) => {
    const probNames = Object.getOwnPropertyNames(obj);
    for (const name of probNames) {
        const value = obj[name];
        if(value && typeof value === "object") {
            objectDeepFreeze(value);
        }
    }
    return Object.freeze(obj);
}
const initialTeamInfoCard = (team, sport, year, coachName) => {
    teamName.innerText = team;
    teamSport.innerText = sport;
    teamYear.innerText = year;
    teamHeadCoach.innerText = coachName;
}

const initialFilterTeammatesSelectOptions = () => {
    for(const [key, value] of Object.entries(filterOptions)) {
        const option = document.createElement("option");
        option.value = key;
        option.text = value;
        filterTeammatesSelectOptions.appendChild(option);
    }
    return true;
}
const setPlayerCards = (players) => {
    playersCardBlock.innerHTML = players.map(
        ({name, position, number, isCaptain, nickname}) => {
            return `
                <div class="flex flex-col justify-center items-center m-5 py-2 border rounded-sm text-slate-950 bg-white min-w-81">
                    <h2 class="text-2xl font-bold">${isCaptain ? "(Captain)" : ""} ${name}</h2>
                    <p>Position: ${position}</p>
                    <p>Number: ${number}</p>
                    <p>Nicknames: ${nickname !== null ? nickname : "N/A"}</p>
                </div>
            `
    }).join("");
}
const playersPositionFilter = (position) => {
    setPlayerCards(players.filter((player) => player.position === position));
}
const filterOptionsTrigger = () => {
    console.log(filterTeammatesSelectOptions.value);
    switch (filterTeammatesSelectOptions.value) {
        case "nickname":
            setPlayerCards(players.filter((player) => player.nickname !== null));
            break;
        case "forward":
            playersPositionFilter("forward");
            break;
        case "midfielder":
            playersPositionFilter("midfielder");
            break;
        case "defender":
            playersPositionFilter("defender");
            break;
        case "goalkeeper":
            playersPositionFilter("goalkeeper");
            break;
        default:
            setPlayerCards(players);

    }
}

const main = () => {
    objectDeepFreeze(myFavoriteFootballTeam);

    const {team, sport, year, players} = myFavoriteFootballTeam;
    const { coachName } = myFavoriteFootballTeam.headCoach;

    title.innerText = titleText;
    initialTeamInfoCard(team, sport, year, coachName);
    initialFilterTeammatesSelectOptions();
    filterTeammatesSelectOptions.addEventListener("change", filterOptionsTrigger);
}

main();
