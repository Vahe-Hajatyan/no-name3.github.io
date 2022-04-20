import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Massage from "./Massage/Massage";
import {reduxForm, Field } from 'redux-form';
import {maxLengthCreator, required, minLengthCreator} from './../../utils/validator';
import {Input} from './../common/FormsControls/FormsControls';

const maxLengthCreator10 = maxLengthCreator(10);
const minLengthCreator2 = minLengthCreator(2);


const DialogsForm = (props) => {
  const { handleSubmit, reset} = props;
  return <form onSubmit={handleSubmit}>
    <div className={s.newMassage}>
      <div>
      <Field className={s.input} placeholder='Enter Your Massage' name="input" validate={[required, maxLengthCreator10, minLengthCreator2]} component={Input} />
      </div>
      <div>
        <button className={s.button15}>Send</button>
        <button className={s.button15} type="button" onClick={reset}>delete</button>
      </div>
    </div>
    </form>
};

const DialogsReduxForm = reduxForm({ form: "Dialogs",})(DialogsForm);

const Dialogs = (props) => {
  let state = props.massagesPage;

  let DialogsElements = state.DialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let MassagesElements = state.MassagesData.map((m) => (
    <Massage massage={m.massages} />
  ));

  let onSendMassage = (values) => {
    props.sendMassage(values.input);
  };

  return (
    <div className={s.Dialogs}>
      <div className={s.DialogsItem}>{DialogsElements}</div>
      <div className={s.massages}>
        <div>{MassagesElements}</div>
        <DialogsReduxForm onSubmit={onSendMassage}/>
      </div>
    </div>
  );
};
export default Dialogs;
