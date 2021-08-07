import { createStore } from "vuex";
import playerModule from "./modules/player";
import killsModule from "./modules/kills";

export default createStore({
	modules: {
		playerModule,
		killsModule,
	},
});
