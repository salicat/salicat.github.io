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
					<p style="text-align: justify;">Plataforma de inversión en banca P2P con gestión, monitoreo en tiempo real y gráficos avanzados.</p>
					<a href="https://actyvalfront.onrender.com" target="_blank" class="btn-demo">
						<font-awesome-icon :icon="['fab', 'vuejs']" />
						<span>Ver Demo</span>
					</a>
					<br>
					<button v-on:click="ask_mail"> Usuario de prueba </button>
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
						<span class="tech-item">Google OCR</span>
					</div>
					<p style="text-align: justify;">Aplicación de finanzas personales, Modulo (OCR) de reconocimiento de caracteres para creacion de registros.</p>
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
					<p style="text-align: justify;">Sitio web para la propuesta comercial de Activos y Valores, con calculadora de créditos e inversión integrada.</p>
					<a href="https://www.actyvalores.com" target="_blank" class="btn-demo">
						<font-awesome-icon :icon="['fab', 'wordpress']" />
						<span>Ver Página</span>
					</a>
				</div>
			</div>
		</div>
		<div v-if="modal" class="modal-overlay">
			<div class="modal-content">
				<h2>Ingresa tu correo</h2>
				<input type="text" v-model="email" placeholder="Correo electrónico" />
				<button @click="request_test">Enviar</button>
				<button @click="modal = false">Cerrar</button>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
import { useToast } from 'vue-toast-notification';

  export default {
    data() {
      return {
		modal	:false,
		email	: ""
      };
    },
    methods: {
		ask_mail() {
			this.modal = true;
			},
		request_test() {
			const toast = useToast();
						
			if (!this.validateEmail(this.email)) {
				toast.error('Email inválido', {position: 'top-right'});
				return;
			}

			const url = `https://actyback-0505163094da.herokuapp.com/testUser_request/${this.email}`;

			// Mostrar toast de carga - CORRECCIÓN CLAVE
			const loadingToast = toast.info('Enviando credenciales...', {
				position: 'top-right',
				duration: 0
			});

			axios.post(url)
				.then(response => {
					// Cerrar toast de carga CORRECTAMENTE
					toast.clear();  // Cierra todos los toasts
					
					// Mostrar éxito
					toast.success(response.data.message, {
						position: 'top-right',
						duration: 5000
					});
					
					this.modal = false;
				})
				.catch(error => {
					// Cerrar toast de carga CORRECTAMENTE
					toast.clear();  // Cierra todos los toasts
					
					// Obtener mensaje de error
					let errorMessage = 'Error al procesar la solicitud';
					
					// Manejo específico para la estructura de error
					if (error.response && error.response.data) {
						// Prioridad 1: 'detail'
						if (error.response.data.detail) {
							errorMessage = error.response.data.detail;
						} 
						// Prioridad 2: 'message'
						else if (error.response.data.message) {
							errorMessage = error.response.data.message;
						}
					}
					
					// Mostrar error
					toast.error(errorMessage, {
						position: 'top-right',
						duration: 5000
					});
					
					console.error("Detalles del error:", error);
				});
			},
		validateEmail(email) {
			const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			return re.test(email);
		}
    }
  };


</script>