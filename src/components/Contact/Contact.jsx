import React, { useEffect, useState } from 'react'

const Contact = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  const [toggle,setToggle] = useState(false)
  const onSubmit = async (event) => {
    event.preventDefault();
    setToggle(!toggle)
    const formData = new FormData(event.target);

    formData.append("access_key", "f11db649-0301-41ed-9363-9db6ab89f2ff");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <section className="h-screen text-gray-600 body-font relative pt-24 z-10">
    <div className="absolute inset-0 bg-gray-300">
      <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{filter:' black(1) contrast(1.2) opacity(0.4)'}}></iframe>
    </div>
    <div className="container px-5 py-24 mx-auto flex">
      <form className="lg:w-1/3 md:w-1/2 h-[30rem] bg-black text-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md" onSubmit={onSubmit}>
        {!toggle && <div className=""> <h2 className="text-white text-lg mb-1 font-medium title-font">Mail Me</h2>
        <p className="leading-relaxed mb-5 text-white">Your Emails will be read by Our team</p>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-white">Message</label>
          <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button className="w-full text-white bg-purple-400 border-0 py-2 px-6 focus:outline-none hover:bg-purple-300 rounded text-lg">Submit</button>
        <p className="text-xs text-white mt-3 text-center" >There is a way for everything</p></div>}
        {toggle && <div className='bg-green-400 h-[30rem] w-full flex justify-center items-center'>
          <div className='text-3xl font-semibold'>Sent!!!</div>
          </div>}
      </form>
    </div>
  </section>
  )
}

export default Contact
