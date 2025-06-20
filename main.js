document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const message = "Nhập địa điểm bạn muốn đến...";
  let i = 0;

  function typeEffect() {
    if (i <= message.length) {
      searchInput.placeholder = message.slice(0, i);
      i++;
      setTimeout(typeEffect, 80);
    } else {
      setTimeout(() => {
        let j = message.length;
        function deleteEffect() {
          if (j >= 0) {
            searchInput.placeholder = message.slice(0, j);
            j--;
            setTimeout(deleteEffect, 40);
          } else {
            i = 0;
            typeEffect();
          }
        }
        deleteEffect();
      }, 1800);
    }
  }
  typeEffect();

  const dropdown = document.getElementById('tourDropdown');
  const toggle = document.getElementById('dropdownToggle');

  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    dropdown.classList.toggle('show');
  });

  document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });

  // ✅ Khi chọn tour → ẩn dropdown
  const tourLinks = dropdown.querySelectorAll('.dropdown-content a');
  tourLinks.forEach(link => {
    link.addEventListener('click', () => {
      dropdown.classList.remove('show');
    });
  });
});

//*Trang chủ *//
// let currentSlide = 0;
// const slides = document.querySelectorAll('.slide');

// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.classList.toggle('active', i === index);
//   });
// }

// function nextSlide() {
//   currentSlide = (currentSlide + 1) % slides.length;
//   showSlide(currentSlide);
// }

// function prevSlide() {
//   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//   showSlide(currentSlide);
// }

// // Optional: Tự chuyển slide mỗi 5s
// setInterval(() => {
//   nextSlide();
// }, 5000);

/*ảnh tour */
let current = 0;
const slides = document.querySelectorAll('.slide');
const total = slides.length;

document.querySelector('.next').addEventListener('click', () => {
  current = (current + 1) % total;
  updateSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
  current = (current - 1 + total) % total;
  updateSlide();
});

function updateSlide() {
  const offset = -current * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Optional: tự chạy mỗi 5s
setInterval(() => {
  current = (current + 1) % total;
  updateSlide();
}, 5000);
