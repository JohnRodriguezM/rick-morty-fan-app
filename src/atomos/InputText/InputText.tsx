import TextField from "@mui/material/TextField";
import { useField } from 'formik';


export const InputText = (props: any) => {
  const [field] = useField(props);
  return (
    <>
      {/*<label>{label}</label>*/}
      <div >
        <TextField {...field} {...props} />
      </div>
    </>
  )
 }