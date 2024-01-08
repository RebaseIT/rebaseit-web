<script setup lang="ts">
import { useViewport } from '~/composables/useViewport';

const { isSmaller: isMobile } = useViewport('lg');
const { isGreaterOrEqual: showPolygon } = useViewport('xl');

const title = 'Somos RebaseIT.';
const subtitle = 'Conectamos a cada uno de nuestros clientes con la solución más adecuada para sus necesidades, garantizando siempre calidad y rentabilidad.';
const image = {
  src: '/images/id.png',
  alt: 'id-image',
  maxWidth: '400px'
};

const teamOptions = [
  {
    name: 'Juan Cueli',
    image: '/images/team/juan-cueli.png',
    alt: 'juan-cueli',
    class: 'space-layout-sm'
  },
  {
    name: 'Ezequiel Díaz',
    image: '/images/team/ezequiel-diaz.png',
    alt: 'ezequiel-diaz',
    class: 'space-layout-md'
  },
  {
    name: 'Rodrigo Díaz',
    image: '/images/team/rodrigo-diaz.png',
    alt: 'rodrigo-diaz',
    class: 'space-layout-lg'
  },
  {
    name: 'Martín Urteaga',
    image: '/images/team/martin-urteaga.png',
    alt: 'martin-urteaga',
    class: 'space-layout-md'
  },
  {
    name: 'Jorge Covello',
    image: '/images/team/jorge-covello.png',
    alt: 'jorge-covello',
    class: 'space-layout-smspace-layout-md'
  }
];

const sectionOptions = [
  {
    title: 'Misión',
    description: 'Conectar a cada uno de nuestros clientes con la solución mas adecuada para sus necesidades, garantizando la calidad y rentabilidad de las mismas.',
    image: {
      src: '/images/puzzle.png',
      alt: 'puzzle-image',
      maxWidth: '262px'
    }
  },
  {
    title: 'Visión',
    description: 'Convertirnos en una empresa lider del mercado de software a medida, asegurando la calidad en cada uno de nuestros proyectos.',
    image: {
      src: '/images/brujula.png',
      alt: 'brujula-image',
      maxWidth: '210px'
    }
  }
]
</script>

<template>
  <SectionImage
    class="pt-8"
    :title="title"
    :subtitle="subtitle"
    :image="image"
  />
  <ReSectionContainer background="/images/background/background-2.png">
    <div class="flex flex-column py-8 px-6">
      <ReTitleGradient
        class="align-self-center"
      >
        Nuestra Historia
      </ReTitleGradient>
      <div class="p-gradient-card mt-4">
        <div
          class="p-gradient-card-content relative"
          :class="{ 'p-container-min-h': showPolygon }"
        >
          <div
            :class="showPolygon ?  'col-6' : 'col-12'"
          >
            <ReTitleSpan
              color="black"
              font-weight="400"
            >
              <!-- TODO: update about us history -->
              Lorem ipsum dolor sit amet. Ex fugiat dolores non omnis sequi qui velit quisquam aut sequi tempore et suscipit labore aut vitae enim qui atque vitae. Qui vero quaerat quo recusandae fugit non commodi laboriosam.
              Eos voluptas voluptatem sit recusandae ullam ea voluptatum similique qui dolor amet ex dolor ratione. Vel exercitationem iure ut natus porro ut vitae laborum ut voluptas accusantium. Aut vitae perspiciatis in molestiae voluptas in dolorum explicabo rem omnis consequuntur id neque enim.
              A natus officiis quo quisquam nihil est sapiente adipisci aut odit soluta 33 voluptas labore et culpa voluptatem ut culpa magni! Ut omnis similique eum accusamus exercitationem est internos fugit. Aut commodi sequi hic accusantium alias et similique optio non voluptas nemo.
            </ReTitleSpan>
          </div>
          <template v-if="showPolygon">
            <RePolygon
              height="115px"
              width="100px"
              top="200px"
              right="420px"
            />
            <RePolygon
              height="150px"
              width="130px"
              top="370px"
              right="300px"
            />
            <RePolygon
              height="210px"
              width="185px"
              top="30px"
              right="180px"
            />
            <RePolygon
              height="255px"
              width="225px"
              top="230px"
              right="-20px"
            />
          </template>
        </div>
      </div>
    </div>
  </ReSectionContainer>
  <ReSectionContainer background="/images/background/background-2.png">
    <div
      class="flex flex-column pb-8 px-2"
      :class="{ 'px-6': isMobile }"
    >
      <ReTitleGradient class="align-self-center">
        Conocé a nuestro equipo
      </ReTitleGradient>
      <div
        class="flex flex-row flex-wrap justify-content-center gap-4 xl:gap-8"
        :class="{ 'mt-6': isMobile }"
      >
        <div
          class="flex flex-column align-items-center w-fit"
          v-for="(member, index) in teamOptions"
          :key="`member-${index}`"
        >
          <ReImage
            :alt="member.alt"
            :src="member.image"
            width="178px"
            height="205px"
            :class="isMobile ? 'mt-0' : member.class"
          />
          <ReTitleSpan
            class="primary mt-3 font-semibold"
            text-transform="uppercase"
          >
            {{ member.name }}
          </ReTitleSpan>
        </div>
      </div>
    </div>
  </ReSectionContainer>
  <OurValues />
  <ReSectionContainer background="/images/background/background-2.png">
    <div
      class="flex p-6 gap-8 justify-space-between"
      :class="{ 'flex-column': isMobile }"
    >
      <div
        class="p-gradient-card"
        v-for="(section, index) in sectionOptions"
        :key="`section-${index}`"
      >
        <div class="p-gradient-card-content-hovered flex flex-column justify-center align-items-center">
          <ReTitleGradient class="align-self-center">
            {{ section.title }}
          </ReTitleGradient>
          <ReTitleSpan
            class="my-4"
            color="black"
          >
            {{ section.description }}
          </ReTitleSpan>
          <ReImage
            :alt="section.image.alt"
            :src="section.image.src"
            :max-width="section.image.maxWidth"
          />
        </div>
      </div>
    </div>
  </ReSectionContainer>
  <ContactUs />
</template>
