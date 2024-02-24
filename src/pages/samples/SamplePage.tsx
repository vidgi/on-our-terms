import * as React from "react";
import { Text, Switch, useMantineTheme } from "@mantine/core";
import { IconLayoutGrid, IconBox } from "@tabler/icons-react";

import { ViewerPage } from "../viewer/ViewerPage";
import { SampleGrid } from "./SampleGrid";

export function SamplePage() {
  const [show3D, setShow3D] = React.useState(false);
  const handleToggle = () => setShow3D(!show3D);
  const theme = useMantineTheme();

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "65",
          right: "2em",
          zIndex: "10000",
        }}
      >
        <Text size={30}>our terms</Text>
        <div
          style={{
            position: "absolute",
            top: "5em",
            right: "0em",
            zIndex: "10000",
          }}
        >
          <Switch
            className="desktop-only"
            onChange={handleToggle}
            size="md"
            color={"blue"}
            offLabel={<IconLayoutGrid size="1rem" stroke={2.5} color={theme.colors.blue[9]} />}
            onLabel={<IconBox size="1rem" stroke={2.5} color={theme.colors.blue[0]} />}
          />
        </div>
      </div>
      <div style={{ height: "calc(-51vh)", width: "100vw" }}>{show3D ? <ViewerPage /> : <SampleGrid />}</div>
    </div>
  );
}
