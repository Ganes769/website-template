import { useState } from "react";

const Section1 = () => {

  const [formState, setFormState] = useState({
    fullName: "",
    mobile: "",
    email: "",
    description: ""
  });

  const handleChange = (event) => {
    setFormState(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  // const handleSubmit = async () => {
  // const response = await fetch("https://formsubmit.co/32d88121f57fd98c76090104c0966641", {
  //   method: "POST", // *GET, POST, PUT, DELETE, etc.
  //   headers: {
  //     "Content-Type": "application/json",
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   body: JSON.stringify({
  //     // _subject: formState.fullName,
  //     email: formState.email,
  //     // phone: formState.mobile,
  //     description: formState.description
  //   }), // body data type must match "Content-Type" header
  // });

  // console.log(response)

  // const newWindow = window.open();
  // newWindow.document.open();
  // newWindow.document.write(response.body);
  // newWindow.document.close()
  // }

  return <section className="py-16 bg-gray-50">
    <div className="max-width-container px-4">
      <h2 className="h2 mb-16">Contact us to Discuss More on Your Project</h2>

      <div className="flex mobile:flex-col laptop:flex-row">
        <div className="flex-1 mb-12">
          <p className="p mb-10">Contact us to Discuss More on Your Project
            Please tell us a bit about you, your project, and how best to reach you. We'll get right back to you.</p>

          <h4 className="p text-3xl font-semibold">Contact us</h4>
          <p className="p text-blue-800 mb-10">Please email us at <strong>merinentertainment@gmail.com</strong> or call us at below contact offices</p>

          <p className="p text-2xl font-semibold text-blue-800">NEPAL</p>
          <p className="p">Basuki Marg, Mid-Baneshwor (Near Kantipur College of Management and Information Technology),House no.253 Kathmandu, Nepal</p>
          <p className="p">+977 9842983111</p>
        </div>

        <div className="flex-1 laptop:px-10">
          <form
            action="https://formsubmit.co/32d88121f57fd98c76090104c0966641" method="POST"
            className="flex flex-col"
          >
            <label className="mb-1 p font-semibold" htmlFor="fullName">Full Name</label>
            <input value={formState.fullName} placeholder="Full name" name="fullName" onChange={handleChange} className="border-[1px] border-gray-400 rounded-md mb-4 px-4 py-2" required />

            <label className="mb-1 p font-semibold" htmlFor="mobile">Mobile</label>
            <input type="number" value={formState.mobile} placeholder="Mobile" name="mobile" onChange={handleChange} className="border-[1px] border-gray-400 rounded-md mb-4 px-4 py-2" required />

            <label className="mb-1 p font-semibold" htmlFor="email">Email</label>
            <input type="email" value={formState.email} placeholder="Email" name="email" onChange={handleChange} className="border-[1px] border-gray-400 rounded-md mb-4 px-4 py-2" />

            <label className="mb-1 p font-semibold" htmlFor="description">Tell us about your project</label>
            <textarea rows={8} value={formState.description} placeholder="" name="description" onChange={handleChange} className="border-[1px] border-gray-400 rounded-md mb-4 px-4 py-2" required />

            <div>
              <input type="submit" class="btn" value="Send" className="button-primary bg-blue-600 cursor-pointer" />
            </div>

          </form>

          <a href="myapp://(tabs)/home">myapp://(tabs)/home</a>
          <a href="myapp://(tabs)/home/index">myapp://(tabs)/home/index</a>

        </div>
      </div>
    </div>
  </section>
}

export default Section1;