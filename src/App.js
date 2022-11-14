import { useState } from 'react';
import './App.css';

function App() {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckbox = type === 'checkbox';

    /* para as caixas de checkbox */
    const data = formValues[name] || {};
      if (isCheckbox) {
        data[value] = checked;
      }

    const newValue = (isCheckbox) ? data : value;
    console.log('*** handleInputChange', data);
    setFormValues({ ...formValues, [name]: newValue })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    console.log('*** handleSubmit', data);
  };

  console.log('*** formValues', formValues);
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='name' placeholder='name' onChange={handleInputChange} value={formValues.name || ''}  />
      <input type="text" name='email' placeholder='email' onChange={handleInputChange} value={formValues.email || ''} />

      <select name="language" onChange={handleInputChange} value={formValues.language || ''}>
        <option value="Javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="ruby">Ruby</option>
      </select>

      <div className="radios">
        <label>
        <input type="radio" value="cafe" name="drink" onChange={handleInputChange} checked={formValues.drink === 'cafe'} /> Café
        </label>
        <label>
        <input type="radio" value="cha" name="drink" onChange={handleInputChange} checked={formValues.drink === 'cha'} /> Chá
        </label>
      </div>

      <div className="checks">
        <label>
          <input type="checkbox" name="social" value="twitch" onChange={handleInputChange} />Twitch
        </label>
        <label>
          <input type="checkbox" name="social" value="facebook" onChange={handleInputChange} />Facebook
        </label>
        <label>
          <input type="checkbox" name="social" value="linkedin" onChange={handleInputChange} />Linkedin
        </label>
      </div>

      <textarea name="bio" placeholder='Bio' onChange={handleInputChange} value={formValues.bio || ''}></textarea>
      
      <button type='submit'>Enviar</button>
    </form>
  );
}

export default App;
