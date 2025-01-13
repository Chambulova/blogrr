import Header from "./Header";
import Banner from "./Banner";

export default function App() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-orange-200 min-h-screen"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%223175%22%20height%3D%223174%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22a%22%20x1%3D%22.639%25%22%20x2%3D%2299.361%25%22%20y1%3D%220%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23FF8F71%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23FF3E55%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath%20fill%3D%22url%28%23a%29%22%20fill-rule%3D%22evenodd%22%20d%3D%22M1973.15%201193.185v788.41h-786.766v-688.41c0-55.228%2044.772-100%20100-100h686.767zm-1310.445-1.171c217.26%200%20393.383%20176.124%20393.383%20393.383v1.645c0%20217.26-176.123%20393.383-393.383%20393.383S269.322%201804.3%20269.322%201587.042v-1.645c0-217.26%20176.124-393.383%20393.383-393.383zm392.212-926.418v688.41c0%2055.23-44.771%20100-100%20100H268.151v-788.41h786.766zm918.234%200v788.41h-686.767c-55.228%200-100-44.771-100-100v-688.41h786.767z%22%20transform%3D%22rotate%2822%20162.072%202556.164%29%22%2F%3E%3C%2Fsvg%3E')`,
        }}
      >
        <Header />
        <Banner />
      </div>
    </>
  );
}
