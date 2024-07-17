<script setup lang="ts">
const { isSmaller: isMobile } = useViewport('lg');
const images = ref([
  {
    title: 'Servicios de Staff Augmentation',
    subtitles: [
      {
        title: 'Acceso a talento especializado',
        text: 'Contamos con un equipo de expertos en tecnologías y metodologías de desarrollo que pueden integrarse fácilmente a tu proyecto. Esto te permite acceder a habilidades especializadas sin tener que contratar personal de manera permanente.'
      },
      {
        title: 'Escalabilidad flexible',
        text: 'Podemos expandir o reducir el tamaño de tu equipo de desarrollo según tus necesidades, brindándote la flexibilidad necesaria para adaptarte a los cambios del proyecto y del mercado.'
      },
      {
        title: 'Eficiencia y Agilidad',
        text: 'Nuestros consultores se integran rápidamente a tu equipo y utilizan metodologías ágiles para acelerar el desarrollo e implementación de tus soluciones tecnológicas.'
      }
    ],
    src: '/images/services/service_7.png',
    maxWidth: '750px'
  },
  {
    title: 'Servicios de Desarrollo Frontend',
    subtitles: [
      {
        title: 'Diseño Responsive y Accesible',
        text: 'Creamos interfaces de usuario atractivas y adaptables a diferentes dispositivos, tamaños de pantalla. Diseñamos con el mindset "users first".'
      },
      {
        title: 'Experiencia de Usuario',
        text: 'Nos enfocamos en brindar una experiencia de usuario fluida y agradable. Aplicamos las mejores prácticas de UX para lograr interfaces intuitivas y fáciles de usar.'
      },
      {
        title: 'Optimización y Rendimiento',
        text: 'Optimizamos el rendimiento de nuestras soluciones frontend, asegurando una carga rápida y una experiencia satisfactoria para los usuarios.'
      }
    ],
    src: '/images/services/service_1.png',
    maxWidth: '700px'
  },
  {
    title: 'Servicios de Desarrollo Backend',
    subtitles: [
      {
        title: 'Arquitectura de Aplicaciones',
        text: 'Diseñamos soluciones backend escalables y eficientes, utilizando las últimas tecnologías y mejores prácticas. Nos encargamos de la infraestructura, la seguridad y la integración con sistemas existentes.'
      },
      {
        title: 'APIs y Microservicios',
        text: 'Desarrollamos APIs RESTful y microservicios que permiten una integración fluida entre diferentes componentes de tu sistema. Garantizamos una comunicación segura y de alto rendimiento.'
      },
      {
        title: 'Automatización y DevOps',
        text: 'Implementamos procesos de automatización y buenas prácticas DevOps para agilizar el desarrollo, despliegue y monitoreo de tus aplicaciones.'
      }
    ],
    src: '/images/services/service_2.png',
    maxWidth: '700px'
  },
  {
    title: 'Servicios de Bases de Datos',
    subtitles: [
      {
        title: 'Diseño y Arquitectura',
        text: 'Diseñamos la estructura más adecuada de tu sistema de base de datos, considerando factores como volumen de datos, escalabilidad, rendimiento y disponibilidad.'
      },
      {
        title: 'Implementación y Administración',
        text: 'Instalamos, configuramos y administramos tus bases de datos, asegurando un funcionamiento óptimo, respaldos y recuperación ante fallos.'
      },
      {
        title: 'Optimización y Rendimiento',
        text: 'Aplicamos técnicas de optimización para mejorar la velocidad de ejecución de consultas, indexación y particionamiento de datos.'
      },
      {
        title: 'Seguridad y Cumplimiento',
        text: 'Implementamos medidas de seguridad y cumplimos con los requisitos normativos aplicables a tus datos, protegiendo la integridad y confidencialidad de la información.'
      }
    ],
    src: '/images/services/service_3.png',
    maxWidth: '700px'
  },
  {
    title: 'Infraestructura y Arquitectura de Sistemas',
    subtitles: [
      {
        title: 'Planificación',
        text: 'Analizamos tus necesidades y elaboramos una estrategia de infraestructura que se adapte a tus objetivos de negocio y requisitos técnicos.'
      },
      {
        title: 'Diseño e Implementación',
        text: 'Diseñamos y desplegamos una arquitectura de sistemas robusta y escalable, utilizando tecnologías de vanguardia.'
      },
      {
        title: 'Monitoreo y Optimización',
        text: 'Implementamos soluciones de monitoreo y análisis que nos permiten tener una mayor visibilidad de la arquitectura desplegada.'
      }
    ],
    src: '/images/services/service_5.png',
    maxWidth: '750px'
  },
  {
    title: 'Herramientas de Integración',
    subtitles: [
      {
        title: 'Conectividad',
        text: 'Integramos tus sistemas y aplicaciones utilizando APIs, webhooks y otros mecanismos de comunicación. Esto permite un flujo de información sin interrupciones entre tus diferentes herramientas.'
      },
      {
        title: 'Orquestación de Flujos',
        text: 'Diseñamos flujos de trabajo optimizados que coordinan las diferentes aplicaciones y sistemas, asegurando una integración fluida y una mayor productividad.'
      },
      {
        title: 'Automatización de Procesos',
        text: 'Implementamos soluciones de automatización que eliminan tareas repetitivas y manuales, aumentando la eficiencia de tus procesos de negocio.'
      }
    ],
    src: '/images/services/service_4.png',
    maxWidth: '650px'
  },
]);
</script>

<template>
  <div class="card">
    <Carousel
      :value="images"
      :num-visible="1"
      :num-scroll="1"
      :show-indicators="false"
      class="carousel-items-position"
      circular
    >
      <template #item="slotProps">
        <div>
          <div>
            <ReTitleGradient :font-size="isMobile ? 'md' : 'xl'">
              {{ slotProps.data.title }}
            </ReTitleGradient>
          </div>
          <div
            class="row flex"
            :class="{ 'flex-column justify-center': isMobile }"
          >
            <div
              v-for="(subtitle, index) in slotProps.data.subtitles"
              :key="index"
              :class="isMobile ? 'col-12' : `col-${12/slotProps.data.subtitles.length}`"
            >
              <div class="mt-2">
                <ReTitleGradient :font-size="isMobile ? 'sm' : 'lg'">
                  {{ subtitle.title }}
                </ReTitleGradient>
              </div>
              <div class="py-2">
                <ReParagraphSpan
                  big-text
                  color="black"
                >
                  {{ subtitle.text }}
                </ReParagraphSpan>
              </div>
            </div>
          </div>
          <div class="flex py-4 px-1">
            <ReImage
              class="m-auto"
              :src="slotProps.data.src"
              :max-width="slotProps.data.maxWidth"
            />
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<style lang="scss" scoped>
.carousel-items-position { 
  &:deep(.p-carousel-item) {
    align-items: center !important;
    align-self: center !important;
  }
}
</style>