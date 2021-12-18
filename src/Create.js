import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

  const [maryland, setMaryland] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const traffic = { maryland };

    fetch('http://localhost:8000/traffic/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(traffic)
    }).then(() => {
      // navigate.go(-1);
      navigate.push('/');
    });
  }

   

  return (
      
    <div className="create">
      <h2>Add New Traffic Report</h2>
      <form onSubmit={handleSubmit}>
        <label>Maryland Traffic Report:</label>
        <textarea
          required
          value={maryland}
          onChange={(e) => setMaryland(e.target.value)}
        ></textarea>
        <button>Add Maryland-Ikeja Traffic</button>
      </form>
    </div>
  );
}
 
export default Create;