"use client";

import { useEffect, useState } from "react";
import { api } from "./lib/api";

export default function Home() {
  const [status, setStatus] = useState("loading...");

  useEffect(() => {
    api
      .get("/health")
      .then((res) => {
        console.log("SUCCESS", res.data);
        setStatus(res.data.status);
      })
      .catch((err) => {
        console.error("ERROR", err);
        setStatus("failed");
      });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">
        DataPilot AI
      </h1>

      <p className="mt-4">
        Backend Status: {status}
      </p>
    </div>
  );
}