document.addEventListener('DOMContentLoaded', function () {
  var shelf = document.getElementById('shelf');
  var pane = document.getElementById('readingPane');
  var closeBtn = document.getElementById('closeBtn');
  var selectedBook = null;
  var articles = {};

  // Leather color rotation
  var leatherColors = [
    'leather-forest',
    'leather-oxblood',
    'leather-navy',
    'leather-tan',
    'leather-plum',
    'leather-teal',
    'leather-slate',
    'leather-bronze'
  ];

  // Size variations
  var heights = [175, 168, 160, 172, 165, 178, 162, 170, 174, 166];
  var widths  = [52, 46, 42, 50, 44, 48, 54, 40, 56, 45];

  // Roman numerals
  function toRoman(num) {
    var lookup = [
      [1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],
      [100,'C'],[90,'XC'],[50,'L'],[40,'XL'],
      [10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']
    ];
    var result = '';
    for (var i = 0; i < lookup.length; i++) {
      while (num >= lookup[i][0]) {
        result += lookup[i][1];
        num -= lookup[i][0];
      }
    }
    return result;
  }

  function createBook(article, index) {
    var leather = leatherColors[index % leatherColors.length];
    var height = heights[index % heights.length];
    var baseWidth = widths[index % widths.length];

    // Wider spine for longer titles
    var titleLen = article.title.length;
    var width = titleLen > 20 ? Math.max(baseWidth, 56) :
                titleLen > 14 ? Math.max(baseWidth, 50) : baseWidth;

    var volNum = toRoman(index + 1);

    var b = document.createElement('button');
    b.className = 'book ' + leather;
    b.style.height = height + 'px';
    b.style.width = width + 'px';
    b.setAttribute('role', 'listitem');
    b.setAttribute('aria-label', 'Read article: ' + article.title);
    b.innerHTML =
      '<span class="spine-title">' + article.title + '</span>' +
      '<span class="spine-vol">Vol. ' + volNum + '</span>';

    b.addEventListener('click', function () {
      openArticle(article, b);
    });

    return b;
  }

  function createBookend() {
    var end = document.createElement('div');
    end.className = 'bookend';
    end.setAttribute('aria-hidden', 'true');
    return end;
  }

  function openArticle(article, bookEl) {
    if (selectedBook) selectedBook.classList.remove('selected');
    selectedBook = bookEl;
    bookEl.classList.add('selected');

    document.getElementById('paneEyebrow').textContent = article.tag || '';
    document.getElementById('paneTitle').textContent = article.title;
    document.getElementById('paneAuthor').textContent = article.author ? 'by ' + article.author : '';

    var body = document.getElementById('paneBody');
    body.innerHTML = '';

    // Show excerpt as paragraph
    if (article.excerpt) {
      var p = document.createElement('p');
      p.textContent = article.excerpt;
      body.appendChild(p);
    }

    // Read full article link
    var link = document.createElement('a');
    link.className = 'pane-read-more';
    link.href = 'article?id=' + article.id;
    link.textContent = 'Read the Full Article ';
    body.appendChild(link);

    pane.classList.add('open');
    pane.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      pane.classList.remove('open');
      if (selectedBook) {
        selectedBook.classList.remove('selected');
        var b = selectedBook;
        selectedBook = null;
        b.scrollIntoView({ behavior: 'smooth', block: 'center' });
        b.focus({ preventScroll: true });
      }
    });
  }

  var BOOKS_PER_ROW = 13;

  function buildShelves(data) {
    // The shelf element is just the first row placeholder — we build into case-frame
    var caseFrame = shelf.parentElement;

    // Remove the single shelf and shelf-board
    var existingBoard = caseFrame.querySelector('.shelf-board');
    shelf.remove();
    if (existingBoard) existingBoard.remove();

    // Split into rows
    for (var i = 0; i < data.length; i += BOOKS_PER_ROW) {
      var rowArticles = data.slice(i, i + BOOKS_PER_ROW);

      // Create shelf row
      var row = document.createElement('div');
      row.className = 'shelf';
      row.setAttribute('role', 'list');

      rowArticles.forEach(function (article, j) {
        row.appendChild(createBook(article, i + j));
      });

      // Add bookend to last row or if row isn't full
      if (i + BOOKS_PER_ROW >= data.length || rowArticles.length < BOOKS_PER_ROW) {
        row.appendChild(createBookend());
      }

      // Insert before case-note
      var caseNote = caseFrame.querySelector('.case-note');
      caseFrame.insertBefore(row, caseNote);

      // Add shelf board after each row
      var board = document.createElement('div');
      board.className = 'shelf-board';
      caseFrame.insertBefore(board, caseNote);
    }
  }

  // Load articles and build shelves
  fetch('data/articles.json')
    .then(function (res) { return res.json(); })
    .then(function (data) {
      data.forEach(function (article) {
        articles[article.id] = article;
      });
      buildShelves(data);
    })
    .catch(function (err) {
      console.error('Failed to load articles:', err);
    });
});
