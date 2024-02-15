import "./App.css";
import { useState } from "react";

import BookFormUpdate from "./Components/Form/UpdateForm";

function UpdatePage() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [SuccessMessage, setSuccessMessage] = useState();
  const [Message, setMessage] = useState();
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <BookFormUpdate
        Message={Message}
        SuccessMessage={SuccessMessage}
        showSuccessMessage={showSuccessMessage}
      />
    </div>
  );
}

export default UpdatePage;
