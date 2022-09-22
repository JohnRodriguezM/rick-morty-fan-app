import TextField from "@mui/material/TextField";
import { useField } from "formik";

export const InputText = (props: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/*<label>{label}</label>*/}
      <div>
        <TextField {...field} {...props} />
        {meta.touched && meta.error && <div>{meta.error}</div>}
      </div>
    </>
  );
};
