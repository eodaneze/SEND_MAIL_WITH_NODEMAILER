import { useState } from "react";
import axios from "axios";


function App() {

  const [email, setEmail] = useState("");

  const sendEmail = async(e) => {
     e.preventDefault();

    //  console.log(email);

    const data = {
       email
    }

    const response = await axios.post("http://localhost:5000/api/sendEmail", data)
    console.log(response.data)
  };
  
  return (
    
   <div className = '--flex-center --bg-primary --100vh'>
       <div className="--width-500px --card --p --bg-light">
           <form className="--form-control" onSubmit={sendEmail}>
           <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="--btn --btn-primary">
            Send Email
          </button>
           </form>
       </div>
   </div>
  );
}

export default App;
