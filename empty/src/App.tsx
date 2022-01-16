import Editor from "@scenify/sdk";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
      }}
    >
      <Editor config={{ clipToFrame: false, scrollLimit: 0 }} />
    </div>
  );
}

export default App;
