import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";

const fetchData = async (queryName) => {
  const url = `https://api.giphy.com/v1/videos/search?q=${queryName}&limit=20&api_key=Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g`;
  const sum = await fetch(url);
  return sum.json();
};

export const Giphy = () => {
  const [gifs, setGifs] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    const abortController = new AbortController();
    fetchData(value).then((res) => setGifs(res?.data));
    return () => abortController.abort();
  }, [value]);

  return (
    <div className="w-[100vw] h-[100%]">
      <button className="bg-white border-lg">Search</button>
      <input
        className="bg-green-300"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex flex-wrap w-[100%] h-[1090px] gap-10">
        {gifs.map((item) => (
          <Image
            src={item.images.original.url}
            width={300}
            height={300}
            alt="ima"
          />
        ))}
      </div>
    </div>
  );
};
