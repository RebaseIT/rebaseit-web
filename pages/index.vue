<script setup lang="ts">
import { useViewport } from "~/composables/useViewport";

const { isSmaller: isMobile } = useViewport('xl');
</script>

<template>
  <ReSectionTop>
    <div class="row px-6 py-8">
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
          version <span class="font-bold">better.</span>
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
          Rebase IT se especializa en software y servicios de consultoría.
          Combinamos habilidades de diseño, ingeniería y operacionales
          para dar a nuestros clientes el mejor servicio posible.
        </ReTitleSpan>
      </div>
      <div
        class="flex py-4"
        :class="{ 'justify-content-center': isMobile }"
      >
        <ReButton label="Contactanos" />
      </div>
    </div>
  </ReSectionTop>
  <ReSectionProducts>
    <div class="py-8 px-6">
      <ReTitleGradient>
        Nuestros Productos
      </ReTitleGradient>
      <div class="py-4">
        <ServicesTabView />
      </div>
    </div>
  </ReSectionProducts>
  <ReSectionClients>
    <ReTitleGradient class="flex justify-content-end pt-4">
      Nuestros Clientes
    </ReTitleGradient>
    <div
      class="flex justify-content-evenly pt-4 pb-8 gap-4"
      :class="{ 'flex-column align-items-center': isMobile }"
    >
      <ReImage
        src="/images/clients/nineAzul.png"
        alt="nineAzul"
        max-width="158px"
      />
      <ReImage
        src="/images/clients/pillmaykenAzul.png"
        alt="pillmaykenAzul"
        max-width="374px"
      />
    </div>
  </ReSectionClients>
  <ReSectionWhatWeDo>
    <div
      class="row flex py-8 px-6 justify-space-between align-items-center gap-4"
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
            de la industria y ofreciendo así el más amplio abanico de soluciones para cada caso.
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
  <ContactUs />
</template>
