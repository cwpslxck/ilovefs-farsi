import React, { useState } from "react";
import { toPng } from "html-to-image";

const DigitalPostcard = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleDownload = () => {
    const node = document.getElementById("postcard");
    toPng(node, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "ilovefs.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center min-h-[90vh] p-8">
      {/* کارت پستال */}
      <div
        id="postcard"
        style={{ backgroundImage: "url('/postcard.png')" }}
        className="aspect-[16/9] bg-center bg-no-repeat w-full h-auto bg-cover text-white relative"
      >
        {/* متن اول (message) */}
        <p className="absolute top-[30%] right-[6%] max-w-[40%] text-xs md:text-base lg:text-lg font-medium line-clamp-3">
          {message}
        </p>

        {/* متن دوم (name) */}
        <p className="absolute font-light bottom-[10%] right-[20%] w-[80%] text-xs md:text-sm lg:text-base line-clamp-1 max-w-[30%]">
          {name}
        </p>
      </div>

      {/* ورودی‌های کاربر */}
      <div className="flex flex-col gap-4 mt-6 w-full max-w-md">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="چرا نرم افزار آزاد رو دوست داری؟"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="نام خود را وارد کنید"
        />
        <button
          onClick={handleDownload}
          className="px-8 py-3 mt-4 bg-white hover:bg-white/90 duration-200 text-black rounded-full font-bold"
        >
          دانلود کارت پستال
        </button>
      </div>
    </div>
  );
};

export default DigitalPostcard;
