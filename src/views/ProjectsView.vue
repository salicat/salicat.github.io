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
						<span class="tech-item">Node</span>
					</div>
					<p>Plataforma de inversión banca P2P, gestión, monitoreo, informacion y graficos.</p>
					<div style="margin-top: 1rem;">
						<a href="https://actyvalfront.onrender.com" target="blank">
							<button class="tech-item">
								<font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" />
								<span class="icon-text">Demo</span>
							</button>
						</a>
					</div>
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
						<span class="tech-item">OpenAi</span>
						<span class="tech-item">Node</span>
					</div>
					<p>Aplicación para gestion de ingresos y egresos personales, sugerencias por medio de AI.</p>
					<div style="margin-top: 1rem;">
						<a href="https://front-24qp.onrender.com" target="_blank">
							<button class="tech-item">
								<i class="fas fa-external-link-alt project-icon"></i> 
								<span class="icon-text">Demo</span> 
							</button>
						</a>
					</div>
				</div>
			</div>

			<div class="project-card">
				<div class="project-badge">Full Stack</div>
				<img src="https://t3.ftcdn.net/jpg/03/53/83/92/360_F_353839266_8yqhN0548cGxrl4VOxngsiJzDgrDHxjG.jpg" alt="E-learning" class="project-thumbnail">
				<div class="project-content">
					<h3>Social Score</h3>
					<div class="tech-stack">
						<span class="tech-item">React</span>
						<span class="tech-item">Next.js</span>
						<span class="tech-item">PostgreSQL</span>
					</div>
					<p>Sistema para revision de reputacion de empresas.</p>
					<div style="margin-top: 1rem;">
							<button class="tech-item">
								<i class="fab fa-github project-icon"></i>
								<span class="icon-text"> En desarrollo </span>
							</button>                        
					</div>
				</div>
			</div>

			<!-- Proyectos WordPress -->
			<div class="project-card wordpress">
				<div class="project-badge">WordPresss</div>
				<img src="https://www.actyvalores.com/wp-content/uploads/2025/02/Screenshot-2025-02-27-at-7.48.23-PM.png" alt="actyvalores.com" class="project-thumbnail">
				<div class="project-content">
					<h3>Pagina Comercial Actyvalores</h3>
					<div class="tech-stack">
						<span class="tech-item">Elementor Pro</span>
						<span class="tech-item">Optimización Velocidad</span>
						<span class="tech-item">SEO</span>
					</div>
					<p>Pagina informativa sobre la propuesta comercial de Activos y Valores, codigo insertado para calculadora de creditos / inversión.</p>
					<div style="margin-top: 1rem;">
						<a href="https://www.actyvalores.com" target="_blank">
							<button class="tech-item">
								<i class="fas fa-external-link-alt project-icon"></i> 
								<span class="icon-text">Ver Pagina</span>
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

