import React from 'react';


function Links(props) {
    return (
<div>
    <h3 id = "Links">Links</h3>
    <a href ={props.github}>{props.github}</a>
    <a href = {props.linedin}>{props.linkedin}</a>
</div>
    );
 
  }



  export default Links;