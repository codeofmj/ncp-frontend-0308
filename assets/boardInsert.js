document.addEventListener("DOMContentLoaded", function () {
  const titleInput = document.getElementById("title");
  const contentInput = document.getElementById("content");
  const fileInput = document.getElementById("file");
  const submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const title = titleInput.value.trim();
    const content = contentInput.value.trim();
    const file = fileInput.files[0];

    if (!title || !content) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (file) {
      formData.append("file", file);
    }

    //로컬 테스트용
    const API_URL = "http://localhost:8080/api/boards/insert";

    //배포용
    // const API_URL = "/api/boards/insert";

    fetch(API_URL, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("게시글이 성공적으로 등록되었습니다.");
          window.location.href = "board.html";
        } else {
          alert("게시글 등록에 실패했습니다.");
        }
      })
      .catch((error) => {
        console.error("Error submitting board:", error);
        alert("게시글 등록 중 오류가 발생했습니다.");
      });
  });
});
