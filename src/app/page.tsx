import Image from "next/image";
import App from "./components/App";
import Button from "./components/Button";

import { APP_LIST_MAP } from "./lib/data";

export default function Home() {
  return (
    <div className="font-mono flex flex-col items-center justify-between w-screen h-screen">
      <main className="bg-blue-100 w-screen max-w-[1440px] p-8 grow">
        <div className="flex flex-col gap-4 flex-wrap">
          {APP_LIST_MAP.map(([name, icon]) => (
            <App img={icon} name={name} key={name} />
          ))}
        </div>
      </main>
      <footer className="bg-rose-300 flex justify-between py-2 px-4 w-screen max-w-[1440px] border-t-2 border-t-outline">
          <Button>
            <Image
                src={"/racket.png"}
                alt={""}
                width={24}
                height={24}
              ></Image>
            <p>Start</p>
          </Button>
          <div className="flex gap-2">
            <Button>
              <p>Date</p>
            </Button>
            <Button>
              <p>Time</p>
            </Button>
          </div>
      </footer>
    </div>
  );
}
