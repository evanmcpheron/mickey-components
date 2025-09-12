import { forwardRef, useImperativeHandle, useState } from "react";
import {
  Button,
  Checkbox,
  ColorPicker,
  DatePicker,
  Dialog,
  Form,
  GroupedCheckbox,
  Input,
  MultiSelect,
  Radio,
  Row,
  Select,
  Textarea,
  TimePicker,
  ToggleSwitch,
  useForm,
} from "./components";
import type { ValidationResult } from "./components/forms/validations/common.validations";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface TestProps {
  isOpen: boolean;
  onSave: () => void;
  onCancel: () => void;
}

const formValidationSchema = {
  name: (nameValue: string): ValidationResult =>
    nameValue?.trim().length > 0 ? undefined : "Building name is required.",
};

export const Test = forwardRef<
  { submitData: (callback: (success: boolean) => void) => void },
  TestProps
>((props, ref) => {
  const { isOpen, onCancel, onSave } = props;
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
        console.log(`🚀 ~ test.tsx:60 ~ submitData ~ errors: \n`, errors);

        console.log(`🚀 ~ test.tsx:62 ~ submitData ~ data: \n`, data);

        // if (errors) {
        //   // error notification here
        //   setSubmittingData(false);
        //   return;
        // }

        const saveResult = await saveData();

        console.log(
          `🚀 ~ test.tsx:73 ~ submitData ~ saveResult: \n`,
          saveResult
        );
        if (saveResult) {
          callback(saveResult);
        }
        setSubmittingData(false);
      });
    },
  }));

  return (
    <Dialog
      showDialog={isOpen}
      isDismissible
      footerButtons={
        <Row justifyContent="space-between">
          <Button onPress={onCancel} role="cancel">
            Cancel
          </Button>
          <Button onPress={onSave}>Save</Button>
        </Row>
      }
    >
      <Form name="frmTest">
        <Checkbox
          defaultValue={true}
          name="testCheckbox"
          label="checkbox 123"
        />
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
    </Dialog>
  );
});
