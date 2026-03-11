document.addEventListener("DOMContentLoaded", function () {
  const boardTableBody = document.getElementById("boardTableBody");

  // 게시글 목록을 가져오는 함수
  function fetchBoardList() {
    //로컬 테스트용
    // const API_URL = "http://localhost:8080/api/board";

    //배포용
    const API_URL = "/api/board";
    fetch(API_URL)
      .then((response) => response.text())
      .then((data) => {
        alert(data);
      })
      .catch((error) => console.error("Error fetching board list:", error));

    // fetch(API_URL)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     boardTableBody.innerHTML = "";
    //     data.forEach((board) => {
    //       const row = document.createElement("tr");
    //       row.innerHTML = `
    //                     <td>${board.id}</td>
    //                     <td><a href="./boardDetail.html?no=${board.id}">${board.title}</a></td>
    //                     <td>${board.writer}</td>
    //                     <td>${new Date(board.createdAt).toLocaleString()}</td>
    //                 `;
    //       boardTableBody.appendChild(row);
    //     });
    //   })
    //   .catch((error) => console.error("Error fetching board list:", error));
  }

  // 페이지 로드 시 게시글 목록을 가져옴
  fetchBoardList();
});
