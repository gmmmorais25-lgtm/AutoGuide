const carros = [
{
  nome: "Chevrolet Onix",
  marca: "Chevrolet",
  modelo: "LTZ",
  motor: "1.0 Turbo",
  cambio: "Automático",
  preco: "Entre R$ 80.000 e R$ 110.000",
  consumo: "13 km/l",
  imagem: "imgs/onix.png",
  categorias: ["primeiro carro", "economico"],
  descricao: "Hatch popular e econômico."
},
{
  nome: "Chevrolet Montana",
  marca: "Chevrolet",
  modelo: "Premier",
  motor: "1.2 Turbo",
  cambio: "Automático",
  preco: "Entre R$ 135.000 e R$ 170.000",
  consumo: "11 km/l",
  imagem: "imgs/montana.png",
  categorias: ["premium"],
  descricao: "Picape compacta moderna, com bom espaço e versatilidade para uso urbano e trabalho."
},
{
  nome: "Chevrolet Tracker",
  marca: "Chevrolet",
  modelo: "Premier",
  motor: "1.2 Turbo",
  cambio: "Automático",
  preco: "Entre R$ 130.000 e R$ 170.000",
  consumo: "11 km/l",
  imagem: "imgs/tracker.png",
  categorias: ["suv"],
  descricao: "SUV moderno e tecnológico."
},
{
  nome: "Chevrolet Cruze",
  marca: "Chevrolet",
  modelo: "LTZ",
  motor: "1.4 Turbo",
  cambio: "Automático",
  preco: "Entre R$ 110.000 e R$ 140.000",
  consumo: "12 km/l",
  imagem: "imgs/cruze.png",
  categorias: ["sedan", "premium"],
  descricao: "Sedan potente e confortável."
},
{
  nome: "Chevrolet Spin",
  marca: "Chevrolet",
  modelo: "LT",
  motor: "1.8",
  cambio: "Automático",
  preco: "Entre R$ 100.000 e R$ 140.000",
  consumo: "10 km/l",
  imagem: "imgs/spin.png",
  categorias: ["familia"],
  descricao: "Espaçosa, ideal para famílias."
},
  {
  nome: "Hyundai HB20",
  marca: "Hyundai",
  modelo: "Comfort",
  motor: "1.0",
  cambio: "Manual",
  preco: "Entre R$ 75.000 e R$ 95.000",
  consumo: "14 km/l",
  imagem: "imgs/hb20.png",
  categorias: ["primeiro carro", "economico"],
  descricao: "Compacto moderno."
},
{
  nome: "Hyundai Elantra",
  marca: "Hyundai",
  modelo: "GLS",
  motor: "2.0",
  cambio: "Automático",
  preco: "Entre R$ 140.000 e R$ 180.000",
  consumo: "12 km/l",
  imagem: "imgs/elantra.png",
  categorias: ["sedan", "premium"],
  descricao: "Sedan moderno com design arrojado, bom desempenho e conforto."
},
{
  nome: "Hyundai Creta",
  marca: "Hyundai",
  modelo: "Limited",
  motor: "1.0 Turbo",
  cambio: "Automático",
  preco: "Entre R$ 140.000 e R$ 180.000",
  consumo: "11 km/l",
  imagem: "imgs/creta.png",
  categorias: ["suv"],
  descricao: "SUV confortável."
},
{
  nome: "Hyundai Tucson",
  marca: "Hyundai",
  modelo: "GL",
  motor: "1.6 Turbo",
  cambio: "Automático",
  preco: "Entre R$ 160.000 e R$ 200.000",
  consumo: "10 km/l",
  imagem: "imgs/tucson.png",
  categorias: ["suv", "premium"],
  descricao: "SUV robusto."
},
{
  nome: "Hyundai Azera",
  marca: "Hyundai",
  modelo: "V6",
  motor: "3.0",
  cambio: "Automático",
  preco: "Entre R$ 180.000 e R$ 240.000",
  consumo: "9 km/l",
  imagem: "imgs/azera.png",
  categorias: ["premium"],
  descricao: "Sedan de luxo."
},
  {
  nome: "Fiat Argo",
  marca: "Fiat",
  modelo: "Drive",
  motor: "1.0",
  cambio: "Manual",
  preco: "Entre R$ 70.000 e R$ 90.000",
  consumo: "13 km/l",
  imagem: "imgs/argo.png",
  categorias: ["primeiro carro"],
  descricao: "Hatch confortável."
},
{
  nome: "Fiat Mobi",
  marca: "Fiat",
  modelo: "Like",
  motor: "1.0",
  cambio: "Manual",
  preco: "Entre R$ 60.000 e R$ 80.000",
  consumo: "15 km/l",
  imagem: "imgs/fiatmobi.png",
  categorias: ["economico"],
  descricao: "Compacto urbano."
},
{
  nome: "Fiat Pulse",
  marca: "Fiat",
  modelo: "Audace",
  motor: "1.0 Turbo",
  cambio: "Automático",
  preco: "Entre R$ 110.000 e R$ 150.000",
  consumo: "12 km/l",
  imagem: "imgs/pulse.png",
  categorias: ["suv"],
  descricao: "SUV compacto."
},
{
  nome: "Fiat Toro",
  marca: "Fiat",
  modelo: "Volcano",
  motor: "1.3 Turbo",
  cambio: "Automático",
  preco: "Entre R$ 150.000 e R$ 200.000",
  consumo: "10 km/l",
  imagem: "imgs/toro.png",
  categorias: ["premium"],
  descricao: "Picape versátil."
},
{
  nome: "Fiat Cronos",
  marca: "Fiat",
  modelo: "Drive",
  motor: "1.3",
  cambio: "Manual",
  preco: "Entre R$ 80.000 e R$ 100.000",
  consumo: "13 km/l",
  imagem: "imgs/cronos.png",
  categorias: ["sedan"],
  descricao: "Sedan econômico."
},

{
  nome: "Honda Civic",
  marca: "Honda",
  modelo: "EXL",
  motor: "2.0",
  cambio: "Automático",
  preco: "Entre R$ 200.000 e R$ 260.000",
  consumo: "12 km/l",
  imagem: "imgs/civic.png",
  categorias: ["sedan", "premium"],
  descricao: "Sedan confiável."
},
{
  nome: "Honda Fit",
  marca: "Honda",
  modelo: "LX",
  motor: "1.5",
  cambio: "Manual",
  preco: "Entre R$ 70.000 e R$ 90.000",
  consumo: "14 km/l",
  imagem: "imgs/fit.png",
  categorias: ["economico"],
  descricao: "Compacto versátil."
},
{
  nome: "Honda City",
  marca: "Honda",
  modelo: "EX",
  motor: "1.5",
  cambio: "Automático",
  preco: "Entre R$ 110.000 e R$ 150.000",
  consumo: "13 km/l",
  imagem: "imgs/city.png",
  categorias: ["sedan"],
  descricao: "Sedan confortável."
},
{
  nome: "Honda HR-V",
  marca: "Honda",
  modelo: "Touring",
  motor: "1.5 Turbo",
  cambio: "Automático",
  preco: "Entre R$ 150.000 e R$ 200.000",
  consumo: "11 km/l",
  imagem: "imgs/hrv.png",
  categorias: ["suv"],
  descricao: "SUV moderno."
},
{
  nome: "Honda WR-V",
  marca: "Honda",
  modelo: "EXL",
  motor: "1.5",
  cambio: "Automático",
  preco: "Entre R$ 110.000 e R$ 150.000",
  consumo: "12 km/l",
  imagem: "imgs/wrv.png",
  categorias: ["suv"],
  descricao: "SUV compacto."
},


{
  nome: "Ford Ka",
  marca: "Ford",
  modelo: "SE",
  motor: "1.5",
  cambio: "Manual",
  preco: "Entre R$ 55.000 e R$ 80.000",
  consumo: "12 km/l",
  imagem: "imgs/ka.png",
  categorias: ["sedan", "economico"],
  descricao: "Sedan compacto com bom espaço interno."
},
{
  nome: "Ford EcoSport",
  marca: "Ford",
  modelo: "Freestyle",
  motor: "1.5",
  cambio: "Automático",
  preco: "Entre R$ 75.000 e R$ 110.000",
  consumo: "10 km/l",
  imagem: "imgs/ecosport.png",
  categorias: ["suv"],
  descricao: "SUV compacto conhecido pela versatilidade."
},
{
  nome: "Ford Territory",
  marca: "Ford",
  modelo: "Titanium",
  motor: "1.5 Turbo",
  cambio: "Automático",
  preco: "Entre R$ 170.000 e R$ 230.000",
  consumo: "9 km/l",
  imagem: "imgs/territory.png",
  categorias: ["suv", "premium"],
  descricao: "SUV médio com conforto e tecnologia."
},
{
  nome: "Ford Ranger",
  marca: "Ford",
  modelo: "XLT",
  motor: "2.0 Turbo Diesel",
  cambio: "Automático",
  preco: "Entre R$ 220.000 e R$ 330.000",
  consumo: "10 km/l",
  imagem: "imgs/ranger.png",
  categorias: ["premium"],
  descricao: "Picape robusta para trabalho, estrada e aventura."
},

{
  nome: "Ford Mustang",
  marca: "Ford",
  modelo: "GT",
  motor: "5.0 V8",
  cambio: "Automático",
  preco: "Entre R$ 500.000 e R$ 650.000",
  consumo: "7 km/l",
  imagem: "imgs/mustang.png",
  categorias: ["premium"],
  descricao: "Esportivo icônico com motor V8, alto desempenho e design marcante."
},

{
  nome: "Jeep Renegade",
  marca: "Jeep",
  modelo: "Sport",
  motor: "1.3 Turbo",
  cambio: "Automático",
  preco: "Entre R$ 110.000 e R$ 160.000",
  consumo: "10 km/l",
  imagem: "imgs/renegade.png",
  categorias: ["suv"],
  descricao: "SUV compacto robusto, com design marcante."
},
{
  nome: "Jeep Compass",
  marca: "Jeep",
  modelo: "Longitude",
  motor: "1.3 Turbo",
  cambio: "Automático",
  preco: "Entre R$ 160.000 e R$ 240.000",
  consumo: "10 km/l",
  imagem: "imgs/compass.png",
  categorias: ["suv", "premium"],
  descricao: "SUV confortável, tecnológico e muito procurado."
},
{
  nome: "Jeep Commander",
  marca: "Jeep",
  modelo: "Limited",
  motor: "1.3 Turbo",
  cambio: "Automático",
  preco: "Entre R$ 220.000 e R$ 330.000",
  consumo: "9 km/l",
  imagem: "imgs/commander.png",
  categorias: ["suv", "premium"],
  descricao: "SUV grande, espaçoso e indicado para família."
},
{
  nome: "Jeep Wrangler",
  marca: "Jeep",
  modelo: "Sahara",
  motor: "2.0 Turbo",
  cambio: "Automático",
  preco: "Entre R$ 400.000 e R$ 550.000",
  consumo: "8 km/l",
  imagem: "imgs/wrangler.png",
  categorias: ["suv", "premium"],
  descricao: "SUV off-road clássico, voltado para aventura."
},
{
  nome: "Jeep Grand Cherokee",
  marca: "Jeep",
  modelo: "Limited",
  motor: "2.0 Híbrido",
  cambio: "Automático",
  preco: "Entre R$ 450.000 e R$ 600.000",
  consumo: "9 km/l",
  imagem: "imgs/grand-cherokee.png",
  categorias: ["suv", "premium"],
  descricao: "SUV premium com alto nível de conforto e desempenho."
},

// TOYOTA
{
  nome: "Toyota Corolla",
  marca: "Toyota",
  modelo: "XEi",
  motor: "2.0",
  cambio: "Automático",
  preco: "Entre R$ 140.000 e R$ 190.000",
  consumo: "11 km/l",
  imagem: "imgs/corolla.png",
  categorias: ["sedan", "premium"],
  descricao: "Sedan confiável, confortável e valorizado."
},
{
  nome: "Toyota Corolla Cross",
  marca: "Toyota",
  modelo: "XRE",
  motor: "2.0",
  cambio: "Automático",
  preco: "Entre R$ 160.000 e R$ 230.000",
  consumo: "10 km/l",
  imagem: "imgs/corolla-cross.png",
  categorias: ["suv", "premium"],
  descricao: "SUV confortável baseado no Corolla."
},
{
  nome: "Toyota Yaris",
  marca: "Toyota",
  modelo: "XS",
  motor: "1.5",
  cambio: "Automático",
  preco: "Entre R$ 90.000 e R$ 120.000",
  consumo: "13 km/l",
  imagem: "imgs/yaris.png",
  categorias: ["primeiro carro", "economico"],
  descricao: "Hatch econômico, confortável e confiável."
},
{
  nome: "Toyota SW4",
  marca: "Toyota",
  modelo: "SRX",
  motor: "2.8 Diesel",
  cambio: "Automático",
  preco: "Entre R$ 350.000 e R$ 450.000",
  consumo: "9 km/l",
  imagem: "imgs/sw4.png",
  categorias: ["suv", "premium"],
  descricao: "SUV grande, robusto e ideal para famílias e viagens longas."
},
{
  nome: "Toyota Hilux",
  marca: "Toyota",
  modelo: "SRX",
  motor: "2.8 Diesel",
  cambio: "Automático",
  preco: "Entre R$ 250.000 e R$ 370.000",
  consumo: "10 km/l",
  imagem: "imgs/hilux.png",
  categorias: ["premium"],
  descricao: "Picape resistente, confiável e muito valorizada."
},

// NISSAN
{
  nome: "Nissan Kicks",
  marca: "Nissan",
  modelo: "SV",
  motor: "1.6",
  cambio: "Automático",
  preco: "Entre R$ 110.000 e R$ 150.000",
  consumo: "12 km/l",
  imagem: "imgs/kicks.png",
  categorias: ["suv", "economico"],
  descricao: "SUV compacto econômico e confortável."
},
{
  nome: "Nissan Versa",
  marca: "Nissan",
  modelo: "Advance",
  motor: "1.6",
  cambio: "Automático",
  preco: "Entre R$ 100.000 e R$ 140.000",
  consumo: "12 km/l",
  imagem: "imgs/versa.png",
  categorias: ["sedan", "economico"],
  descricao: "Sedan espaçoso, econômico e moderno."
},
{
  nome: "Nissan Sentra",
  marca: "Nissan",
  modelo: "Advance",
  motor: "2.0",
  cambio: "Automático",
  preco: "Entre R$ 150.000 e R$ 190.000",
  consumo: "11 km/l",
  imagem: "imgs/sentra.png",
  categorias: ["sedan", "premium"],
  descricao: "Sedan médio com conforto e bom acabamento."
},
{
  nome: "Nissan Frontier",
  marca: "Nissan",
  modelo: "Attack",
  motor: "2.3 Diesel",
  cambio: "Automático",
  preco: "Entre R$ 220.000 e R$ 320.000",
  consumo: "10 km/l",
  imagem: "imgs/frontier.png",
  categorias: ["premium"],
  descricao: "Picape robusta para trabalho e estrada."
},
{
  nome: "Nissan March",
  marca: "Nissan",
  modelo: "SV",
  motor: "1.0",
  cambio: "Manual",
  preco: "Entre R$ 45.000 e R$ 70.000",
  consumo: "14 km/l",
  imagem: "imgs/march.png",
  categorias: ["primeiro carro", "economico"],
  descricao: "Compacto simples, econômico e fácil de dirigir."
},

// VOLKSWAGEN
{
  nome: "Volkswagen Polo",
  marca: "Volkswagen",
  modelo: "Comfortline",
  motor: "1.0 Turbo",
  cambio: "Automático",
  preco: "Entre R$ 90.000 e R$ 130.000",
  consumo: "13 km/l",
  imagem: "imgs/polo.png",
  categorias: ["primeiro carro", "economico"],
  descricao: "Hatch moderno, econômico e bem equipado."
},
{
  nome: "Volkswagen Virtus",
  marca: "Volkswagen",
  modelo: "Highline",
  motor: "1.0 Turbo",
  cambio: "Automático",
  preco: "Entre R$ 110.000 e R$ 160.000",
  consumo: "12 km/l",
  imagem: "imgs/virtus.png",
  categorias: ["sedan"],
  descricao: "Sedan espaçoso com bom desempenho."
},
{
  nome: "Volkswagen T-Cross",
  marca: "Volkswagen",
  modelo: "Comfortline",
  motor: "1.0 Turbo",
  cambio: "Automático",
  preco: "Entre R$ 130.000 e R$ 180.000",
  consumo: "11 km/l",
  imagem: "imgs/t-cross.png",
  categorias: ["suv"],
  descricao: "SUV compacto moderno e confortável."
},
{
  nome: "Volkswagen Nivus",
  marca: "Volkswagen",
  modelo: "Highline",
  motor: "1.0 Turbo",
  cambio: "Automático",
  preco: "Entre R$ 120.000 e R$ 170.000",
  consumo: "12 km/l",
  imagem: "imgs/nivus.png",
  categorias: ["suv"],
  descricao: "SUV cupê com visual moderno."
},
{
  nome: "Volkswagen Tiguan",
  marca: "Volkswagen",
  modelo: "Allspace",
  motor: "2.0 Turbo",
  cambio: "Automático",
  preco: "Entre R$ 220.000 e R$ 320.000",
  consumo: "9 km/l",
  imagem: "imgs/tiguan.png",
  categorias: ["suv", "premium"],
  descricao: "SUV premium, potente e espaçoso."
},
  {
  nome: "Renault Kwid",
  marca: "Renault",
  modelo: "Zen",
  motor: "1.0",
  cambio: "Manual",
  preco: "R$ 72.000",
  consumo: "15 km/l",
  imagem: "imgs/kwid.png",
  categorias: ["primeiro carro", "economico"],
  descricao: "Carro compacto, econômico e barato de manter, ideal para uso urbano."
},
{
  nome: "Renault Sandero",
  marca: "Renault",
  modelo: "Life",
  motor: "1.0",
  cambio: "Manual",
  preco: "R$ 80.000",
  consumo: "13 km/l",
  imagem: "imgs/sandero.png",
  categorias: ["primeiro carro", "economico"],
  descricao: "Hatch espaçoso e confortável."
},
{
  nome: "Renault Logan",
  marca: "Renault",
  modelo: "Zen",
  motor: "1.6",
  cambio: "Manual",
  preco: "R$ 85.000",
  consumo: "12 km/l",
  imagem: "imgs/logan.png",
  categorias: ["sedan", "economico"],
  descricao: "Sedan com bom espaço interno."
},
{
  nome: "Renault Duster",
  marca: "Renault",
  modelo: "Iconic",
  motor: "1.3 Turbo",
  cambio: "Automático",
  preco: "R$ 135.000",
  consumo: "10 km/l",
  imagem: "imgs/duster.png",
  categorias: ["suv"],
  descricao: "SUV robusto para estrada."
},
{
  nome: "Renault Captur",
  marca: "Renault",
  modelo: "Intense",
  motor: "1.3 Turbo",
  cambio: "Automático",
  preco: "R$ 140.000",
  consumo: "11 km/l",
  imagem: "imgs/captur.png",
  categorias: ["suv", "premium"],
  descricao: "SUV moderno com conforto."
},
];

