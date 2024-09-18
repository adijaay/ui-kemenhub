import React from "react";
import InputLabel from "../ui/InputLabel";
import Input, { IInputBase, IInputWithError } from "../ui/Input";
import Text from "../ui/Text";
import { IconAlertTriangleFilled } from "@tabler/icons-react";

interface ITextFieldBase extends IInputBase {
  label?: string;
  errorDesc?: string;
}

interface ITextFieldWithError extends IInputWithError {
  label?: string;
  errorDesc: string;
}

type ITextField = ITextFieldBase | ITextFieldWithError;

export default function TextField({
  label = "",
  type = "text",
  placeholder,
  value,
  onClear,
  onChange,
  error,
  errorDesc,
  ...props
}: ITextField) {
  return (
    <div className="flex flex-col gap-2">
      {label ? <InputLabel text={`${label}`} /> : undefined}
      <Input
        value={value}
        onClear={onClear}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        error={error}
        {...props}
      />
      {error && (
        <div className="flex items-center gap-1">
          <IconAlertTriangleFilled size={12} color="#F04438" />
          <Text className="!text-xs !text-[#F04438]">{errorDesc}</Text>
        </div>
      )}
    </div>
  );
}
