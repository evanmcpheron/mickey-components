import { useState } from "react";
import {
  copyToClipboard,
  generateRandomString,
  generateRandomWords,
} from "./helpers/dictionary";
import { ThemeSwitcher, Button, Radio, TextField } from "@components";

function App() {
  const [password, setPassword] = useState("");
  const [type, setType] = useState<"CHAR" | "WORD">("WORD");

  const updatePassword = async () => {
    const generatedPassword =
      type === "WORD"
        ? await generateRandomWords({
            length: 3,
            useCapitalLetters: true,
            useDigits: true,
          })
        : generateRandomString({ length: 20 });

    setPassword(generatedPassword);
  };

  const handleCopyPassword = () => {
    copyToClipboard(password).then((copySuccess) => {
      if (copySuccess) {
        console.log("SUCCESSFULLY COPIES TO CLIPBOARD");
        return;
      }
      console.log("something went wrong copying to clipboard.");
      return;
    });
  };
  return (
    <div>
      <ThemeSwitcher />
      <Radio
        value={type}
        spacing="space-around"
        onChange={(val: string) => {
          setPassword("");
          setType(val as "CHAR" | "WORD");
        }}
      >
        <Radio.Option value="CHAR">Character</Radio.Option>
        <Radio.Option value="WORD">Word</Radio.Option>
      </Radio>

      <Button onPress={updatePassword}>Generate</Button>
      {password && <Button onPress={handleCopyPassword}>{password}</Button>}
      <TextField label="testing" />
    </div>
  );
}

export default App;
