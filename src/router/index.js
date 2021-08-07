import { createRouter, createWebHistory } from "vue-router";
import KillFeedPage from "../pages/KillFeedPage.vue";
import AboutPage from "../pages/AboutPage.vue";

const routes = [
	{
		path: "/",
		name: "About",
		component: AboutPage,
	},
	{
		path: "/kill-feed",
		name: "KillFeedPage",
		component: KillFeedPage,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
