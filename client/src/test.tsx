import { forwardRef, useImperativeHandle, useState } from "react";
import {
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  GroupedCheckbox,
  Input,
  MultiSelect,
  Radio,
  Select,
  Textarea,
  TimePicker,
  ToggleSwitch,
  useForm,
} from "./components";
import type { ValidationResult } from "./components/forms/validations/common.validations";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TestProps {}

const formValidationSchema = {
  name: (nameValue: string): ValidationResult =>
    nameValue?.trim().length > 0 ? undefined : "Building name is required.",
};

export const Test = forwardRef<
  { submitData: (callback: (success: boolean) => void) => void },
  TestProps
>((_props, ref) => {
  const [submittingData, setSubmittingData] = useState(false);
  const { submitForm } = useForm({
    formName: "frmTest",
    validationModel: formValidationSchema,
    onFormErrors: (_errors) => {
      // console.error('Form Errors:', errors)
    },
  });

  const saveData = async () => {
    return true;
  };

  useImperativeHandle(ref, () => ({
    submitData(callback: (success: boolean) => void) {
      if (submittingData) {
        return;
      }

      setSubmittingData(true);

      submitForm(async (data, errors) => {
        console.log(`🚀 ~ test.tsx:53 ~ submitData ~ data: \n`, data);

        if (errors) {
          // error notification here
          setSubmittingData(false);
          return;
        }

        const saveResult = await saveData();
        if (saveResult) {
          callback(true);
        }
        setSubmittingData(false);
      });
    },
  }));

  return (
    <Form name="frmTest">
      <Checkbox defaultValue={true} name="testCheckbox" label="checkbox 123" />
      <GroupedCheckbox
        name="grouped-checkbox"
        options={[
          { value: "one", label: "One", active: false },
          { value: "two", label: "Two", active: false },
          { value: "three", label: "Three", active: false },
        ]}
      />
      <DatePicker name="datepicker" />
      <MultiSelect
        name="multiselect"
        options={[
          { value: "one", label: "One", selected: false },
          { value: "two", label: "Two", selected: false },
          { value: "three", label: "Three", selected: false },
        ]}
      />
      <Radio
        name="radio"
        options={[
          { value: "one", label: "One" },
          { value: "two", label: "Two" },
          { value: "three", label: "Three" },
        ]}
      />
      <Select
        name="select"
        options={[
          { value: "one", label: "One" },
          { value: "two", label: "Two" },
          { value: "three", label: "Three" },
        ]}
      />
      <Textarea name="textarea" placeholder="test placeholder" />
      <TimePicker name="timepicker" />
      <ToggleSwitch label="toggle" name="toggle" />
      <Input name="name" type="password" placeholder="test placeholder" />
      <ColorPicker
        // disabled
        defaultValue={"#ff0000"}
        name="colorpicker"
        // type="circle"
      />
    </Form>
  );
});
