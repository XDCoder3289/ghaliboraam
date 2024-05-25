"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { moods } from "../lib/moods";

export default function SelectMood() {
  return (
    <div className="">
      <Select
        label="What's your mood?"
        selectionMode="multiple"
        className="max-w-xs"
        variant="underlined"
      >
        {moods.map((mood) => (
          <SelectItem key={mood.emoji} value={mood.description}>
            {mood.emoji + " " + mood.description}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
