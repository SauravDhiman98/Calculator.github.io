
import { useState } from "react";
import "./App.css";
import styled from "styled-components";

export default function App() {
  const [num1, setnum1] = useState("");
  const [num2, setnum2] = useState("");
  const [flag, setFlag] = useState(true);
  const [result, setresult] = useState();
  const [Operation, setOperation] = useState();

  const handleCLick = (e) => {
    if (flag) {
      setnum1(num1 + e.target.innerHTML);
    } else {
      setnum2(num2 + e.target.innerHTML);
    }
  };

  const handleOperations = (e) => {
    if (e.target.innerHTML == "+") {
      setFlag(false);
      setOperation(e.target.innerHTML);
    } else if (e.target.innerHTML == "-") {
      setFlag(false);
      setOperation(e.target.innerHTML);
    } else if (e.target.innerHTML == "*") {
      setFlag(false);
      setOperation(e.target.innerHTML);
    } else if (e.target.innerHTML == "/") {
      setFlag(false);
      setOperation(e.target.innerHTML);
    }
  };

  const handleCLick1 = () => {
    const a = parseInt(num1);
    const b = parseInt(num2);
    if (Operation == "+") {
      setresult(a + b);
    } else if (Operation == "*") {
      setresult(a * b);
    } else if (Operation == "-") {
      setresult(a - b);
    } else if (Operation == "/") {
      setresult(a / b);
    }
  };

  const ClearALL = () => {
    setnum1("");
    setnum2("");
    setresult("");
    setFlag(true);
    setOperation("");
  };
  return (
    <Container className="App">
      <Div1 className="dsply">
        <h2>{num1}</h2>
        <h3>{Operation}</h3>
        <h2>{num2}</h2>
        <h1>=</h1>
        <h2>{result}</h2>
      </Div1>

      <Div7>
        <Div2>
          <button onClick={(e) => handleOperations(e)}>+</button>
          <button onClick={(e) => handleOperations(e)}>-</button>
          <button onClick={(e) => handleOperations(e)}>*</button>
          <button onClick={(e) => handleOperations(e)}>/</button>
        </Div2>

        <Div3>
          <button onClick={(e) => handleCLick(e)}>1</button>
          <button onClick={(e) => handleCLick(e)}>2</button>
          <button onClick={(e) => handleCLick(e)}>3</button>
        </Div3>

        <Div4>
          <button onClick={(e) => handleCLick(e)}>4</button>
          <button onClick={(e) => handleCLick(e)}>5</button>
          <button onClick={(e) => handleCLick(e)}>6</button>
        </Div4>

        <Div5>
          <button onClick={(e) => handleCLick(e)}>7</button>
          <button onClick={(e) => handleCLick(e)}>8</button>
          <button onClick={(e) => handleCLick(e)}>9</button>
        </Div5>

        <Div6>
          <button onClick={(e) => handleCLick(e)}>0</button>
          <button onClick={handleCLick1}>=</button>
          <button onClick={ClearALL}>C</button>
        </Div6>
      </Div7>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 0;
  margin-left: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 400px;
  border: 2px solid;
  border-radius: 20px;
`;
const Div1 = styled.div`
  width: 250px;
  height: 80px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;

const Div2 = styled.div``;

const Div3 = styled.div``;

const Div4 = styled.div``;

const Div5 = styled.div``;

const Div6 = styled.div``;

const Div7 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 0;
`;
