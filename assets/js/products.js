/* Aphex Lab — catálogo de produtos
   Preços e estrutura seguem o padrão observado na loja oficial. */

const PRODUCTS = [
  {
    slug: "full-body-y-6",
    category: "Full Body Trackers",
    line: "Full Body Y",
    name: "Full Body Y - LSM6DSR [6 Trackers]",
    chip: "LSM6DSR",
    trackers: 6,
    price: 1499.00,
    oldPrice: null,
    drift: "30 minutos",
    battery: "1000mAh",
    stockWarning: false,
    images: ["tracker-pair-1.png", "tracker-pair-2.png", "tracker-pair-3.png"],
    tagline: "O Sistema de Rastreamento Corporal Mais Acessível para Realidade Virtual",
    intro: "Apresentamos o Full Body Y - LSM6DSR, a solução mais econômica para quem deseja uma experiência imersiva em realidade virtual sem comprometer o orçamento. Com 6 trackers individuais, este é o nosso modelo de entrada, ideal para quem busca um ótimo custo-benefício com rastreamento essencial e simplicidade.",
    coverage: "Full Body Y - LSM6DSR proporciona uma cobertura enxuta para os principais pontos do corpo, incluindo cintura, coxas e canelas, permitindo que você se mova livremente e com precisão no ambiente virtual.",
    highlights: [
      { title: "LSM6DSR", text: "Um dos chips mais modernos dessa categoria, com ótima qualidade de tracking durante o uso e tempo de drift de até 30 minutos, garantindo uma boa experiência." },
      { title: "Acessibilidade e Economia", text: "Nosso modelo de entrada, com a melhor relação custo-benefício da linha para quem está começando no full body tracking." },
      { title: "Rastreamento Essencial", text: "Inclui 6 trackers individuais para cobrir cintura, coxas e canelas, proporcionando uma experiência VR satisfatória e precisa." },
      { title: "Suporte completo do começo ao fim", text: "Nosso suporte é referência no mercado — fazemos toda a configuração e setup para o cliente curtir seu corpo virtual sem dor de cabeça." }
    ]
  },
  {
    slug: "full-body-y-8",
    category: "Full Body Trackers",
    line: "Full Body Y",
    name: "Full Body Y - LSM6DSR [8 Trackers]",
    chip: "LSM6DSR",
    trackers: 8,
    price: 1899.00,
    oldPrice: null,
    drift: "30 minutos",
    battery: "1000mAh",
    stockWarning: true,
    images: ["tracker-pair-1.png", "tracker-pair-2.png", "tracker-pair-3.png"],
    tagline: "O Sistema de Rastreamento Corporal Mais Acessível para Realidade Virtual",
    intro: "Apresentamos o Full Body Y - LSM6DSR, a solução mais econômica para quem deseja uma experiência imersiva em realidade virtual sem comprometer o orçamento. Com 8 trackers individuais, este sistema é o nosso modelo mais vendido, ideal para quem busca um ótimo custo-benefício com rastreamento essencial e simplicidade.",
    coverage: "Full Body Y - LSM6DSR proporciona uma cobertura eficiente para os principais pontos do corpo, incluindo peito, cintura, coxas e canelas, permitindo que você se mova livremente e com precisão no ambiente virtual.",
    highlights: [
      { title: "LSM6DSR", text: "Um dos chips mais modernos dessa categoria, com ótima qualidade de tracking durante o uso e tempo de drift de até 30 minutos, garantindo uma ótima experiência." },
      { title: "Acessibilidade e Economia", text: "Excelente relação custo-benefício para rastreamento corporal completo." },
      { title: "Rastreamento Essencial", text: "Inclui 8 trackers individuais para cobrir peito, cintura, coxas e canelas, proporcionando uma experiência VR satisfatória e precisa." },
      { title: "Suporte completo do começo ao fim", text: "Nosso suporte é referência no mercado — fazemos toda a configuração e setup para o cliente curtir seu corpo virtual sem dor de cabeça." }
    ]
  },
  {
    slug: "full-body-y-10",
    category: "Full Body Trackers",
    line: "Full Body Y",
    name: "Full Body Y - LSM6DSR [10 Trackers]",
    chip: "LSM6DSR",
    trackers: 10,
    price: 2299.00,
    oldPrice: null,
    drift: "30 minutos",
    battery: "1000mAh",
    stockWarning: false,
    images: ["tracker-pair-2.png", "tracker-pair-1.png", "tracker-pair-3.png"],
    tagline: "O Sistema de Rastreamento Corporal Mais Completo da Linha Y",
    intro: "Apresentamos o Full Body Y - LSM6DSR em sua versão mais completa, com 10 trackers individuais para quem quer o máximo de cobertura do chip LSM6DSR sem migrar para a linha X. Ideal para quem já usa full body tracking e quer refinar ainda mais os pontos de captura.",
    coverage: "Full Body Y - LSM6DSR [10 Trackers] proporciona cobertura estendida, incluindo peito, cintura, coxas, canelas e pés, permitindo que você se mova livremente e com precisão no ambiente virtual.",
    highlights: [
      { title: "LSM6DSR", text: "Um dos chips mais modernos dessa categoria, com ótima qualidade de tracking durante o uso e tempo de drift de até 30 minutos, garantindo uma ótima experiência." },
      { title: "Cobertura Máxima da Linha Y", text: "10 trackers individuais cobrindo peito, cintura, coxas, canelas e pés para o setup mais completo com este chip." },
      { title: "Rastreamento Refinado", text: "Mais pontos de captura significam movimentos mais naturais e maior fidelidade no ambiente virtual." },
      { title: "Suporte completo do começo ao fim", text: "Nosso suporte é referência no mercado — fazemos toda a configuração e setup para o cliente curtir seu corpo virtual sem dor de cabeça." }
    ]
  },
  {
    slug: "full-body-x-6",
    category: "Full Body Trackers",
    line: "Full Body X",
    name: "Full Body X - ICM45686 [06 Trackers]",
    chip: "ICM45686",
    trackers: 6,
    price: 2199.00,
    oldPrice: null,
    drift: "60 minutos",
    battery: "1000mAh",
    stockWarning: false,
    images: ["tracker-pair-3.png", "tracker-pair-1.png", "tracker-pair-2.png"],
    tagline: "O Sistema de Rastreamento Corporal de Alta Precisão para Realidade Virtual",
    intro: "Apresentamos o Full Body X - ICM45686, nossa linha de alta performance para quem não abre mão de precisão. Com 6 trackers individuais, este é o ponto de entrada da linha X, entregando um salto real de qualidade de tracking em relação à linha Y.",
    coverage: "Full Body X - ICM45686 proporciona cobertura precisa para cintura, coxas e canelas, com estabilidade superior mesmo em sessões longas e movimentos rápidos.",
    highlights: [
      { title: "ICM45686", text: "Chip de última geração com maior estabilidade giroscópica e tempo de drift de até 60 minutos, o dobro da linha Y, garantindo sessões longas sem recalibração." },
      { title: "Alta Precisão", text: "Feito para quem exige o máximo de fidelidade de movimento, de dança a jogos de ritmo e produção de conteúdo." },
      { title: "Rastreamento Essencial de Alta Performance", text: "Inclui 6 trackers individuais para cobrir cintura, coxas e canelas com a melhor qualidade de captura da Aphex Lab." },
      { title: "Suporte completo do começo ao fim", text: "Nosso suporte é referência no mercado — fazemos toda a configuração e setup para o cliente curtir seu corpo virtual sem dor de cabeça." }
    ]
  },
  {
    slug: "full-body-x-8",
    category: "Full Body Trackers",
    line: "Full Body X",
    name: "Full Body X - ICM45686 [8 Trackers]",
    chip: "ICM45686",
    trackers: 8,
    price: 2899.00,
    oldPrice: null,
    drift: "60 minutos",
    battery: "1000mAh",
    stockWarning: false,
    images: ["tracker-pair-1.png", "tracker-pair-3.png", "tracker-pair-2.png"],
    tagline: "O Sistema de Rastreamento Corporal de Alta Precisão para Realidade Virtual",
    intro: "Apresentamos o Full Body X - ICM45686, nossa linha de alta performance para quem não abre mão de precisão. Com 8 trackers individuais, este é o nosso modelo mais equilibrado da linha X, indicado para a maioria dos usuários avançados.",
    coverage: "Full Body X - ICM45686 proporciona cobertura precisa para peito, cintura, coxas e canelas, com estabilidade superior mesmo em sessões longas e movimentos rápidos.",
    highlights: [
      { title: "ICM45686", text: "Chip de última geração com maior estabilidade giroscópica e tempo de drift de até 60 minutos, o dobro da linha Y, garantindo sessões longas sem recalibração." },
      { title: "Alta Precisão", text: "Feito para quem exige o máximo de fidelidade de movimento, de dança a jogos de ritmo e produção de conteúdo." },
      { title: "Rastreamento Avançado", text: "Inclui 8 trackers individuais para cobrir peito, cintura, coxas e canelas com a melhor qualidade de captura da Aphex Lab." },
      { title: "Suporte completo do começo ao fim", text: "Nosso suporte é referência no mercado — fazemos toda a configuração e setup para o cliente curtir seu corpo virtual sem dor de cabeça." }
    ]
  },
  {
    slug: "full-body-x-10",
    category: "Full Body Trackers",
    line: "Full Body X",
    name: "Full Body X - ICM45686 [10 Trackers]",
    chip: "ICM45686",
    trackers: 10,
    price: 3199.00,
    oldPrice: null,
    drift: "60 minutos",
    battery: "1000mAh",
    stockWarning: false,
    images: ["tracker-pair-2.png", "tracker-pair-3.png", "tracker-pair-1.png"],
    tagline: "O Topo de Linha do Rastreamento Corporal Aphex Lab",
    intro: "Apresentamos o Full Body X - ICM45686 em sua versão máxima, com 10 trackers individuais. É o nosso sistema mais completo e preciso, desenvolvido para quem quer o que há de mais avançado em captura de movimento para realidade virtual.",
    coverage: "Full Body X - ICM45686 [10 Trackers] proporciona a cobertura mais completa do catálogo, incluindo peito, cintura, coxas, canelas e pés, com estabilidade superior mesmo em sessões longas e movimentos rápidos.",
    highlights: [
      { title: "ICM45686", text: "Chip de última geração com maior estabilidade giroscópica e tempo de drift de até 60 minutos, o dobro da linha Y, garantindo sessões longas sem recalibração." },
      { title: "Precisão Máxima", text: "O setup mais preciso da Aphex Lab, feito para produção profissional de conteúdo, streaming e captura de movimento de alto nível." },
      { title: "Cobertura Total", text: "10 trackers individuais cobrindo peito, cintura, coxas, canelas e pés para o corpo virtual mais fiel possível." },
      { title: "Suporte completo do começo ao fim", text: "Nosso suporte é referência no mercado — fazemos toda a configuração e setup para o cliente curtir seu corpo virtual sem dor de cabeça." }
    ]
  },
  {
    slug: "mouthtracker-expressions",
    category: "Acessórios",
    line: "Mouthtracker",
    name: "Mouthtracker Expressions",
    chip: "Câmera IR dedicada",
    trackers: 1,
    price: 850.00,
    oldPrice: 1499.00,
    drift: null,
    battery: "Alimentado via headset (USB)",
    stockWarning: false,
    images: ["mouthtracker-1.png", "mouthtracker-2.png"],
    tagline: "Expressões Faciais Realistas para o Seu Avatar em VR",
    intro: "Apresentamos o Mouthtracker Expressions, o acessório que leva a sua presença em realidade virtual além do corpo: captura em tempo real os movimentos da sua boca e mandíbula para animar expressões faciais realistas no seu avatar, com encaixe direto na sua headset.",
    coverage: "Compatível com os principais headsets do mercado através de suporte de fixação rápida, o Mouthtracker Expressions se posiciona junto à boca sem atrapalhar o conforto de uso, entregando tracking facial contínuo durante toda a sessão.",
    highlights: [
      { title: "Câmera IR de Alta Frequência", text: "Sensor dedicado que captura os micromovimentos da boca e mandíbula com baixa latência, sincronizado ao seu avatar em tempo real." },
      { title: "43% de Desconto por Tempo Limitado", text: "Uma das formas mais acessíveis de adicionar expressividade facial completa ao seu avatar." },
      { title: "Instalação Rápida", text: "Suporte de encaixe universal com ajuste fino de ângulo, compatível com os principais headsets standalone do mercado." },
      { title: "Suporte completo do começo ao fim", text: "Nosso suporte é referência no mercado — fazemos toda a configuração e setup para o cliente curtir seu avatar sem dor de cabeça." }
    ]
  }
];

function formatBRL(value){
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

/* Política comercial Aphex Lab: 10% OFF à vista no Pix, 10x sem juros
   ou 12x com um acréscimo total de 3% sobre o preço cheio. */
const PIX_DISCOUNT = 0.10;
const INSTALLMENT_12X_MARKUP = 0.03;

function pixPrice(price){ return price * (1 - PIX_DISCOUNT); }
function installments10x(price){ return price / 10; }
function installments12x(price){ return (price * (1 + INSTALLMENT_12X_MARKUP)) / 12; }

function imgPath(product, file){
  return `assets/img/trackers/${file}`;
}

function getProductBySlug(slug){
  return PRODUCTS.find(p => p.slug === slug);
}

function relatedProducts(current, count){
  return PRODUCTS.filter(p => p.slug !== current.slug).slice(0, count || PRODUCTS.length - 1);
}
