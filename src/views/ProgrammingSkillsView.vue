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
				  <p>HTML5, CSS3, JavaScript</p>
				</div>
				<div class="flip-box-back skill-item">
				  <h3>Personaliza Frontend</h3>
				  <div 
					class="editable-content" 
					contenteditable="true" 
					@click.stop
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
				  <p>Python, SQL, APIRest</p>
				</div>
				<div class="flip-box-back skill-item">
				  <h3>Personaliza Backend</h3>
				  <div 
					class="editable-content" 
					contenteditable="true" 
					@click.stop
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
				  <p>AWS, CI/CD, GitHub Actions</p>
				</div>
				<div class="flip-box-back skill-item">
				  <h3>Personaliza DevOps</h3>
				  <div 
					class="editable-content" 
					contenteditable="true" 
					@click.stop
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
				  <p>Wordpress / Elementor, Shopify</p>
				</div>
				<div class="flip-box-back skill-item">
				  <h3>Personaliza No-Code</h3>
				  <div 
					class="editable-content" 
					contenteditable="true" 
					@click.stop
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
				  <p>SEO/SEM, Analitycs</p>
				</div>
				<div class="flip-box-back skill-item">
				  <h3>Personaliza Marketing</h3>
				  <div 
					class="editable-content" 
					contenteditable="true" 
					@click.stop
					@input="updateCardContent(5, $event)"
					v-html="cardContents[5]"
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
		  1: "🔧 Edita este texto<br><br>• Personaliza la info<br>• Usa emojis 🚀",
		  2: "🔧 Edita este texto<br><br>• Personaliza la info<br>• Usa emojis 🚀",
		  3: "🔧 Edita este texto<br><br>• Personaliza la info<br>• Usa emojis 🚀",
		  4: "🔧 Edita este texto<br><br>• Personaliza la info<br>• Usa emojis 🚀",
		  5: "🔧 Edita este texto<br><br>• Personaliza la info<br>• Usa emojis 🚀"
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
  
  