import { useReducer } from "react";

function App() {
  // const [userInfo, setUserInfo] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  // });

  // const handleUserInfoChange = (e) => {
  //   e.preventDefault();
  //   setUserInfo((prevUser) => {
  //     return { ...prevUser, [e.target.name]: e.target.value };
  //   });
  // };

  //* {
  //*   type:"FIELD_UPDATE",
  //*   payload: {
  //*     field:"name",
  //*     value:"John Doe"
  //*   }
  //* }

  const initialState = {
    name: "",
    email: "",
    phone: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FIELD_UPDATE":
        return {
          ...state,
          [action.payload.field]: action.payload.value,
        };
      case "FIELD_EMPTY":
        return initialState;
      default:
        return state;
    }
  };

  const [userInfo, dispatch] = useReducer(reducer, initialState);
  const handleUserInfoChange = (e) => {
    dispatch({
      type: "FIELD_UPDATE",
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted User Info:", userInfo);
    dispatch({
      type: "FIELD_EMPTY",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        name:
        <input
          type="text"
          value={userInfo.name}
          name="name"
          onChange={handleUserInfoChange}
        />
        email:
        <input
          type="text"
          value={userInfo.email}
          name="email"
          onChange={handleUserInfoChange}
        />
        phone:
        <input
          type="text"
          value={userInfo.phone}
          name="phone"
          onChange={handleUserInfoChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
