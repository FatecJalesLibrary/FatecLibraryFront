import Landing from "./Landing";
import Navbar from "components/Navbar";
import Services from "./Services";
import AboutUs from "./AboutUs/AboutUs";
import ai from "assets/static/landing/ai.svg";
import dev from "assets/static/landing/dev.svg";
import analytics from "assets/static/landing/analytics.svg";
import services from "assets/static/landing/services.svg";
import Clientes from "./Clientes";
import Depoimentos from "./Depoimentos";

const HomePage = ({on_top}) => {
  const landing_data = [
    {
      title: "Aqui você encontra <a href='test'>Promoções e ofertas especiais</a>",
      text: "Oferecer promoções e ofertas especiais pode ajudar a atrair novos clientes e incentivar os compradores a voltarem a comprar de sua livraria.",
      image: ai,
      glowColor: "rgba(217,60,101,0.7)",
    },
    {
      title: "Aqui você encontra <a href='test'>Experiência de compra fácil</a>",
      text: "Uma experiência de compra fácil e sem complicações, desde a seleção do livro até o pagamento, é crucial para garantir que os clientes voltem a comprar de sua livraria.",
      image: dev,
      glowColor: "rgba(187,59,219,0.8)",
    },
    {
      title: "Aqui você encontra <a href='test'>Avaliações e recomendações</a>",
      text: "A inclusão de avaliações e recomendações de clientes pode ajudar a fornecer informações adicionais aos compradores e aumentar a confiança na decisão de compra.",
      image: analytics,
      glowColor: "rgba(95, 126, 204, 1)",
    },
    {
      title: "E também <a href='test'>Acesso a informações sobre eventos futuros</a>",
      image: services,
      glowColor: "rgba(227, 89, 89,255)",
    },
  ];

  return (
    <>
      <Landing {...{landing_data, on_top}} />
      <AboutUs />
      <Services {...{landing_data}} />
      <Clientes />
      <Depoimentos />
      {/* clientes + depoimentos (mesma secao) sem o texto do depoimentos */}
    </>
  );
}

export default HomePage;