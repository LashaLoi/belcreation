export default function SpeakersPage() {
  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        {[1, 2, 3].map((item) => (
          <div
            //   initial={{
            //     opacity: 0,
            //     scale: 0.9,
            //   }}
            //   animate={{
            //     opacity: 1,
            //     scale: 1,
            //   }}
            //   transition={{
            //     duration: 0.6,
            //     delay: item / 1000,
            //   }}
            key={item}
            className="max-w-sm bg-white/80 rounded-lg shadow"
          >
            <img
              className="rounded-t-lg object-cover object-top w-full h-[300px]"
              src="https://newlife.by/wp-content/uploads/2015/09/2015-09-28roohpe2.jpg"
              alt="photo"
            />
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  Леонид Вороненко
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
