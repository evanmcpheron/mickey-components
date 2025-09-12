import {
  ThemeSwitcher,
  ColorThemeSwitcher,
  Row,
  Label,
  Card,
  Button,
} from "@components";
import { useEffect, useRef, useState } from "react";
import { localStorageKeys, ROOT } from "./helpers/consts";
import { Test } from "./test";

function App() {
  const testRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const colorScheme =
      localStorage.getItem(localStorageKeys.COLOR_SCHEME_KEY) || "default";
    ROOT.setAttribute("data-color-scheme", colorScheme);
  }, []);

  return (
    <Card
      header={{ primary: "Primary", secondary: "Secondary" }}
      body={
        <Row rowDirection="column" gap="10px">
          <ThemeSwitcher />
          <ColorThemeSwitcher />
          <Label>TEST FORM</Label>
          <Button onPress={() => setIsDialogOpen(true)}>Open Dialog</Button>
          <Test
            ref={testRef}
            isOpen={isDialogOpen}
            onSave={() => {
              if (testRef.current) {
                console.log(testRef.current);
                testRef.current.submitData((success: boolean) => {
                  setIsDialogOpen(false);
                  console.log("success: ", success);
                });
              }
            }}
            onCancel={() => setIsDialogOpen(false)}
          />
        </Row>
      }
    />
  );
}

export default App;
