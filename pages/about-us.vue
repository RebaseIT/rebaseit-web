<script setup lang="ts">
import { useViewport } from '~/composables/useViewport';
const { isMobile } = useViewport('xl');

const title = 'Somos RebaseIT.';
const subtitle = 'Conectamos a cada uno de nuestros clientes con la solución más adecuada para sus necesidades, garantizando siempre calidad y rentabilidad.';
const image = {
  src: 'images/id.png',
  alt: 'id-image',
  maxWidth: '400px'
};
const sectionTop = { title, subtitle, image };

const teamOptions = [
    {
      name: 'Juan Cueli',
      image: 'images/team/juan-cueli.png',
      alt: 'juan-cueli',
      mt: '80px'
    },
    {
      name: 'Ezequiel Díaz',
      image: 'images/team/ezequiel-diaz.png',
      alt: 'ezequiel-diaz',
      mt: '160px'
    },
    {
      name: 'Rodrigo Díaz',
      image: 'images/team/rodrigo-diaz.png',
      alt: 'rodrigo-diaz',
      mt: '240px'
    },
    {
      name: 'Martín Urteaga',
      image: 'images/team/martin-urteaga.png',
      alt: 'martin-urteaga',
      mt: '160px'
    },
    {
      name: 'Jorge Covello',
      image: 'images/team/jorge-covello.png',
      alt: 'jorge-covello',
      mt: '80px'
    }
]
</script>

<template>
  <ReSectionImage class="pt-8" v-bind="sectionTop" />
  <ReSectionContainer image="url(images/section_products_bg.png)">
    <div class="flex flex-column py-8 px-6">
      <ReTitleGradient class="align-self-center">
        Nuestra Historia
      </ReTitleGradient>
      <div class="p-gradient-card mt-4">
        <div class="p-gradient-card-content relative" :class="{ 'p-container-min-h': !isMobile }">
          <div class="col-6" :class="{ 'col-12': isMobile }">
            <ReTitleSpan
                color="black"
                bold
            >
              <!-- TODO: update about us history -->
              Lorem ipsum dolor sit amet. Ex fugiat dolores non omnis sequi qui velit quisquam aut sequi tempore et suscipit labore aut vitae enim qui atque vitae. Qui vero quaerat quo recusandae fugit non commodi laboriosam.
              Eos voluptas voluptatem sit recusandae ullam ea voluptatum similique qui dolor amet ex dolor ratione. Vel exercitationem iure ut natus porro ut vitae laborum ut voluptas accusantium. Aut vitae perspiciatis in molestiae voluptas in dolorum explicabo rem omnis consequuntur id neque enim.
              A natus officiis quo quisquam nihil est sapiente adipisci aut odit soluta 33 voluptas labore et culpa voluptatem ut culpa magni! Ut omnis similique eum accusamus exercitationem est internos fugit. Aut commodi sequi hic accusantium alias et similique optio non voluptas nemo.            </ReTitleSpan>
          </div>
          <template v-if="!isMobile">
            <RePolygon height="115px" width="100px" top="200px" right="420px" />
            <RePolygon height="150px" width="130px" top="370px" right="300px" />
            <RePolygon height="210px" width="185px" top="30px" right="180px" />
            <RePolygon height="255px" width="225px" top="230px" right="-20px" />
          </template>
        </div>
      </div>
    </div>
  </ReSectionContainer>
  <ReSectionContainer image="url(images/section_products_bg.png)">
    <div class="flex flex-column py-8 px-2" :class="{ 'px-6': isMobile }">
      <ReTitleGradient class="align-self-center">
        Conocé a nuestro equipo
      </ReTitleGradient>
      <div class="flex flex-row flex-wrap justify-content-center gap-4 xl:gap-8" :class="{ 'mt-6': isMobile }">
        <div class="flex flex-column align-items-center w-fit" v-for="member in teamOptions">
          <ReImage
            :alt="member.alt"
            :src="member.image"
            width="178px"
            height="205px"
            :style="`margin-top: ${ !isMobile ? member.mt : 0 }`"
          />
          <ReTitleSpan
              class="mt-3"
              color="var(--primary-color)"
              text-transform="uppercase"
              bold
          >
            {{ member.name }}
          </ReTitleSpan>
        </div>
      </div>
    </div>
  </ReSectionContainer>
</template>
