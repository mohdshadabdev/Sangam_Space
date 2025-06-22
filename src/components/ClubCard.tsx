
import React from "react";

type ClubEvent = {
  name: string;
  date?: string;
  image?: string;
};

type Organizer = {
  name: string;
  image: string;
  profileUrl?: string;
};

type ClubCardProps = {
  name: string;
  image: string;
  about: string | React.ReactNode;
  organizers?: Organizer[];
  socials?: { label: string; url: string }[];
  events?: ClubEvent[];
  className?: string;
};

const ClubCard: React.FC<ClubCardProps> = ({
  name,
  image,
  about,
  organizers,
  socials,
  events,
  className = "",
}) => {
  // Use the same gradient for WikiClub Tech UIT as in the detail page
  const getGradientClass = (clubName: string) => {
    if (clubName === "WikiClub Tech UIT") {
      return "from-neon-purple to-neon-red";
    }
    return "from-neon-blue to-neon-purple";
  };

  return (
    <div className={`rounded-2xl shadow-card bg-gradient-to-br from-[#181828] via-[#252445] to-[#181828] p-6 w-full max-w-xl mx-auto flex flex-col gap-5 hover:scale-[1.03] hover:shadow-glow transition-all duration-300 ${className}`}>
      <div className="flex flex-col md:flex-row gap-4">
        <img src={image} alt={name} className="h-24 w-24 rounded-xl object-cover border-2 border-neon-blue mx-auto md:mx-0" />
        <div className="flex-1 text-center md:text-left flex flex-col gap-1">
          <h3 className={`text-2xl md:text-3xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r ${getGradientClass(name)}`}>{name}</h3>
          <div className="text-gray-200 text-md">{about}</div>
          {socials && (
            <div className="flex gap-2 mt-2 justify-center md:justify-start">
              {socials.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="underline text-neon-orange font-medium hover:text-orange-300 transition">
                  {s.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      {organizers && (
        <div className="flex flex-col gap-2 mt-1">
          <span className="text-xs uppercase text-gray-400">Organizer{organizers.length>1?"s":""}:</span>
          <div className="flex gap-2 flex-wrap">
            {organizers.map((org) => (
              <a key={org.name} href={org.profileUrl||"#"} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#222242] px-2 py-1 rounded-lg shadow hover:bg-[#2e2e55] transition border border-transparent hover:border-neon-blue">
                <img src={org.image} alt={org.name} className="h-8 w-8 rounded-full" />
                <span className="text-white font-medium">{org.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
      {events && events.length > 0 && (
        <div>
          <div className="text-xs uppercase text-gray-400 mb-2">Past/Featured Events:</div>
          <div className="flex flex-wrap gap-4">
            {events.map((ev) => (
              <div key={ev.name} className="flex flex-col items-center text-center bg-[#232342] rounded-lg p-2 min-w-[90px] max-w-[120px] flex-1 hover:bg-[#28284d] transition">
                {ev.image && (
                  <img src={ev.image} alt={ev.name} className="h-12 w-12 object-contain rounded-md mb-1 border border-neon-purple" />
                )}
                <span className="text-white text-sm font-semibold">{ev.name}</span>
                {ev.date && <span className="text-xs text-gray-400">{ev.date}</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClubCard;
