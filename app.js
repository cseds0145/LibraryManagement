/**
 * THE GRAND ATHENAEUM - 3D VINTAGE LIBRARY MANAGEMENT SYSTEM
 * Multi-Genre 3D Stacks, Interactive 3D Open Book Reader Engine,
 * Synthesized Tactile Sound, and Public Domain eBook Downloader.
 */

// --- CONFIGURATION & STORAGE KEYS ---
const STORAGE_KEYS = {
  books: 'vintage-library-books-v3',
  user: 'vintage-library-user-v3',
  users: 'vintage-library-registered-users-v3',
  requests: 'vintage-library-loan-requests-v3',
  sound: 'vintage-library-sound-pref-v3'
};

const DEFAULT_USERS = [
  { role: 'student', username: 'student1', password: 'student123', name: 'Eleanor Vance', borrowed: [101, 201] },
  { role: 'faculty', username: 'faculty1', password: 'faculty123', name: 'Archivist Dr. Alistair Finch', borrowed: [] }
];

const GENRES_CONFIG = {
  SCIFI: { id: 'scifi', name: 'Science Fiction', icon: '🧪', plaque: 'SECTION I • SCIENCE FICTION & FUTURISM' },
  COMEDY: { id: 'comedy', name: 'Comedy & Humor', icon: '🎭', plaque: 'SECTION II • COMEDY, SATIRE & WIT' },
  EDUCATION: { id: 'education', name: 'Education & Science', icon: '🎓', plaque: 'SECTION III • EDUCATION & PHILOSOPHY' },
  COMICS: { id: 'comics', name: 'Comics & Graphic Serials', icon: '📚', plaque: 'SECTION IV • GOLDEN AGE COMICS & SERIALS' }
};

const LEATHER_STYLES = [
  'leather-burgundy',
  'leather-brown',
  'leather-navy',
  'leather-green',
  'leather-black',
  'leather-cognac'
];

// --- GLOBAL APPLICATION STATE ---
let currentUser = null;
let books = [];
let registeredUsers = [];
let requests = [];
let signUpMode = false;
let currentViewMode = '3d'; // '3d' or 'ledger'
let currentGenreFilter = 'all'; // 'all', 'scifi', 'comedy', 'education', 'comics'
let soundEnabled = true;

// Active state for modals & reading engine
let activeInspectedBookId = null;
let activeReadingBookId = null;
let currentChapterIdx = 0;
let currentSpreadIdx = 0;
let currentFontSize = 'font-md';

// --- DATA ACCESS & STORAGE HANDLERS ---
function getMasterBooksDataset() {
  if (typeof window !== 'undefined' && window.EXPANDED_BOOKS_DATA && Array.isArray(window.EXPANDED_BOOKS_DATA)) {
    return window.EXPANDED_BOOKS_DATA;
  }
  if (typeof EXPANDED_BOOKS_DATA !== 'undefined' && Array.isArray(EXPANDED_BOOKS_DATA)) {
    return EXPANDED_BOOKS_DATA;
  }
  return [];
}

function loadBooks() {
  const master = getMasterBooksDataset();
  const stored = localStorage.getItem(STORAGE_KEYS.books);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length >= 80) {
        return parsed;
      }
    } catch (e) {
      console.warn('Resetting corrupted book storage:', e);
    }
  }
  if (master.length > 0) {
    saveBooks(master);
    return master;
  }
  return [];
}

function saveBooks(data = books) {
  try {
    localStorage.setItem(STORAGE_KEYS.books, JSON.stringify(data));
  } catch (e) {}
}

function loadUsers() {
  const stored = localStorage.getItem(STORAGE_KEYS.users);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch (e) {}
  }
  saveUsers(DEFAULT_USERS);
  return DEFAULT_USERS;
}

function saveUsers(data = registeredUsers) {
  try {
    localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(data));
  } catch (e) {}
}

function loadRequests() {
  const stored = localStorage.getItem(STORAGE_KEYS.requests);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {}
  }
  return [];
}

function saveRequests(data = requests) {
  try {
    localStorage.setItem(STORAGE_KEYS.requests, JSON.stringify(data));
  } catch (e) {}
}

function loadUserSession() {
  const stored = localStorage.getItem(STORAGE_KEYS.user);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {}
  }
  return null;
}

function saveUserSession(user = currentUser) {
  try {
    if (user) localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));
    else localStorage.removeItem(STORAGE_KEYS.user);
  } catch (e) {}
}

function removeUserSession() {
  try {
    localStorage.removeItem(STORAGE_KEYS.user);
  } catch (e) {}
}

function loadSoundPref() {
  const stored = localStorage.getItem(STORAGE_KEYS.sound);
  return stored !== null ? JSON.parse(stored) : true;
}

function saveSoundPref(val) {
  try {
    localStorage.setItem(STORAGE_KEYS.sound, JSON.stringify(val));
  } catch (e) {}
}

// --- SYNTHESIZED TACTILE SOUND ENGINE (Web Audio API) ---
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx && typeof window.AudioContext !== 'undefined') {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playTactileSound(type = 'pull') {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (type === 'stamp') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.12);
      gain.gain.setValueAtTime(0.4, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'pull' || type === 'page') {
      const duration = type === 'page' ? 0.14 : 0.08;
      const bufferSize = ctx.sampleRate * duration;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.4));
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(type === 'page' ? 650 : 450, now);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(type === 'page' ? 0.18 : 0.12, now);
      gain.gain.linearRampToValueAtTime(0.01, now + duration);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(now);
    } else if (type === 'click') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.03);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.03);
    }
  } catch (e) {}
}

