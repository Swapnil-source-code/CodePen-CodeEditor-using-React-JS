import './Footer-style.css'

const Footer = () => {
  
  return (
    <>
     <footer className="footer p-1 ">
        <div className="container-fluid">
          <div className="row">     
            <div className="col-6 pb-1">
              <button type="button" className="btn btn-secondary btn-sm">Console</button>&nbsp;
              <button type="button" className="btn btn-secondary btn-sm">Assets</button>&nbsp;
              <button type="button" className="btn btn-secondary btn-sm">Comments</button>&nbsp;
              <button type="button" className="btn btn-secondary btn-sm">Shortcuts</button>&nbsp;
            </div>
            <div className="col-6 pb-1">
              <div className="float-right">
                <button type="button" className="btn btn-secondary btn-sm "><i className="fa fa-code-fork" aria-hidden="true" /> Fork</button>&nbsp;
                <button type="button" className="btn btn-secondary btn-sm ">Embed</button>&nbsp;
                <button type="button" className="btn btn-secondary btn-sm ">Export</button>&nbsp;
                <button type="button" className="btn btn-secondary btn-sm ">Share</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer