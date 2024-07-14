document.addEventListener('DOMContentLoaded', function () {
    const contents = document.querySelectorAll('.content');
    let currentIndex = 0;

    function showNextContent() {
        contents.forEach(content => {
                 content.classList.remove('visible');
        }
    );
              const currentContent = contents[currentIndex];
                    currentContent.classList.add('visible');
             currentIndex = (currentIndex + 1) % contents.length;
    }

              showNextContent();
    setInterval(showNextContent, 2000);
}
);

document.addEventListener("DOMContentLoaded", function() {
    const headlines = document.querySelectorAll('.cycling-headline');
              let currentIndex = 0;
         function showHeadline(index) {
               headlines.forEach((headline, idx) => {
        if (idx === index) {
               headline.classList.add('active');
        } else {
                    headline.classList.remove('active');
        }
           }
);

    }
    function cycleHeadlines() {
            showHeadline(currentIndex);
          currentIndex = (currentIndex + 1) % headlines.length;
    }
    cycleHeadlines();

    setInterval(cycleHeadlines, 2000); 
  }
);
  