// --- NOTIFICATION TOAST ---
let toastTimeout = null;
function showToast(message) {
  const toastElement = document.getElementById('library-toast');
  const toastMessage = document.getElementById('toast-message');
  if (!toastElement || !toastMessage) return;

  toastMessage.innerText = message;
  toastElement.classList.remove('hidden');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastElement.classList.add('hidden');
  }, 3600);
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// --- MAIN APPLICATION INITIALIZATION ---
function initApp() {
  books = loadBooks();
  registeredUsers = loadUsers();
  requests = loadRequests();
  currentUser = null; // Always show Accession Desk on page load
  soundEnabled = loadSoundPref();

  const soundToggle = document.getElementById('sound-toggle');
  if (soundToggle) {
    soundToggle.innerHTML = soundEnabled ? '🔊 <span id="sound-label">Audio: On</span>' : '🔇 <span id="sound-label">Audio: Off</span>';
    soundToggle.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      saveSoundPref(soundEnabled);
      soundToggle.innerHTML = soundEnabled ? '🔊 <span id="sound-label">Audio: On</span>' : '🔇 <span id="sound-label">Audio: Off</span>';
      if (soundEnabled) playTactileSound('click');
    });
  }

  const tabs = document.querySelectorAll('.library-tabs .tab-btn');
  const panels = document.querySelectorAll('.panel');
  tabs.forEach(button => {
    button.addEventListener('click', () => {
      playTactileSound('click');
      tabs.forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      const target = button.dataset.panel;
      panels.forEach(panel => panel.classList.toggle('active-panel', panel.id === target));
    });
  });

  const tabSigninMode = document.getElementById('tab-signin-mode');
  const tabRegisterMode = document.getElementById('tab-register-mode');
  const authTitle = document.getElementById('auth-title');
  const authSubtitle = document.getElementById('auth-subtitle');
  const authSubmitBtn = document.getElementById('auth-submit-btn');
  const authBtnText = document.getElementById('auth-btn-text');
  const nameField = document.getElementById('name-field');
  const nameInput = document.getElementById('name');
  const loginForm = document.getElementById('login-form');
  const quickStudentBtn = document.getElementById('quick-student-btn');
  const quickFacultyBtn = document.getElementById('quick-faculty-btn');
  const logoutButton = document.getElementById('logout-button');
  const quickRoleSelect = document.getElementById('quick-role-select');

  function setAuthMode(isRegisterMode) {
    playTactileSound('click');
    signUpMode = isRegisterMode;

    if (tabRegisterMode) tabRegisterMode.classList.toggle('active', isRegisterMode);
    if (tabSigninMode) tabSigninMode.classList.toggle('active', !isRegisterMode);

    if (authTitle) authTitle.innerText = isRegisterMode ? 'Issue Library Card' : 'Member Sign-In';
    if (authSubtitle) {
      authSubtitle.innerText = isRegisterMode
        ? 'Register your scholar credentials to obtain an official circulation card.'
        : 'Present your credentials to enter the library stacks & archives.';
    }
    if (authBtnText) authBtnText.innerText = isRegisterMode ? '✦ Issue Library Card' : 'Enter The Stacks';

    if (nameField) {
      nameField.classList.toggle('hidden', !isRegisterMode);
      if (nameInput) nameInput.required = isRegisterMode;
    }
  }

  if (tabRegisterMode) {
    tabRegisterMode.addEventListener('click', () => setAuthMode(true));
  }
  if (tabSigninMode) {
    tabSigninMode.addEventListener('click', () => setAuthMode(false));
  }

  if (quickStudentBtn) {
    quickStudentBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      playTactileSound('click');
      currentUser = registeredUsers.find(u => u.username === 'student1') || DEFAULT_USERS[0];
      saveUserSession();
      showToast(`Welcome to the Stacks, ${currentUser.name}!`);
      render();
    });
  }

  if (quickFacultyBtn) {
    quickFacultyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      playTactileSound('click');
      currentUser = registeredUsers.find(u => u.username === 'faculty1') || DEFAULT_USERS[1];
      saveUserSession();
      showToast(`Welcome, Archivist ${currentUser.name}!`);
      render();
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      playTactileSound('stamp');

      const role = loginForm.role.value;
      const username = loginForm.username.value.trim();
      const password = loginForm.password.value;
      const fullName = nameInput ? nameInput.value.trim() : '';

      if (signUpMode) {
        if (!fullName) {
          showToast('Please enter your full scholar name.');
          return;
        }
        if (registeredUsers.some(u => u.username.toLowerCase() === username.toLowerCase())) {
          showToast('That scholar username is already registered. Please choose another.');
          return;
        }

        const newUser = {
          role,
          username,
          password,
          name: fullName,
          borrowed: []
        };

        registeredUsers.push(newUser);
        saveUsers();
        currentUser = newUser;
        saveUserSession();
        loginForm.reset();
        showToast(`🎉 Library Card issued to ${fullName}! Welcome.`);
        render();
        return;
      }

      const foundUser = registeredUsers.find(
        u => u.role === role && u.username.toLowerCase() === username.toLowerCase() && u.password === password
      );

      if (!foundUser) {
        showToast('Invalid credentials. Check your role, username, and password.');
        return;
      }

      currentUser = foundUser;
      saveUserSession();
      loginForm.reset();
      showToast(`Welcome back, ${currentUser.name}.`);
      render();
    });
  }

  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      playTactileSound('click');
      currentUser = null;
      removeUserSession();
      showToast('Signed out. Returned to Accession Desk.');
      render();
    });
  }

  if (quickRoleSelect) {
    quickRoleSelect.addEventListener('change', (e) => {
      const selectedUsername = e.target.value;
      const targetUser = registeredUsers.find(u => u.username === selectedUsername);
      if (targetUser) {
        playTactileSound('click');
        currentUser = targetUser;
        saveUserSession();
        showToast(`Switched profile to ${currentUser.name} (${capitalize(currentUser.role)}).`);
        render();
      }
    });
  }

  const searchInput = document.getElementById('search-catalog');
  const clearSearchBtn = document.getElementById('clear-search');
  const genreButtons = document.querySelectorAll('.genre-btn');
  const view3dBtn = document.getElementById('view-3d-btn');
  const viewLedgerBtn = document.getElementById('view-ledger-btn');
  const bookshelfViewport = document.getElementById('bookshelf-viewport');
  const catalogLedgerView = document.getElementById('catalog-ledger-view');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const val = e.target.value;
      if (clearSearchBtn) clearSearchBtn.classList.toggle('hidden', !val);
      render3DShelves(val);
      renderCatalogLedger(val);
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearSearchBtn.classList.add('hidden');
      render3DShelves('');
      renderCatalogLedger('');
      searchInput.focus();
    });
  }

  genreButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      playTactileSound('click');
      genreButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentGenreFilter = btn.dataset.genre || 'all';
      const q = searchInput ? searchInput.value : '';
      render3DShelves(q);
      renderCatalogLedger(q);
    });
  });

  if (view3dBtn && viewLedgerBtn) {
    view3dBtn.addEventListener('click', () => {
      playTactileSound('click');
      currentViewMode = '3d';
      view3dBtn.classList.add('active');
      viewLedgerBtn.classList.remove('active');
      if (bookshelfViewport) bookshelfViewport.classList.remove('hidden');
      if (catalogLedgerView) catalogLedgerView.classList.add('hidden');
    });

    viewLedgerBtn.addEventListener('click', () => {
      playTactileSound('click');
      currentViewMode = 'ledger';
      viewLedgerBtn.classList.add('active');
      view3dBtn.classList.remove('active');
      if (bookshelfViewport) bookshelfViewport.classList.add('hidden');
      if (catalogLedgerView) catalogLedgerView.classList.remove('hidden');
    });
  }

  const bookModalBackdrop = document.getElementById('book-modal-backdrop');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalBorrowBtn = document.getElementById('modal-borrow-btn');
  const modalReadBtn = document.getElementById('modal-read-btn');
  const modalRequestBtn = document.getElementById('modal-request-btn');

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeBookModal);
  if (bookModalBackdrop) {
    bookModalBackdrop.addEventListener('click', (e) => {
      if (e.target === bookModalBackdrop) closeBookModal();
    });
  }

  if (modalBorrowBtn) {
    modalBorrowBtn.addEventListener('click', () => {
      if (!activeInspectedBookId) return;
      playTactileSound('stamp');
      handleBorrowReturn(activeInspectedBookId);
      openBookModal(activeInspectedBookId);
    });
  }

  if (modalReadBtn) {
    modalReadBtn.addEventListener('click', () => {
      if (!activeInspectedBookId) return;
      closeBookModal();
      openBookReader(activeInspectedBookId);
    });
  }

  if (modalRequestBtn) {
    modalRequestBtn.addEventListener('click', () => {
      if (!activeInspectedBookId || !currentUser) return;
      const targetBook = books.find(b => b.id === activeInspectedBookId);
      if (!targetBook) return;

      const already = requests.some(r => r.user.username === currentUser.username && r.book.id === targetBook.id);
      if (already) {
        showToast('You already have a pending requisition for this volume.');
        return;
      }

      requests.push({
        id: Date.now(),
        user: { username: currentUser.username, name: currentUser.name, role: currentUser.role },
        book: { id: targetBook.id, title: targetBook.title, author: targetBook.author },
        date: new Date().toLocaleDateString()
      });

      saveRequests();
      showToast(`Loan requisition submitted for "${targetBook.title}".`);
      openBookModal(activeInspectedBookId);
      renderRequestsPanel();
    });
  }

  const openBookModalElem = document.getElementById('open-book-modal');
  const closeReaderBtn = document.getElementById('close-reader-btn');
  const prevPageBtn = document.getElementById('prev-page-btn');
  const nextPageBtn = document.getElementById('next-page-btn');
  const chapterSelect = document.getElementById('chapter-select');
  const downloadEbookBtn = document.getElementById('download-ebook-btn');
  const fontDecreaseBtn = document.getElementById('font-decrease-btn');
  const fontNormalBtn = document.getElementById('font-normal-btn');
  const fontIncreaseBtn = document.getElementById('font-increase-btn');

  if (closeReaderBtn) closeReaderBtn.addEventListener('click', closeBookReader);
  if (openBookModalElem) {
    openBookModalElem.addEventListener('click', (e) => {
      if (e.target === openBookModalElem) closeBookReader();
    });
  }

  if (prevPageBtn) prevPageBtn.addEventListener('click', () => turnPageSpread(-1));
  if (nextPageBtn) nextPageBtn.addEventListener('click', () => turnPageSpread(1));

  if (chapterSelect) {
    chapterSelect.addEventListener('change', (e) => {
      currentChapterIdx = Number(e.target.value);
      currentSpreadIdx = 0;
      playTactileSound('page');
      renderOpenBookSpread();
    });
  }

  if (fontDecreaseBtn && fontNormalBtn && fontIncreaseBtn) {
    fontDecreaseBtn.addEventListener('click', () => {
      currentFontSize = 'font-sm';
      fontDecreaseBtn.classList.add('active');
      fontNormalBtn.classList.remove('active');
      fontIncreaseBtn.classList.remove('active');
      renderOpenBookSpread();
    });
    fontNormalBtn.addEventListener('click', () => {
      currentFontSize = 'font-md';
      fontNormalBtn.classList.add('active');
      fontDecreaseBtn.classList.remove('active');
      fontIncreaseBtn.classList.remove('active');
      renderOpenBookSpread();
    });
    fontIncreaseBtn.addEventListener('click', () => {
      currentFontSize = 'font-lg';
      fontIncreaseBtn.classList.add('active');
      fontDecreaseBtn.classList.remove('active');
      fontNormalBtn.classList.remove('active');
      renderOpenBookSpread();
    });
  }

  if (downloadEbookBtn) {
    downloadEbookBtn.addEventListener('click', () => {
      const book = books.find(b => b.id === activeReadingBookId);
      if (!book) return;

      playTactileSound('stamp');
      let textContent = `========================================================================\n`;
      textContent += `THE GRAND ATHENAEUM PUBLIC DOMAIN ARCHIVES\n`;
      textContent += `Title: ${book.title}\n`;
      textContent += `Author: ${book.author}\n`;
      textContent += `Year: ${book.year > 0 ? book.year : Math.abs(book.year) + ' BC'}\n`;
      textContent += `Public Domain Link: ${book.gutenbergUrl || 'https://www.gutenberg.org/'}\n`;
      textContent += `========================================================================\n\n`;
      textContent += `SYNOPSIS:\n${book.synopsis || ''}\n\n`;
      textContent += `------------------------------------------------------------------------\n\n`;

      if (book.chapters && book.chapters.length > 0) {
        book.chapters.forEach(ch => {
          textContent += `\n[ ${ch.title.toUpperCase()} ]\n\n`;
          textContent += `${ch.content}\n\n`;
          textContent += `------------------------------------------------------------------------\n`;
        });
      }

      const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
      const filename = `${book.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_ebook.txt`;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast(`Downloaded eBook manuscript: "${book.title}".`);
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBookModal();
      closeBookReader();
    } else if (openBookModalElem && !openBookModalElem.classList.contains('hidden')) {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') turnPageSpread(1);
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') turnPageSpread(-1);
    }
  });

  const addBookForm = document.getElementById('add-book-form');
  if (addBookForm) {
    addBookForm.addEventListener('submit', (e) => {
      e.preventDefault();
      playTactileSound('stamp');

      const title = document.getElementById('book-title').value.trim();
      const author = document.getElementById('book-author').value.trim();
      const genre = document.getElementById('book-genre').value;
      const year = Number(document.getElementById('book-year').value);
      const copies = Number(document.getElementById('book-copies').value);
      const cover = document.getElementById('book-cover').value;
      const synopsis = document.getElementById('book-synopsis').value.trim() || 'Accessioned rare manuscript in the Grand Athenaeum.';

      const newBook = {
        id: Date.now(),
        title,
        author,
        genre,
        year,
        synopsis,
        copies,
        cover,
        shelfTier: (books.length % 3) + 1,
        gutenbergUrl: 'https://www.gutenberg.org/',
        chapters: [
          {
            title: 'Chapter I - Accession Record',
            content: synopsis + '\n\n' + 'This volume was cataloged by the Faculty Archivist of the Grand Athenaeum.'
          }
        ]
      };

      books.unshift(newBook);
      saveBooks();
      addBookForm.reset();
      showToast(`New volume "${title}" bound and shelved.`);
      render();
    });
  }

  render();
}

