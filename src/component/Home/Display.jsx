import React from 'react'
import "./home.css"

const Display = ({e,i}) => {
  return (
    <div className="userDiv">
                <span className="para">

                    <p>{i+1}</p>
                </span>
                <div>
                  <img src={e.picture.thumbnail} alt="" />
                </div>
                <div>
                  <p>
                    {" "}
                    {e.name.title + " " + e.name.first + " " + e.name.last}
                  </p>
                </div>
              </div>
  )
}

export default Display