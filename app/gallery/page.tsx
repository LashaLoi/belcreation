export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {[
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
        28, 29, 30, 31, 31,
      ].map((_, i) => {
        const path = `/${i + 10}.jpg`;

        return (
          <div key={i}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={path}
              alt={path}
            />
          </div>
        );
      })}
    </div>
  );
}