// --- RENDER MAIN INTERFACE ---
function render() {
  const loginSection = document.getElementById('login-section');
  const dashboardSection = document.getElementById('dashboard-section');
  const welcomeMessage = document.getElementById('welcome-message');
  const roleLabel = document.getElementById('role-label');
  const activeBorrowCount = document.getElementById('active-borrow-count');

  if (!currentUser) {
    if (loginSection) loginSection.classList.remove('hidden');
    if (dashboardSection) dashboardSection.classList.add('hidden');
    return;
  }

  if (loginSection) loginSection.classList.add('hidden');
  if (dashboardSection) dashboardSection.classList.remove('hidden');

  if (welcomeMessage) welcomeMessage.innerText = `Welcome, ${currentUser.name}`;
  if (roleLabel) roleLabel.innerText = `Role: ${capitalize(currentUser.role)} Scholar`;

  const borrowCount = currentUser.borrowed?.length || 0;
  if (activeBorrowCount) activeBorrowCount.innerText = `${borrowCount} Volume${borrowCount === 1 ? '' : 's'} in Possession`;

  updateQuickRoleDropdown();

  const isFaculty = currentUser.role === 'faculty';
  document.querySelectorAll('.faculty-only').forEach(el => {
    el.style.display = isFaculty ? '' : 'none';
  });

  const searchInput = document.getElementById('search-catalog');
  const q = searchInput ? searchInput.value : '';

  try { updateGenreCounts(); } catch (e) {}
  try { render3DShelves(q); } catch (e) {}
  try { renderCatalogLedger(q); } catch (e) {}
  try { renderBorrowedPanel(); } catch (e) {}
  try { renderRequestsPanel(); } catch (e) {}
  try { renderManagePanel(); } catch (e) {}
}

