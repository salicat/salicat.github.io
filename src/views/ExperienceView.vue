<template>
	<div class="experience">
		<div >
			<h2 class="section-title">Perfil Profesional</h2>
		</div>
		<div class="module">
			<p>
			Profesional con amplia experiencia en gestión comercial, desarrollo de negocios y soluciones digitales.  
			Con más de 22 años en el ámbito comercial, 7 años en e-commerce y marketing digital, y 13 años en entornos industriales y técnicos,  
			me destaco por mi capacidad para adaptar estrategias a distintos sectores, combinando conocimientos en ventas, tecnología y optimización de procesos.  
			</p>
			<p>
			Mi enfoque multidisciplinario me ha permitido desarrollar proyectos desde cero, incluyendo plataformas web, automatización de procesos  
			y estrategias de marketing digital, logrando aumentar la eficiencia y rentabilidad de los negocios en los que he participado.  
			</p>
			<p>
			Soy una persona con gran capacidad de aprendizaje, autonomía y resolución de problemas.  
			Disfruto enfrentar nuevos retos y optimizar procesos mediante soluciones innovadoras en el ámbito comercial y digital.  
			</p>
		</div>
		<div v-for="job in jobs" :key="job.company" class="module">
			<h3 class="job_tit">{{ job.company }}</h3>
			<p><strong>{{ job.position }}</strong> ({{ job.dates }})</p>
			<ul>
			<li v-for="task in job.tasks" :key="task">{{ task }}</li>
			</ul>
			<p><strong>Logro destacado:</strong> {{ job.achievement }}</p>
		</div>
	</div>
</template>

 <script setup lang="ts">
  const jobs = [
    {
      company: "COVALTEC SAS",
      position: "Director Comercial - Propietario Único",
      dates: "Ene 2020 - Actualidad (remoto)",
      tasks: [
        "Dirigí los equipos técnicos y comerciales en tareas de mantenimiento preventivo, venta consultiva y reparación de maquinaria.",
        "Incrementé significativamente las ventas mediante la importación de nuevos componentes y monitoreo de fallos."
      ],
      achievement: "Fundé Covaltec tras vender mi empresa anterior, a solicitud de mis clientes."
    },
    {
      company: "PRECISION PLASMA DE CORTE CNC",
      position: "Fundador & Director General",
      dates: "Ago 2011 - Dic 2019",
      tasks: [
        "Lideré el desarrollo, comercialización y operación de sistemas plasma CNC.",
        "Gestioné el diseño, montaje y parametrización de equipos.",
        "Manejé la relación comercial con clientes (Colombia) y proveedores (China)."
      ],
      achievement: "La empresa fue rentable y se vendió en 2019, sigue operando con éxito."
    },
	{
      company: "CONSULTOR FINANCIERO - JUNIOR TRADER",
      position: "Freelancer",
      dates:"2003 - 2010",
      tasks: [
        "De manera autonoma gestioné créditos de consumo, comerciales, hipotecarios y de hehiculos",
        "Fui Trader - Consultor comercial de la mesa de valores de Confinval S.A.S. (2008)",
        "Mis ingresos se multiplicaron dado que dominé todos los campos ofreciendo asesoria integral, algo que ninguna entidad financiera podria ofrecer"
      ],
      achievement: "Crecí por demanda de mis servicios de tal manera que antes de terminar el primer año no tuve que ofrecer a nadie, si no que por el contrario me contactaban nuevos clientes referidos a diario."
    },
	{
      company: "CITIBANK",
      position: "Relationship Sales Executive",
      dates:"2002 - 2003",
      tasks: [
        "Venta de productos de banca personal, compra de cartera y seguros",
        "Atender citas concertadas por el equipo de telemarketing",
        "Consecucion por medios propios de bases de datos y clientes nuevos"
      ],
      achievement: "No obstante que solo estuve en la entidad por cerca de 10 meses, fuí 3 meses el mejor asesor de mi grupo y permanentemente entre el top 3"
    },
	{
      company: "LLOYD'S TSB BANK",
      position: "Asesor comercial externo",
      dates:"2001 - 2001",
      tasks: [
        "Venta de productos de banca personal, creditos de consulo, tarjetas de credito y credito rotativo.",
        "Telemercadeo de bases propias y manejo de mi agenda.",
		"Mi primer empleo."
      ],
      achievement: "Ingresé sin ningun conocimiento sobre finanzas ni sobre los productos del banco y logré consolidad mis estrategias comerciales e ingresos, me retire por una mejor oferta aunque mis ingresos eran bastante buenos para la epoca y para mi edad en el momento."
    }
  ];
  </script>
  
  