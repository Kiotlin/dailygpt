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
      <div className="container mx-auto w-full">
        <div className="flex flex-col rounded-md border-2 border-none border-slate-300">
          <div className="mx-2 mt-2 mb-4 flex w-full flex-wrap justify-between gap-x-2">
            <SearchBox className="mt-2 grow" />
            <div className="relative flex-shrink-0">
              <DropDown
                className="mt-2 w-40"
                option={options}
                value={category}
                onChange={setCategory}
              />
            </div>
          </div>
          <div className="mx-2 my-2 flex-1 overflow-y-auto">
            {category.value == "All Category"
              ? apps.map((item, _) => <AppCard key={_} app={item} />)
              : apps
                  .filter((i) => i.category == category.value)
                  .map((item, _) => <AppCard key={_} app={item} />)}
          </div>
        </div>
      </div>
    </>
  );
}
