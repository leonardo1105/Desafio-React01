import React,{Component} from 'react'
import apple from "./images/Red_Apple.jpg"

class App extends Component{
  state={
    nome:'Leonardo Nunes Marques',
    idade:20,
    comidaFavorita:'Picadinho',
    musica:['Shy Away','Mic Drop','Dancing in my room']
  }

  render(){
    return(
      <div>
        <h1>{this.state.nome}</h1>
        <h2>Tenho {this.state.idade} anos</h2>
        <h3>Minha comida favorita é {this.state.comidaFavorita}</h3>
        <h4>Minhas músicas favoritas são:</h4>
        <ul>
          <li>{this.state.musica[0]}</li>
          <li>{this.state.musica[1]}</li>
          <li>{this.state.musica[2]}</li>
        </ul>
        <img src={apple} alt='Foto de maçã'/>
      </div>
    )
  }
}

export default App