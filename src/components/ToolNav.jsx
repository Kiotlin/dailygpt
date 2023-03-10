import SearchBox from "./elements/SearchBox";
import DropDown from "./elements/DropDown";

export default function ToolNavBar() {
  const cList = [
    { id: 0, name: "All Categories" },
    { id: 1, name: "Answers" },
    { id: 2, name: "Code" },
    { id: 3, name: "Translation" },
  ];

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col rounded-md border-2 border-none border-slate-300">
          <div className="mx-2 mt-2 mb-4 flex flex-wrap justify-center gap-x-2">
            <SearchBox />
            <DropDown optionList={cList} />
          </div>
        </div>
      </div>
    </>
  );
}
