import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Competence from "@/components/Competence";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="justify-center h-full grow">
      <Box>
        <TabContext value={value}>
            <Box
              display={"flex"}
              justifyContent="center"
              sx={{ borderBottom: 1, borderColor: "divider" }}
            >
              <TabList onChange={handleChange}>
                <Tab label="Compétences" value="1" />
                <Tab label="Parcours" value="2" />
                <Tab label="À Propos" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Competence />
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
