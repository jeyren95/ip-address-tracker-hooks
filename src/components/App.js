import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import Results from "./Results"
import Map from "./Map"
import axios from "axios";

const App = () => {
  const [ip, setIp] = useState("");
  const [isp, setIsp] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [timezone, setTimezone] = useState("");
  const [postalCode, setPostalCode] = useState("")
  const [latitude, setLatitude] = useState("");
  const [longtitude, setLongtitude] = useState("");

  //Remember that we cannot use the async await syntax directly into the first argument of useEffect hooks
  //We want to show the user's location details for the first time when the component renders
  useEffect(() => {
    const onMount = async () => {
      const userDetails = await axios.get("https://geo.ipify.org/api/v1", {
          params: {
            apiKey: "at_QosYiQaRR8nXdU1zd7lgXP0fAXBxC"
          }
      });
      setIp(userDetails.data.ip)
      setIsp(userDetails.data.isp)
      setCity(userDetails.data.location.city)
      setRegion(userDetails.data.location.region)
      setTimezone(userDetails.data.location.timezone)
      setPostalCode(userDetails.data.location.postalCode)
      setLatitude(userDetails.data.location.lat)
      setLongtitude(userDetails.data.location.lng)
    }
    onMount();
  }, [])

  const onSearchSubmit = async (term) => {
    const response = await axios.get("https://geo.ipify.org/api/v1", {
        params: {
          apiKey: "at_QosYiQaRR8nXdU1zd7lgXP0fAXBxC",
          ipAddress: term,
          domain: term
        }
      });
    setIp(response.data.ip);
    setIsp(response.data.isp);
    setCity(response.data.location.city)
    setRegion(response.data.location.region)
    setTimezone(response.data.location.timezone)
    setPostalCode(response.data.location.postalCode)
    setLatitude(response.data.location.lat)
    setLongtitude(response.data.location.lng)
  }

  return (
    <div>
      <SearchBar onSearchSubmit={onSearchSubmit}/>
      <Results ip={ip} isp={isp} city={city} region={region} timezone={timezone} postalCode={postalCode} />
      <Map latitude={latitude} longtitude={longtitude}/>
    </div>
  )

}



export default App
