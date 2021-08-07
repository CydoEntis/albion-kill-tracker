import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
	state() {
		return {
			playerInfo: {},
			recentPlayerKills: [],
			recentPlayerDeaths: [],
		};
	},
	mutations,
	actions,
	getters,
};
