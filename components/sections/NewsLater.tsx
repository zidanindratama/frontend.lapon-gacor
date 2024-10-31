"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function NewsLater() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  return (
    <div className="w-full grid place-items-center h-[400px] bg-gradient-to-r from-greenSecondary to-greenPrimary">
      <div className="flex h-auto mx-5 flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Join To Our Newsletter
        </h2>
        <p className="text-white/90 text-sm md:text-base mb-8 max-w-6xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Convallis est urna adipiscing
          fringilla nulla diam lorem non mauris. Ultrices aliquet at quam
          adipiscing feugiat interdum mattis. Placerat donec risus diam sed et.
          A in ullamcorper ipsum.
        </p>
        <form onSubmit={handleSubmit} className="flex w-full max-w-3xl mx-auto">
          <div className="flex w-full flex-col md:flex-row items-center gap-3 rounded-xl md:rounded-full h-24 md:h-auto bg-white/10 p-1">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={cn(
                "flex-1 shadow-none bg-transparent border-none text-white focus-visible:ring-0 placeholder:text-white/60 focus:ring-0"
              )}
            />
            <Button
              type="submit"
              className="bg-[#E07B5B] w-full md:w-auto text-white hover:bg-[#c56a4e] rounded-xl md:rounded-full px-8"
            >
              Subscribe Us
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
