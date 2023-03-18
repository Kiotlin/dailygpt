import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const DropDown = (props) => {
  const { option, value, onChange } = props;

  return (
    <Listbox as="div" value={value} onChange={onChange}>
      <div className="relative">
        <Listbox.Button className="flex w-full cursor-default items-center rounded border border-gray-200 bg-white py-2 pl-3 pr-10 text-left text-sm text-gray-500 shadow-sm focus:border-green-600 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-green-300 sm:text-sm sm:leading-6">
          <span className="block truncate text-sm">{value.value}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="am:text-sm absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {option.map((item, _) => (
              <Listbox.Option
                key={_}
                value={item}
                className={({ active, selected }) =>
                  classNames(
                    selected
                      ? "bg-green-600 text-white"
                      : active
                      ? "bg-green-100 text-black"
                      : "bg-white text-black",
                    "relative cursor-default select-none py-2 pl-3 pr-9"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center">
                      <span
                        className={classNames(
                          selected
                            ? "bg-green-600"
                            : active
                            ? "bg-green-100"
                            : "bg-white",
                          "ml-3 block truncate text-sm"
                        )}
                      >
                        {item.value}
                      </span>
                    </div>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default DropDown;
