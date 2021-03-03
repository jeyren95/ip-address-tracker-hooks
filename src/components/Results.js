import React from "react"
import "./Results.css"

const Results = ({ip, isp, city, region, timezone, postalCode}) => {
  return (
    <div className="results">
      <div className="container ui">
        <div className="row">
          <div className="col-sm-3 ip">
            <p>IP ADDRESS</p>
            <h4>{ip}</h4>
          </div>
          <div className="col-sm-3 location">
            <p>LOCATION</p>
            <h4>{`${city} ${region} ${postalCode}`}</h4>
          </div>
          <div className="col-sm-3 timezone">
            <p>TIMEZONE</p>
            <h4>{timezone}</h4>
          </div>
          <div className="col-sm-3 isp">
            <p>ISP</p>
            <h4>{isp}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results
