import { Star } from "lucide-react";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Cahya A",
      description:
        "Matcha-nya enak banget, rasanya lembut dan nggak bikin eneg. Pas diminum sore-sore sambil kerja, jadi bikin rileks banget. Pokoknya recommended deh buat yang suka minuman segar tapi tetap sehat!",
      rate: 5,
    },
    {
      id: 2,
      name: "Arifach",
      description:
        "Awalnya coba-coba, tapi ternyata rasanya mantap banget. Manisnya pas, nggak bikin bosan, dan aromanya juga wangi. Sekarang tiap nongkrong sama temen suka bawa Matcha ini. Worth it banget!",
      rate: 4,
    },
  ];
  const TestimonialCard = ({ name, description, rate }) => {
    return (
      <div className=" bg-white w-[70%] mx-auto rounded-4xl shadow-lg">
        <div className="flex flex-col gap-10  pl-4 left-0 p-3">
          <div className="flex gap-1 mt-10">
            {Array.from({ length: rate }, (_, i) => (
              <Star key={i} color="#98c383" fill="#98c383" size={30} />
            ))}
          </div>
          <p className="font-light">{description}</p>
          <p className="pb-5 font-bold text-xl">- {name}</p>
        </div>
      </div>
    );
  };
  return (
    <section className="bg-[#fafbfa] py-20">
      <div className="container mx-auto">
        <div className="flex flex-col text-center gap-2">
          <h1 className="font-bold text-2xl md:text-4xl">
            Kenapa Mereka Pilih Matcha Kita?
          </h1>
          <h3 className="font-light">
            Nggak cuma enak, tapi juga bikin hati adem. Yuk intip kata mereka!
          </h3>
        </div>
        <div className="flex justify-center mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {testimonials.map((item) => (
              <TestimonialCard
                key={item.id}
                rate={item.rate}
                name={item.name}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