function updateQuickRoleDropdown() {
  const quickRoleSelect = document.getElementById('quick-role-select');
  if (!quickRoleSelect) return;
  quickRoleSelect.innerHTML = '';
  registeredUsers.forEach(u => {
    const opt = document.createElement('option');
    opt.value = u.username;
    opt.innerText = `${u.role === 'faculty' ? '🏛️' : '🎓'} ${capitalize(u.role)}: ${u.name.split(' ')[0]}`;
    if (currentUser && currentUser.username === u.username) opt.selected = true;
    quickRoleSelect.appendChild(opt);
  });
}

function updateGenreCounts() {
  const countAll = document.getElementById('count-all');
  const countScifi = document.getElementById('count-scifi');
  const countComedy = document.getElementById('count-comedy');
  const countEducation = document.getElementById('count-education');
  const countComics = document.getElementById('count-comics');

  if (countAll) countAll.innerText = books.length;
  if (countScifi) countScifi.innerText = books.filter(b => b.genre === 'scifi').length;
  if (countComedy) countComedy.innerText = books.filter(b => b.genre === 'comedy').length;
  if (countEducation) countEducation.innerText = books.filter(b => b.genre === 'education').length;
  if (countComics) countComics.innerText = books.filter(b => b.genre === 'comics').length;
}

// --- 3D BOOKSHELF ENGINE ---
function render3DShelves(filterQuery = '') {
  const query = filterQuery.toLowerCase().trim();
  const tier1Row = document.getElementById('shelf-row-1');
  const tier2Row = document.getElementById('shelf-row-2');
  const tier3Row = document.getElementById('shelf-row-3');
  const shelfStats = document.getElementById('shelf-stats');

  if (!tier1Row || !tier2Row || !tier3Row) return;

  tier1Row.innerHTML = '';
  tier2Row.innerHTML = '';
  tier3Row.innerHTML = '';

  updateShelfPlaques();

  let filteredBooks = books;
  if (currentGenreFilter !== 'all') {
    filteredBooks = filteredBooks.filter(b => b.genre === currentGenreFilter);
  }

  let matchCount = 0;

  filteredBooks.forEach((book, idx) => {
    const isMatch = !query || 
      book.title.toLowerCase().includes(query) || 
      book.author.toLowerCase().includes(query) ||
      (book.genre && book.genre.toLowerCase().includes(query));
    
    if (isMatch) matchCount++;

    const bookElem = create3DBookElement(book, idx, isMatch, query.length > 0);
    const tier = (idx % 3) + 1;
    if (tier === 1) tier1Row.appendChild(bookElem);
    else if (tier === 2) tier2Row.appendChild(bookElem);
    else tier3Row.appendChild(bookElem);
  });

  if (shelfStats) {
    const genreName = currentGenreFilter === 'all' ? 'All Sections' : capitalize(currentGenreFilter);
    shelfStats.innerHTML = query 
      ? `Found <strong>${matchCount}</strong> volume${matchCount === 1 ? '' : 's'} matching "${query}" in ${genreName}`
      : `Displaying <strong>${filteredBooks.length}</strong> rare volumes in ${genreName}`;
  }
}

function updateShelfPlaques() {
  const cabinetSectionTitle = document.getElementById('cabinet-section-title');
  const plaqueTier1 = document.getElementById('plaque-tier-1');
  const plaqueTier2 = document.getElementById('plaque-tier-2');
  const plaqueTier3 = document.getElementById('plaque-tier-3');

  if (!cabinetSectionTitle) return;

  if (currentGenreFilter === 'all') {
    cabinetSectionTitle.innerText = '✦ GRAND ARCHIVES • ALL SECTIONS (80+ VOLUMES) ✦';
    if (plaqueTier1) plaqueTier1.innerText = 'TIER I • FOUNDATIONAL MASTERWORKS';
    if (plaqueTier2) plaqueTier2.innerText = 'TIER II • CLASSICAL DISCOVERIES & SATIRE';
    if (plaqueTier3) plaqueTier3.innerText = 'TIER III • PHILOSOPHIES & GRAPHIC SERIALS';
  } else if (currentGenreFilter === 'scifi') {
    cabinetSectionTitle.innerText = '✦ SECTION I • SCIENCE FICTION & SPECULATIVE COSMOLOGY ✦';
    if (plaqueTier1) plaqueTier1.innerText = 'TIER I • MARY SHELLEY & H.G. WELLS';
    if (plaqueTier2) plaqueTier2.innerText = 'TIER II • JULES VERNE & DEEP-SEA EXPEDITIONS';
    if (plaqueTier3) plaqueTier3.innerText = 'TIER III • EDGAR RICE BURROUGHS & MARS STACKS';
  } else if (currentGenreFilter === 'comedy') {
    cabinetSectionTitle.innerText = '✦ SECTION II • COMEDY, SATIRE & HIGH SOCIETY HUMOR ✦';
    if (plaqueTier1) plaqueTier1.innerText = 'TIER I • OSCAR WILDE & VICTORIAN WIT';
    if (plaqueTier2) plaqueTier2.innerText = 'TIER II • P.G. WODEHOUSE & JEEVES EXPEDITIONS';
    if (plaqueTier3) plaqueTier3.innerText = 'TIER III • MARK TWAIN & HUMOROUS TRAVELS';
  } else if (currentGenreFilter === 'education') {
    cabinetSectionTitle.innerText = '✦ SECTION III • EDUCATION, SCIENCE & PHILOSOPHY ✦';
    if (plaqueTier1) plaqueTier1.innerText = 'TIER I • PLATO & FOUNDATIONAL PEDAGOGY';
    if (plaqueTier2) plaqueTier2.innerText = 'TIER II • ASTRONOMY, CALCULUS & NATURAL SCIENCE';
    if (plaqueTier3) plaqueTier3.innerText = 'TIER III • PSYCHOLOGY, GEOLOGY & WORLD HISTORY';
  } else if (currentGenreFilter === 'comics') {
    cabinetSectionTitle.innerText = '✦ SECTION IV • GOLDEN AGE COMICS & PULP SERIALS ✦';
    if (plaqueTier1) plaqueTier1.innerText = 'TIER I • ACTION & DETECTIVE NOIR ARCHIVES';
    if (plaqueTier2) plaqueTier2.innerText = 'TIER II • SPACE OPERA & PULP HEROES';
    if (plaqueTier3) plaqueTier3.innerText = 'TIER III • SURREAL HEROES & JUNGLE LEGENDS';
  }
}

