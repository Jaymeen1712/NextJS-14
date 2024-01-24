"use client";

import { getSearchMediaAPI } from "@/apis/common";
import useDebounce from "@/hooks/useDebounce";
import { CommonCardType } from "@/types";
import { Input, InputProps } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import SearchContainer from "./search-container";
import { usePathname } from "next/navigation";

const Search = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isInputFocused, setIsInputFocused] = useState(true);
  const debouncedValue = useDebounce(inputValue, 1000);
  const pathname = usePathname();
  const [searchResults, setSearchResults] = useState<CommonCardType[] | null>(
    [],
  );

  const handleInputChange: InputProps["onChange"] = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const getSearchResults = async () => {
      if (debouncedValue) {
        const { response: searchMediaResponse, errors: searchMediaErrors } =
          await getSearchMediaAPI(debouncedValue);

        if (!searchMediaErrors) {
          setSearchResults(searchMediaResponse.results);
        }
      }
    };
    getSearchResults();
  }, [debouncedValue]);

  useEffect(() => {
    setSearchResults([]);
    setInputValue("");
  }, [pathname]);

  return (
    <>
      <Input
        size="sm"
        radius="sm"
        // startContent={<Search />}
        placeholder="Search for movies or tv series"
        variant="faded"
        labelPlacement="outside"
        // classNames={{
        //   label: "text-black",
        //   // input: ["bg-neutral-700"],
        //   // mainWrapper: ["bg-neutral-700"]
        // }}
        className="min-w-[750px]"
        onChange={handleInputChange}
        value={inputValue}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
      />
      {searchResults?.length && debouncedValue && isInputFocused ? (
        <SearchContainer data={searchResults} search={debouncedValue} />
      ) : null}
    </>
  );
};

export default Search;
