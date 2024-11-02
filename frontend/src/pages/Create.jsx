import InputField from "../components/InputField";
import { inputs } from "../utils/constants";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    //* inputlardaki veriyi nesne şeklinde alalım
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    //* datanın içerisindeki kateagorileri stringden diziye çevir
    data.genre = data.genre.split(",");
    //* apiye film oluşturma isteği gönder
    api
      .post("/movies", data)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert("Bir hata oluştu");
        console.log("Error", err);
      });
  };
  return (
    <div className="bg-yellow-600 flex-1 grid place-items-center p-5 py-8">
      <div className="bg-white max-w-[1000px] p-10 rounded shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold mb-10">Yeni Film Oluştur</h1>
          {inputs.map((props) => (
            <InputField {...props} key={props.name} />
          ))}
          <button className="bg-yellow-600 p-1 rounded-md text-white font-semibold hover:bg-yellow-500">
            Oluştur
          </button>
        </form>

        <div className="flex items-center justify-center">
          <img
            className="rounded-full max-h-[300px]"
            src="/movie-bg.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Create;
