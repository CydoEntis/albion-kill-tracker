export default {
	setPlayerInfo(state, payload) {
		state.playerInfo = payload;
	},
	setPlayersRecentKills(state, payload) {
		state.recentPlayerKills = payload;
	},
	setPlayersRecentDeaths(state, payload) {
		state.recentPlayerDeaths = payload;
	},
};
