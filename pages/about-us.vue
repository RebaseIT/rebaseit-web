<script setup lang="ts">
import { useViewport } from '~/composables/useViewport';

const { isSmaller: isMobile } = useViewport('lg');
const { isGreaterOrEqual: showPolygon } = useViewport('xl');

const title = 'Somos RebaseIT';
const subtitle = 'Nuestro equipo formado por profesionales dedicados y experimentados, combina talento, experiencia y creatividad para encontrar la solución perfecta para cada cliente.';
const image = {
  src: '/images/id.png',
  alt: 'id-image',
  maxWidth: '400px'
};

const teamOptions = [
  {
    name: 'Juan Cueli',
    role: 'Experto en aseguramiento de calidad',
    image: '/images/team/juan.png',
    alt: 'juan',
  },
  {
    name: 'Ezequiel Díaz',
    role: 'Experto en lógicas de negocio complejas',
    image: '/images/team/ezequiel.png',
    alt: 'ezequiel',
  },
  {
    name: 'Rodrigo Díaz',
    role: 'Especialista en dirección de equipos tecnológicos',
    image: '/images/team/rodrigo.png',
    alt: 'rodrigo',
  },
  {
    name: 'Martín Urteaga',
    role: 'Experto en ciberseguridad',
    image: '/images/team/martin.png',
    alt: 'martin'
  },
  {
    name: 'Jorge Covello',
    role: 'Especialista en infraestructura Cloud',
    image: '/images/team/jorge.png',
    alt: 'jorge'
  },
  {
    name: 'Martín Lejman',
    role: 'Especialista en arquitectura de sistemas escalables',
    image: '/images/team/martinL.png',
    alt: 'martinL'
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

const polygons = [
  {
    height: '115px',
    width: '100px',
    top: '250px',
    right: '420px',
  },
  {
    height: '150px',
    width: '130px',
    top: '420px',
    right: '300px',
  },
  {
    height: '210px',
    width: '185px',
    top: '80px',
    right: '180px',
  },
  {
    height: '255px',
    width: '225px',
    top: '280px',
    right: '-20px',
  },
  {
    height: '170px',
    width: '150px',
    top: '600px',
    right: '100px',
  },
  {
    height: '100px',
    width: '90px',
    top: '700px',
    right: '350px',
  },
  {
    height: '90px',
    width: '80px',
    top: '840px',
    right: '250px',
  }
]
</script>

<template>
  <Head>
    <Title>Nosotros</Title>
  </Head>
  <SectionImage
    class="pt-8"
    :title="title"
    :subtitle="subtitle"
    :image="image"
  />
  <ReSectionContainer background="/images/background/background-2.png">
    <div class="flex flex-column py-8 px-4">
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
            :class="showPolygon ? 'col-6' : 'col-12'"
          >
            <ReTitleSpan
              color="black"
              font-weight="400"
            >
              Rebase IT es el resultado del encuentro de cinco ingenieros en sistemas que se conocieron y se graduaron de la Universidad Tecnológica Nacional Regional Buenos Aires. Compartiendo una pasión por la tecnología y la innovación, decidimos unirnos para crear un impacto significativo en el mundo del desarrollo de software.
              <br
                v-for="index in 2"
                :key="`${index}-id`"
              >
              Uno de los hitos fundamentales en nuestra historia fue la participación en el CONAIISI (Congreso Nacional de Ingeniería Informática y Sistemas de Información). En este contexto, nuestro proyecto, Sherlock, destacó al ser seleccionado como una de las siete soluciones académicas más prometedoras en Argentina. Este reconocimiento nos impulsó a continuar nuestro camino juntos y sentó las bases para la creación de Rebase IT.
              <br
                v-for="index in 2"
                :key="`${index}-alt`"
              >
              <div class="text-center">
                <ReImage
                  src="/images/sherlock-conaiisi.jpeg"
                  alt="sherlock-conaiisi"
                  max-width="500px"
                />
              </div>
              <br>
              Nuestro propósito es claro: promover y ayudar a distintas compañías a hacer realidad sus ideas y productos a través de soluciones innovadoras y tecnológicas. En Rebase IT, nos dedicamos a ofrecer servicios de consultoría y desarrollo de software a medida, siempre comprometidos con la excelencia y la satisfacción del cliente.
            </ReTitleSpan>
          </div>
          <template v-if="showPolygon">
            <RePolygon
              v-for="(item, index) in polygons"
              :key="index"
              :height="item.height"
              :width="item.width"
              :top="item.top"
              :right="item.right"
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
      <ReTitleGradient class="align-self-center mb-4">
        Conocé a nuestro equipo
      </ReTitleGradient>
      <div
        class="flex flex-row flex-wrap justify-content-center gap-4 xl:gap-4"
        :class="{ 'mt-6': isMobile }"
      >
        <div
          class="flex flex-column align-items-center w-fit"
          :class="{ 'mx-8': !isMobile }"
          v-for="(member, index) in teamOptions"
          :key="`member-${index}`"
        >
          <ReImage
            :alt="member.alt"
            :src="member.image"
            width="150px"
            height="242px"
            :class="isMobile ? 'mt-0' : 'mt-4'"
          />
          <div class="d-flex hex-width text-center mt-4">
            <div>
              <ReTitleSpan
                class="primary mt-3 font-semibold"
                text-transform="uppercase"
              >
                {{ member.name }}
              </ReTitleSpan>
            </div>
            <div class="mt-2">
              <ReParagraphSpan>
                {{ member.role }}
              </ReParagraphSpan>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ReSectionContainer>
  <OurValues />
  <ReSectionContainer background="/images/background/background-2.png">
    <div
      class="flex p-4 gap-8 justify-space-between"
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

<style scoped>
.hex-width {
  max-width: 150px;
}
</style>