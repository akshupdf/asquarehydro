
import img from "../images/tom.jpg";
import logo from "../images/logo.jpeg"

const ContactUs = () => {
    return (
        <div style={{ backgroundImage:`url(${img})` }} className="flex justify-center items-center h-screen bg-contain bg-fixed">
        <div className="p-4 m-4 lg:w-[30%] lg:h-60 bg-gray-200 shadow-lg rounded-lg">
            <img src={logo} alt="" className="w-20 h-18 mx-auto" />
            <h1 className="text-2xl m-2 font-bold">A SQUARE HYDROPONICS</h1>
            <p className="m-2">Surya Nagar, Vitawa, Kalwa, Thane, Maharashtra 400605</p>
            <p className="m-2">9320222449/9152678498</p>
            <p className="m-2">asquarehydro@gmail.com</p>
        </div>
    </div>
      )}

export default ContactUs;

