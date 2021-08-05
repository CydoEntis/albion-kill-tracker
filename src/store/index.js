import { createStore } from "vuex";
import killsModule from "./modules/kills";
import playerModule from "./modules/player";
import recentKillsModule from "./modules/recent-kills";

export default createStore({
	modules: {
		killsModule,
		playerModule,
		recentKillsModule,
	},
});
