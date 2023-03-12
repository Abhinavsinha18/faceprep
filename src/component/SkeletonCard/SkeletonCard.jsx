import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from 'react-loading-skeleton'

const SkeletonCard = () => {
  return (
    <div className="userDiv">
                <span className="para">

                    <p><Skeleton/></p>
                </span>
                <div>
                  <Skeleton circle={true} width={60}/>
                </div>
                <div>
                  <p>
                    {" "}
                    {<Skeleton/>}
                  </p>
                </div>
              </div>
  )
}

export default SkeletonCard