import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
const geoUrl =
  "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson";
const highlightedCountries = {
  USA: {
    name: "United States",
    organizations: [
      "World Bank",
      "USAID",
      "MCC (Millennium Challenge Corporation)",
      "PATH",
      "FHI 360",
      "Abt Associates",
      "DAI International",
      "Co-Impact",
      "Habitat for Humanity",
      "ADRA",
      "Disability Rights Fund",
      "IDE (International Development Enterprises)",
      "Red Panda Network",
      "CARE USA",
      "Laerdal (also Norway-based parent; US presence optional)",
    ],
    color: "#02327c",
  },
  GBR: {
    name: "United Kingdom",
    organizations: [
      "FCDO (Foreign, Commonwealth & Development Office)",
      "Save the Children International",
      "Plan International",
      "VSO (Voluntary Service Overseas)",
      "British Council",
      "World Vision International (Executive Office)",
      "WaterAid",
      "Practical Action",
      "Marie Stopes International (MSI Reproductive Choices)",
    ],
    color: "#02327c",
  },
  BEL: {
    name: "Belgium",
    organizations: ["European Union (EU)", "VJW Europe Srl"],
    color: "#02327c",
  },
  CHE: {
    name: "Switzerland",
    organizations: [
      "WHO (World Health Organization)",
      "IFRC (International Federation of Red Cross and Red Crescent Societies)",
      "UNHCR (UN Refugee Agency)",
      "WWF International",
      "CARE International Secretariat",
    ],
    color: "#02327c",
  },
  FRA: {
    name: "France",
    organizations: ["UNESCO"],
    color: "#02327c",
  },
  ITA: {
    name: "Italy",
    organizations: ["WFP (World Food Programme)"],
    color: "#02327c",
  },
  DEU: {
    name: "Germany",
    organizations: ["GIZ (Gesellschaft für Internationale Zusammenarbeit)"],
    color: "#02327c",
  },
  KOR: {
    name: "South Korea",
    organizations: [
      "KOICA (Korea International Cooperation Agency)",
      "Good Neighbors International",
    ],
    color: "#02327c",
  },
  JPN: {
    name: "Japan",
    organizations: ["Arigatou International"],
    color: "#02327c",
  },
  NOR: {
    name: "Norway",
    organizations: ["Laerdal Global Health / Laerdal Medical"],
    color: "#02327c",
  },
  NLD: {
    name: "Netherlands",
    organizations: ["Simavi"],
    color: "#02327c",
  },
  AUT: {
    name: "Austria",
    organizations: ["Impact Hub Network (Association Head Office Vienna)"],
    color: "#02327c",
  },
  LKA: {
    name: "Sri Lanka",
    organizations: ["IWMI (International Water Management Institute)"],
    color: "#02327c",
  },
  IND: {
    name: "India",
    organizations: ["Embassy of India / Ministry of External Affairs"],
    color: "#02327c",
  },
  NPL: {
    name: "Nepal",
    organizations: [
      "Government of Nepal",
      "NTB (Nepal Tourism Board)",
      "NTNC (National Trust for Nature Conservation)",
      "NHSSP (Nepal Health Sector Support Programme)",
      "NREP (Nepal Renewable Energy Programme)",
      "New ERA",
      "SPARSHA Nepal",
    ],
    color: "#02327c",
  },
  MYS: {
    name: "Malaysia",
    organizations: ["TWN (Third World Network)"],
    color: "#02327c",
  },
};

export default function GlobalPartnersMap() {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  return (
    <div>
      <div
        style={{
          width: "100%",
          position: "relative",
          backgroundColor: "#f7f9fc",
        }}
      >
        <ComposableMap projectionConfig={{ scale: 150 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const iso =
                  geo.properties.ISO_A3 || geo.id || geo.properties.id;
                const data = highlightedCountries[iso];
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={(e) => {
                      if (data) setHoveredCountry(data);
                    }}
                    onMouseMove={(e) => {
                      setTooltipPos({
                        x: e.clientX,
                        y: e.clientY,
                      });
                    }}
                    onMouseLeave={() => setHoveredCountry(null)}
                    style={{
                      default: {
                        fill: data ? data.color : "#E0E0E0",
                        stroke: "#FFF",
                        strokeWidth: 0.5,
                        outline: "none",
                        transition: "fill 0.3s ease",
                      },
                      hover: {
                        fill: data ? "#02327c" : "#ccc",
                        outline: "none",
                        cursor: data ? "pointer" : "default",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        {hoveredCountry && (
          <div
            style={{
              position: "fixed",
              top: tooltipPos.y + 20,
              left: tooltipPos.x + 20,
              background: "rgba(0, 0, 0, 0.75)",
              color: "white",
              backdropFilter: "blur(8px)",
              borderRadius: "12px",
              padding: "16px 20px",
              maxWidth: "300px",
              zIndex: 1000,
              pointerEvents: "none",
              boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
              transition: "opacity 0.2s ease",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "1rem",
                fontWeight: 600,
                borderBottom: "1px solid rgba(255,255,255,0.2)",
                paddingBottom: "6px",
                marginBottom: "8px",
              }}
            >
              {hoveredCountry.name}
            </h3>
            <ul style={{ margin: 0, paddingLeft: "20px", lineHeight: 1.5 }}>
              {hoveredCountry.organizations.map((org, idx) => (
                <li key={idx} style={{ fontSize: "0.9rem" }}>
                  {org}
                </li>
              ))}
            </ul>
          </div>
        )}
        <p
          style={{
            position: "absolute",
            bottom: "60px",
            width: "100%",
            textAlign: "center",
            color: "#333",
            fontSize: "1rem",
            fontWeight: 500,
            letterSpacing: "0.3px",
          }}
          className="hidden md:block"
        >
          Trusted by organizations based across the globe — united by purpose,
          driven by impact.
        </p>
        <p
          style={{
            position: "absolute",
            bottom: "10px",
            width: "100%",
            textAlign: "center",
            color: "#333",
            fontSize: "0.5rem",
            fontWeight: 500,
            letterSpacing: "0.3px",
          }}
          className="md:hidden"
        >
          Trusted by organizations based across the globe — united by purpose,
          driven by impact.
        </p>
        <div className="absolute transform -translate-x-1/2 top-5 md:top-10 left-1/2">
          <p className="pb-4 text-xs font-semibold text-black md:text-2xl xl:text-4xl">
            Organizations and their Countries
          </p>
        </div>
      </div>
    </div>
  );
}
