import { toast } from "react-toastify";

interface ITechnology {
    id: string;
    name: string;
    category: string;
    description: string;
    icon: string;
    rating: number;
    difficulty: string;
    badge: string;
}

interface Props {
    selectedTech: ITechnology[];
    setSelectedTech: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}

const YourStack = ({ selectedTech, setSelectedTech }: Props) => {

    const handleRemove = (techToRemove: ITechnology) => {
        setSelectedTech((prev) =>
            prev.filter((tech) => tech.id !== techToRemove.id)
        );

        toast.info(`${techToRemove.name} removed from your stack`);
    };

    const handleDeleteAll = () => {
        setSelectedTech([]);
        toast.info("All technologies removed from your stack");
    };

    return (
        <div className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-8">

            <div>
                <h3 className="text-xl font-bold text-[#0F172A]">
                    Your Stack
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                    {selectedTech.length === 0
                        ? "No technologies selected yet."
                        : `${selectedTech.length} Technology${
                              selectedTech.length > 1 ? "ies" : ""
                          } Selected`}
                </p>
            </div>

            <div className="mt-5 flex flex-col gap-2">

                {selectedTech.length === 0 ? (

                    <div className="flex h-20 items-center justify-center rounded-xl border border-dashed border-slate-300">
                        <p className="text-sm text-slate-400">
                            Your stack is empty.
                        </p>
                    </div>

                ) : (

                    selectedTech.map((tech) => (
                        <div
                            key={tech.id}
                            className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2"
                        >

                            <div className="flex min-w-0 items-center gap-3">

                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="h-7 w-7 shrink-0 object-contain"
                                />

                                <div className="min-w-0">
                                    <p className="truncate text-xs font-semibold text-[#0F172A]">
                                        {tech.name}
                                    </p>

                                    <p className="text-[10px] text-slate-400">
                                        {tech.category}
                                    </p>
                                </div>

                            </div>

                            <button
                                onClick={() => handleRemove(tech)}
                                className="ml-2 cursor-pointer rounded p-1 text-slate-400 transition-colors hover:bg-slate-50 hover:text-red-500"
                                title="Remove from stack"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>

                        </div>
                    ))
                )}

            </div>

            {selectedTech.length > 0 && (
                <button
                    onClick={handleDeleteAll}
                    className="mt-5 w-full cursor-pointer rounded-lg border border-red-200 bg-white py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
                >
                    Remove All
                </button>
            )}

        </div>
    );
};

export default YourStack;