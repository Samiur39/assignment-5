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
    technology: ITechnology;
    selectedTech: ITechnology[];
    setSelectedTech: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}

const TechnologiesCard = ({
    technology,
    selectedTech,
    setSelectedTech,
}: Props) => {
    
    // Checks if THIS specific technology (by ID) is already in the stack
    const isSelected = selectedTech.some(
        (tech) => tech.id === technology.id
    );

    const handleAddToStack = () => {
        // If it's already selected, show an error and return
        if (isSelected) {
            toast.error(`${technology.name} is already in your stack!`);
            return;
        }

        // Add the technology to the stack
        setSelectedTech((prev) => [
            ...prev,
            technology,
        ]);

        toast.success(
            `${technology.name} added to your stack`
        );
    };

    return (
        <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            {/* Icon + Badge */}
            <div className="flex items-start justify-between gap-3">
                <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-9 w-9 object-contain"
                />
                <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs text-blue-500">
                    {technology.badge}
                </span>
            </div>

            {/* Name */}
            <h3 className="mt-5 text-xl font-semibold text-[#0F172A]">
                {technology.name}
            </h3>

            {/* Description */}
            <p className="mt-3 min-h-18 text-sm leading-6 text-slate-500">
                {technology.description}
            </p>

            {/* Divider */}
            <div className="my-4 border-t border-slate-100" />

            {/* Information */}
            <div className="flex items-center justify-between gap-2 text-xs sm:text-sm">
                <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
                    {technology.category}
                </span>
                <span className="text-slate-500">
                    {technology.difficulty}
                </span>
                <span className="whitespace-nowrap text-slate-600">
                    <span className="text-yellow-400">
                        ★
                    </span>{" "}
                    {technology.rating}
                </span>
            </div>

            {/* Add Button */}
            <button
                onClick={handleAddToStack}
                disabled={isSelected}
                className={`mt-5 w-full rounded-lg py-3 text-sm font-medium transition ${
                    isSelected
                        ? "cursor-not-allowed bg-slate-300 text-slate-600"
                        : "cursor-pointer bg-[#080D1D] text-white hover:bg-[#151B2E]"
                }`}
            >
                {isSelected
                    ? "Added to Stack"
                    : "Add to Stack"}
            </button>
        </div>
    );
};

export default TechnologiesCard;