export default () => {
  const projects = [
    {
      content: 'Realizamos el proceso de configuración del sistema de administración digital de iluminación LED de nuestro cliente Nine Shopping, para que puedan celebrar las fiestas de la mejor manera.',
      image: {
        src: "/images/clients/nineAzul.png",
        alt: "nineAzul",
        maxWidth: "120px",
      },
      route: 'https://www.linkedin.com/posts/rebase-it_tech-sales-project-activity-7002987786941181952-cAVt',
      isInternalProject: false
    },
    {
      content: null,
      image: {
        src:"/images/clients/pillmaykenAzul.png",
        alt: "pillmaykenAzul",
        maxWidth: "270px",
      },
      route: '',
      isInternalProject: false
    },
    {
      content: null,
      image: {
        src:"/images/clients/integratedSolutionsAzul.png",
        alt: "integratedSolutionsAzul",
        maxWidth: "315px",
      },
      route: '',
      isInternalProject: false
    },
    {
      content: null,
      image: {
        src:"/images/clients/redDeFarmaciasAzul.png",
        alt: "redDeFarmaciasAzul",
        maxWidth: "300px",
      },
      route: '',
      isInternalProject: false
    },
    {
      content: null,
      image: {
        src:"/images/clients/grupoSimpliAzul.png",
        alt: "grupoSimpliAzul",
        maxWidth: "250px",
      },
      route: '',
      isInternalProject: false
    },
    {
      content: '¿Alguna vez te han hackeado o has sufrido intentos de hackeo en tu organización?<br><br><b>Sherlock</b> centraliza y automatiza las tareas de respuesta a incidentes, permitiendo a tus analistas de ciberseguridad actuar de manera más rápida y eficiente. Asegurá tu tranquilidad con la protección avanzada que sólo <b>Sherlock</b> puede ofrecer.',
      image: {
        src: '/images/logo_sherlock_deg.png',
        maxWidth: '290px'
      },
      imageContent: {
        src: '/images/sherlock_img.png'
      },
      route: 'https://www.linkedin.com/posts/rebase-it_security-information-incidentresponse-activity-6994309011672068096-uj3V',
      isInternalProject: true
    },
    {
      content: 'El proceso de contratación y la gestión de datos de un gran volumen de candidatos puede ser caótico y confuso.<br><br><b>Rebase Connect</b> es una aplicación de análisis de datos diseñada específicamente para reclutadores. Con nuestra solución podrás estandarizar la información, realizar un seguimiento de las búsquedas y generar indicadores de métricas clave.',
      image: {
        src: '/images/reconnect.png',
        maxWidth: '290px'
      },
      imageContent: {
        src: '/images/sherlock_2_img.png'
      },
      route: 'https://www.linkedin.com/company/rebase-it/',
      isInternalProject: true
    }
  ]
  return {
    projects
  }
}