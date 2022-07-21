import React from 'react'
import './PopUp.css'

function PopUp(props) {
  return (props.trigger) ? (
    <div className="popup">
        <div className="pop-inner">
            <button className="close-btn" onClick={()=> props.setTrigger(false)}>Close</button>
            <div>
            { props.children }
            </div>
        </div>
    </div>
  ) : "";
}

export default PopUp