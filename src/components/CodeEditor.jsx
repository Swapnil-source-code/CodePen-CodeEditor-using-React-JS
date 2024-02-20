import { useRef } from 'react';
import './CodeEditor-style.css'



const CodeEditor = () => {

  const htmlCodeRef = useRef(null);
  const cssCodeRef = useRef(null);
  const jsCodeRef = useRef(null);
  const outputRef = useRef(null);

  const run = () => {
    const htmlCode = htmlCodeRef.current.value;
    const cssCode = cssCodeRef.current.value;
    const jsCode = jsCodeRef.current.value;
    const output = outputRef.current.contentDocument.body;

    output.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.ownerDocument.defaultView.eval(jsCode);
  };

  const handleKeyUp = () => {
    run();
  };


  return (
    <>
      <div className="container-code">
        <div className="left">
          <label><span><i className="fa-brands fa-html5" />HTML &nbsp;</span></label>
          <textarea id="html-code" ref={htmlCodeRef} onKeyUp={handleKeyUp} defaultValue={" "} />
          <label><span><i className="fa-brands fa-css3-alt" />CSS &nbsp;</span></label>
          <textarea id="css-code" ref={cssCodeRef} onKeyUp={handleKeyUp} defaultValue={""} />
          <label><span><i className="fa-brands fa-js" />JavaScript &nbsp;</span></label>
          <textarea id="js-code" ref={jsCodeRef} onKeyUp={handleKeyUp} defaultValue={""} />
        </div>
        <div className="right">
          <label><i className="fa-solid fa-play" />Output</label>
          <iframe id="output" title="Output" ref={outputRef} />
        </div>
      </div>
    </>
  )
}

export default CodeEditor