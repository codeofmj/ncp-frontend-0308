document.addEventListener("DOMContentLoaded", function () {
  const boardNo = new URLSearchParams(window.location.search).get("no");

  //로컬 테스트용
  const API_URL = `http://localhost:8080/api/boards/${boardNo}`;

  //배포용
  // const API_URL = `/api/boards/${boardNo}`;

  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("b_title").textContent = data.title;
      document.getElementById("b_writer").textContent = data.writer;
      document.getElementById("b_createdAt").textContent = new Date(
        data.createdAt,
      ).toLocaleString();
      document.getElementById("b_content").textContent = data.content;
      if (data.fileName) {
        const fileLink = document.getElementById("b_file");
        fileLink.href = `/api/files/${data.fileName}`;
        fileLink.download = data.fileName;
        fileLink.textContent = "파일 다운로드";
      } else {
        document.getElementById("b_file").style.display = "none";
      }
    })
    .catch((error) => console.error("Error fetching board details:", error));
});
