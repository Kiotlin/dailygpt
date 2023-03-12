import SearchBox from "./Base/SearchBox";
import DropDown from "./Base/DropDown";
import { AppCard } from "./Card";
import { useState } from "react";

export default function ToolNavBar({ appData }) {
  const options = appData.category;
  const apps = appData.app;

  const [category, setCategory] = useState(options[0]);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col rounded-md border-2 border-none border-slate-300">
          <div className="mx-2 mt-2 mb-4 flex w-full flex-wrap justify-between gap-x-2">
            <div className="grow basis-auto">
              <SearchBox />
            </div>
            <div className="grow basis-1/6">
              <DropDown
                option={options}
                selectedOption={category}
                setSelectedOption={setCategory}
              />
            </div>
          </div>
          <div className="mx-2 my-2">
            {category.value == "All Category"
              ? apps.map((item) => <AppCard key={item.key} app={item} />)
              : apps
                  .filter((i) => i.category == category.value)
                  .map((item) => <AppCard key={item.key} app={item} />)}
          </div>
        </div>
      </div>
    </>
  );
}
