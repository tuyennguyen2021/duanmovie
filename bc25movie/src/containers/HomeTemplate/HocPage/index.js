import React from "react";
import Nhanvien from "./nhanvien";
// import SanPham from "./sanpham";
import WithCard from "./with-card";

const WapperCard = WithCard(Nhanvien);

export default function HocPage() {
  return (
    <div>
      <h1>*HocPage</h1>
      <WapperCard />
    </div>
  );
}