function create3DBookElement(book, index, isMatch = true, hasQuery = false) {
  const wrapper = document.createElement('div');
  wrapper.className = 'book-3d-wrapper';
  wrapper.dataset.bookId = book.id;

  if (!isMatch && hasQuery) {
    wrapper.classList.add('dimmed');
  } else if (isMatch && hasQuery) {
    wrapper.classList.add('highlighted');
  }

  const height = 210 + ((index * 11) % 45);
  const width = 36 + ((index * 7) % 18);
  const coverStyle = book.cover || LEATHER_STYLES[index % LEATHER_STYLES.length];

  const isBorrowedByUser = currentUser?.borrowed?.includes(book.id) ?? false;
  const isAvailable = book.copies > 0;

  let statusMarkerClass = 'status-marker-available';
  let statusTooltip = `${book.copies} available`;

  if (isBorrowedByUser) {
    statusMarkerClass = 'status-marker-borrowed';
    statusTooltip = 'In your study desk (Click to Read)';
  } else if (!isAvailable) {
    statusMarkerClass = 'status-marker-out';
    statusTooltip = 'All copies on loan';
  }

  wrapper.innerHTML = `
    <div class="book-spine ${coverStyle}" style="height: ${height}px; width: ${width}px;" title="${escapeHtml(book.title)} by ${escapeHtml(book.author)} (${statusTooltip})">
      <span class="spine-status-marker ${statusMarkerClass}"></span>
      <span class="spine-band"></span>
      <span class="spine-header-ornament">✦</span>
      <div class="spine-title-container">
        <span class="spine-title-text">${escapeHtml(book.title)}</span>
      </div>
      <span class="spine-author-text">${escapeHtml(book.author.split(',')[0])}</span>
      <span class="spine-band"></span>
      <div class="bookmark-ribbon"></div>
    </div>
  `;

  wrapper.addEventListener('mouseenter', () => playTactileSound('pull'));
  wrapper.addEventListener('click', () => openBookModal(book.id));

  return wrapper;
}

// --- 3D BOOK INSPECTION MODAL ---
function openBookModal(bookId) {
  const book = books.find(b => b.id === bookId);
  if (!book) return;

  activeInspectedBookId = bookId;
  playTactileSound('pull');

  const modalBookModel = document.getElementById('modal-book-model');
  const modalCoverTitle = document.getElementById('modal-cover-title');
  const modalCoverAuthor = document.getElementById('modal-cover-author');
  const modalSpineTitle = document.getElementById('modal-spine-title');
  const modalAccessionId = document.getElementById('modal-accession-id');
  const modalDetailTitle = document.getElementById('modal-detail-title');
  const modalDetailAuthor = document.getElementById('modal-detail-author');
  const modalDetailGenre = document.getElementById('modal-detail-genre');
  const modalDetailYear = document.getElementById('modal-detail-year');
  const modalDetailCopies = document.getElementById('modal-detail-copies');
  const modalBarcodeNum = document.getElementById('modal-barcode-num');
  const modalSynopsisText = document.getElementById('modal-synopsis-text');
  const modalStamp = document.getElementById('modal-stamp');
  const modalBorrowBtn = document.getElementById('modal-borrow-btn');
  const modalBorrowText = document.getElementById('modal-borrow-text');
  const modalReadBtn = document.getElementById('modal-read-btn');
  const modalRequestBtn = document.getElementById('modal-request-btn');
  const bookModalBackdrop = document.getElementById('book-modal-backdrop');

  if (modalBookModel) {
    const coverStyle = book.cover || 'leather-burgundy';
    modalBookModel.className = `book-3d-large ${coverStyle}`;
  }
  if (modalCoverTitle) modalCoverTitle.innerText = book.title;
  if (modalCoverAuthor) modalCoverAuthor.innerText = book.author;
  if (modalSpineTitle) modalSpineTitle.innerText = book.title;

  if (modalAccessionId) modalAccessionId.innerText = `#ATH-${String(book.id).padStart(4, '0')}`;
  if (modalDetailTitle) modalDetailTitle.innerText = book.title;
  if (modalDetailAuthor) modalDetailAuthor.innerText = book.author;

  const genreKey = (book.genre || 'scifi').toUpperCase();
  const genreObj = GENRES_CONFIG[genreKey] || { icon: '🏛️', name: capitalize(book.genre || 'General') };
  if (modalDetailGenre) modalDetailGenre.innerText = `${genreObj.icon} ${genreObj.name}`;
  if (modalDetailYear) modalDetailYear.innerText = `${book.year > 0 ? book.year : Math.abs(book.year) + ' BC'} (Public Domain)`;
  if (modalDetailCopies) modalDetailCopies.innerText = `${book.copies} Volume${book.copies === 1 ? '' : 's'} Remaining`;
  if (modalBarcodeNum) modalBarcodeNum.innerText = `0948-${String(book.id).padStart(4, '0')}-1894`;
  if (modalSynopsisText) modalSynopsisText.innerText = book.synopsis || 'An outstanding public domain masterpiece available for reading and download.';

  const isBorrowedByUser = currentUser?.borrowed?.includes(book.id) ?? false;
  const isAvailable = book.copies > 0;

  if (modalStamp) {
    modalStamp.className = 'vintage-stamp';
    if (isBorrowedByUser) {
      modalStamp.innerText = 'IN PRIVATE STUDY';
      modalStamp.classList.add('stamp-borrowed');
    } else if (isAvailable) {
      modalStamp.innerText = 'AVAILABLE';
      modalStamp.classList.add('stamp-available');
    } else {
      modalStamp.innerText = 'OUT OF STOCK';
      modalStamp.classList.add('stamp-out');
    }
  }

  if (modalBorrowBtn && modalBorrowText) {
    if (isBorrowedByUser) {
      modalBorrowText.innerText = 'Return Volume To Stacks';
      modalBorrowBtn.disabled = false;
    } else if (isAvailable) {
      modalBorrowText.innerText = 'Borrow This Volume';
      modalBorrowBtn.disabled = false;
    } else {
      modalBorrowText.innerText = 'No Copies Available';
      modalBorrowBtn.disabled = true;
    }
  }

  if (modalRequestBtn) {
    if (!isAvailable && !isBorrowedByUser && currentUser?.role === 'student') {
      const already = requests.some(r => r.user.username === currentUser.username && r.book.id === book.id);
      modalRequestBtn.classList.remove('hidden');
      modalRequestBtn.disabled = already;
      modalRequestBtn.querySelector('span').innerText = already ? 'Requisition Submitted' : 'Submit Loan Requisition';
    } else {
      modalRequestBtn.classList.add('hidden');
    }
  }

  if (modalReadBtn) {
    modalReadBtn.classList.remove('hidden');
    modalReadBtn.innerText = isBorrowedByUser ? '📖 Read in Study (Open Book)' : '📖 Open & Read Volume';
  }

  if (bookModalBackdrop) bookModalBackdrop.classList.remove('hidden');
}

