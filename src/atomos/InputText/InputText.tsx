import TextField from "@mui/material/TextField";
import { useField } from "formik";

export const InputText = (props: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/*<label>{label}</label>*/}
      <div style = {{width: "100%"}}>
        <TextField {...field} {...props} style = {{width: "100%"}}/>
        {meta.touched && meta.error && <div>{meta.error}</div>}
      </div>
    </>
  );
};
