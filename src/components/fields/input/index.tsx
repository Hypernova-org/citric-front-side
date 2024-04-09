import { Input } from "antd";
import { FieldProps } from "formik";
import { ChangeEvent, useState } from "react";

interface IProps extends FieldProps<any, any> {
  placeholder?: string;
  name: string;
  size?: "large" | "small";
  label: string;
  className?: string;
  rootClassName?: string;
  type?: "file" | "password" | "text";
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MyInput = (props: IProps) => {
  const {
    field: { value, name },
    placeholder = "",
    label,
    form: { setFieldValue, setFieldTouched, touched, errors },
    size = "large",
    className = "",
    rootClassName = "",
    type = "text",
    onChange = () => {},
  } = props;

  const [obtValue, setObtValue] = useState<string>('')

  return (
    <div className={rootClassName + " input relative"}>
      {label ? <p className="payment-input-label">{label}</p> : null}
      <Input
        type={type}
        size={size}
        placeholder={placeholder}
        name={name}
        status={!obtValue.length && !!touched[name] ? "error" : ""}
        value={value}
        onChange={(e) => {
          setFieldValue(name, e.target.value);
          onChange(e);
          setObtValue(e.target.value)
        }}
        onBlur={(e) => {
          setFieldTouched(name, !!e.target.value);
        }}
        className={className}
      />
      <p>
        {errors[name] && touched[name] ? (
          <span>{errors[name]?.toString() ?? "Error"}</span>
        ) : null}
      </p>
    </div>
  );
};

export default MyInput;
