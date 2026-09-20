import { use, useState } from "react";
import TechnologiesCard from "./TechnologiesCard";
import YourStack from "./YourStack";

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
    technoDataPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technoDataPromise }: Props) => {
    const techno = use(technoDataPromise);
    const [selectedTech, setSelectedTech] = useState<ITechnology[]>([]);

    return (
        <section
            id="technologies"
            className="mx-auto max-w-6xl px-5 py-12 sm:py-16"
        >

            <div>
                <h2 className="text-3xl font-bold text-[#0F172A] sm:text-4xl lg:text-5xl">
                    Explore the{" "}
                    <span className="text-[#D946A6]">
                        Technologies
                    </span>
                </h2>

                <p className="mt-3 text-base text-slate-500 sm:text-lg">
                    Pick technologies to build your ideal stack.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-4">

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
                    {techno.map((technology) => (
                        <TechnologiesCard
                            key={technology.id}
                            technology={technology}
                            selectedTech={selectedTech}
                            setSelectedTech={setSelectedTech}
                        />
                    ))}
                </div>
                <YourStack
                    selectedTech={selectedTech}
                    setSelectedTech={setSelectedTech}
                />
            </div>
        </section>
    );
};

export default Technologies;