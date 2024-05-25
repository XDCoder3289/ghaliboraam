"use client";
import { Select, SelectItem, Button } from "@nextui-org/react";
import { moods } from "../lib/search-data";
import { cities } from "../lib/search-data";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { fetchRestaurant } from "../lib/fetch-restaurant";

export default function SearchRestaurant() {
  const router = useRouter();

  const handleSearch = async () => {
    const data = await fetchRestaurant("islamabad", "restaurant");
  };
  return (
    <div>
      <div className="flex justify-center flex-col  items-center">
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

        <Select label="Select a city" className="max-w-xs" variant="underlined">
          {cities.map((city) => (
            <SelectItem key={city.value} value={city.value}>
              {city.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex justify-center mt-11">
        <Button onPress={handleSearch} color="warning">
          Find me something to eat
        </Button>
      </div>
    </div>
  );
}
