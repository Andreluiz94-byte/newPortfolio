const initLightMode = () => {
  document
    .querySelector('input[type="checkbox"]')
    .addEventListener("change", () => {
      document.body.classList.toggle("light-mode");
    });
};

initLightMode();

const initOpenMenu = () => {
  const menuBtn = document.querySelector("header .menu i");
  const closeBtn = document.querySelector("header .menu i:nth-child(2)");
  const menu = document.querySelector(".menuOpen");
  const header = document.querySelector("header");

  const close = () => {
    menu.classList.add("hidden");
    menuBtn.classList.remove("hidden");
    closeBtn.classList.add("hidden");
    document.body.style.overflow = "visible";
    header.classList.remove("open");
  };

  const open = () => {
    menu.classList.remove("hidden");
    menuBtn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    header.classList.add("open");
  };

  menuBtn.addEventListener("click", open);

  closeBtn.addEventListener("click", close);

  document.addEventListener("keydown", (event) =>
    event.key === "Escape" ? close() : ""
  );

  const links = document.querySelectorAll("nav a");

  links.forEach((link) => {
    link.addEventListener("click", close);
  });
};

initOpenMenu();

const initAnimationScroll = () => {
  const sections = document.querySelectorAll(".js-section");

  const windowHalfSize = window.innerHeight * 0.6;

  const animateScroll = () => {
    sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top;

      const isSectionVisible = sectionTop - windowHalfSize < 0;

      if (isSectionVisible) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  animateScroll();

  window.addEventListener("scroll", animateScroll);
};

initAnimationScroll();

// Scroll Smooth

const initScrollSmooth = () => {
  const linksInternos = document.querySelectorAll("nav a");

  linksInternos.forEach((item) => {
    const scrollToSection = (event) => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      window.scrollTo({
        top: section.offsetTop - 100,
      });
    };

    item.addEventListener("click", scrollToSection);
  });
};

initScrollSmooth();

const initTypingAnimation = () => {
  const title = document.querySelector("#sobre .banner h1");
  const span = document.querySelector("#sobre .banner span");
  const paragraph = document.querySelector("#sobre .banner p");

  const typingAnimation = (element) => {
    if (element == title) {
      element.innerHTML = "André Pinnola ";
      const textToArray = element.innerHTML.split("");
      element.innerHTML = "";

      textToArray.forEach((item, index) => {
        setTimeout(() => (element.innerHTML += item), 120 * index);
      });
    } else if (element == span) {
      element.innerHTML = "Full Stack Developer";
      const textToArray = element.innerHTML.split("");
      element.innerHTML = "";

      textToArray.forEach((item, index) => {
        setTimeout(() => (element.innerHTML += item), 150 * index);
      });
    } else {
      element.innerHTML = "Front-End | Back-end | Data | AI";
      const textToArray = element.innerHTML.split("");
      element.innerHTML = "";

      textToArray.forEach((item, index) => {
        setTimeout(() => (element.innerHTML += item), 75 * index);
      });
    }
  };

  typingAnimation(title);
  setTimeout(() => typingAnimation(span), 1600);
  setTimeout(() => typingAnimation(paragraph), 3700);
};

initTypingAnimation();

