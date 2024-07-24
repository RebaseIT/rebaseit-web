export default () => {
  const projects = [
    {
      content: 'products.nineContent',
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
      content: 'products.trackAndTraceContent',
      image: {
        src: '/images/logo-track-and-trace.png',
        maxWidth: '290px'
      },
      imageContent: {
        src: '/images/track-and-trace-img.png'
      },
      route: 'https://www.linkedin.com/posts/rebase-it_security-information-incidentresponse-activity-6994309011672068096-uj3V',
      isInternalProject: true
    },
    {
      content: 'products.sherlockContent',
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
      content: 'products.reconnectContent',
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