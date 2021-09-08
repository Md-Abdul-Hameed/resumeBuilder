import React from 'react';
import {skinCodes} from '../../constants/typeCodes';
import uuid from "react-uuid"
import * as taskActions from "../../redux/actionTypes"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"


function GettingStarted(props) {
     const onChange = async (skinCd) => {
        if(props.document.id == null){
            let document = {
                id:uuid(),
                skinCd:skinCd
            }
            props.setSkin(document);
        }else{
            props.updateSkin(skinCd)
        }
        props.history.push('/contact');
        
        
      }

      
        return (  
            <div className="container med gettingStarted">
                <div className="section">
                    <h1 className=" center">
                    Select a resume template to get started</h1>
                    <p className=" center">
                    You’ll be able to edit and change this template later!
                    </p>
                    <div className="styleTemplate ">
                    {
                        skinCodes.map((value,index) => {
                            return( <div key={index} className="template-card rounded-border">
                                  <i className={(value == 'demo-value'? 'selected fa fa-check' :'hide') } ></i>
                                <img  className='' src={'/images/' + value + '.svg'}/>
                                <button type="button" onClick={()=>onChange(value)}  className='btn-select-theme'>USE TEMPLATE</button>
                            </div>);
    
                        })
                    }
                    </div>
                
                </div>
            </div>
        );
    
}
  
function mapStateToProps(store){
    return store.document
}

function mapDispatchToProps(dispatch){
    return {
        setSkin:(document)=>{
            return dispatch({type:taskActions.SET_SKIN,payload:document})
        }
        ,
        updateSkin:(skinCd)=>{
            console.log("Hameed")
            return dispatch({type:taskActions.UPDATE_SKIN,payload:skinCd})
        }
    }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(GettingStarted))

