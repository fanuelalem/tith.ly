import React, { Component } from 'react'

export default class Form extends Component {
     values = {
        '01bbb998-af3d-47a4-b0ff-e67d033d80e9': 'Luz Ballard',
        '01021494-f157-4183-964c-6b0ddc964ab8': 'Corey Johnson',
        '97a2daa4-406b-4b1c-831e-bdfd90b224f2': 'Andrew Torres',
        '6256ba85-b59f-40b9-8715-406cc54d7f05': 'Nichole Wilson',
        '5c0c746c-ec56-4fb7-8b32-066b64d70611': 'Nancy Hall',
        'c103b480-8efb-450f-9141-6a8037de2348': 'Agnes Lorenzen',
        '4e0cc3dc-fce9-45d9-85c7-a3ae5cb0ce57': 'Donald Hyde',
        'f80af139-5c68-4475-8cb6-ced7e38c6f43': 'Dennis Fuller',
        '5073359e-b228-4852-b1a3-3f2edfc8672f': 'Francis Hodgkins',
        '9c9a3cc8-044e-43d0-87ff-58a6b44eca53': 'David McLain'
      }

      state= {
        userNames:{
            Luz:false,
            Corey:false,
            Andrew:false,
            },
                 }
 onChangeHandler = (e) => {
const {name,checked} = e.target;

this.setState((e)=>{
  const selectedUser = e.userNames;
  return selectedUser[name]=checked
})
 console.log(e.target.value)

 
  }

 
     render() {
  //   console.log(`${this.values['01bbb998-af3d-47a4-b0ff-e67d033d80e9']}`)
 const displayUsers = Object.keys(this.state.userNames).filter((x)=> this.state.userNames[x])
 
        return (

             <div >

<div style={{textAlign:'left',margin:"0 0px 0 145px"}}>
<div className='world' >
<input className="onlinecheckbox" id='luz'type='checkbox' name={Object.keys(this.values)[0]} style={{marginBottom:"10px",marginTop:"10px"}} onChange={this.onChangeHandler}/>
<label for='luz'>Luz </label>
</div>
 
 
 <div className='sun'>
 <input  className="onlinecheckbox" id='Corey' type='checkbox' name={Object.keys(this.values)[1]} style={{marginBottom:"10px"}} onChange={this.onChangeHandler}/>
<label for='Corey'>Corey </label>
 </div>
  <div className='moon'>
  <input  className="onlinecheckbox" id='Andrew' type='checkbox' name={Object.keys(this.values)[2]} style={{marginBottom:"10px"}} onChange={this.onChangeHandler}/>
<label for='Andrew'>Andrew </label>
  </div>
  <div className='smiley'>
  <input  className="onlinecheckbox" id='Nichole' type='checkbox' name={Object.keys(this.values)[3]} style={{marginBottom:"10px"}} onChange={this.onChangeHandler}/>
<label for='Nichole'>Nichole </label>
  </div>
  <div className='plus'>
  <input  className="onlinecheckbox" id='Nancy' type='checkbox' name={Object.keys(this.values)[4]} style={{marginBottom:"10px"}} onChange={this.onChangeHandler}/>
<label for='Nancy'>Nancy </label>
  </div>
  <div className='minus'>
  <input  className="onlinecheckbox" id='Agnes' type='checkbox' name={Object.keys(this.values)[5]} style={{marginBottom:"10px"}} onChange={this.onChangeHandler}/>
<label for='Agnes'>Agnes </label>
  </div>
  <div className='at'>
  <input  className="onlinecheckbox" id='Donald' type='checkbox' name={Object.keys(this.values)[6]} style={{marginBottom:"10px"}} onChange={this.onChangeHandler}/>
<label for='Donald'>Donald </label>
  </div>
  <div className='bell'>
  <input  className="onlinecheckbox" id='Dennis' type='checkbox' name={Object.keys(this.values)[7]} style={{marginBottom:"10px"}} onChange={this.onChangeHandler}/>
<label for='Dennis'>Dennis </label>
  </div>
  <div className='cam'>
  <input  className="onlinecheckbox" id='Francis' type='checkbox' name={Object.keys(this.values)[8]} style={{marginBottom:"10px"}} onChange={this.onChangeHandler}/>
<label for='Francis'>Francis </label>
  </div>
  <div className='icon'>
  <input  className="onlinecheckbox" id='David' type='checkbox' name={Object.keys(this.values)[9]} style={{marginBottom:"10px"}} onChange={this.onChangeHandler}/>
<label for='David'>David </label>
  </div>
 
  


  
</div>
      <hr style={{margin:"20px 145px 0px 145px"}}></hr>
<div style={{margin:"0 0px 0 145px",textAlign:'left'}}>

    <p> {displayUsers.map((item)=>(
        <pre>{item} </pre>
    ))}</p>
</div>


            </div>
        )
    }
}