function closeBookModal() {
  playTactileSound('click');
  const bookModalBackdrop = document.getElementById('book-modal-backdrop');
  if (bookModalBackdrop) bookModalBackdrop.classList.add('hidden');
  activeInspectedBookId = null;
}

// --- BORROW & RETURN LOGIC ---
function handleBorrowReturn(bookId) {
  const book = books.find(b => b.id === bookId);
  if (!book || !currentUser) return;

  if (!currentUser.borrowed) currentUser.borrowed = [];
  const alreadyBorrowed = currentUser.borrowed.includes(bookId);

  if (alreadyBorrowed) {
    currentUser.borrowed = currentUser.borrowed.filter(id => id !== bookId);
    book.copies += 1;
    showToast(`Volume "${book.title}" returned to the stacks.`);
  } else {
    if (book.copies > 0) {
      currentUser.borrowed.push(bookId);
      book.copies -= 1;
      showToast(`Volume "${book.title}" placed on your study desk.`);
    } else {
      showToast('All copies of this volume are currently loaned out.');
      return;
    }
  }

  const uIdx = registeredUsers.findIndex(u => u.username === currentUser.username);
  if (uIdx >= 0) registeredUsers[uIdx] = currentUser;

  saveUsers();
  saveBooks();
  saveUserSession();
  render();
}

// --- 3D OPEN BOOK READER ENGINE ---
function openBookReader(bookId) {
  const book = books.find(b => b.id === bookId);
  if (!book) return;

  activeReadingBookId = bookId;
  currentChapterIdx = 0;
  currentSpreadIdx = 0;
  playTactileSound('pull');

  const readerTitle = document.getElementById('reader-title');
  const readerAuthor = document.getElementById('reader-author');
  const chapterSelect = document.getElementById('chapter-select');
  const gutenbergExtLink = document.getElementById('gutenberg-ext-link');
  const openBookModalElem = document.getElementById('open-book-modal');

  if (readerTitle) readerTitle.innerText = book.title;
  if (readerAuthor) readerAuthor.innerText = `BY ${book.author.toUpperCase()} • ${book.year > 0 ? book.year : Math.abs(book.year) + ' BC'}`;
  if (gutenbergExtLink) gutenbergExtLink.href = book.gutenbergUrl || 'https://www.gutenberg.org/';

  const chapters = book.chapters && book.chapters.length > 0
    ? book.chapters
    : [{ title: 'Chapter I', content: book.synopsis || 'Public Domain Archive Manuscript.' }];

  if (chapterSelect) {
    chapterSelect.innerHTML = '';
    chapters.forEach((ch, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.innerText = ch.title;
      chapterSelect.appendChild(opt);
    });
    chapterSelect.value = 0;
  }

  renderOpenBookSpread();
  if (openBookModalElem) openBookModalElem.classList.remove('hidden');
}

function closeBookReader() {
  playTactileSound('click');
  const openBookModalElem = document.getElementById('open-book-modal');
  if (openBookModalElem) openBookModalElem.classList.add('hidden');
  activeReadingBookId = null;
}

function renderOpenBookSpread() {
  const book = books.find(b => b.id === activeReadingBookId);
  if (!book) return;

  const chapters = book.chapters && book.chapters.length > 0
    ? book.chapters
    : [{ title: 'Chapter I', content: book.synopsis || '' }];

  const currentChapter = chapters[currentChapterIdx] || chapters[0];
  const paragraphs = currentChapter.content
    .split('\n\n')
    .map(p => p.trim())
    .filter(p => p.length > 0);

  const paragraphsPerSpread = 4;
  const totalSpreads = Math.max(1, Math.ceil(paragraphs.length / paragraphsPerSpread));

  if (currentSpreadIdx >= totalSpreads) currentSpreadIdx = totalSpreads - 1;
  if (currentSpreadIdx < 0) currentSpreadIdx = 0;

  const startIdx = currentSpreadIdx * paragraphsPerSpread;
  const leftPageParas = paragraphs.slice(startIdx, startIdx + 2);
  const rightPageParas = paragraphs.slice(startIdx + 2, startIdx + 4);

  const pageLeftHeader = document.getElementById('page-left-header');
  const pageLeftChapterName = document.getElementById('page-left-chapter-name');
  const pageLeftContent = document.getElementById('page-left-content');
  const pageLeftNum = document.getElementById('page-left-num');

  const pageRightHeader = document.getElementById('page-right-header');
  const pageRightChapterName = document.getElementById('page-right-chapter-name');
  const pageRightContent = document.getElementById('page-right-content');
  const pageRightNum = document.getElementById('page-right-num');

  const readerProgressInfo = document.getElementById('reader-progress-info');
  const prevPageBtn = document.getElementById('prev-page-btn');
  const nextPageBtn = document.getElementById('next-page-btn');

  // Left Page
  if (pageLeftHeader) pageLeftHeader.innerText = escapeHtml(book.title.toUpperCase());
  if (pageLeftChapterName) pageLeftChapterName.innerText = escapeHtml(currentChapter.title.split('-')[0].trim());

  let leftHtml = '';
  if (leftPageParas.length > 0) {
    leftPageParas.forEach(p => {
      leftHtml += `<p>${escapeHtml(p).replace(/\n/g, '<br>')}</p>`;
    });
  } else {
    leftHtml = '<p><em>✦ ✦ ✦</em></p>';
  }

  if (pageLeftContent) {
    pageLeftContent.className = `page-body ${currentFontSize}`;
    pageLeftContent.innerHTML = leftHtml;
  }
  if (pageLeftNum) pageLeftNum.innerText = `Page ${(currentSpreadIdx * 2) + 1}`;

  // Right Page
  if (pageRightHeader) pageRightHeader.innerText = escapeHtml(book.author.toUpperCase());
  if (pageRightChapterName) pageRightChapterName.innerText = escapeHtml(currentChapter.title.split('-')[0].trim());

  let rightHtml = '';
  if (rightPageParas.length > 0) {
    rightPageParas.forEach(p => {
      rightHtml += `<p>${escapeHtml(p).replace(/\n/g, '<br>')}</p>`;
    });
  } else {
    rightHtml = '<p><em>✦ ✦ ✦</em></p>';
  }

  if (pageRightContent) {
    pageRightContent.className = `page-body ${currentFontSize}`;
    pageRightContent.innerHTML = rightHtml;
  }
  if (pageRightNum) pageRightNum.innerText = `Page ${(currentSpreadIdx * 2) + 2}`;

  if (readerProgressInfo) {
    readerProgressInfo.innerText = `Spread ${currentSpreadIdx + 1} of ${totalSpreads} • ${currentChapter.title}`;
  }
  if (prevPageBtn) prevPageBtn.disabled = currentSpreadIdx === 0 && currentChapterIdx === 0;
  if (nextPageBtn) nextPageBtn.disabled = currentSpreadIdx === totalSpreads - 1 && currentChapterIdx === chapters.length - 1;
}

