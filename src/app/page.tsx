"use client";

import React, { useState } from 'react';
import Image from 'next/image';


const testimonials = [
  {
    text: "Lucas é um apaixonado por história e cultura. Ele cresceu em Lisboa, Portugal, e desde jovem sempre teve uma curiosidade insaciável sobre as histórias por trás dos monumentos e ruas de sua cidade. Ele decidiu transformar sua paixão em profissão e agora é um guia turístico certificado, especializado em passeios históricos por Lisboa.",
    name: "Lucas Silva",
    role: "Guia turistico",
    image: "/face1.jpg"
  },
  {
    text: "Ravi cresceu em Jaipur, Índia, cercado pela rica herança cultural e pelos majestosos palácios e fortes do Rajastão. Ele se formou em Turismo e Hotelaria e decidiu seguir carreira como guia turístico para compartilhar a beleza de sua terra natal com o mundo. Ravi é especialista em passeios culturais e arquitetônicos",
    name: "Ravi Patel",
    role: "Guia turistico",
    image: "/face2.jpg",
  },
  {
    text: " Miguel nasceu em Cusco, Peru, e desde pequeno esteve cercado pelas maravilhas da civilização inca. Ele seguiu os passos de seu avô, que também era guia turístico, e hoje é um dos guias mais respeitados da região. Miguel oferece excursões ao Machu Picchu e ao Vale Sagrado, combinando seu conhecimento arqueológico com histórias pessoais transmitidas por gerações.",
    name: "Miguel Romero",
    role: "Guia turistico",
    image: "/face3.jpg",
  },
  {
    text: "Sofia é uma guia turística de Florença, Itália, com uma paixão especial pelas artes e a arquitetura renascentista. Ela estudou História da Arte na Universidade de Florença e agora leva turistas em passeios pelos museus e galerias de arte da cidade, como a Galeria Uffizi e a Academia. Sofia é conhecida por sua capacidade de explicar conceitos artísticos complexos.",
    name: "Sofia Moretti",
    role: "Guia turistico",
    image: "/face4.jpg",
  },
];

const insights = [
  [
    {
      title: "Tailândia - Parque Histórico de Ayutthaya, localizado a cerca de 80 km ao norte de Bangkok",
      image: "/1.jpg",
      views: "Destinos mais procurados",
    },
    {
      title: "Rio de Janeiro - O Cristo Redentor, uma das Sete Maravilhas do Mundo Moderno",
      image: "/2.jpg",
      views: "Destinos mais procurados",
    },
    {
      title: "Torre Eiffel na França: o país mais visitado do planeta",
      image: "/3.jpg",
      views: "Destinos mais procurados",
    },
    {
      title: "Portugal - A Gruta de Benagil só é acessível pelo mar, o que torna a visita ainda mais especial.",
      image: "/4.jpg",
      views: "Destinos mais procurados",
    },
    {
      title: "Filipinas - Boracay é um destino turístico popular e é conhecida por sua vida noturna vibrante e diversas atividades aquáticas",
      image: "/5.jpg",
      views: "Destinos mais procurados",
    },
    {
      title: "Butão - O Mosteiro do Ninho do Tigre (Paro Taktsang) é um dos locais mais sagrados do Butão. ",
      image: "/6.jpg",
      views: "Destinos mais procurados",
    },
    {
      title: "Veneza - Veneza é conhecida por seus canais, arquitetura histórica e festivais culturais. A cidade é composta por 118 pequenas ilhas ",
      image: "/7.jpg",
      views: "Destinos mais procurados",
    },
    {
      title: "Tailândia - As Ilhas Phi Phi são um arquipélago no Mar de Andaman, na Tailândia. ",
      image: "/8.jpg",
      views: "Destinos mais procurados",
    },
    {
      title: "Itália - O Coliseu, também conhecido como Anfiteatro Flaviano, é um dos marcos mais icônicos de Roma e um símbolo do Império Romano",
      image: "/9.jpg",
      views: "Destinos mais procurados",
    },

  ],

];

const BlogPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="min-h-screen bg-white text-black">
<section
  className="relative text-center py-16 px-8 h-96 bg-cover bg-center"
  style={{ backgroundImage: "url('https://e1.pxfuel.com/desktop-wallpaper/958/449/desktop-wallpaper-maldives.jpg')" }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="relative z-10">
    <h2 className="text-3xl font-bold mb-8 text-white">Qual será seu próximo destino?</h2>
    <p className="mb-8 text-white">Pesquise qual será sua próxima aventura e se surpreenda com nossos destinos</p>
    <form className="max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Digite seu Destino"
        className="w-full p-4 mb-4 border rounded"
      />
      <button type="submit" className="w-full p-4 bg-blue-600 text-white rounded">
        Pesquisar
      </button>
    </form>
  </div>
</section>




      <section className="py-16 px-8 text-center ">
        <h2 className="max-w-2xl mx-auto text-center text-4xl font-semibold md:text-5xl ">Destinos mais procurados</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 mx-auto max-w-screen-xl lg:grid-cols-3 gap-5  ">
          {insights[currentPage].map((insight, index) => (
            <div key={index} className="bg-white rounded-2xl p-16 flex flex-col items-center text-center text-xl font-semibold transition-transform transform hover:scale-105 border-2 border-blue-500">
              <img src={insight.image} alt={insight.title} className="w-full h-60 object-cover mb-6 rounded" />
              <h3 className="text-2xl font-bold mb-4">{insight.title}</h3>
              <p className="text-gray-500 text-lg">{insight.views}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center space-x-2">
          {insights.map((_, pageIndex) => (
            <button
              key={pageIndex}
              className={`w-5 h-5 rounded-full ${pageIndex === currentPage ? 'bg-gray-800' : 'bg-gray-500'}`}
              onClick={() => handlePageChange(pageIndex)}
            ></button>
          ))}
        </div>
        <h2 className="mt-16 max-w-2xl mx-auto text-center text-4xl font-semibold md:text-5xl">Veja alguns de nossos Guias</h2>
        <div className="rounded-2xl container mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-0 justify-center max-w-screen-lg mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg mx-auto border-2 border-blue-600" style={{ minWidth: '300px', maxWidth: '400px', minHeight: '300px' }}>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div className="flex items-center">
                <Image src={testimonial.image} alt={testimonial.name} className="rounded-full mr-4" width={48} height={48} />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4 lg:px-35 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0">
          <div className="lg:w-1/3 text-center lg:text-left">
            <span className="text-3xl font-extrabold bg-white bg-clip-text text-transparent">
              Turismo Walk
            </span>
            <p>Torne momentos maravilhosos inesqueciveis com a Turismo Walk, escolha seu próximo destino e embarque nessa viagem conosco para uma das melhores sensações da vida</p>
          </div>
          <div className="flex flex-col lg:flex-row w-full lg:w-2/3 lg:justify-end text-center lg:text-left space-y-8 lg:space-y-0 gap-20">
            <div>
              <h3 className="text-xl font-bold mb-4">Produto</h3>
              <ul>
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Viagens</a></li>
                <li><a href="#" className="hover:underline">Guias</a></li>
                <li><a href="#" className="hover:underline">Destinos</a></li>
                <li><a href="#" className="hover:underline">Central de ajuda</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Empresa</h3>
              <ul>
                <li><a href="#" className="hover:underline">Blog</a></li>
                <li><a href="#" className="hover:underline">Contato</a></li>
                <li><a href="#" className="hover:underline">Termos de uso</a></li>
                <li><a href="#" className="hover:underline">Política de privacidade</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Redes sociais</h3>
              <ul className="flex justify-center lg:justify-start space-x-4">
                <li><a href="#" className="hover:underline"><img src="/instagram.png" alt="Instagram" className="w-6 h-6" /></a></li>
                <li><a href="#" className="hover:underline"><img src="/youtube.png" alt="YouTube" className="w-6 h-6" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 lg:px-35 text-center lg:text-left mt-8 border-t border-gray-700 pt-4 flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 lg:mb-0">
            <img src="/logo3.jpg" alt="4Hero's members logo" className="w-6 h-6" />
            <p>©2024 Turismo Walk </p>
          </div>
          <p className="text-sm">Made in Brazil with <span className="text-red-500">❤️</span></p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
