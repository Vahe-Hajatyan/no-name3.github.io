import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import {sendMassageCreator} from "./../../redux/massagesReducer"
import {withAuthNavigate} from './../../hoc/withAuthNavigate';
import {compose} from 'redux'; 


let mapStateToProps = (state) => {
  return{
    massagesPage: state.massagesPage,
    newMassageBody: state.massagesPage.newMassageBody,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMassage: (newAddText) => {
      dispatch(sendMassageCreator(newAddText))
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthNavigate 
)(Dialogs);