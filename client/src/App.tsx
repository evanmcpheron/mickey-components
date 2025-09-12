import {
  ThemeSwitcher,
  ColorThemeSwitcher,
  Row,
  Label,
  Card,
  Button,
} from "@components";
import { useEffect, useRef } from "react";
import { localStorageKeys, ROOT } from "./helpers/consts";
import { Test } from "./test";

function App() {
  const testRef = useRef<{
    submitData: (callback: (success: boolean) => void) => void;
  }>(null);
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
          <Test ref={testRef} />
        </Row>
      }
      footer={
        <Row justifyContent="space-between">
          <Button role="cancel">Cancel</Button>
          <Button
            onPress={() => {
              if (testRef.current) {
                testRef.current.submitData((success: boolean) => {
                  console.log("success: ", success);
                });
              }
            }}
          >
            Save
          </Button>
        </Row>
      }
    />
  );
}

export default App;
