import { fetchEquipmentImages } from "../../../helpers/helpers";

const proxyUrl = "https://thingproxy.freeboard.io/fetch/";

export default {
	async findPlayer(context, payload) {
		const apiUrl = `https://gameinfo.albiononline.com/api/gameinfo/search?q=${payload.username}`;
		const res = await fetch(proxyUrl + apiUrl);
		const data = await res.json();

		let formatFame = new Intl.NumberFormat("en-US");

		let playerInfo = {
			id: data.players[0].Id,
			username: data.players[0].Name,
			guild: data.players[0].GuildName,
			alliance: data.players[0].AllianceName,
			killFame: formatFame.format(data.players[0].KillFame),
		};

		context.commit("setPlayerInfo", playerInfo);
	},
	async fetchPlayersRecentKills(context, payload) {
		const apiUrl = `https://gameinfo.albiononline.com/api/gameinfo/players/${payload.id}/kills`;
		const res = await fetch(proxyUrl + apiUrl);
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
		const apiUrl = `https://gameinfo.albiononline.com/api/gameinfo/players/${payload.id}/deaths`;
		const res = await fetch(proxyUrl + apiUrl);
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
