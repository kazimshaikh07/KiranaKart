// JavaScript for Help Center Functionality
// FAQ Toggle Functionality
function toggleFAQ(index) {
  const faqAnswers = document.querySelectorAll(".faq-answer");
  const faqIcons = document.querySelectorAll(".faq-icon");

  // Close all other FAQs
  faqAnswers.forEach((answer, i) => {
    if (i !== index) {
      answer.classList.remove("open");
      faqIcons[i].textContent = "+";
    }
  });

  // Toggle current FAQ
  const currentAnswer = faqAnswers[index];
  const currentIcon = faqIcons[index];

  if (currentAnswer.classList.contains("open")) {
    currentAnswer.classList.remove("open");
    currentIcon.textContent = "+";
  } else {
    currentAnswer.classList.add("open");
    currentIcon.textContent = "−";
  }
}

// Search Functionality
document.getElementById("searchInput").addEventListener("input", function (e) {
  const searchTerm = e.target.value.toLowerCase();
  const faqButtons = document.querySelectorAll(
    ".border.border-gray-200 button"
  );

  faqButtons.forEach((button) => {
    const text = button.textContent.toLowerCase();
    const parent = button.closest(".border.border-gray-200");

    if (text.includes(searchTerm) || searchTerm === "") {
      parent.style.display = "block";

      // Highlight search terms
      if (searchTerm !== "") {
        const regex = new RegExp(`(${searchTerm})`, "gi");
        const originalText = button.childNodes[0].textContent;
        const highlightedText = originalText.replace(
          regex,
          '<span class="search-highlight">$1</span>'
        );
        button.childNodes[0].innerHTML = highlightedText;
      } else {
        button.childNodes[0].innerHTML = button.childNodes[0].textContent;
      }
    } else {
      parent.style.display = "none";
    }
  });
});

// Category Navigation
function showCategory(category) {
  // This would typically filter content or navigate to category pages
  alert(
    `Showing ${category.replace(
      "-",
      " "
    )} articles. This would typically filter the content or navigate to a dedicated category page.`
  );
}

// Contact Support Button
document.querySelector("header button").addEventListener("click", function () {
  alert("This would open a contact form or redirect to your support system.");
});

document
  .querySelector(".bg-blue-600.w-full")
  .addEventListener("click", function () {
    alert("This would open your support ticket system or contact form.");
  });
(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'976a17e8b3652eaa',t:'MTc1NjQ1MDAwOC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
