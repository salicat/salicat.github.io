<template>
	<div class="projects">
		<h2 class="section-title">Portafolio</h2>
		<div class="projects-grid">
			<!-- Proyectos Full Stack -->
			<div class="project-card">
				<div class="project-badge">Full Stack</div>
				<img src="https://www.actyvalores.com/wp-content/uploads/2025/02/Screenshot-2025-02-27-at-7.19.07-PM.png" alt="API Platform" class="project-thumbnail">
				<div class="project-content">
					<h3>Actyvalores (FinTech)</h3>
					<div class="tech-stack">
						<span class="tech-item">Vue.js</span>
						<span class="tech-item">PostgreSQL</span>
						<span class="tech-item">FastAPI</span>
						<span class="tech-item">AWS</span>
						<span class="tech-item">Node.js</span>
					</div>
					<p>Plataforma de inversión en banca P2P con gestión, monitoreo en tiempo real y gráficos avanzados.</p>
					<a href="https://actyvalfront.onrender.com" target="_blank" class="btn-demo">
						<font-awesome-icon :icon="['fab', 'vuejs']" />
						<span>Ver Demo</span>
					</a>
				</div>
			</div>

			<div class="project-card">
				<div class="project-badge">Full Stack</div>
				<img src="https://www.actyvalores.com/wp-content/uploads/2025/02/Screenshot-2025-02-27-at-7.12.15-PM.png" alt="E-learning" class="project-thumbnail">
				<div class="project-content">
					<h3>My Budget (Monitoreo de gastos)</h3>
					<div class="tech-stack">
						<span class="tech-item">Vue.js</span>
						<span class="tech-item">PostgreSQL</span>
						<span class="tech-item">FastAPI</span>
						<span class="tech-item">OpenAI</span>
						<span class="tech-item">Node.js</span>
					</div>
					<p>Aplicación inteligente para gestionar ingresos y egresos personales con IA que sugiere mejoras financieras.</p>
					<a href="https://front-24qp.onrender.com" target="_blank" class="btn-demo">
						<font-awesome-icon :icon="['fab', 'vuejs']" />
						<span>Ver Demo</span>
					</a>
				</div>
			</div>

			<!-- <div class="project-card">
				<div class="project-badge">Full Stack</div>
				<img src="https://t3.ftcdn.net/jpg/03/53/83/92/360_F_353839266_8yqhN0548cGxrl4VOxngsiJzDgrDHxjG.jpg" alt="E-learning" class="project-thumbnail">
				<div class="project-content">
					<h3>Social Score</h3>
					<div class="tech-stack">
						<span class="tech-item">React</span>
						<span class="tech-item">Next.js</span>
						<span class="tech-item">PostgreSQL</span>
					</div>
					<p>Plataforma para evaluar la reputación de empresas mediante análisis de datos.</p>
					<button class="btn-disabled">
						<font-awesome-icon :icon="['fab', 'github']" />
						<span>En desarrollo</span>
					</button>
				</div>
			</div> -->

			<!-- Proyectos WordPress -->
			<div class="project-card wordpress">
				<div class="project-badge" style="background-color: deepskyblue;">WordPress</div>
				<img src="https://www.actyvalores.com/wp-content/uploads/2025/02/Screenshot-2025-02-27-at-7.48.23-PM.png" alt="actyvalores.com" class="project-thumbnail">
				<div class="project-content">
					<h3>Página Comercial Actyvalores</h3>
					<div class="tech-stack">
						<span class="tech-item">Elementor Pro</span>
						<span class="tech-item">Optimización Velocidad</span>
						<span class="tech-item">SEO</span>
					</div>
					<p>Sitio web para la propuesta comercial de Activos y Valores, con calculadora de créditos e inversión integrada.</p>
					<a href="https://www.actyvalores.com" target="_blank" class="btn-demo">
						<font-awesome-icon :icon="['fab', 'wordpress']" />
						<span>Ver Página</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
