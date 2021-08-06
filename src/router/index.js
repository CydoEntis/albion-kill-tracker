import { createRouter, createWebHistory } from "vue-router";
import RecentKillsPage from "../pages/RecentKillsPage.vue";
import SearchResultsPage from "../pages/SearchResultsPage.vue";

const routes = [
	{
		path: "/",
		name: "RecentKills",
		component: RecentKillsPage,
	},
	{
		path: "/results",
		name: "SearchResults",
		component: SearchResultsPage,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
