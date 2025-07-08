export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logos/30+.png","logos/50+ Industry Partners.png","logos/50+.png","logos/95% (1).png","logos/95%.png","logos/abb.png","logos/Artboard.jpg","logos/certificate.gif","logos/factory.gif","logos/final_msmse_hero_image_corrected.png","logos/Frame 1 (1).png","logos/Frame 1.png","logos/Frame 17 (2).png","logos/Frame 2.png","logos/Frame 5 (2).png","logos/Frame 5 (3).png","logos/Frame 7.png","logos/Frame 8.png","logos/Frame 9.png","logos/Frame22.png","logos/Frame23.png","logos/image MSME.png","logos/Patents Filed.png","logos/pexels-pixabay-256262.jpg","logos/research.gif","logos/stock-vector-photo-coming-soon-vector-image-picture-graphic-content-album-stock-photos-not-avaliable-1809858361.jpg","logos/Success Rate.png","logos/success.gif","logos/world-creativity-and-innovation-day.gif"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".gif":"image/gif"},
	_: {
		client: {start:"_app/immutable/entry/start.CBaJ6c1A.js",app:"_app/immutable/entry/app.C5AKN8EG.js",imports:["_app/immutable/entry/start.CBaJ6c1A.js","_app/immutable/chunks/DiJRI_Zx.js","_app/immutable/chunks/CsTUXKtP.js","_app/immutable/chunks/Crj6GOnN.js","_app/immutable/entry/app.C5AKN8EG.js","_app/immutable/chunks/CsTUXKtP.js","_app/immutable/chunks/2myhMgyG.js","_app/immutable/chunks/DdIo9uvT.js","_app/immutable/chunks/CjXL7628.js","_app/immutable/chunks/CQso0HZM.js","_app/immutable/chunks/Crj6GOnN.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Abb",
				pattern: /^\/Abb\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/arun",
				pattern: /^\/arun\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/auditorium",
				pattern: /^\/auditorium\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/beneficiaries",
				pattern: /^\/beneficiaries\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/ceoview",
				pattern: /^\/ceoview\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/ceo",
				pattern: /^\/ceo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/chairman",
				pattern: /^\/chairman\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/classrooms",
				pattern: /^\/classrooms\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/conference-rooms2",
				pattern: /^\/conference-rooms2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/conference-rooms",
				pattern: /^\/conference-rooms\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
