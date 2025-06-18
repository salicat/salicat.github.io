import { createRouter, createWebHistory } from 'vue-router'
import ExperienceView 			from '@/views/ExperienceView.vue'
import ProgrammingSkillsView 	from '../views/ProgrammingSkillsView.vue'
import CVView					from '@/views/CVView.vue'
import ProjectsView 			from '../views/ProjectsView.vue' 
import MainView					from '@/views/MainView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/projects',
			name: 'projects',
			component: ProjectsView,
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
		},
		{
			path:		'/',
			name:		'main',
			component:	MainView
		}
	],
})

export default router
