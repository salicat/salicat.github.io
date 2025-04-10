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
					<div class="scroll-indicator">⬇️</div>
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
				  <div class="scroll-indicator">⬇️</div>
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
				  <font-awesome-icon :icon="['fas', 'magic']" class="skill-icon" />
				  <h3>No-Code Front</h3>
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
				  <font-awesome-icon :icon="['fas', 'bullhorn']" class="skill-icon" />
				  <h3>Marketing Skills</h3>
				</div>
				<div class="flip-box-back skill-item">
				  <div 
					class="editable-content" 
					@input="updateCardContent(5, $event)"
					v-html="cardContents[5]"
				  ></div>
				  <div class="scroll-indicator">⬇️</div>
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
		  1: "💻 Lenguajes: <br>• HTML5 📝 <br>• CSS3 🎨 <br>• JavaScript: ⚡ <br> <br> 💻 Frameworks/Bibliotecas: <br>• Vue.js <br>• ChartJS <br>• Bootstrap ",
		  2: "⚙️ Lenguajes/Frameworks: <br> • Python 🐍 <br> • FastAPI 🚀 <br><br>⚙️ ORM y Bases de Datos: <br> • SQLAlchemy 🔗 <br>• PostgreSQL 🗄 (pgAdmin) <br><br>⚙️ Herramientas y Despliegue: <br>• Postman 📡 <br>• Sendgrid ✉️ <br>• AWS 💾 <br>• Firebase 🔐 <br><br>⚙️ Integraciones y Versionado: <br>• Google Vision ML 🤖 <br>• GitHub 🟣",
		  3: "🔥 Infraestructura y Automatización: <br>• AWS 💾 <br>• CI/CD 🚀 <br>• GitHub Actions 🟣",
		  4: "🚀 Herramientas No-Code: <br>• WordPress 🔷 <br>• Elementor 🛠 <br><br>🚀 Otras Herramientas: <br>• (Opcional: Wix, Shopify, etc.)",
		  5: "📈 Áreas de Marketing: <br>• SEO 🔍 <br>• SEM 📊 <br>• Redes Sociales 🤳 <br><br>📈 Herramientas Analíticas: <br>• Google Analytics 📈 <br>• Estrategias de marketing digital 💡"
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
  
  