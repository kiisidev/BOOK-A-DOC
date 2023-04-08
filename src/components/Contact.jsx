import contact from "../assets/contact.webp";
export default function Contact() {
  return (
    <section className=" h-[100vh] bg-midAsh">
      <h3 className="text-center relative top-16 pt-16 text-3xl font-medium ">
        For any any kain issue, you fit reach us
      </h3>
      <div className="flex justify-around mt-40">
        <aside>
          <form className="grid grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className=" gridy w-100 h-16 rounded-xl border-[1px] mt-5  p-4 border-hint"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-48 h-16 rounded-xl border-[1px] mt-5 p-4 border-hint"
            />
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              className="w-48 h-16 rounded-xl border-[1px] mt-5 p-4 ml-4 border-hint"
            />
            <input
              type="text"
              name="messages"
              placeholder="Messages"
              className="w-100 gridy h-16 rounded-xl border-[1px]   mt-5 px-4 py-20   border-hint"
            />
            <button className=" gridy rounded-xl px-4 py-3  mt-5 bg-hint text-white">
              submit
            </button>
          </form>
        </aside>
        <aside>
          <img src={contact} alt="contact" />
        </aside>
      </div>
    </section>
  );
}
