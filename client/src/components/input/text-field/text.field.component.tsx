import { Font } from "@/components/font";

interface TextFieldProps {
  label?: string;
}

export const TextField = ({ label }: TextFieldProps) => {
  return (
    <>
      {label && <Font>{label}</Font>}
      <input />
    </>
  );
};
