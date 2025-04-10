<template>
	<div class="experience">
	  <section id="skills">
		<h2 class="section-title">Habilidades técnicas</h2>
		<div class="skills-container">
		  <!-- Tarjeta 1: Frontend -->
		  <div class="skill_container" @click="toggleFlip(1)">
			<div class="flip-box">
			  <div class="flip-box-inner" :class="{ flipped: flipCards[1] }">
				<div class="flip-box-front skill-item">
				  <font-awesome-icon :icon="['fas', 'desktop']" class="skill-icon" />
				  <h3>Frontend</h3>
				</div>
				<div class="flip-box-back skill-item">
					<div 
						class="editable-content" 
						@input="updateCardContent(1, $event)"
						v-html="cardContents[1]"
					></div>
				</div>
			  </div>
			</div>
		  </div>
	
		  <!-- Tarjeta 2: Backend -->
		  <div class="skill_container" @click="toggleFlip(2)">
			<div class="flip-box">
			  <div class="flip-box-inner" :class="{ flipped: flipCards[2] }">
				<div class="flip-box-front skill-item">
				  <font-awesome-icon :icon="['fas', 'server']" class="skill-icon" />
				  <h3>Backend</h3>
				</div>
				<div class="flip-box-back skill-item">
				  <div 
					class="editable-content" 
					@input="updateCardContent(2, $event)"
					v-html="cardContents[2]"
				  ></div>
				</div>
			  </div>
			</div>
		  </div>
	
		  <!-- Tarjeta 3: DevOps -->
		  <div class="skill_container" @click="toggleFlip(3)">
			<div class="flip-box">
			  <div class="flip-box-inner" :class="{ flipped: flipCards[3] }">
				<div class="flip-box-front skill-item">
				  <font-awesome-icon :icon="['fas', 'cloud']" class="skill-icon" />
				  <h3>DevOps</h3>
				</div>
				<div class="flip-box-back skill-item">
				  <div 
					class="editable-content" 
					@input="updateCardContent(3, $event)"
					v-html="cardContents[3]"
				  ></div>
				</div>
			  </div>
			</div>
		  </div>
	
		  <!-- Tarjeta 4: No-Code Front -->
		  <div class="skill_container" @click="toggleFlip(4)">
			<div class="flip-box">
			  <div class="flip-box-inner" :class="{ flipped: flipCards[4] }">
				<div class="flip-box-front skill-item">
					<font-awesome-icon :icon="['fas', 'code-branch']" class="skill-icon" />
				  <h3>Versionado y Control de Código</h3>
				</div>
				<div class="flip-box-back skill-item">
				  <div 
					class="editable-content" 
					@input="updateCardContent(4, $event)"
					v-html="cardContents[4]"
				  ></div>
				</div>
			  </div>
			</div>
		  </div>
	
		  <!-- Tarjeta 5: Marketing Skills -->
		  <div class="skill_container" @click="toggleFlip(5)">
			<div class="flip-box">
			  <div class="flip-box-inner" :class="{ flipped: flipCards[5] }">
				<div class="flip-box-front skill-item">
					<font-awesome-icon :icon="['fas', 'magic']" class="skill-icon" />
				  <h3>Marketing y Herramientas Analíticas</h3>
				</div>
				<div class="flip-box-back skill-item">
				  <div 
					class="editable-content" 
					@input="updateCardContent(5, $event)"
					v-html="cardContents[5]"
				  ></div>
				</div>
			  </div>
			</div>
		  </div>

		  <div class="skill_container" @click="toggleFlip(6)">
			<div class="flip-box">
			  <div class="flip-box-inner" :class="{ flipped: flipCards[6] }">
				<div class="flip-box-front skill-item">
					<font-awesome-icon :icon="['fab', 'wordpress']" class="skill-icon"/>
				  <h3>Herramientas No-Code y Diseño</h3>
				</div>
				<div class="flip-box-back skill-item">
				  <div 
					class="editable-content" 
					@input="updateCardContent(6, $event)"
					v-html="cardContents[6]"
				  ></div>
				</div>
			  </div>
			</div>
		  </div>

		  <div class="skill_container" @click="toggleFlip(7)">
			<div class="flip-box">
			  <div class="flip-box-inner" :class="{ flipped: flipCards[7] }">
				<div class="flip-box-front skill-item">
					<font-awesome-icon :icon="['fas', 'paint-brush']" class="skill-icon" />
				  <h3>Otras Habilidades Relevantes</h3>
				</div>
				<div class="flip-box-back skill-item">
				  <div 
					class="editable-content" 
					@input="updateCardContent(7, $event)"
					v-html="cardContents[7]"
				  ></div>
				</div>
			  </div>
			</div>
		  </div>
	
		</div>
	  </section>
	</div>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		// Objeto que maneja el estado de giro de cada tarjeta
		flipCards: {
		  1: false,
		  2: false,
		  3: false,
		  4: false,
		  5: false,
		},
		cardContents: {
			1: "Front-End:<br>• HTML5<br>• CSS3<br>• JavaScript<br>• Vue.js<br>• ChartJS<br>• Bootstrap<br>• Axios",
			2: "Back-End:<br>• Python<br>• FastAPI<br>• JWT<br>• REST API<br>• SQLAlchemy<br>• PostgreSQL",
			3: "Cloud & Integraciones:<br>• Firebase<br>• AWS S3<br>• Google Cloud Vision OCR<br>• Vercel<br>• Heroku<br>• Render",
			4: "Versionado:<br>• Git<br>• GitHub",
			5: "Marketing & Analíticas:<br>• SEO<br>• SEM<br>• Redes Sociales<br>• Google Analytics<br>• Google Search Console<br>• Google Tag Manager<br>• Google My Business<br>• Facebook Analytics & Ads<br>• Google Ads<br>• Screaming Frog<br>• Answer The Public<br>• SimilarWeb<br>• Google Lighthouse",
			6: "No-Code & Diseño:<br>• WordPress<br>• Elementor Pro<br>• Shopify<br>• CorelDRAW<br>• Canva",
			7: "Otras Habilidades:<br>• Prompt Engineering<br>• Desarrollo Full-Stack"
		}
	  };
	},
	methods: {
	  toggleFlip(cardNumber) {
		this.flipCards[cardNumber] = !this.flipCards[cardNumber];
	  },
	  updateCardContent(cardNumber, event) {
		this.cardContents[cardNumber] = event.target.innerHTML;
	  }
	}
  };
  </script>
  
  