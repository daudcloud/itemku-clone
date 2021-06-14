import Layout from "../components/Layout/Layout";
import { useState, useEffect } from "react";
import ListItem from "../components/ListItem";

export default function Home() {
  const [data, setData] = useState([]);
  const [allType, setAllType] = useState([]);

  useEffect(() => {
    fetch("http://192.168.2.151:3000/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setAllType(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleClickAll = () => {
    setData(allType);
  };
  const handleClickVoucher = () => {
    const voucher = allType.filter((d) => d.type === "voucher");
    setData(voucher);
  };
  const handleClickTopup = () => {
    const topup = allType.filter((d) => d.type === "topup");
    setData(topup);
  };

  return (
    <div>
      <Layout>
        <div className="tabs">
          <div className="tab" onClick={handleClickAll}>
            Semua
          </div>
          <div className="tab" onClick={handleClickVoucher}>
            Voucher
          </div>
          <div className="tab" onClick={handleClickTopup}>
            Topup
          </div>
        </div>
        {data.map((d) => (
          <ListItem data={d} />
        ))}
      </Layout>
    </div>
  );
}
