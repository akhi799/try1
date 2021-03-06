import React from 'react'
import POPOSSpace from './POPOSSpace';
import './POPOSlist.css';
import data from './sfpopos-data.json';

function POPOSList() {

    const spaces = data.map(( { title, address, images,hours } ) => {
        return (
          <POPOSSpace
            key={title} // The title could be a key
            name={title}
            address={address}
            image={images[0]}
            hours={hours}
          />
        )
      
    })
  
    return (
      <div className="POPOSList">
        { spaces }
      </div>
    )
  }
  
  export default POPOSList
// const titles = data.map((obj) => {
//     return obj.title
//   })
  
//   console.log(titles)