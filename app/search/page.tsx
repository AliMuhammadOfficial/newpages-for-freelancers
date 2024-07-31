"use client"
// app/search/page.tsx

import React, { useEffect, useState } from "react";
import MainServerComponent from "@/components/reusable/MainServerComponent";
import { House } from "@/interfaces/interfaces";

const SearchPage: React.FC = () => {
  const [data, setData] = useState<House[]>([]);
  const [jurisdictions, setJurisdictions] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/fetchResults");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        if (Array.isArray(result.data)) {
          setJurisdictions(
            Array.from(new Set(result.data.map((house: House) => house.city)))
          );
          setData(result.data);
        } else {
          console.error(
            "Fetched result data is not an array:",
            result ? result.data : result
          );
        }
      } catch (error) {
        console.error("Error fetching jurisdictions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <MainServerComponent
        data={data}
        jurisdictions={jurisdictions}
        loading={loading}
      />
    </div>
  );
};

export default SearchPage;
