import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import MyInput from "./components/MyInput";
import MyVideo from "./components/MyVideo";

// useMemo
// useCallback

const expensiveFunction = (num) => {
  for (let i = 0; i < 900_000_000; i++) {
    num += 1;
  }
  return num;
};

const generateExpensiveFunction = (num) => {
  console.log("Running generate expensive function");
  for (let i = 0; i < 900_000_000; i++) {}
  return () => alert(`I am expensive: ${num}`);
};

const App = () => {

  const myInput = useRef(null);

  const myVideo = useRef(null);


  const renderCount = useRef(0);
  const [myNum, setMyNum] = useState(0);
  const [myName, setMyName] = useState("");

  //const [scrollHeight, setScrollHeight] = useState(0);
  //useLayoutEffect(() => {
  //  console.log('scrollHeight:', document.body.scrollHeight);
  //  //window.scrollBy(0, document.body.scrollHeight);
  //  setScrollHeight(document.body.scrollHeight);
  //}, []);

  useEffect(() => {
    window.scrollBy(0, document.body.scrollHeight);
  }, []);


  const bigNum = useMemo(() => {
    return expensiveFunction(myNum);
  }, [myNum]);

  //const bigFunc = generateExpensiveFunction(myNum);
  const bigFunc = useCallback(() => {
    const tempFunc = generateExpensiveFunction(myNum);
    tempFunc();
  }, [myNum]);

  //const [bigNum, setBigNum] = useState(0);
  //useEffect(() => {
  //  console.log('in useEffect');
  //  setBigNum(expensiveFunction(myNum));
  //}, [myNum]);

  useEffect(() => {
    renderCount.current += 1;
  });

  //const bigNum = expensiveFunction(myNum);

  return (
    <>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Big Number: {bigNum}</p>
        </div>
      </section>
      <div className="container my-container">

        <MyVideo ref={myVideo} />
        <br/>
        <br/>

        <button
          onClick={() => myVideo.current?.play()}
          className="button is-success"
        >
          Play
        </button>
        <button
          onClick={() => myVideo.current?.pause()}
          className="button is-success"
        >
          Pause
        </button>


        <MyInput
          ref={myInput}
          type="text"
          className="input is-danger"
        />

        <br/>
        <br/>

        <button
          onClick={() => myInput.current?.focus()}
          className="button is-success"
        >
          FOCUS
        </button>

        <br/>
        <br/>



        <input
          type="number"
          className="input is-primary"
          value={myNum}
          onChange={(event) => {
            const value = event.target.value;
            setMyNum(value ? parseInt(value, 10) : 0);
          }}
        />

        <br />
        <br />

        <input
          type="text"
          className="input is-info"
          value={myName}
          onChange={(event) => {
            const value = event.target.value;
            setMyName(value);
          }}
        />

        <br />
        <br />

        <button
          onClick={() => alert(renderCount.current)}
          className="button is-success"
        >
          Render Count
        </button>

        <br />
        <br />

        <button onClick={bigFunc} className="button is-warning">
          Run Expensive Function
        </button>

        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Card header</p>
          </header>
        </div>

      </div>
    </>
  );
};

export default App;
