import Editor, { useEditor } from "@scenify/sdk";
import { useEffect } from "react";
import { template } from "./template";

function App() {
  const editor = useEditor();
  useEffect(() => {
    if (editor) {
      editor.importFromJSON(template);
    }
  }, [editor]);
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
