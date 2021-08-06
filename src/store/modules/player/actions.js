export default {
	async findPlayer(context, payload) {
		const res = await fetch(`http://localhost:8080/api/gameinfo/search?q=${payload.username}`);
		const data = await res.json();

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
};
