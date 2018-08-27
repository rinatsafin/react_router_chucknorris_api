export const routerSettings = [
	{
		url: '/',
		component: Home,
		exact: true,
	},
	{
		url: '/news',
		component: News,
		exact: true,
	},
	{
		url: '/news/:newsId',
		component: News,
		exact: false,
	},
	{
		url: '/topics',
		component: Topics,
		exact: false,
	},
];