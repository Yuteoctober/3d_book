import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
import x from '../assets/x.png'
import web from '../assets/web.png'
import dexscreener from '../assets/dexscreener.png'

const pictures = [
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
  "01",
  "02",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
      <main className="pointer-events-none select-none z-10 fixed inset-0 flex justify-between flex-col">
        <div className=" pointer-events-auto bg-slate-500 w-full h-7 bg-opacity-50 flex items-center justify-end">
          <div className="relative flex gap-1 text-white z-20 justify-center items-center pr-4">
            <a href="https://www.chillguy.io/" target="_blank">
              <img src={web} alt="web" className="hover:scale-110 w-[18px] z-20 cursor-pointer relative" />
            </a>
            <a href="https://x.com/chillguycto" target="_blank">
              <img src={x} alt="x" className="hover:scale-110 w-[29px] z-20 cursor-pointer relative" />            
            </a>
            <a href="https://dexscreener.com/solana/93tjgwff5ac5thymi8c4wejvvqq4tumemuyw1leyz7bu" target="_blank">
              <img src={dexscreener} alt="dexscreener" className="hover:scale-110 w-[20px] rounded-md z-20 cursor-pointer relative" />            
            </a>
          </div>
        </div>
        <div className="w-[100vw] pointer-events-auto flex justify-center">
          <div className="md:max-w-[1000px] md:w-[100%] flex items-center justify-center">
            <div className="relative bottom-2 bg-slate-500 bg-opacity-65 flex items-center justify-center gap-3 md:w-fit p-4 px-18 rounded-full">
              {[...pages].map((_, index) => (
                <button
                  key={index}
                  className={`border-transparent md:w-[50px] h-[30px] md:h-[50px] z-[9999999] ${
                    page === index ? "animate-bounce-to-top" : ""
                  } hover:scale-125 hover:border-white duration-100 px-2 py-3 rounded-full text-md uppercase shrink-0 border ${
                    index === page
                      ? "bg-white/90 text-black after:content-['.'] after:absolute after:bottom-[-28px] after:text-[40px] after:left-1/2 after:translate-x-[-50%] after:text-white"
                      : "bg-black/30 text-white"
                  }`}
                  onClick={() => {
                    setPage(index);
                  }}
                >
                  <p className=" relative bottom-[9px] md:bottom-0 text-[15px] md:text-[16px]">
                    {index}
                  </p>
                </button>
              ))}
            
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
