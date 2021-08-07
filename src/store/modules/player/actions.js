import fetchEquipmentImages from "../../../helpers/helpers";

export default {
	async findPlayer(context, payload) {
		const res = await fetch(`http://localhost:8080/api/gameinfo/search?q=${payload.username}`);
		const data = await res.json();

		console.log(data);

		let formatFame = new Intl.NumberFormat("en-US");

		let playerInfo = {
			id: data.players[0].Id,
			username: data.players[0].Name,
			guild: data.players[0].GuildName,
			alliance: data.players[0].AllianceName,
			killFame: formatFame.format(data.players[0].KillFame),
		};

		console.log(playerInfo);

		context.commit("setPlayerInfo", playerInfo);
	},
	async fetchPlayersRecentBattles(context, payload) {
		const res = await fetch(`http://localhost:8080/api/gameinfo/players/${payload.id}/kills`);
		const data = await res.json();

		const recentPlayerBattles = [];

		let formatFame = new Intl.NumberFormat("en-US");

		for (let i = 0; i < data.length; i++) {
			let recentPlayerBattle = {
				id: data[i].BattleId,
				killer: {
					username: data[i].Killer.Name,
					guild: data[i].Killer.GuildName,
					alliance: data[i].Killer.AllianceName,
					killFame: formatFame.format(data[i].Killer.KillFame),
					itemPower: data[i].Killer.AverageItemPower.toFixed(0),
					equipment: fetchEquipmentImages(data[i].Killer),
				},
				victim: {
					username: data[i].Victim.Name,
					guild: data[i].Victim.GuildName,
					alliance: data[i].Victim.AllianceName,
					killFame: formatFame.format(data[i].Victim.DeathFame),
					itemPower: data[i].Victim.AverageItemPower.toFixed(0),
					equipment: fetchEquipmentImages(data[i].Victim),
				},
			};

			recentPlayerBattles.push(recentPlayerBattle);
		}

		console.log(recentPlayerBattles);
		context.commit("setPlayersRecentBattles", recentPlayerBattles);
	},
};
