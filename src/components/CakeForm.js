import React from 'react';

class CakeForm extends React.Component {
  render(){
    return(
      <React.Fragment>
        <h1>this will be the cake form</h1>
        <form action="">
          <input type="text" name="name" placeholder="name of cake"/>
          <input type="text" name="imageUrl" placeholder="url for an image"/>
          <input type="text" name="yumFactor" placeholder="rating out of 5"/>
          <input type="text" name="comment" placeholder="comment"/>
          <input type="submit"/>
        </form>
      </React.Fragment>


    )
  }
}

export default CakeForm;
