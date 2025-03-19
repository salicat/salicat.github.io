import { createRouter, createWebHistory } from 'vue-router'
import HomeView 				from '../views/HomeView.vue'
import ExperienceView 			from '../views/ExperienceView.vue'
import ProgrammingSkillsView 	from "../views/ProgrammingSkillsView.vue"
import CVView					from '@/views/CVView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ 
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/AboutView.vue'),
		},
		{
			path:		'/experience',
			name:		'experience',
			component:	ExperienceView
		},
		{
			path:		'/skills',
			name:		'skills',
			component:	ProgrammingSkillsView	
		},
		{
			path:		'/cv',
			name:		'cv',
			component:	CVView	
		}
	],
})

export default router
