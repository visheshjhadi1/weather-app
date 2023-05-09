/* eslint-disable react/prop-types */


export default function Sidebar(props) {

   
  const {name , region , country} = props.Location;
  // console.log(props.Current.condition)
 
    return (
      <section className="Sidebar-container">
        <div className="currentLocationName">
          <h1>{name}</h1>
          <h4>{region}, {country}</h4>
        </div>
        <div className="currentTem">

        </div>

      </section>
    )
  }
  
  