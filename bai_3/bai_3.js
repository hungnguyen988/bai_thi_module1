class QuanLySach {
    constructor(maSach, tenSach, nam, soLuong, tinhTrang) {
        this.maSach = maSach;
        this.tenSach = tenSach;
        this.nam = nam;
        this.soLuong = soLuong;
        this.tinhTrang = tinhTrang;
    }
}

let mang = [
    new QuanLySach(12345, "toán", 2000, 3, true),
    new QuanLySach(23456, "văn", 1998, 4, true)
];

function danhSach() {

    mang.sort((a, b) => a.soLuong - b.soLuong);
    let oDuLieu = "";


    for (let i = 0; i < mang.length; i++) {
        oDuLieu += "<tr>";
        oDuLieu += `<td>${i + 1}</td>`;
        oDuLieu += `<td>${mang[i].maSach}</td>`;
        oDuLieu += `<td>${mang[i].tenSach}</td>`;
        oDuLieu += `<td>${mang[i].nam}</td>`;
        oDuLieu += `<td>${mang[i].soLuong}</td>`;
        oDuLieu += `<td>${mang[i].tinhTrang}</td>`;
        oDuLieu += "</tr>";
    }


    document.getElementById("list1").innerHTML = oDuLieu;
}

function layDuLieu() {
    do {
        maSachThem = prompt("  nhập mã sách ");
    } while (maSachThem < 10000 || maSachThem > 60000)

    let tenSachThem = prompt("  nhập tên sách ");
    do {
        namThem = prompt("  nhập năm xuất bản ");
    } while (namThem < 1000 || namThem >= 10000)

    let soLuongThem = prompt("  nhập số lượng ");
    let tinhTrangThem = "";
    if (soLuongThem > 0) {
        tinhTrangThem = true;
    } else {
        tinhTrangThem = false
    }
    newProduct = new QuanLySach(maSachThem, tenSachThem, namThem, soLuongThem, tinhTrangThem);

    mang.push(newProduct);
    danhSach();
}

danhSach();
