import './App.css';
import Form from './form';
import remote_logo from './REMOTE_LOGO_ENGLISH.png'

function App() {
  return (
    <div className="App mb-16 md:mb-64">

      <div className=' my-16 md:my-32 mx-16'>
        <img src={remote_logo} alt='remote logo' className='mx-auto md:max-w-2xl ' />
      </div>

      <Form />

    </div>
  );
}

export default App;
