import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import WorkSlider from "../../components/WorkSlider";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import { FaArrowRight } from "react-icons/fa";
import { fadeIn } from "@/utils";
import { FormEvent, useRef, useState } from "react";
import { ResponseData } from "../api/send-mail";

const Contact = () => {
  console.log("rendered");
  // Live Form Handling
  const [userName, setUserName] = useState("");
  const [email, seteMail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [errors, setErrors]: any = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
    submit: false,
  });

  //declare the REGEX object
  const regex: any = {
    name: /^[a-zA-Z0-9\s]*$/,
    email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/,
    subject: /^[a-zA-Z0-9\s]*$/,
    message: /(.*)/,
  };

  const handleBlur = (e: any) => {
    //clone the previuos error state
    const newErrors = { ...errors };
    //extract the name and value
    const { name, value } = e;
    //show error messages & disable submit
    newErrors[name] = !value.match(regex[name]);
    newErrors.submit = !value.match(regex[name]);
    setErrors(newErrors);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.keys(errors)
      .filter((key) => key != "submit")
      .map((key) => {
        let value = formData.get(key);

        if (value?.toString().match(regex[key])) return value;
      });
    let isUndefined = formValues.includes(undefined);
    if (isUndefined) return;
    const [name, email, subject, message] = formValues;
    const mailResult = await sendMail(
      name?.toString(),
      email?.toString(),
      subject?.toString(),
      message?.toString()
    );
    console.log(mailResult);
    if (mailResult.statusMessage == "success") {
      console.log('sending autoreply');
      sendAutoreply(name?.toString(), email?.toString());
    } else {
    }
  };

  const sendMail = async (
    name?: string,
    email?: string,
    subject?: string,
    message?: string
  ) => {
    const emailParams = { name, email, subject, message };
    const res = await fetch("api/send-mail", {
      method: "POST",
      body: JSON.stringify(emailParams),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { statusMessage, errors }: ResponseData = await res.json();

    if (errors) {
      console.log(errors);
      throw new Error(errors);
    }

    // return { data }
    console.log(statusMessage, "mail");
    return {statusMessage};
  };
  
  
  const sendAutoreply = async (name?: string, email?: string) => {
    const emailParams = { name, email };
    const res = await fetch("api/send-autoreply", {
      method: "POST",
      body: JSON.stringify(emailParams),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const {
      statusMessage,
      errors,
    }: ResponseData =
      await res.json();

    if (errors) throw new Error(errors);

    // return { data }
    console.log(statusMessage, "reply");
    return statusMessage;
  };

  return (
    <section className="w-full h-full">
      <motion.div
        className="flex flex-col justify-center items-center w-full h-full mx-auto px-10 lg:px-0 lg:max-w-[50%]"
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        {/* Text */}
        <div className="font-bold text-[32px]">
          <h1>
            Let&apos;s <span className="text-accent">connect.</span>
          </h1>
        </div>

        {/* form */}
        <form
          action=""
          className="flex flex-col bg-transparent gap-6 w-full mt-5 z-50"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex gap-x-6">
            <div className="flex flex-col flex-1">
              <input
                type="text"
                name="name"
                id="name"
                className={`input`}
                placeholder="name"
                onBlur={(e) => handleBlur(e.currentTarget)}
              />
              {errors.name && (
                <span className="text-red-500">
                  name should be only letters, spaces and numbers
                </span>
              )}
            </div>
            <div className="flex flex-col xb flex-1">
              <input
                type="email"
                name="email"
                id="email"
                className="input"
                placeholder="email"
                onBlur={(e) => handleBlur(e.currentTarget)}
              />
              {errors.email && (
                <span className="text-red-500">
                  please enter a valid email address
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="subject"
              id="subject"
              className="input"
              placeholder="subject"
              onBlur={(e) => handleBlur(e.currentTarget)}
            />
            {errors.subject && (
              <span className="text-red-500">
                subject should be only letters, spaces and numbers
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <textarea
              name="message"
              id="message"
              className="textarea"
              placeholder="message"
              onBlur={(e) => handleBlur(e.currentTarget)}
            ></textarea>
            {errors.message && (
              <span className="text-red-500">Error in message format</span>
            )}
          </div>
          <button
            type="submit"
            className={`rounded-full w-[150px] h-[40px] border flex justify-center items-center group transition duration-300 overflow-hidden hover:border-accent ${
              errors.submit && " bg-gray-500 pointer-events-none "
            }`}
            disabled={errors.submit}
          >
            <span
              className={`group-hover:-translate-y-[120%] group-hover:opacity-0 transition duration-300 `}
            >
              Let&apos;s talk
            </span>
            <FaArrowRight
              className={`-translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 absolute `}
            />
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
