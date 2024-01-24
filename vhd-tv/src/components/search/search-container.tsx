import { CommonCardType } from "@/types";
import React from "react";
import SearchList from "./search-list";
import { Button } from "@nextui-org/react";
import Link from "next/link";

interface SearchContainerProps {
  data: CommonCardType[] | null;
  search: string;
}

const SearchContainer = ({ data, search }: SearchContainerProps) => {
  return (
    <>
      {data && (
        <div className="fixed mt-4 min-w-[600px] rounded-2xl bg-stone-900 px-6 py-4 backdrop-blur-xl">
          {data.slice(0, 5).map((subData) => (
            <div key={subData.id}>
              <SearchList data={subData} />
            </div>
          ))}
          <div>
            <Link
              href={`/search?keyword=${search}`}
              className="flex items-center justify-center"
            >
              <Button
                fullWidth
                className="mt-4 bg-white/50 text-base text-white hover:text-primary"
                disableAnimation
                disableRipple
              >
                View more
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchContainer;
