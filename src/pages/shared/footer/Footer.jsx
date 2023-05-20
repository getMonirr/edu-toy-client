import { Link } from "react-router-dom";
import Logo from "../../../assets/abacus.png";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-edu-bg">
        <footer className="footer p-10 text-base-content container mx-auto py-20">
          <div>
            <span className="footer-title">Office Address</span>
            <p>Level-8, 43, Banani, Dhaka</p>
            <p>Support: support@edu-toy.com</p>
            <p>(Available: Sat - Thu, 10:00 AM To 7:00 PM)</p>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <Link className="link link-hover">About us</Link>
            <Link className="link link-hover">Contact</Link>
            <Link className="link link-hover">Jobs</Link>
          </div>
          <div>
            <span className="footer-title">Need Help?</span>
            <p>Call Us On: +880 1771-00000</p>
            <p>or Email Us: help@edu-toy.com</p>
          </div>
          <div>
            <span className="footer-title">Social</span>
            <div className="grid grid-flow-col gap-4">
              <Link to="" className="hover:text-edu-secondary">
                <FaTwitter size={25} />
              </Link>
              <Link to="" className="hover:text-edu-secondary">
                <FaFacebook size={25} />
              </Link>
              <Link to="" className="hover:text-edu-secondary">
                <FaLinkedin size={25} />
              </Link>
              <Link to="" className="hover:text-edu-secondary">
                <FaInstagram size={25} />
              </Link>
              <Link to="" className="hover:text-edu-secondary">
                <FaYoutube size={25} />
              </Link>
            </div>
          </div>
        </footer>
      </div>
      <div>
        <footer className="footer footer-center p-10 bg-slate-600 text-edu-bg py-30">
          <div>
            <div>
              <Link
                to="/"
                className="btn btn-ghost normal-case text-xl hover:bg-transparent"
              >
                <div className="flex gap-3 items-center justify-center bg-transparent">
                  <img className="w-10" src={Logo} alt="logo" />
                  <p className="text-2xl md:text-3xl font-edu-baloo logo-title bg-transparent">
                    Edu Toy
                  </p>
                </div>
              </Link>
            </div>
            <p className="font-bold">
              Edu-Toy Industries Ltd. <br />
              Providing reliable tech since 1997
            </p>
            <p>Copyright © 2023 - All right reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
