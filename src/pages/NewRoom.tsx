import { Link } from 'react-router-dom'


import IllustrationImg from '../Assets/images/illustration.svg';
import logoImg from '../Assets/images/logo.svg';


import '../styles/auth.scss';
import { Button } from '../Components/Button';


export function NewRoom() {
    return (
        <div id="page-auth">
            <aside>
                <img src={IllustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie Salas de Q&amp;A ao- vivo</strong>
                <p>Tire suas duvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala </h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala "
                        />
                        <Button type='submit'>
                            Criar sala
                        </Button>

                    </form>
                    <h3>Quer entrar em uma sala existente <Link to="/"> clique aqui</Link>
                    </h3>

                </div>
            </main>
        </div>
    )
}