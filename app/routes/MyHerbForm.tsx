import { useState } from "react";
import AppMenu from "./template/headr&manu";
import Foolter from "./template/footer";

export default function CreateCard() {

  const [herbName, setHerbName] = useState("");
  const [description, setDescription] = useState("");
  const [cardList, setCardList] = useState([]);
  const [manufacturerTel, setManufacturerTel] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [herbType, setHerbType] = useState("");
  const [benefits, setBenefits] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [nextCardId, setNextCardId] = useState(1);
  const [usage, setUsage] = useState("ยาใช้ทั้งภายนอกภายใน");
  const [totalCards, setTotalCards] = useState(0);

  const handleClear = () => {
    setHerbName("");
    setDescription("");
    setManufacturerTel("");
    setImageUrl("");
    setHerbType("");
    setBenefits("");
    setManufacturer("");
    setUsage("ยาใช้ทั้งภายนอกภายใน");
  };

  const handleClickAdd = (
    herbName,
    description,
    manufacturerTel,
    imageUrl,
    herbType,
    benefits,
    manufacturer,
    usage
  ) => {
    if (
      !herbName ||
      !description ||
      !manufacturerTel ||
      !imageUrl ||
      !herbType ||
      !benefits ||
      !manufacturer ||
      !usage
    ) {
      alert("กรุณากรอกข้อมูลให้ครบทุกช่อง"); 
      // ถ้าพบว่าตัวแปเป็นค่าว่างจะแสดงข้อความนี้
      return;
    }

    setCardList([
      ...cardList,
      {
        id: nextCardId,
        name: herbName,
        description: description,
        tel: manufacturerTel,
        images: imageUrl,
        type: herbType,
        benefits: benefits,
        info: manufacturer,
        usage: usage,
      },
    ]);

    setNextCardId(nextCardId + 1);
    setTotalCards(totalCards + 1);
  };

  return (
    <>
      <AppMenu />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">
          เพิ่มข้อมูลยาสมุนไพร
        </h1>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700">ชื่อยาสมุนไพร :</label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                name="herbName"
                value={herbName}
                onChange={(e) => setHerbName(e.target.value)}
              />
            </div>

            {/* text select tailwin css */}
            <div className="mb-4">
              <label className="block text-gray-700">ประเภทยาสมุนไพร :</label>
              <select
                id="herbType"
                className="w-full px-3 py-2 border rounded-lg"
                name="herbType"
                value={herbType}
                onChange={(e) => setHerbType(e.target.value)}
              >
                <option value="">เลือกประเภท</option>
                <option value="ยาสมุนไพรในบัญชียาหลักแห่งชาติ">
                  ยาสมุนไพรในบัญชียาหลักแห่งชาติ
                </option>
                <option value="ยาสมุนไพรที่ประกาศเป็นยาสามัญประจำบ้าน">
                  ยาสมุนไพรที่ประกาศเป็นยาสามัญประจำบ้าน
                </option>
                <option value="ยาเฉพาะที่">ยาเฉพาะที่</option>
                <option value="ยาต้มเฉพาะราย">ยาต้มเฉพาะราย</option>
              </select>
            </div>
            {/* text select tailwin css end */}
            {/* ///////////////////////////////////////// */}
            {/* radio tailwind css */}
            <div className="mb-4">
              <label className="block text-gray-700">การนำไปใช้ :</label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    value="ยาใช้ภายนอก"
                    checked={usage === "ยาใช้ภายนอก"}
                    onChange={(e) => setUsage(e.target.value)}
                  />
                  ยาใช้ภายนอก
                </label>
                <label>
                  <input
                    type="radio"
                    value="ยาให้ภายใน"
                    checked={usage === "ยาให้ภายใน"}
                    onChange={(e) => setUsage(e.target.value)}
                  />
                  ยาให้ภายใน
                </label>
                <label>
                  <input
                    type="radio"
                    value="ยาใช้ทั้งภายนอกภายใน"
                    checked={usage === "ยาใช้ทั้งภายนอกภายใน"}
                    onChange={(e) => setUsage(e.target.value)}
                  />
                  ยาใช้ทั้งภายนอกภายใน
                </label>
              </div>
            </div>
            {/* radio tailwind css end */}
            <div className="mb-4">
              <label className="block text-gray-700">ผู้ผลิต :</label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                name="manufacturer"
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">
                ติดต่อผู้ผลิต เบอร์โทร :
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                name="manufacturerTel"
                value={manufacturerTel}
                onChange={(e) => setManufacturerTel(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">ภาพตัวอย่าง (URL)</label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                name="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700">รายละเอียด :</label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-4 col-span-2">
              <label className="block text-gray-700">สรรพคุณ :</label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                name="benefits"
                value={benefits}
                onChange={(e) => setBenefits(e.target.value)}
              />
            </div>
          </div>
          <p className="text-center text-red-500 mt-4">
            ****กรุณากรอกข้อมูลให้สมบูรณ์****
          </p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() =>
                handleClickAdd(
                  herbName,
                  description,
                  manufacturerTel,
                  imageUrl,
                  herbType,
                  benefits,
                  manufacturer,
                  usage
                )
              }
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              เพิ่มข้อมูล
            </button>
            <button
              onClick={handleClear}
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              เคลียร์
            </button>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center mb-4">
            ข้อมูลที่ถูกสมุนไพรที่ถูกเพิ่มเข้ามา ({totalCards})
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white table-fixed">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">ชื่อยาสมุนไพร</th>
                  <th className="py-2 px-4 border-b">รายละเอียด</th>
                  <th className="py-2 px-4 border-b">ติดต่อผู้ผลิต</th>
                  <th className="py-2 px-4 border-b">ประเภทยาสมุนไพร</th>
                  <th className="py-2 px-4 border-b">สรรพคุณ</th>
                  <th className="py-2 px-4 border-b">ผู้ผลิต</th>
                  <th className="py-2 px-4 border-b">การนำไปใช้</th>
                  <th className="py-2 px-4 border-b">ภาพตัวอย่าง</th>
                </tr>
              </thead>
              <tbody>
                {cardList.map((card) => (
                  <tr key={card.id}>
                    <td className="py-2 px-4 border-b">{card.name}</td>
                    <td className="py-2 px-4 border-b">{card.description}</td>
                    <td className="py-2 px-4 border-b">{card.tel}</td>
                    <td className="py-2 px-4 border-b">{card.type}</td>
                    <td className="py-2 px-4 border-b">{card.benefits}</td>
                    <td className="py-2 px-4 border-b">{card.info}</td>
                    <td className="py-2 px-4 border-b">{card.usage}</td>
                    <td className="py-2 px-4 border-b">
                      {card.images && (
                        <img
                          src={card.images}
                          alt={`${card.name}'s image`}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Foolter />
    </>
  );
}