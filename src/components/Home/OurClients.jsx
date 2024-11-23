import Image from "next/image";

function OurClients({}) {
  const clients = [
    {
      name: "Britannia",
      logo: "/brands/Britannia.svg",
    },
    {
      name: "DTOOR",
      logo: "/brands/dTooR.svg",
    },
    {
      name: "FLIMORA",
      logo: "/brands/Filmora-Go.svg",
    },
    {
      name: "FLAMAPP",
      logo: "/brands/FlamApp.svg",
    },
    {
      name: "FREEDOM-OIL",
      logo: "/brands/Freedom-Oil.svg",
    },
    {
      name: "HANGOUT-HUB",
      logo: "/brands/Hangout-Hub.svg",
    },
    {
      name: "LUMA-AI",
      logo: "/brands/Luma-AI.svg",
    },
    {
      name: "MANIPAL-EDUCATION",
      logo: "/brands/Manipal-Education.svg",
    },
    {
      name: "MAONO",
      logo: "/brands/Maono.svg",
    },
    {
      name: "METASHOT",
      logo: "/brands/Metashot.svg",
    },
    {
      name: "MOJ",
      logo: "/brands/Moj.svg",
    },
    {
      name: "PUNCH TRADING",
      logo: "/brands/Punch-Trading.svg",
    },
    {
      name: "ROOTER",
      logo: "/brands/Rooter.svg",
    },
    
  ];
  return (
    <>
      <div className="bg-black p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-12">
            Clients we worked
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {clients.map((client, index) => (
              <div
                key={index}
                className=" rounded-2xl p-6 flex items-center justify-center h-24"
              >
                <Image
                  src={client.logo}
                  alt={clients.name}
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-full"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Case Studies
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurClients;
