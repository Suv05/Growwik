import Image from "next/image";

export default function LatestWorks() {
  const works = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1668469739030-007d6b74d82e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluc3RhZ3JhbSUyMHJlZWxzfGVufDB8fDB8fHww",
      alt: "Investment app interface showing trading charts and statistics",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1531887259712-aa6e090e9289?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluc3RhZ3JhbSUyMHJlZWxzfGVufDB8fDB8fHww",
      alt: "Movie promotional content featuring superhero characters",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1565716744284-76e26a661fa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGluc3RhZ3JhbSUyMHJlZWxzfGVufDB8fDB8fHww",
      alt: "Fashion photography showing ethnic wear collection",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1667420855394-e3530f4c8d3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGluc3RhZ3JhbSUyMHJlZWxzfGVufDB8fDB8fHww",
      alt: "Casual wear photography in outdoor setting",
    },
  ];

  return (
    <section className="bg-black py-16 px-4">
    <div className="container mx-auto">
      <h2 className="text-white text-4xl md:text-5xl font-bold mb-12 text-center">
        Our Latest Works
      </h2>
      
      {/* Works Gallery Container */}
      <div className="max-w-7xl mx-auto">
        {/* Works Gallery */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory justify-start md:justify-center">
          {works.map((work) => (
            <div
              key={work.id}
              className="flex-none w-[240px] md:w-[280px] snap-center first:ml-0 md:first:ml-auto"
            >
              {/* Phone Frame */}
              <div className="relative bg-white rounded-[3rem] p-3 aspect-[9/16]">
                {/* Phone Screen */}
                <div className="relative w-full h-full overflow-hidden rounded-[2.5rem]">
                  <Image
                    src={work.image}
                    alt={work.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 240px, 280px"
                  />
                </div>
                
                {/* Phone Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* <hr className="border-gray-400 w-auto mx-auto"/> */}
  </section>
  );
}
