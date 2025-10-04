import Image from "next/image";

export default function App({ img, name }: { img: string, name: string }) {
  return (
    <div className="flex flex-col align-center gap-2 w-24">
      <Image
        src={img}
        alt={name}
        width={96}
        height={96}
      ></Image>
      <p className="font-mono text-center">{name}</p>
    </div>
  );
}
