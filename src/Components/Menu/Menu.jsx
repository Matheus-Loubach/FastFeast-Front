import logo from  '../../assets/LogoFastFeast.png'

const Menu = () => {
  return (
    <div>
        <header >
            <nav className='flex justify-center	justify-around bg-[#FF0000] items-center	'>
            <img className='w-[180px]' src={logo} alt="logo"/>
            <p>Localização</p>
            <input className= 'rounded-md	w-[35%] p-[8px]' type="text" placeholder="Buscar por produto ou estabelecimento" />
            <p> <span>Acessar</span> / <span>Cadastrar-se</span> </p>
            </nav>
        </header>
    </div>
  )
}

export default Menu