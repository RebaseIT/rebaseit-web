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
        maxWidth: "250px",
      },
      route: '',
      isInternalProject: false
    },
    {
      content: null,
      image: {
        src:"/images/clients/integratedSolutionsAzul.png",
        alt: "integratedSolutionsAzul",
        maxWidth: "250px",
      },
      route: '',
      isInternalProject: false
    },
    {
      content: null,
      image: {
        src:"/images/clients/redDeFarmaciasAzul.png",
        alt: "redDeFarmaciasAzul",
        maxWidth: "250px",
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
      content: '¿Alguna vez te hackearon o intentaron hackear a alguien de tu organización? Cuando se trata de ciberseguridad, podés optar por <b>Sherlock</b>: una solución que centraliza y automatiza las tareas de respuesta a incidentes realizadas por los analistas de ciberseguridad.',
      image: {
        src: '/images/logo_sherlock_deg.png',
        maxWidth: '290px'
      },
      imageContent: {
        src: '/images/sherlock_img.jpg'
      },
      route: 'https://www.linkedin.com/posts/rebase-it_security-information-incidentresponse-activity-6994309011672068096-uj3V',
      isInternalProject: true
    },
    {
      content: '<b>Rebase Connect</b> es una aplicación de análisis de datos dedicada a los contratadores, encargándose de la <b>estandarización</b> de información, <b>seguimiento</b> de búsquedas, e <b>indicadores</b> de métricas.',
      image: {
        src: '/images/reconnect.png',
        maxWidth: '290px'
      },
      imageContent: {
        src: '/images/sherlock_2_img.jpg'
      },
      route: 'https://www.linkedin.com/company/rebase-it/',
      isInternalProject: true
    }
  ]
  return {
    projects
  }
}