import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Desc_Prices from "./Desc_Prices";
import Travel from "./Rate";

const Information = () => {
  return (
    <section className="">
      <div className="tabbing">
        <Tabs>
          <TabList className={"flex flex-row gap-x-8 font-medium text-textDisabled mb-14"}>
            <Tab selectedClassName="text-blueButton underline" className={"hover:cursor-pointer  focus:outline-none"}>
              Information
            </Tab>
          </TabList>
          <TabPanel>
            <Desc_Prices />
            <Travel />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Information;
