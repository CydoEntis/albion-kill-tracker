export default {
	async fetchRecentKills(context) {
		const res = await fetch(`http://localhost:8080/api/gameinfo/events`);
		const data = await res.json();

		console.log(data);

		const recentBattles = [];

		for (let i = 0; i < data.length; i++) {
			let recentBattle = {
				id: data[i].BattleId,
				username: data[i].Killer.Name,
				guild: data[i].Killer.GuildName,
				killFame: data[i].Killer.KillFame,
				itemPower: data[i].Killer.AverageItemPower.toFixed(2),
			};

			recentBattles.push(recentBattle);
		}

		context.commit("setRecentBattles", recentBattles);
	},
};
