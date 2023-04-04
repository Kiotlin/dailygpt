import DropDown from "../../components/Base/DropDown";
import AppBox from "../../components/Base/AppBox";
import { langOption } from "./lang";
import { useState } from "react";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";

export default function Translation() {
  const [langFrom, setLangFrom] = useState(langOption[0]);
  const [langTo, setLangTo] = useState(langOption[0]);

  return (
    <>
      <AppBox>
        <div className="flex flex-col items-center">
          <div className="flex w-full justify-center border-b-[1px] border-gray-300 pb-3 dark:border-gray-600">
            <div className="flex justify-center gap-3">
              <DropDown
                className="w-32"
                option={langOption}
                value={langFrom}
                onChange={setLangFrom}
              />
              <div className="flex items-center">
                <ArrowsRightLeftIcon className="h-5 w-5 text-gray-500" />
              </div>
              <DropDown
                className="w-32"
                option={langOption}
                value={langTo}
                onChange={setLangTo}
              />
            </div>
          </div>
          <div className="relative my-4">
            <textarea
              className="w-full overflow-auto border-2 px-3 py-2 transition-colors duration-200 ease-in-out focus:border-black focus:outline-none dark:border-gray-600 dark:focus:border-white"
              placeholder="..."
              rows={8}
              cols={50}
            ></textarea>
            <div className="absolute bottom-0 right-0 mb-3 mr-2 text-xxs text-gray-500 dark:text-gray-400">
              {
                "Please press <Shift+Enter> to start a new line. Press <Enter> to translate."
              }
            </div>
          </div>
          <div className="relative mb-4 w-full">
            <hr className="border-t-1 w-full border-gray-300 dark:border-gray-600" />
            <div className="absolute top-1/2 left-1/2 flex h-auto w-auto -translate-x-1/2 -translate-y-1/2 transform justify-center gap-2 rounded-md bg-gray-100 py-0.5 px-2 text-xxs dark:text-white text-gray-500 dark:bg-gray-600">
              <span>Translating...</span>
              <span>✍️ </span>
            </div>
          </div>
          <textarea className="h-auto resize-none px-3 py-2 text-left" cols={50}>
          </textarea>
        </div>
      </AppBox>
    </>
  );
}
