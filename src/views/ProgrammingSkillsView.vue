<template>
    <div class="experience">
      <section id="skills">
        <h2 class="section-title">Habilidades técnicas</h2>
        <div class="skills-container">
          <!-- Tarjeta 1: Frontend -->
          <div class="skill_container" @click="toggleFlip1">
            <div :class="{ flipped: flipCard1 }" class="flip-box">
              <div class="flip-box-front skill-item">
                <font-awesome-icon :icon="['fas', 'desktop']" class="skill-icon" />
                <h3>Frontend</h3>
                <p>HTML5, CSS3, JavaScript</p>
              </div>
              <div class="flip-box-back skill-item">
                <p>Atrás</p>
              </div>
            </div>
          </div>
          <!-- Tarjeta 2: Backend -->
          <div class="skill_container" @click="toggleFlip2">
            <div :class="{ flipped: flipCard2 }" class="flip-box">
              <div class="flip-box-front skill-item">
                <font-awesome-icon :icon="['fas', 'server']" class="skill-icon" />
                <h3>Backend</h3>
                <p>Python, SQL, APIRest</p>
              </div>
              <div class="flip-box-back skill-item">
                <p>Atrás</p>
              </div>
            </div>
          </div>
          <!-- Tarjeta 3: DevOps -->
          <div class="skill_container" @click="toggleFlip3">
            <div :class="{ flipped: flipCard3 }" class="flip-box">
              <div class="flip-box-front skill-item">
                <font-awesome-icon :icon="['fas', 'cloud']" class="skill-icon" />
                <h3>DevOps</h3>
                <p>AWS, CI/CD, GitHub Actions</p>
              </div>
              <div class="flip-box-back skill-item">
                <p>Atrás</p>
              </div>
            </div>
          </div>
          <!-- Tarjeta 4: No-Code Front -->
          <div class="skill_container" @click="toggleFlip4">
            <div :class="{ flipped: flipCard4 }" class="flip-box">
              <div class="flip-box-front skill-item">
                <font-awesome-icon :icon="['fas', 'magic']" class="skill-icon" />
                <h3>No-Code Front</h3>
                <p>Wordpress / Elementor, Shopify</p>
              </div>
              <div class="flip-box-back skill-item">
                <p>Atrás</p>
              </div>
            </div>
          </div>
          <!-- Tarjeta 5: Marketing Skills -->
          <div class="skill_container" @click="toggleFlip5">
            <div :class="{ flipped: flipCard5 }" class="flip-box">
              <div class="flip-box-front skill-item">
                <font-awesome-icon :icon="['fas', 'bullhorn']" class="skill-icon" />
                <h3>Marketing Skills</h3>
                <p>SEO/SEM, Analitycs</p>
              </div>
              <div class="flip-box-back skill-item">
                <p>Atrás</p>
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
        flipCard1: false,
        flipCard2: false,
        flipCard3: false,
        flipCard4: false,
        flipCard5: false
      };
    },
    methods: {
      toggleFlip1() {
        this.flipCard1 = !this.flipCard1;
      },
      toggleFlip2() {
        this.flipCard2 = !this.flipCard2;
      },
      toggleFlip3() {
        this.flipCard3 = !this.flipCard3;
      },
      toggleFlip4() {
        this.flipCard4 = !this.flipCard4;
      },
      toggleFlip5() {
        this.flipCard5 = !this.flipCard5;
      }
    }
  };
  </script>
  