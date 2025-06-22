
import React from "react";
import { clubs } from "../sampleData";

type Props = {
  selectedClub: string | null;
  setSelectedClub: (key: string | null) => void;
  selectedType: string | null;
  setSelectedType: (type: string | null) => void;
};

const eventTypes = [
  { key: "Tech", label: "Tech" },
  { key: "Workshop", label: "Workshop" },
  { key: "Entrepreneurship", label: "Entrepreneurship" },
  { key: "Community", label: "Community" },
  { key: "Pitch", label: "Pitch" },
  { key: "Hackathon", label: "Hackathon" },
  { key: "No-Code", label: "No-Code" },
];

const FilterBar = ({
  selectedClub,
  setSelectedClub,
  selectedType,
  setSelectedType,
}: Props) => (
  <div className="flex flex-wrap gap-3 md:gap-4 mb-8 mt-2 items-center justify-center animate-fade-in-up">
    {/* Club Filter */}
    <div className="flex flex-wrap gap-2 items-center">
      <span className="text-xs uppercase text-gray-400 mr-2">Clubs:</span>
      <button
        className={`px-4 py-1 rounded-xl font-medium hover-scale transition 
        ${selectedClub === null ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-glow" : "bg-[#29294a] text-gray-200"}`}
        onClick={() => setSelectedClub(null)}
      >
        All
      </button>
      {clubs.map((club) => (
        <button
          key={club.key}
          className={`px-4 py-1 rounded-xl font-medium hover-scale transition ${
            selectedClub === club.key
              ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-glow"
              : "bg-[#232342] text-gray-200 hover:bg-[#1e1e37]"
          }`}
          onClick={() => setSelectedClub(club.key)}
        >
          {club.name}
        </button>
      ))}
    </div>
    {/* Type Filter */}
    <div className="flex flex-wrap gap-2 items-center">
      <span className="text-xs uppercase text-gray-400 mr-2">Type:</span>
      <button
        className={`px-4 py-1 rounded-xl font-medium hover-scale transition ${
          selectedType === null
            ? "bg-gradient-to-r from-neon-orange to-neon-red text-white shadow-glow"
            : "bg-[#29294a] text-gray-200"
        }`}
        onClick={() => setSelectedType(null)}
      >
        All
      </button>
      {eventTypes.map((type) => (
        <button
          key={type.key}
          className={`px-4 py-1 rounded-xl font-medium hover-scale transition ${
            selectedType === type.key
              ? "bg-gradient-to-r from-neon-orange to-neon-red text-white shadow-glow"
              : "bg-[#232342] text-gray-200 hover:bg-[#1e1e37]"
          }`}
          onClick={() => setSelectedType(type.key)}
        >
          {type.label}
        </button>
      ))}
    </div>
  </div>
);

export default FilterBar;
