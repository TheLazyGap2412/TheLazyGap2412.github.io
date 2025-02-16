function startProcess() {
    const fileInput = document.getElementById("fileInput");
    if (fileInput.files.length === 0) {
        alert("Chọn tệp trước!");
        return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);

    fetch("https://pjavgapprojectrepo.onrender.com", { // Thay bằng URL backend của bạn
        method: "POST",
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = file.name.replace(/Demo\./gi, ""); // Xóa "Demo." trong tên file
        link.click();
    })
    .catch(() => alert("Lỗi xử lý file!"));
}
