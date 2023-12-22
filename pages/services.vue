<template>
  <ReSectionTop>
    <div class="row flex py-6">
      <div class="col-8 px-8">
        <ReTitleGradient big-text>
          Nuestros Servicios.
        </ReTitleGradient>
        <div>
          <ReTitleSpan
            color="black"
            big-text
            bold
          >
            Rebase IT cuenta con un amplio repertorio de especialidades,
            dando así la atención más completa y la solución indicada para tus necesidades.
          </ReTitleSpan>
        </div>
      </div>

      <div class="col-4 px-8">
        <img
          alt="logo"
          src="/images/gears.png"
          height="180"
          width="200"
        >
      </div>
    </div>
  </ReSectionTop>
  <section class="py-8">
    <ReSectionServices class="p-8">
      <ReCarouselServices />
    </ReSectionServices>
  </section>
  <section class="py-8">
    <ReContactUs />
  </section>
</template>
