import '@fortawesome/fontawesome-free/css/all.css';
import Image from 'next/image';
import camisa from '../../../assets/blusamasc.jpg'
import calcao from '../../../assets/shortmas.jpg'
import relogio from '../../../assets/relogio.jpg'
import sapato from '../../../assets/sapatomas.jpg'
import gravata from '../../../assets/gravata.jpg'
import calca from '../../../assets/calcamas.jpg'
import cinto from '../../../assets/cinto.jpg'
import blusamangacumprida from '../../../assets/blusacumprida.jpg'
import chinelo from '../../../assets/chinelomas.jpg'


const Masculino = () => {
  // Array de produtos
  const produtos = [
    { id: 1, nome: "Camisa Masculina", preco: 299.99, info: "O mais vendido", imagem: camisa },
    { id: 2, nome: "Short Masculino", preco: 109.99, imagem: calcao , button: ""},
    { id: 3, nome: "Bone adidas", preco: 89.99, info: "Se sinta linda!", imagem: relogio},
    { id: 4, nome: "Sapato mocasim", preco: 99.99, imagem: sapato, button: "" },
    { id: 5, nome: "Gravata", preco: 108.99, imagem: gravata, button: "" },
    { id: 6, nome: "Calça Formal", preco: 89.99, imagem: calca , button: ""},
    { id: 7, nome: "Cinto Marrom", preco: 39.99, imagem: cinto, button: "" },
    { id: 8, nome: "Camisa manga cumprida", preco: 59.99, imagem: blusamangacumprida, button: "" },
    { id: 9, nome: "Chinelo", preco: 75.99, imagem: chinelo , button: "" },
    
  ];

  return (
    <div className="container mx-auto mt-8 mb-10">
      <div className="grid grid-cols-4 gap-20">
   <div className="col-span-1 bg-white p-6 shadow-lg rounded-lg"> 
   <h1 class="text-lg font-bold mb-4">Ordenar Por</h1>
        <div class="relative">
            <select name="sort" id="sort" class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="relevancy">Mais relevantes</option>
                <option value="price_asc">Preço - Baixo para Alto</option>
                <option value="price_desc">Preço - Alto para Baixo</option>
                <option value="rating_desc">Avaliação - Alta para Baixa</option>
            </select>
            </div>
    <h2 className="text-xl font-bold text-gray-800 mb-4 mt-10">Filtros</h2> 
    <div className="mb-6"> 
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Marcas</h3> 
      <div className="flex flex-wrap gap-2"> 
        {['Nike', 'Adidas', 'Tommy', 'Calvinklein', 'Vans', 'NBA', 'Rider', 'Jonh John', 'Polo', 'Rolex', 'Cartier','Diesel'].map((marca) => (
          <button
            key={marca}
            className="py-2 px-4 border rounded-full text-gray-700 hover:bg-gray-200"
          >
            {marca}
          </button>
        ))}
      </div>
    </div>
    <div className="mb-10"> 
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Preços</h3> 
      <input
        type="range"
        min="0"
        max="100"
        className="w-full accent-green-500" 
      />
      <p className="text-gray-600 mt-2">Até R$ 1000</p> 
    </div>
    <div> 
      <h3 className="text-lg font-semibold text-gray-700 mb-2">Estilos</h3> 
      <div className="flex flex-wrap gap-2"> 
        {['Calçados', 'Camisas', 'Formal', 'Bones', 'Calças', 'Acessorios', 'Shorts' ].map((estilo) => (
          <button
            key={estilo}
            className="py-2 px-4 border rounded-full text-gray-600 hover:bg-gray-200" 
          >
            {estilo}
          </button>
        ))}
      </div>
    </div>
  </div>
  <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 ">
          
          {produtos.map((produto) => (
            <div key={produto.id} className="bg-white p-4 shadow-md">
              <div className="w-full h-60 relative">
                <Image
                  src={produto.imagem}
                  alt={produto.nome}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold mt-5">{produto.nome}</h2>
              <p className="text-gray-600">Preço: R$ {produto.preco.toFixed(2)}</p>
              <p className="text-gray-600"> {produto.info}</p>
              <button className='rounded-full border border-gray-300 p-2' ><i class="fa-solid fa-cart-shopping text-red-500 hover:text-green-500"></i></button>
            </div>
          ))}
        </div>
      </div>
  </div>
  );
};

export default Masculino;

//onClick={() => addProductInCart(produto.id)}


