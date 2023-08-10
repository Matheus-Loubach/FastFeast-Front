import React from 'react'
import * as F from './Style' 
import Facebook from '../../assets/facebook.svg'
import Twitter from '../../assets/twitter.svg'
import Instagram from '../../assets/insta.svg'

const Footer = () => {
  return (
    <F.Footer>
        <F.Wrapper>
            <h1 className='font-bold'>Categorias</h1>
            <ul>
                <li><a href=''>Catálogo Produtos</a></li>
                <li><a href=''>Restaurantes</a></li>
                <li><a href=''>Descontos e Ofertas</a></li>
            </ul>
        </F.Wrapper>

        <F.Wrapper>
            <h1 className='font-bold'>Atalhos</h1>
            <ul>
                <li><a href=''>Venda Conosco</a></li>
                <li><a href=''>Dúvidas</a></li>
                <li><a href=''>Ouvidoria</a></li>
                <li><a href=''>Contatos</a></li>
                <li><a href=''>Estabelecimentos</a></li>
            </ul>
        </F.Wrapper>

        <F.Wrapper>
            <h1 className='font-bold'>Sobre</h1>
            <ul>
                <li><a href=''>Blog</a></li>
                <li><a href=''>Termos e Condições</a></li>
                <li><a href=''>Tratamento de dados</a></li>
                <li><a href=''>Políticas de privacidade</a></li>
                <li><a href=''>Contato</a></li>
            </ul>
        </F.Wrapper>

        <div className='flex justify-between mt-[40px] mb-[15px] w-[100vw]'>
            <div className='flex gap-[20px] float-right'>
                <a href=""><img src={Facebook} alt="" /></a>
                <a href=""><img src={Twitter} alt="" /></a>
                <a href=""><img src={Instagram} alt="" /></a>
            </div>
            <h1 className='text-[#353535]'>© 2023 FastFeast Inc. Todos os direitos reservados.</h1>
        </div>
    </F.Footer>
  )
}

export default Footer