import TextField from "@mui/material/TextField";
import { useField } from "formik";

export const InputText = (props: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/*<label>{label}</label>*/}
      <section style = {{width: "100%", color : "#111138"}}>
        <TextField {...field} {...props} style = {{width: "100%"}}/> <br />
        {meta.touched && meta.error && <div>{meta.error}</div>}
      </section>
    </>
  );
};
