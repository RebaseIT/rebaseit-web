<script setup lang="ts">
import { useViewport } from "~/composables/useViewport";

const { isSmaller: isMobile } = useViewport('xl');
const { projects } = useProjects()
const externalProjectsLogos = projects.filter(project => !project.isInternalProject).map(projectLogo => projectLogo.image)

const contact = ref<any>(null);

const scrollToSection = () => {
  contact.value.$el.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
  <Head>
    <Title>Home</Title>
  </Head>
  <ReSectionTop>
    <div class="row px-4 py-8">
      <div
        class="col-8 pb-0"
        :class="{ 'col-12 text-center': isMobile }"
      >
        <ReTitleGradient
          font-family="IBM Plex Mono"
          font-size="xl-2"
          font-weight="500"
        >
          Making every
        </ReTitleGradient>
      </div>
      <div
        class="col-8 pt-0"
        :class="{ 'col-12 text-center': isMobile }"
      >
        <ReTitleGradient
          font-family="IBM Plex Mono"
          font-size="xl-2"
          font-weight="500"
        >
          version <span class="font-bold">better</span>
        </ReTitleGradient>
      </div>
      <template v-if="!isMobile">
        <RePolygon
          height="190px"
          width="180px"
          top="375px"
          right="500px"
        />
        <RePolygon
          height="320px"
          width="300px"
          top="130px"
          right="170px"
        />
        <RePolygon
          height="85px"
          width="75px"
          top="60px"
          right="100px"
        />
        <RePolygon
          height="160px"
          width="150px"
          top="410px"
          right="0"
        />
      </template>
      <div
        :class="{ 'col-6': !isMobile, 'col-12 text-center': isMobile }"
      >
        <ReTitleSpan
          color="black"
          font-size="lg"
          font-weight="400"
        >
          En Rebase IT nos especializamos en desarrollo e implementación de SW a medida 
          y servicios de consultoría. Aprovechando nuestro amplio abanico de habilidades 
          interdisciplinarias, recurrimos a nuestra experiencia en diseño, ingeniería y 
          operaciones, para brindarles a nuestros clientes el servicio de calidad que merecen.
        </ReTitleSpan>
      </div>
      <div
        class="flex py-4"
        :class="{ 'justify-content-center': isMobile }"
      >
        <ReButton
          @click="scrollToSection"
          label="Contactanos"
        />
      </div>
    </div>
  </ReSectionTop>
  <ReSectionProducts>
    <div class="py-8 px-4">
      <ReTitleGradient>
        Nuestros Productos
      </ReTitleGradient>
      <div class="py-4">
        <ServicesTabView />
      </div>
    </div>
  </ReSectionProducts>
  <ReSectionClients>
    <div class="pb-8 px-4">
      <ReTitleGradient class="flex justify-content-end pt-4 mb-4">
        Nuestros Clientes
      </ReTitleGradient>
      <div
        class="text-center"
        :class="{ 'flex justify-content-evenly gap-4 flex-column align-items-center': isMobile }"
      >
        <ReImage
          :class="{ 'mx-5 mt-4': !isMobile }"
          v-for="externalProject in externalProjectsLogos"
          :key="externalProject.alt"
          :src="externalProject.src"
          :alt="externalProject.alt"
          :max-width="externalProject.maxWidth"
        />
      </div>
    </div>
  </ReSectionClients>
  <ReSectionWhatWeDo>
    <div
      class="row flex py-8 px-4 justify-space-between align-items-center gap-4"
      :class="{ 'flex-column justify-center': isMobile }"
    >
      <div
        :class="{ 'col-6': !isMobile, 'col-12': isMobile }"
      >
        <ReTitleGradient>
          ¿Qué hacemos?
        </ReTitleGradient>
        <div class="mt-3">
          <ReTitleSpan
            color="black"
            font-size="lg"
            font-weight="400"
          >
            En RebaseIT nos especializamos en múltiples frentes, manteniéndonos en la vanguardia
            de la industria y ofreciendo el más amplio abanico de soluciones para cada caso.
          </ReTitleSpan>
        </div>
      </div>
      <div class="flex">
        <ReImage
          src="/images/stuff.png"
          max-width="480px"
        />
      </div>
    </div>
  </ReSectionWhatWeDo>
  <ContactUs ref="contact" />
</template>
