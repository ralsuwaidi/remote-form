import './App.css';
import Form from './form';
import remote_logo from './REMOTE_LOGO_ENGLISH.png'

function App() {
  return (
    <div className="App mb-16 md:mb-64">

      <div className=' my-16 md:my-32 mx-auto md:scale-100 scale-75'>
        <img src={remote_logo} alt='remote logo' className='mx-auto' />
      </div>

      <Form />

    </div>
  );
}

export default App;
