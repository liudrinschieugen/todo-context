import TodoContent from './components/TodoContent/TodoContent';
import { Header } from './components/Header/Header';
import Title from './components/Title/Title';
import { ModalProvider } from './context/modal-context';

function App() {
  return (
    <div className='container'>
      <Title>Todo list</Title>
      <div className='wrapper'>
        <ModalProvider>
          <Header />
          <TodoContent />
        </ModalProvider>
      </div>
    </div>
  );
}

export default App;
