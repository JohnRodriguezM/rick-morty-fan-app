import TextField from "@mui/material/TextField";
import { useField } from "formik";

export const InputText = (props: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/*<label>{label}</label>*/}
      <section style = {{width: "100%", color : "#111138"}}
      
     
      >
        <TextField {...field} {...props}
          className= "w-full text-white"
        style = {{borderColor : "#fff"}}/>
        {meta.touched && meta.error && <p className = "text-xs">{meta.error}</p>}
      </section>
    </>
  );
};