const listaCarros = document.getElementById("listaCarros");
const busca = document.getElementById("busca");
const filtroMarca = document.getElementById("filtroMarca");
const filtroCategoria = document.getElementById("filtroCategoria");
const btnTema = document.getElementById("btnTema");

const modal = document.getElementById("modal");
const fecharModal = document.getElementById("fecharModal");
const modalImagem = document.getElementById("modalImagem");
const modalNome = document.getElementById("modalNome");
const modalDescricao = document.getElementById("modalDescricao");
const modalInfo = document.getElementById("modalInfo");

// Tradução das categorias (com acento)
const nomesCategorias = {
  economico: "Econômico",
  "primeiro carro": "Primeiro carro",
  suv: "SUV",
  sedan: "Sedan",
  premium: "Premium"
};

function mostrarCarros(lista) { // criar a lista de carros
  listaCarros.innerHTML = "";

  if (lista.length === 0) {
    listaCarros.innerHTML = "<p style='text-align:center'>Nenhum carro encontrado.</p>";
    return;
  }

  lista.forEach((carro) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${carro.imagem}" alt="${carro.nome}">
      
      <div class="card-info">
        <h3>${carro.nome}</h3>
        <p><strong>Preço:</strong> ${carro.preco}</p>
        <p><strong>Motor:</strong> ${carro.motor}</p>
        <p><strong>Consumo:</strong> ${carro.consumo}</p>

        <div class="tags">
          ${carro.categorias.map(categoria => 
            `<span>${nomesCategorias[categoria]}</span>`
          ).join("")}
        </div>

        <button class="btnDetalhes">Ver detalhes</button>
      </div>
    `;

    const btnDetalhes = card.querySelector(".btnDetalhes");

    btnDetalhes.addEventListener("click", () => {
      abrirModal(carro);
    });

    listaCarros.appendChild(card);
  });
}

function filtrarCarros() {  //filtro
  const textoBusca = busca.value.toLowerCase();
  const marcaSelecionada = filtroMarca.value;
  const categoriaSelecionada = filtroCategoria.value;

  const carrosFiltrados = carros.filter((carro) => {
    const buscaCorresponde =
      carro.nome.toLowerCase().includes(textoBusca) ||
      carro.marca.toLowerCase().includes(textoBusca);

    const marcaCorresponde =
      marcaSelecionada === "todos" || carro.marca === marcaSelecionada;

    const categoriaCorresponde =
      categoriaSelecionada === "todos" ||
      carro.categorias.includes(categoriaSelecionada);

    return buscaCorresponde && marcaCorresponde && categoriaCorresponde;
  });

  mostrarCarros(carrosFiltrados);
}

function abrirModal(carro) { // abrir o ver detalhes
  modalImagem.src = carro.imagem;
  modalImagem.alt = carro.nome;
  modalNome.textContent = carro.nome;
  modalDescricao.textContent = carro.descricao;

  modalInfo.innerHTML = `
    <li><strong>Marca:</strong> ${carro.marca}</li>
    <li><strong>Modelo:</strong> ${carro.modelo}</li>
    <li><strong>Motor:</strong> ${carro.motor}</li>
    <li><strong>Câmbio:</strong> ${carro.cambio}</li>
    <li><strong>Preço médio:</strong> ${carro.preco}</li>
    <li><strong>Consumo:</strong> ${carro.consumo}</li>
  `;

  modal.style.display = "flex";
}

// Fechar modal
fecharModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Eventos
busca.addEventListener("input", filtrarCarros);
filtroMarca.addEventListener("change", filtrarCarros);
filtroCategoria.addEventListener("change", filtrarCarros);

// Dark mode
btnTema.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btnTema.textContent = "☀️";
  } else {
    btnTema.textContent = "🌙";
  }
});

// Inicialização
mostrarCarros(carros);