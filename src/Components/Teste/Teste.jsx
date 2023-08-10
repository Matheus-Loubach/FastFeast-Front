import Asd from '../../assets/Novo.png'

const Teste = () => {
  return (
    <>
      <div className='bg-[#ccc] -rotate-[5deg] w-[100%] h-[50%] absolute -z-10 -mt-[3%]'></div>
      <div className="flex m-auto justify-center relative -top-[0px] mb-20">
        <div className="text-start w-[50%] p-[10px] pt-[5%]">
          <h1 className="text-[30px] font-bold mb-[10px]">
            Faça um teste grátis e veja os resultados
          </h1>
          <div className="">
            <div className="w-[70%] mb-[3%]">
              Com o FastFeast, você terá acesso a um sistema de delivery fácil de
              usar, projetado para tornar o processo de entrega o mais simples
              possível. A venda por delivery nunca foi tão fácil. Seus clientes
              terão acesso a visualizar todo seu cardapio e se deliciar com suas
              opções.
            </div>
          </div>
          <div className="">
            <p className="bg-[#00C767] p-[15px] rounded-lg inline-block font-medium ">Contrate Agora*</p>
          </div>
        </div>
        <div className="">
          <img className="" alt="" src={Asd} />
        </div>
      </div>
    </>
  );
};

export default Teste;
