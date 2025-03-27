import React from "react";
import { Suspense } from "react";
import { TranscriptProvider } from "@/app/contexts/TranscriptContext";
import { EventProvider } from "@/app/contexts/EventContext";
import App from "./App";

export default function Page() {
  return (
    <TranscriptProvider>
      <EventProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </EventProvider>
    </TranscriptProvider>
  );
}
