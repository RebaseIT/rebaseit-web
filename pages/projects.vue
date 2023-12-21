<template>
  <ReSectionTop>
    <div class="row flex py-6">
      <div class="col-8 px-8">
        <ReTitleGradient big-text>
          Nuestros Proyectos.
        </ReTitleGradient>
        <div>
          <ReTitleSpan
            color="var(--black)"
            big-text
            bold
          >
            Desde Rebase IT, acompañamos a nuestros clientes en todo el ciclo de vida del proyecto,
            brindándoles soluciones superadoras y ajustadas a sus necesidades particulares.
          </ReTitleSpan>
        </div>
      </div>

      <div class="col-4 px-8">
        <img
          alt="logo"
          src="/images/folder.png"
          height="140"
          width="200"
        >
      </div>
    </div>
  </ReSectionTop>
  <section class="flex py-4 justify-content-center">
    <div
      class="col-8"
    >
      <ReCarouselProjects />
    </div>
  </section>

  <section class="py-8">
    <ReContactUs />
  </section>
</template>
