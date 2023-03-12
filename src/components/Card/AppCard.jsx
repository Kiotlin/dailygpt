import * as HIcons from "@heroicons/react/24/outline";

export default function AppCard({ app, ...props }) {
  const { ...icons } = HIcons;
  const Icon = icons[app.icon];

  const colorVariants = {
    blue: "bg-blue-800 group-hover:bg-blue-800/90",
    red: "bg-red-800 group-hover:bg-red-800/90",
    green: "bg-green-800 group-hover:bg-green-800/90",
    yellow: "bg-yellow-600 group-hover:bg-yellow-800/90",
    purple: "bg-purple-800 group-hover:bg-purple-800/90",
    pink: "bg-pink-800 group-hover:bg-pink-800/90",
    gray: "bg-gray-800 group-hover:bg-gray-800/90",
    black: "bg-black group-hover:bg-black group-hover:opacity-90",
  };

  return (
    <article
      role="button"
      className="group flex items-center space-x-6 p-3"
      {...props}
    >
      <div className={`w-14 rounded-sm p-3.5 ${colorVariants[app.color]}`}>
        <div className="text-white transition-transform duration-150 ease-in-out group-hover:scale-125">
          <Icon />
        </div>
      </div>
      <div className="flex w-full flex-col text-start">
        <span className="text-base font-medium group-hover:text-gray-700/80">
          {app.name}
        </span>
        <div className="text-xs text-gray-600">
          <span>{app.description}</span>
        </div>
      </div>
    </article>
  );
}
