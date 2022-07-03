import React, { useState, useEffect, useCallback, useMemo } from "react";
import Child from "./child";
import Cart from "./cart";
import DemoUseReducer from "./demoUseReducer";
import CustomHooks from "./custom-hooks";

export default function HooksPage() {
  const [number, setNumber] = useState(0);
  const [like, setLike] = useState(0);

  const listCart = [
    { id: 1, productName: "Samsung" },
    { id: 2, productName: "Iphone" },
  ];

  const listCartMemo = useMemo(() => listCart, []);

  useEffect(() => {
    console.log("useEffect - tuong duong componentDidmount ben Class");
  }, []);

  useEffect(() => {
    console.log("useEffect - tuong duong componentDidUpdate ben Class");
  }, [number]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Hello Cybersoft");
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderNoti = () => {
    return `So like la ${like}`;
  };

  const renderNotiCallback = useCallback(renderNoti, [like]);

  return (
    <div>
      <h1>*Hooks</h1>
      <h3>Number: {number}</h3>
      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Click
      </button>

      <div>
        <h3>Like: {like}</h3>
        <button className="btn btn-danger" onClick={() => setLike(like + 1)}>
          Like
        </button>
      </div>

      <hr />
      <Child renderNoti={renderNotiCallback} />
      <hr />
      <Cart listCart={listCartMemo} />
      <hr />
      <DemoUseReducer />
      <hr />
      <CustomHooks />
    </div>
  );
}
