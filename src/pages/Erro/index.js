import React, { Component} from 'react';
import{Link} from 'react-router-dom';


class Erro extends Component {
  render(){
    return(
         <div>
             <h1>PAGINA NÃO ENCONTRADA</h1>
             <Link href="/">Voltar para HOME!</Link>
         </div>

    )
  }
}

export default Erro;
