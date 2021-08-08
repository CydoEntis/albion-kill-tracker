import { fetchEquipmentImages } from "../../../helpers/helpers";

export default {
	async findPlayer(context, payload) {
		const res = await fetch(
			`https://gameinfo.albiononline.com/api/gameinfo/search?q=${payload.username}`
		);
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
	async fetchPlayersRecentKills(context, payload) {
		const res = await fetch(
			`https://gameinfo.albiononline.com/api/gameinfo/players/${payload.id}/kills`
		);
		const data = await res.json();

		const kills = [];

		let formatFame = new Intl.NumberFormat("en-US");

		for (let i = 0; i < data.length; i++) {
			let kill = {
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

			kills.push(kill);
		}

		context.commit("setPlayersRecentKills", kills);
	},
	async fetchPlayersRecentDeaths(context, payload) {
		const res = await fetch(
			`https://gameinfo.albiononline.com/api/gameinfo/players/${payload.id}/deaths`
		);
		const data = await res.json();

		const kills = [];

		let formatFame = new Intl.NumberFormat("en-US");

		for (let i = 0; i < data.length; i++) {
			let kill = {
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

			kills.push(kill);
		}

		context.commit("setPlayersRecentDeaths", kills);
	},
};
