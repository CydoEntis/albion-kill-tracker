import fetchEquipmentImages from "../../../helpers/helpers";

export default {
	async fetchRecentKills(context) {
		const res = await fetch(`http://localhost:8080/api/gameinfo/events`);
		const data = await res.json();

		console.log(data);

		const recentBattles = [];

		for (let i = 0; i < data.length; i++) {
			let recentBattle = {
				id: data[i].BattleId,
				killer: {
					username: data[i].Killer.Name,
					guild: data[i].Killer.GuildName,
					alliance: data[i].Killer.AllianceName,
					killFame: data[i].Killer.KillFame,
					itemPower: data[i].Killer.AverageItemPower.toFixed(0),
					equipment: fetchEquipmentImages(data[i].Killer),
				},
				victim: {
					username: data[i].Victim.Name,
					guild: data[i].Victim.GuildName,
					alliance: data[i].Victim.AllianceName,
					killFame: data[i].Victim.DeathFame,
					itemPower: data[i].Victim.AverageItemPower.toFixed(0),
					equipment: fetchEquipmentImages(data[i].Victim),
				},
			};

			recentBattles.push(recentBattle);
			console.log(recentBattle);
		}

		context.commit("setRecentBattles", recentBattles);
	},
};
