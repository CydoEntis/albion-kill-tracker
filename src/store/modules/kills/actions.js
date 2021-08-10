import { fetchEquipmentImages } from "../../../helpers/helpers";

const proxyUrl = "https://thingproxy.freeboard.io/fetch/";

export default {
	async fetchRecentKills(context) {
		const apiUrl = "https://gameinfo.albiononline.com/api/gameinfo/events";
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

		context.commit("setRecentKills", kills);
	},
	async fetchTopKills(context) {
		const apiUrl =
			"https://gameinfo.albiononline.com/api/gameinfo/events/killfame?range=week&offset=0&limit=10";
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

		context.commit("setTopKills", kills);
	},
};