function turnPageSpread(direction) {
  const book = books.find(b => b.id === activeReadingBookId);
  if (!book) return;

  const chapters = book.chapters || [{ title: 'Chapter I', content: book.synopsis }];
  const currentChapter = chapters[currentChapterIdx] || chapters[0];
  const paragraphs = currentChapter.content.split('\n\n').filter(p => p.trim().length > 0);
  const totalSpreads = Math.max(1, Math.ceil(paragraphs.length / 4));

  if (direction > 0) {
    if (currentSpreadIdx < totalSpreads - 1) {
      currentSpreadIdx++;
      playTactileSound('page');
      renderOpenBookSpread();
    } else if (currentChapterIdx < chapters.length - 1) {
      currentChapterIdx++;
      currentSpreadIdx = 0;
      const chapterSelect = document.getElementById('chapter-select');
      if (chapterSelect) chapterSelect.value = currentChapterIdx;
      playTactileSound('page');
      renderOpenBookSpread();
      showToast(`Entering ${chapters[currentChapterIdx].title}`);
    }
  } else if (direction < 0) {
    if (currentSpreadIdx > 0) {
      currentSpreadIdx--;
      playTactileSound('page');
      renderOpenBookSpread();
    } else if (currentChapterIdx > 0) {
      currentChapterIdx--;
      const prevChParas = chapters[currentChapterIdx].content.split('\n\n').filter(p => p.trim().length > 0);
      currentSpreadIdx = Math.max(0, Math.ceil(prevChParas.length / 4) - 1);
      const chapterSelect = document.getElementById('chapter-select');
      if (chapterSelect) chapterSelect.value = currentChapterIdx;
      playTactileSound('page');
      renderOpenBookSpread();
    }
  }
}

// --- CARD CATALOG LEDGER VIEW ---
function renderCatalogLedger(filterQuery = '') {
  const catalogList = document.getElementById('catalog-list');
  if (!catalogList) return;

  const query = filterQuery.toLowerCase().trim();
  catalogList.innerHTML = '';

  let filteredBooks = books;
  if (currentGenreFilter !== 'all') {
    filteredBooks = filteredBooks.filter(b => b.genre === currentGenreFilter);
  }

  if (query) {
    filteredBooks = filteredBooks.filter(b => 
      b.title.toLowerCase().includes(query) || 
      b.author.toLowerCase().includes(query) ||
      (b.genre && b.genre.toLowerCase().includes(query))
    );
  }

  if (!filteredBooks.length) {
    catalogList.innerHTML = `
      <div class="ledger-row">
        <div class="ledger-details">
          <strong>No matching archive volumes found.</strong>
          <small>Try revising your keywords or adjusting section filters.</small>
        </div>
      </div>`;
    return;
  }

  filteredBooks.forEach(book => {
    const isBorrowed = currentUser?.borrowed?.includes(book.id) ?? false;
    const isAvailable = book.copies > 0;

    const row = document.createElement('div');
    row.className = 'ledger-row';

    const actionBtn = document.createElement('button');
    actionBtn.className = 'btn-vintage-sm btn-wood';
    if (isBorrowed) {
      actionBtn.innerText = 'Return Volume';
      actionBtn.addEventListener('click', () => {
        playTactileSound('stamp');
        handleBorrowReturn(book.id);
      });
    } else if (isAvailable) {
      actionBtn.innerText = 'Borrow Tome';
      actionBtn.addEventListener('click', () => {
        playTactileSound('stamp');
        handleBorrowReturn(book.id);
      });
    } else {
      actionBtn.innerText = 'Loan Out';
      actionBtn.disabled = true;
    }

    const readBtn = document.createElement('button');
    readBtn.className = 'btn-vintage-sm btn-brass';
    readBtn.innerText = '📖 Read';
    readBtn.addEventListener('click', () => openBookReader(book.id));

    const inspectBtn = document.createElement('button');
    inspectBtn.className = 'btn-vintage-sm';
    inspectBtn.innerText = 'Inspect';
    inspectBtn.addEventListener('click', () => openBookModal(book.id));

    const btnGroup = document.createElement('div');
    btnGroup.style.display = 'flex';
    btnGroup.style.gap = '6px';
    btnGroup.append(readBtn, inspectBtn, actionBtn);

    const badgeClass = isBorrowed ? 'borrowed' : isAvailable ? 'available' : 'unavailable';
    const badgeText = isBorrowed ? 'In Your Custody' : isAvailable ? `${book.copies} Available` : 'Out of Stack';

    const genreKey = (book.genre || 'scifi').toUpperCase();
    const genreObj = GENRES_CONFIG[genreKey] || { icon: '🏛️', name: capitalize(book.genre) };

    row.innerHTML = `
      <div class="ledger-details">
        <strong>${escapeHtml(book.title)}</strong>
        <small>${genreObj.icon} ${genreObj.name} • Scribe: ${escapeHtml(book.author)} (${book.year > 0 ? book.year : Math.abs(book.year) + ' BC'})</small>
      </div>
      <div>
        <span class="ledger-badge ${badgeClass}">${badgeText}</span>
      </div>
    `;
    row.appendChild(btnGroup);
    catalogList.appendChild(row);
  });
}

