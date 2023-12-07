<template>
  <ReSectionTop>
    <div class="row px-6 py-6">
      <div class="col-6">
        <ReTitleGradient big-text>
          Making every
        </ReTitleGradient>
      </div>
      <div class="col-6">
        <ReTitleGradient big-text>
          version better.
        </ReTitleGradient>
      </div>
      <div class="col-6">
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
      <div class="col-2 py-4">
        <ReButton label="Contactanos" />
      </div>
    </div>
  </ReSectionTop>
  <ReSectionProducts>
    <div class="py-8">
      <ReTitleGradient class="flex">
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
    <div class="row flex justify-content-evenly pt-4 pb-8">
      <img
        src="/images/clients/nineAzul.png"  
        height="70"
      >
    
      <img
        src="/images/clients/pillmaykenAzul.png"
        height="70"
      >
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

