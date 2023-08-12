function Time(hey) {
  return (
    <div>
      <h1>{hey.name}</h1>
      <h1>{hey.age}</h1>
      <h1>{hey.children}</h1>
      <h1>time: {new Date().toLocaleTimeString()}</h1>
      <p>hello, good night</p>
    </div>
  );
}
export default Time;
