import { Container } from "./styles";
import { useState } from "react";

import { List } from "./List";

const info = [
  {
    nome: "Kratos",
    img: "https://sm.ign.com/ign_br/gallery/e/every-char/every-character-in-god-of-war-ragnarok_pcms.jpg",
    descricao:
      "Nascido na cidade-estado grega de Esparta, Kratos é o filho semideus de Zeus e uma mulher mortal chamada Calisto, embora ele não saiba quem é seu pai durante a maior parte de sua vida. Hera ordenou a execução de Kratos no dia em que ele nasceu, mas o Rei dos Deuses se apiedou da criança e se recusou, deixando-o em Esparta para ser criado por Calisto.Como todos os outros jovens espartanos, Kratos foi monitorado e treinado para o combate pelas autoridades espartanas desde pequeno; Aqueles que eram julgados adequados, ficavam para serem treinados como guerreiros espartanos. ",
  },
  {
    nome: "Brok",
    img: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2021/09/10/god-of-war-ragnarok-brok.jpg",
    descricao:
      "Brok e Sindri são anões ferreiros, que se tornaram mestres na arte de criação de equipamentos de metal. Eles foram responsáveis por forjar o Machado Leviatã, de Kratos, e a Mjölnir, o temido martelo de Thor.O papel da dupla deve ser o mesmo do reboot de 2018, oferecendo atualizações e itens para Kratos e Atreus. Além de servirem como um bom alívio cômico para a história. Os personagens contam com as vozes originais de Robert Craighead e Adam Harrington mais uma vez. Na dublagem brasileira, Mauro Castro é Brok e Marcelo Salsicha é Sindri.",
  },
  {
    nome: "Freya",
    img: "https://jovemnerd.com.br/wp-content/uploads/2022/06/imagem_2022_06_29_193907759__6n7e9y-760x991.png",
    descricao:
      "Ao lado de Thor, Freya é a outra vilã de Ragnarok. Ela foi introduzida no primeiro jogo e teve um papel importante na trama. Agora, a personagem está em busca de vingança contra Kratos pela morte de Baldur, seu filho. Ela é uma guerreira que sabe lutar e usar a arte da magia dos Vanir, um clã de deuses poderosos. Danielle Bisutti retorna como a voz original de Freya, e Beatriz Villa dubla a deusa na versão brasileira.",
  },
  {
    nome: "Angrboda",
    img: "https://cdn.ome.lt/YQCG0_TC-genZ6iQ3lANTLLoNrg=/770x0/smart/uploads/conteudo/fotos/angrboda_god_of_war.jpg",
    descricao:
      "Angrboda é uma jovem da raça Jotun, ou seja, é uma das poucas Gigantes que ainda estão vivas. Em Ragnarok, ela será um interesse amoroso de Atreus. A atriz Laya de Leon Hayes, de A Casa de Raven, será a voz original da garota. No entanto, ainda não foi revelado um nome para a dublagem em português.",
  },
  {
    nome: "Týr",
    img: "https://jovemnerd.com.br/wp-content/uploads/2022/06/imagem_2022_06_29_194346688__j5z02l-760x991.png",
    descricao:
      "Týr é o deus da guerra da mitologia nórdica e filho de Odin. Ao contrário da sua família, ele não apoiou o extermínio dos Gigantes e tentou firmar um selo de paz com o clã Jotun. No entanto, acabou sendo aprisionado pelo próprio pai. Ainda não se sabe o papel do personagem na história, mas o primeiro trailer já mostrou um encontro do deus com Kratos e Atreus. Será que uma possível aliança vem aí ? O ator Ben Prendergast, da série animada Star Wars: A Resistência, será a voz original do personagem. Um nome para a dublagem nacional ainda não foi revelado.",
  },
  {
    nome: "Atreus",
    img: "https://jovemnerd.com.br/wp-content/uploads/2022/06/imagem_2022_06_29_193730106__ygm7803-760x950.png",
    descricao:
      "Atreus é filho de Kratos e Faye, uma Gigante da raça Jotun, e está em busca de entender quem ele é e o que a linhagem da mãe significa para seu futuro. Mais uma vez, ele será um personagem companheiro no novo jogo, oferecendo flechas e invocações mágicas como ajuda no combate. Assim como Judge, o ator Sunny Suljic retorna como a voz original de Atreus. E Lipe Volpato dubla o garoto na versão brasileira.",
  },
  {
    nome: "Sindri",
    img: "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2021/09/10/god-of-war-ragnarok-sindri.jpg",
    descricao:
      "Brok e Sindri são anões ferreiros, que se tornaram mestres na arte de criação de equipamentos de metal. Eles foram responsáveis por forjar o Machado Leviatã, de Kratos, e a Mjölnir, o temido martelo de Thor.O papel da dupla deve ser o mesmo do reboot de 2018, oferecendo atualizações e itens para Kratos e Atreus. Além de servirem como um bom alívio cômico para a história. Os personagens contam com as vozes originais de Robert Craighead e Adam Harrington mais uma vez. Na dublagem brasileira, Mauro Castro é Brok e Marcelo Salsicha é Sindri.",
  },
  {
    nome: "Thor",
    img: "https://jovemnerd.com.br/wp-content/uploads/2022/06/imagem_2022_06_29_194129262__26zoaw03-760x950.png",
    descricao:
      "Um dos personagens inéditos e mais esperados pelos fãs, Thor é o deus do trovão e filho de Odin, sendo responsável pelo quase extermínio dos Gigantes nos Nove Reinos. Com o poderoso martelo Mjölnir, ele será um dos principais vilões da história por estar em busca de vingança contra Kratos pela morte de seus filhos, Magni e Modi. O ator Ryan Hurst, da série Sons of Anarchy, faz a voz original de Thor. Enquanto Gabriel Noya é responsável pela dublagem em português brasileiro.",
  },
  {
    nome: "Durlin",
    img: "https://i.pinimg.com/originals/c2/fb/c0/c2fbc0a73eb95ae8808e53c2c597ff39.png",
    descricao:
      "Durlin é um dos primeiros anões criados pelos deuses. Ele tem um irmão chamado Motsognir, que ainda não teve sua participação confirmada. Ainda não sabemos quais seus objetivos em Ragnarok, mas o personagem apareceu ao lado de Brok e Sindri no primeiro trailer, com um polvo roxo (possivelmente um animal de estimação) nos ombros.",
  },
  {
    nome: "Odin",
    img: "https://i.pinimg.com/736x/98/b8/a6/98b8a6626b47e27c8b37ed79e1f0c946.jpg",
    descricao:
      "Odin é outro personagem muito aguardado pelos fãs, mas que ainda não teve seu visual revelado. Ele é um dos deuses mais poderosos da mitologia nórdica, sendo rei de Asgard, pai de Thor e líder dos clãs Aesir e Vanir. Pouco se sabe sobre o papel dele em Ragnarok, mas Kratos e Atreus foram avisados por Mimir no primeiro jogo que o deus é um tirano paranoico e inteligente, que quer controlar tudo nos Nove Reinos.",
  },
];

const Lista = info.map((c) => <List key={c} info={c} />);

const Personagens = () => {
  return <Container>{Lista}</Container>;
};

export default Personagens;
