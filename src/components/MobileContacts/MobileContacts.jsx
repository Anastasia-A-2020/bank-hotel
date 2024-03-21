import "./MobileContacts.css";

export default function MobileContacts() {
  return (
    <div className="flex flex-col items-center gap-y-[20px] mt-16 text-white">
      <a className="link relative" href="tel:+38 032 297 50 20">
        +38 032 297 50 20
      </a>
      <p className="uppercase">8 Lystopadovoho Chynu,Lviv</p>
      <ul className="flex flex-row gap-x-10">
        <li className="item">Facebook</li>
        <li className="item">Instagram</li>
        <li className="item">twitter</li>
      </ul>
    </div>
  );
}
