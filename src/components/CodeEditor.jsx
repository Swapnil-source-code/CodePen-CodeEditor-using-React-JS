import { useRef } from 'react';
import './CodeEditor-style.css'



const CodeEditor = () => {

  const htmlCodeRef = useRef(null);
  const cssCodeRef = useRef(null);
  const jsCodeRef = useRef(null);
  const outputRef = useRef(null);

  const htmlCodeRefMob = useRef(null);
  const cssCodeRefMob = useRef(null);
  const jsCodeRefMob = useRef(null);
  const outputRefMob = useRef(null);

  const run = () => {
    const htmlCode = htmlCodeRef.current.value;
    const cssCode = cssCodeRef.current.value;
    const jsCode = jsCodeRef.current.value;
    const output = outputRef.current.contentDocument.body;

    output.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.ownerDocument.defaultView.eval(jsCode);
  };

  const runMobile = () => {
    const htmlCode = htmlCodeRefMob.current.value;
    const cssCode = cssCodeRefMob.current.value;
    const jsCode = jsCodeRefMob.current.value;
    const outputM = outputRefMob.current.contentDocument.body;

    outputM.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    outputM.ownerDocument.defaultView.eval(jsCode);
  };


  const handleKeyUp = () => {
    run();
    runMobile();
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

        <div className="left-for-mobile">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-link active" id="nav-html-tab" data-toggle="tab" data-target="#nav-html" type="button" role="tab" aria-controls="nav-html" aria-selected="true">HTML</button>
              <button className="nav-link" id="nav-css-tab" data-toggle="tab" data-target="#nav-css" type="button" role="tab" aria-controls="nav-css" aria-selected="false">CSS</button>
              <button className="nav-link" id="nav-javascript-tab" data-toggle="tab" data-target="#nav-javascript" type="button" role="tab" aria-controls="nav-javascript" aria-selected="false">JavaScript</button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-html" role="tabpanel" aria-labelledby="nav-html-tab">
              <textarea id="html-code-mobile" ref={htmlCodeRefMob} onKeyUp={handleKeyUp} defaultValue={""} />
            </div>
            <div className="tab-pane fade" id="nav-css" role="tabpanel" aria-labelledby="nav-css-tab">
              <textarea id="css-code-mobile" ref={cssCodeRefMob} onKeyUp={handleKeyUp} defaultValue={""} />
            </div>
            <div className="tab-pane fade" id="nav-javascript" role="tabpanel" aria-labelledby="nav-javascript-tab">
              <textarea id="js-code-mobile" ref={jsCodeRefMob} onKeyUp={handleKeyUp} defaultValue={""} />
            </div>
          </div>
        </div>

        <div className="right">
          <label><i className="fa-solid fa-play" />Output</label>
          <iframe id="output" title="Output" ref={outputRef} />
         <div className="right-for-mobile">
            <iframe id="output-mobile" title="Output" ref={outputRefMob} />
          </div>
        </div>
        
      </div>
    </>
  )
}

export default CodeEditor