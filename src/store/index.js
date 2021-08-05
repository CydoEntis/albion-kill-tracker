import { createStore } from "vuex";
import killsModule from "./modules/kills";
import playerModule from "./modules/player";

export default createStore({
	modules: {
		killsModule,
		playerModule,
	},
});
