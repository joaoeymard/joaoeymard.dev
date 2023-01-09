import ItemProject from "../../components/ItemProject";
import "./style.css";

import linkWhatsapp from "../../assets/projects/link-whatsapp.jpg";
import OcrImage from "../../assets/projects/ocrimage.jpeg";
import SecurePass from "../../assets/projects/securepass.jpeg";
import ToComBrasil from "../../assets/projects/tocombrasil.jpeg";
import Code from "../../assets/projects/code.png";

export default function Home() {
  return (
    <aside className="container px-3">
      <div className="list-projects mt-4 pb-4">
        <ItemProject
          title="Gerador Link Whatsapp"
          description="Inicie facilmente uma conversa no WhatsApp com pessoas que não estão em seus contatos."
          srcImg={linkWhatsapp}
          link="https://joaoeymard.github.io/linkwhatsapp/"
        ></ItemProject>
        <ItemProject
          title="Secure Pass"
          description="Armazene seus segredos (senhas, códigos ou credenciais) de forma segura e fácil de lembrar."
          srcImg={SecurePass}
          link="https://securepass.joaoeymard.dev/"
        ></ItemProject>
        <ItemProject
          title="OCR Image"
          description="Extraia texto de imagens apenas copiando e colando a imagem."
          srcImg={OcrImage}
          link="https://joaoeymard.github.io/ocrimage/"
        ></ItemProject>
        <ItemProject
          title="Tô com Brasil"
          description="Adicione seu nome ou sua foto em apoio ao brasil e compartilhe nas redes sociais."
          srcImg={ToComBrasil}
          link="https://joaoeymard.github.io/tocombrasil/"
        ></ItemProject>
        <ItemProject
          title="Storage"
          description="Framework que facilita a utilização do LocalStorage do navegador."
          srcImg={Code}
          link="https://github.com/joaoeymard/storage"
        ></ItemProject>
        <ItemProject
          title="MyIp"
          description="WebService que identifica e retorna como json com o IP público do dispositivo."
          srcImg={Code}
          link="https://meuip.joaoeymard.dev/api/v2/meuip"
        ></ItemProject>
        <ItemProject
          title="Base WebServer"
          description="Modelo de WebServer para criação de serviços RESTful."
          srcImg={Code}
          link="https://github.com/joaoeymard/base-webservice"
        ></ItemProject>
        <ItemProject
          title="Comandas Tech"
          description="Sistema de controle de pedidos para restaurantes e hamburguerias."
          srcImg={linkWhatsapp}
        ></ItemProject>
        <ItemProject
          title="My Utils"
          description="Minha biblioteca de funções utilitárias para JavaScript"
          srcImg={Code}
          link="https://github.com/joaoeymard/my-utils-js"
        ></ItemProject>
      </div>
    </aside>
  );
}