const translations = {
  en: {
    portfolio: "Portfolio",
    aboutMe: "About Me",
    aboutDescription:
      "As a Full Stack Developer, I bring an analytical mindset and a strong ability to find creative, efficient solutions. I maintain organization and adhere to best practices like Clean Code, ensuring my code is clear and understandable for team collaboration. I have a collaborative approach to teamwork and can easily explain complex technical concepts, fostering smooth communication. With experience across Frontend, Backend, databases, and system architecture, I contribute effectively to various stages of software development projects. In addition to technical skills, I have a keen eye for design, which enables me to deliver visually appealing and user-friendly interfaces. I also have experience working with agile methodologies, ensuring that projects are delivered on time and meet the necessary requirements. Over the years, I have honed my expertise in technologies such as JavaScript, React, Node.js, and C#, and I continuously seek to expand my knowledge by keeping up with the latest trends in web development. My passion for innovation and curiosity for emerging technologies drive me to take on challenging projects and provide modern, scalable solutions for my clients. Beyond development, I believe in the importance of continuous learning and self-improvement. I regularly participate in coding challenges, attend industry events, and contribute to open-source projects to stay at the forefront of technology. My diverse background and commitment to growth allow me to adapt to various project needs, whether building complex back-end systems or creating seamless front-end experiences. As a freelance programmer, I take pride in my ability to deliver high-quality solutions for clients across different industries, always striving for excellence and client satisfaction.",
    howCanIHelp: "How Can I Help You?",
    services: [
      {
        title: "Web Development",
        description: `Creating responsive and functional websites that provide an excellent user experience across all devices. I specialize in HTML, CSS, and JavaScript frameworks. This includes custom website design and development, implementation of Content Management Systems (CMS), as well as performance optimization and maintenance.`,
      },
      {
        title: "Mobile Development",
        description: `Developing mobile applications for Android and iOS using the latest technologies to ensure a seamless user experience. I create apps that are both intuitive and engaging, focusing on native and cross-platform app development, UI/UX design tailored to mobile devices, and app store submission and marketing strategies.`,
      },
      {
        title: "Backend Development",
        description: `Building robust and scalable APIs that serve as the backbone of applications. I ensure secure data handling and efficient server-side logic, including database design and management, integration with third-party services, and optimization of security and performance.`,
      },
      {
        title: "AI Systems",
        description: `Developing artificial intelligence-based solutions that enhance functionality and user interaction. I leverage machine learning and data analysis to create smart applications, including Natural Language Processing (NLP) applications, predictive analytics, and data-driven solutions, as well as the development of chatbots and virtual assistants.`,
      },
      {
        title: "SEO Optimization",
        description: `Implementing SEO practices to improve site visibility and search engine rankings. I focus on both on-page and off-page SEO strategies, such as keyword research and content optimization, link building and outreach, along with SEO audits and performance tracking.`,
      },
      {
        title: "eCommerce Development",
        description: `Creating custom online stores optimized for conversion and customer engagement. I ensure a secure and user-friendly shopping experience, including shopping cart and payment gateway integration, inventory management solutions, and custom eCommerce platform development.`,
      },
      {
        title: "User Experience (UX) Optimization",
        description: `Enhancing user experience through research, testing, and iterative design. My approach focuses on creating intuitive interfaces, including user persona development and journey mapping, usability testing and feedback integration, as well as prototyping and wireframing.`,
      },
    ],
    skills: "Skills",
    contacts: "Contacts",
  },
  es: {
    portfolio: "Portafolio",
    aboutMe: "Sobre mí",
    aboutDescription:
      "Como Desarrollador Full Stack, traigo una mentalidad analítica y una gran capacidad para encontrar soluciones creativas y eficientes. Mantengo la organización y adhiero a las mejores prácticas como el Código Limpio, asegurando que mi código sea claro y comprensible para la colaboración en equipo. Tengo un enfoque colaborativo hacia el trabajo en equipo y puedo explicar fácilmente conceptos técnicos complejos, fomentando una comunicación fluida. Con experiencia en Frontend, Backend, bases de datos y arquitectura de sistemas, contribuyo efectivamente a varias etapas de proyectos de desarrollo de software. Además de las habilidades técnicas, tengo un buen ojo para el diseño, lo que me permite ofrecer interfaces visualmente atractivas y fáciles de usar. También tengo experiencia trabajando con metodologías ágiles, asegurando que los proyectos se entreguen a tiempo y cumplan con los requisitos necesarios. A lo largo de los años, he perfeccionado mi experiencia en tecnologías como JavaScript, React, Node.js y C#, y busco continuamente ampliar mis conocimientos manteniéndome al día con las últimas tendencias en desarrollo web. Mi pasión por la innovación y curiosidad por las tecnologías emergentes me impulsan a asumir proyectos desafiantes y ofrecer soluciones modernas y escalables para mis clientes. Más allá del desarrollo, creo en la importancia del aprendizaje continuo y la auto-mejora. Participo regularmente en desafíos de codificación, asisto a eventos de la industria y contribuyo a proyectos de código abierto para mantenerme a la vanguardia de la tecnología. Mi diversa experiencia y compromiso con el crecimiento me permiten adaptarme a diversas necesidades de proyectos, ya sea construyendo sistemas de backend complejos o creando experiencias de frontend fluidas. Como programador freelance, me enorgullezco de poder ofrecer soluciones de alta calidad para clientes de diferentes industrias, siempre buscando la excelencia y la satisfacción del cliente.",
    howCanIHelp: "¿Cómo puedo ayudarte?",
    services: [
      {
        title: "Desarrollo Web",
        description: `Creación de sitios web responsivos y funcionales que brindan una excelente experiencia de usuario en todos los dispositivos. Me especializo en HTML, CSS y frameworks de JavaScript. Esto incluye diseño y desarrollo de sitios web personalizados, implementación de Sistemas de Gestión de Contenidos (CMS), así como optimización de rendimiento y mantenimiento.`,
      },
      {
        title: "Desarrollo Móvil",
        description: `Desarrollo de aplicaciones móviles para Android e iOS utilizando
    las tecnologías más recientes para garantizar una experiencia de usuario
    fluida. Creo aplicaciones tanto intuitivas como atractivas, centradas en el
    desarrollo de aplicaciones nativas y multiplataforma, diseño UI/UX adaptado
    a dispositivos móviles y estrategias de envío y marketing en la tienda de
    aplicaciones.`,
      },
      {
        title: "Desarrollo Backend",
        description: `Construcción de APIs robustas y escalables que sirven como la
    columna vertebral de las aplicaciones. Aseguro un manejo seguro de los
    datos y una lógica eficiente del lado del servidor, incluyendo el diseño y
    gestión de bases de datos, integración con servicios de terceros y
    optimización de seguridad y rendimiento.`,
      },
      {
        title: "Sistemas de IA",
        description: `Desarrollo de soluciones basadas en inteligencia artificial que
    mejoran la funcionalidad y la interacción del usuario. Aprovecho el
    aprendizaje automático y el análisis de datos para crear aplicaciones
    inteligentes, incluyendo aplicaciones de Procesamiento de Lenguaje Natural
    (PLN), análisis predictivos y soluciones basadas en datos, así como el
    desarrollo de chatbots y asistentes virtuales.`,
      },
      {
        title: "Optimización SEO",
        description: `Implementación de prácticas SEO para mejorar la visibilidad del
    sitio y el ranking en los motores de búsqueda. Me centro en estrategias de
    SEO tanto on-page como off-page, como la investigación de palabras clave y
    la optimización de contenido, la construcción de enlaces y el outreach,
    además de auditorías de SEO y seguimiento de rendimiento.`,
      },
      {
        title: "Desarrollo de eCommerce",
        description: `Creación de tiendas online personalizadas optimizadas para la conversión y el compromiso del cliente. Aseguro una experiencia de compra segura y fácil de usar, que incluye la integración de carritos de compras y pasarelas de pago, soluciones de gestión de inventarios y desarrollo de plataformas de comercio electrónico personalizadas.`,
      },
      {
        title: "Optimización de la Experiencia del Usuario (UX)",
        description: `Mejora de la experiencia del usuario mediante investigación,
    pruebas y diseño iterativo. Mi enfoque se centra en la creación de
    interfaces intuitivas, que incluyen el desarrollo de personas de usuario y
    mapeo de viajes, pruebas de usabilidad e integración de comentarios, así
    como prototipos y wireframes.`,
      },
    ],
    skills: "Habilidades",
    contacts: "Contactos",
  },
  pt: {
    portfolio: "Portfólio",
    aboutMe: "Sobre Mim",
    aboutDescription:
      "Como Desenvolvedor Full Stack, trago uma mentalidade analítica e uma forte capacidade de encontrar soluções criativas e eficientes. Mantenho a organização e adiro às melhores práticas, como o Código Limpo, garantindo que meu código seja claro e compreensível para a colaboração em equipe. Tenho uma abordagem colaborativa para o trabalho em equipe e posso explicar facilmente conceitos técnicos complexos, promovendo uma comunicação fluida. Com experiência em Frontend, Backend, bancos de dados e arquitetura de sistemas, contribuo efetivamente para várias etapas de projetos de desenvolvimento de software. Além das habilidades técnicas, tenho um bom olho para design, o que me permite oferecer interfaces visualmente atraentes e fáceis de usar. Também tenho experiência trabalhando com metodologias ágeis, garantindo que os projetos sejam entregues no prazo e atendam aos requisitos necessários. Ao longo dos anos, refinei minha experiência em tecnologias como JavaScript, React, Node.js e C#, e busco continuamente expandir meu conhecimento mantendo-me atualizado com as últimas tendências em desenvolvimento web. Minha paixão por inovação e curiosidade por tecnologias emergentes me levam a assumir projetos desafiadores e oferecer soluções modernas e escaláveis para meus clientes. Além do desenvolvimento, acredito na importância do aprendizado contínuo e da auto-melhoria. Participo regularmente de desafios de codificação, assisto a eventos da indústria e contribuo para projetos de código aberto para me manter na vanguarda da tecnologia. Minha experiência diversificada e compromisso com o crescimento me permitem adaptar-me às diversas necessidades dos projetos, seja construindo sistemas de backend complexos ou criando experiências de frontend fluidas. Como programador freelancer, orgulho-me da minha capacidade de entregar soluções de alta qualidade para clientes de diferentes indústrias, sempre buscando excelência e satisfação do cliente.",
    howCanIHelp: "Como posso ajudar você?",
    services: [
      {
        title: "Desenvolvimento Web",
        description: `Criação de sites responsivos e funcionais. Criando sites responsivos e funcionais que oferecem uma excelente experiência do usuário em todos os dispositivos. Eu me especializo em HTML, CSS e frameworks JavaScript. Isso inclui design e desenvolvimento de sites personalizados, implementação de Sistemas de Gerenciamento de Conteúdo (CMS), além de otimização de desempenho e manutenção.`,
      },
      {
        title: "Desenvolvimento Móvel",
        description: `Desenvolvendo aplicativos móveis para Android e iOS usando as
    tecnologias mais recentes para garantir uma experiência do
    usuário contínua. Eu crio aplicativos que são tanto intuitivos
    quanto envolventes, focando no desenvolvimento de aplicativos
    nativos e multiplataforma, design de UI/UX adaptado para
    dispositivos móveis e estratégias de submissão e marketing na
    loja de aplicativos.`,
      },
      {
        title: "Desenvolvimento Backend",
        description: `Construindo APIs robustas e escaláveis que servem como a
    espinha dorsal das aplicações. Eu garanto o manuseio seguro de
    dados e uma lógica eficiente do lado do servidor, incluindo
    design e gerenciamento de banco de dados, integração com serviços
    de terceiros e otimização de segurança e desempenho.`,
      },
      {
        title: "Sistemas de IA",
        description: `Desenvolvendo soluções baseadas em inteligência artificial que
    aprimoram a funcionalidade e a interação do usuário. Eu aproveito
    o aprendizado de máquina e a análise de dados para criar
    aplicativos inteligentes, incluindo aplicações de Processamento de
    Linguagem Natural (NLP), análises preditivas e soluções
    baseadas em dados, além do desenvolvimento de chatbots e
    assistentes virtuais.`,
      },
      {
        title: "Otimização SEO",
        description: `Implementando práticas de SEO para melhorar a visibilidade do
    site e o ranking nos motores de busca. Eu me concentro em
    estratégias de SEO tanto on-page quanto off-page, como pesquisa
    de palavras-chave e otimização de conteúdo, construção de links
    e outreach, além de auditorias de SEO e monitoramento de
    desempenho.`,
      },
      {
        title: "Desenvolvimento de eCommerce",
        description: `Criando lojas online personalizadas otimizadas para conversão e
    engajamento do cliente. Eu garanto uma experiência de compra
    segura e amigável, que inclui integração de carrinho de compras
    e gateway de pagamento, soluções de gerenciamento de inventário
    e desenvolvimento de plataformas de eCommerce personalizadas.`,
      },
      {
        title: "Otimização da Experiência do Usuário (UX)",
        description: `Aprimorando a experiência do usuário por meio de pesquisa de
    usuários, testes e design iterativo. Minha abordagem foca na
    criação de interfaces intuitivas, incluindo desenvolvimento de
    persona do usuário e mapeamento de jornada, testes de
    usabilidade e integração de feedback, além de prototipagem e
    wireframing.`,
      },
    ],

    skills: "Habilidades",
    contacts: "Contatos",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const englishBtn = document.getElementById("english-btn");
  const spanishBtn = document.getElementById("spanish-btn");
  const portugueseBtn = document.getElementById("portuguese-btn");

  const updateContent = (language) => {
    document.getElementById("portfolio-title").textContent =
      translations[language].portfolio;
    document.getElementById("about-title").textContent =
      translations[language].aboutMe;
    document.getElementById("about-description").textContent =
      translations[language].aboutDescription;
    document.getElementById("services-title").textContent =
      translations[language].howCanIHelp;
    document.getElementById("skills-title").textContent =
      translations[language].skills;
    document.getElementById("contacts-title").textContent =
      translations[language].contacts;

    const serviceElements = document.querySelectorAll("#services .service h3");
    const descriptionElements = document.querySelectorAll(
      "#services .service p"
    );

    translations[language].services.forEach((service, index) => {
      serviceElements[index].textContent = service.title;
      descriptionElements[index].textContent = service.description;
    });
  };

  englishBtn.addEventListener("click", () => updateContent("en"));
  spanishBtn.addEventListener("click", () => updateContent("es"));
  portugueseBtn.addEventListener("click", () => updateContent("pt"));
});
