function Time(hey) {
  function clickHere(str, int) {
    console.log(str, " ", int);
  }

  return (
    <div>
      {/* <h1>{hey.name}</h1>
      <h1>{hey.age}</h1>
      <h1>{hey.children}</h1> */}
      <h1>time: {new Date().toLocaleTimeString()}</h1>
      <p>hello, good night</p>
      <button onClick={() => clickHere(" sakib al hasan", 75)}>hey</button>
    </div>
  );
}
export default Time;
