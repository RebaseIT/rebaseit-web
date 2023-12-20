<template>
  <ReSectionTop>
    <div class="row px-6 py-6">
      <div class="col-8 pb-0" :class="{ 'col-12 text-center': isMobile }">
        <ReTitleGradient font-family="IBM Plex Mono" font-size="60px" font-weight="500">
          Making every
        </ReTitleGradient>
      </div>
      <div class="col-8 pt-0" :class="{ 'col-12 text-center': isMobile }">
        <ReTitleGradient font-family="IBM Plex Mono" font-size="60px" font-weight="500">
          version <span class="font-bold">better.</span>
        </ReTitleGradient>
      </div>
      <template v-if="!isMobile">
        <RePolygon height="190px" width="180px" top="340px" right="500px" />
        <RePolygon height="320px" width="300px" top="100px" right="170px" />
        <RePolygon height="85px" width="75px" top="40px" right="100px" />
        <RePolygon height="160px" width="150px" top="380px" right="0" />
      </template>
      <div class="col-6" :class="{ 'col-12 text-center': isMobile }">
        <ReTitleSpan
          black-text
          big-text
          bold
        >
          Rebase IT se especializa en software y servicios de consultoría.
          Combinamos habilidades de diseño, ingeniería y operacionales
          para dar a nuestros clientes el mejor servicio posible.
        </ReTitleSpan>
      </div>
      <div class="flex py-4" :class="{ 'justify-content-center': isMobile }">
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
        <ReTabView />
      </div>
    </div>
  </ReSectionProducts>
  <ReSectionClients>
    <ReTitleGradient class="flex justify-content-end pt-4">
      Nuestros Clientes
    </ReTitleGradient>
    <div class="flex justify-content-evenly pt-4 pb-8 gap-4" :class="{ 'flex-column align-items-center': isMobile }">
      <ReImage src="/images/clients/nineAzul.png" alt="nineAzul" max-width="158px" />
      <ReImage src="/images/clients/pillmaykenAzul.png" alt="pillmaykenAzul" max-width="374px" />
    </div>
  </ReSectionClients>
  <ReSectionWhatWeDo>
    <div class="row flex py-8">
      <div class="pr-8">
        <ReTitleGradient>
          Qué hacemos?
        </ReTitleGradient>
        <div>
          <ReTitleSpan
            black-text
            big-text
            bold
          >
            En RebaseIT nos especializamos en múltiples frentes, manteniéndonos en la vanguardia
            de la industria y ofreciendo así el más amplio abanico de soluciones para cada caso.
          </ReTitleSpan>
        </div>
      </div>
      <div class="flex justify-content-end ">
        <img
          src="/images/stuff.png"
          height="260"
        >
      </div>
    </div>
  </ReSectionWhatWeDo>
  <section class="py-8">
    <ReContactUs />
  </section>
</template>

<script setup lang="ts">
import { useViewport } from '~/composables/useViewport';

const { isMobile } = useViewport('xl');
</script>