// --- BORROWED PANEL / STUDY DESK ---
function renderBorrowedPanel() {
  const studyDeskBooks = document.getElementById('study-desk-books');
  const borrowedList = document.getElementById('borrowed-list');
  if (!studyDeskBooks || !borrowedList) return;

  const borrowedBooks = books.filter(b => currentUser?.borrowed?.includes(b.id));

  studyDeskBooks.innerHTML = '';
  if (!borrowedBooks.length) {
    studyDeskBooks.innerHTML = '<div class="empty-desk-msg">Your study desk is currently empty. Visit the Grand Stacks to select volumes for reading.</div>';
  } else {
    borrowedBooks.forEach((book, idx) => {
      const bookElem = create3DBookElement(book, idx, true, false);
      studyDeskBooks.appendChild(bookElem);
    });
  }

  borrowedList.innerHTML = '';
  if (!borrowedBooks.length) {
    borrowedList.innerHTML = `
      <div class="ledger-row">
        <div class="ledger-details">
          <strong>No active loan registrations.</strong>
          <small>Explore the catalog to requisition manuscripts for study.</small>
        </div>
      </div>`;
    return;
  }

  borrowedBooks.forEach(book => {
    const row = document.createElement('div');
    row.className = 'ledger-row';

    const readBtn = document.createElement('button');
    readBtn.className = 'btn-vintage-sm btn-brass';
    readBtn.innerText = '📖 Read Open Book';
    readBtn.addEventListener('click', () => openBookReader(book.id));

    const returnBtn = document.createElement('button');
    returnBtn.className = 'btn-vintage-sm btn-wood';
    returnBtn.innerText = 'Return To Archives';
    returnBtn.addEventListener('click', () => {
      playTactileSound('stamp');
      handleBorrowReturn(book.id);
    });

    const inspectBtn = document.createElement('button');
    inspectBtn.className = 'btn-vintage-sm';
    inspectBtn.innerText = 'Inspect';
    inspectBtn.addEventListener('click', () => openBookModal(book.id));

    const btnGroup = document.createElement('div');
    btnGroup.style.display = 'flex';
    btnGroup.style.gap = '6px';
    btnGroup.append(readBtn, inspectBtn, returnBtn);

    row.innerHTML = `
      <div class="ledger-details">
        <strong>${escapeHtml(book.title)}</strong>
        <small>Author: ${escapeHtml(book.author)} • Accession: #ATH-${String(book.id).padStart(4, '0')}</small>
      </div>
      <div>
        <span class="ledger-badge borrowed">Checked Out</span>
      </div>
    `;
    row.appendChild(btnGroup);
    borrowedList.appendChild(row);
  });
}

// --- REQUESTS PANEL ---
function renderRequestsPanel() {
  const requestList = document.getElementById('request-list');
  if (!requestList) return;

  requestList.innerHTML = '';
  const isFaculty = currentUser?.role === 'faculty';

  if (isFaculty) {
    if (!requests.length) {
      requestList.innerHTML = `
        <div class="ledger-row">
          <div class="ledger-details">
            <strong>No pending loan requisitions.</strong>
            <small>All student requests have been processed.</small>
          </div>
        </div>`;
      return;
    }

    requests.forEach((req, idx) => {
      const row = document.createElement('div');
      row.className = 'ledger-row';

      const approveBtn = document.createElement('button');
      approveBtn.className = 'btn-vintage-sm btn-brass';
      approveBtn.innerText = 'Authorize Loan';
      approveBtn.addEventListener('click', () => processRequest(idx, true));

      const rejectBtn = document.createElement('button');
      rejectBtn.className = 'btn-vintage-sm btn-danger';
      rejectBtn.innerText = 'Decline Slip';
      rejectBtn.addEventListener('click', () => processRequest(idx, false));

      const btnGroup = document.createElement('div');
      btnGroup.style.display = 'flex';
      btnGroup.style.gap = '8px';
      btnGroup.append(approveBtn, rejectBtn);

      row.innerHTML = `
        <div class="ledger-details">
          <strong>${escapeHtml(req.user.name)} (${capitalize(req.user.role)})</strong>
          <small>Requisitioned Tome: "${escapeHtml(req.book.title)}" by ${escapeHtml(req.book.author)}</small>
        </div>
        <div>
          <span class="ledger-badge pending">Awaiting Review</span>
        </div>
      `;
      row.appendChild(btnGroup);
      requestList.appendChild(row);
    });
  } else {
    const userReqs = requests.filter(r => r.user.username === currentUser?.username);
    if (!userReqs.length) {
      requestList.innerHTML = `
        <div class="ledger-row">
          <div class="ledger-details">
            <strong>No active requisitions on file.</strong>
            <small>Submit loan slips when special permission is required.</small>
          </div>
        </div>`;
      return;
    }

    userReqs.forEach(req => {
      const row = document.createElement('div');
      row.className = 'ledger-row';
      row.innerHTML = `
        <div class="ledger-details">
          <strong>${escapeHtml(req.book.title)}</strong>
          <small>Author: ${escapeHtml(req.book.author)} • Submitted by: ${escapeHtml(req.user.name)}</small>
        </div>
        <div>
          <span class="ledger-badge pending">Pending Faculty Signature</span>
        </div>
        <div></div>
      `;
      requestList.appendChild(row);
    });
  }
}

function processRequest(index, approved) {
  const req = requests[index];
  if (!req) return;

  playTactileSound('stamp');

  if (approved) {
    const targetUser = registeredUsers.find(u => u.username === req.user.username);
    const targetBook = books.find(b => b.id === req.book.id);

    if (targetUser && targetBook && targetBook.copies > 0) {
      if (!targetUser.borrowed) targetUser.borrowed = [];
      targetUser.borrowed.push(targetBook.id);
      targetBook.copies -= 1;
      saveUsers();
      saveBooks();
      showToast(`Loan approved for scholar ${targetUser.name}.`);
    } else {
      showToast('Cannot approve: Volume is currently out of stock.');
      return;
    }
  } else {
    showToast(`Requisition slip declined for scholar ${req.user.name}.`);
  }

  requests.splice(index, 1);
  saveRequests();
  render();
}

// --- FACULTY CURATOR MANAGE PANEL ---
function renderManagePanel() {
  const manageList = document.getElementById('manage-list');
  if (!manageList || currentUser?.role !== 'faculty') return;

  manageList.innerHTML = '';

  const catalogHeader = document.createElement('h4');
  catalogHeader.className = 'vintage-subheading-sm';
  catalogHeader.innerText = 'Master Stacks Deaccession Register (80+ Volumes)';
  manageList.appendChild(catalogHeader);

  books.forEach(book => {
    const row = document.createElement('div');
    row.className = 'ledger-row';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-vintage-sm btn-danger';
    deleteBtn.innerText = 'Deaccession Tome';
    deleteBtn.addEventListener('click', () => {
      if (confirm(`Are you sure you wish to remove "${book.title}" from the Grand Archives?`)) {
        playTactileSound('stamp');
        books = books.filter(b => b.id !== book.id);
        saveBooks();
        showToast(`Volume "${book.title}" deaccessioned from the archives.`);
        render();
      }
    });

    const genreKey = (book.genre || 'scifi').toUpperCase();
    const genreObj = GENRES_CONFIG[genreKey] || { icon: '🏛️', name: capitalize(book.genre) };

    row.innerHTML = `
      <div class="ledger-details">
        <strong>${escapeHtml(book.title)}</strong>
        <small>${genreObj.icon} ${genreObj.name} • Scribe: ${escapeHtml(book.author)} • Total Copies: ${book.copies}</small>
      </div>
      <div>
        <span class="ledger-badge available">Cataloged</span>
      </div>
    `;
    row.appendChild(deleteBtn);
    manageList.appendChild(row);
  });
}

// --- LIFECYCLE HOOKS ---
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

window.addEventListener('load', () => {
  if (!books.length) initApp();
});
