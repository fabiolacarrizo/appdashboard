import './NavBar.css'
import logoddtae from '../../Assets/Img/logoddtae.png'

const NavBar= ()=>{
    return(   
       <header>
   <div className='cart-logo-titulo' > <img className='logo-img'src={logoddtae}></img>
     <h1 className='titulo-nav'>DASHBOARD</h1>
   </div>
     
    <div className='card-button'>
   <button className='button-nav'>Ordenes de Compra</button>
   <button className='button-nav'>Agregar Productos</button>
 </div>     

   
       </header>
    )
}

export default NavBar