"use client"

import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types"
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

interface FilterProps {
    data:(Size | Color)[];
    name:string;
    valueKey:string;
}

const Filter:React.FC<FilterProps> = ({
    data,
    name,
    valueKey
}) =>{

    const searchPrams = useSearchParams();
    const router = useRouter();

    const selectedValue = searchPrams.get(valueKey);

const onClick = (id: string) => {
  const current = queryString.parse(searchPrams.toString());

  const query = {
    ...current,
    [valueKey]: id
  };

  if (current[valueKey] === id) {
    delete query[valueKey]; 
  }

  const url = queryString.stringifyUrl({
    url: window.location.pathname,
    query
  }, { skipNull: true });

  router.push(url);
};

    return(
        <div className="mb-8">
        <h3>
            {name}
        </h3>
        <hr className="my-4 border border-gray-300 mr-2"/>
        <div className="flex flex-wrap gap-2">
            {data.map((filter)=>(
                <div key={filter.id} className="flex items-center">
                    <Button className={cn(
                        "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                        selectedValue === filter.id && "bg-black text-white"
                    )}
                    onClick={() => onClick(filter.id)}
                    >
                        {filter.name}
                    </Button>
                </div>
            ))}
        </div>
        </div>
    )
 }

 export default Filter