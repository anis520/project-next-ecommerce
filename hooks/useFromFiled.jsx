import { useState } from "react";

const useFromField = (initState) => {
  const [input, setinput] = useState(initState);
  const handleInputChange = (e) => {
    setinput((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };
  const resetForm = () => {
    setinput(initState);
  };

  return { input, handleInputChange, resetForm, setinput };
};

export default useFromField;
