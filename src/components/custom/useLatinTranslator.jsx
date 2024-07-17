import { useState, useEffect } from 'react';

const useLatinTranslator = (text, translateToLatin) => {
  const latinTranslations = {
    
  // OurStory
  "Duffee, nuestra historia:": "Duffee, nostra fabula:",
  "Fundada en 1922 por un grupo de programadores apasionados por el café, Duffee nació con la misión de ofrecer café de alta calidad en un entorno donde las personas puedan relajarse, trabajar y socializar. La cafetería ha crecido gracias a su compromiso con la excelencia y su enfoque en la comunidad local. Duffee en un refugio digital para trabajadores remotos y freelancers, haciendo que la misión de la cafetería de ser un lugar para trabajar, socializar y relajarse sea más relevante que nunca.":
    "Fundata anno 1922 a grege programmatorum coffeam amantium, Duffee nata est cum missione offerendi coffeam summae qualitatis in ambitu ubi homines possunt relaxare, laborare, et socializare. Café crevit gratia suae excellentiae et communitatis localis curae. Duffee in refugio digitali pro operariis remotis et freelanceribus, faciens missionem café esse locum ad laborandum, socializandum, et relaxandum magis relevans quam umquam.",
  
  // AppCarousel
  "¡Bienvenidos!": "Grata!",
  "Iniciar sesión": "Log in",
  "Visite nuestro menú": "Visitare nostrum menu",
  "Menú": "Menu",
  "¡Descubre la mejor selección de cafés y delicias en Duffee! Visítanos hoy y vive una experiencia única.":
    "Invenire optimum delectu capulus et delectamentum in Duffee! Visitare hodie et unique experientia vivere.",
  
  // Owners
  "Nicolas Cataldi": "Nicolas Cataldi",
  "Valentina Garrido": "Valentina Garrido",
  "Manuel Cecarelli": "Manuel Cecarelli",
  "Nicolas Cataldi, un amante del café y un programador de profesión, siempre soñó con un lugar donde la tecnología y la tradición del café se encontraran. Nieto de uno de los fundadores originales de Duffee, decidio honrar ese legado y continuar con el negocio familiar, Nicolas estudió tanto programación, como técnicas avanzadas para preparar café.":
    "Nicolas Cataldi, coffeam amans et programmator professione, semper somniavit de loco ubi technologia et traditio capulus convenirent. Nepos unius ex conditoribus originalibus Duffee, statuit honorare illud legatum et negotium familiare continuare. Nicolas studuit tam programmata quam artes avanzatas ad coffeam praeparandam.",
  "Valentina Garrido se unió a Duffee con una pasión innata por el café y una vasta experiencia en gestión de empresas. Habiendo trabajado en varias startups tecnológicas, Valentina aportó un enfoque fresco y dinámico a la operación de Duffee. Su visión de Duffee es un lugar donde las ideas florecen y las amistades se forman, todo mientras se disfruta de una taza de café excepcional.":
    "Valentina Garrido se univit Duffee cum innata passione pro coffea et vasta experientia in administratione negotiorum. Operata in variis startups technologicis, Valentina attulit novum et dynamicum accessum ad operationem Duffee. Eius visio Duffee est locus ubi ideae florent et amicitiae formantur, omnia dum fruuntur poculo eximiae coffeae.",
  "Manuel Cecarelli, un experto en redes y seguridad informática, siempre encontró en el café su fuente de inspiración y concentración. Conocido entre sus colegas como el 'hacker del café', Manuel veía en cada taza una oportunidad para descifrar nuevos desafíos. Se unió a Duffee atraído por su historia y su enfoque comunitario.":
    "Manuel Cecarelli, peritus in retibus et securitate informatica, semper invenit in coffea fontem inspirationis et concentrationis. Notus inter collegas suos ut 'hacker capulus', Manuel vidit in omni poculo opportunitatem ad novos provocationes decifrandos. Se univit Duffee attractus eius historia et communitatis cura.",

  };

  return translateToLatin ? latinTranslations[text] || text : text;
};

export default useLatinTranslator;
