/**
 * ==========================================
 * DATABASE SISWA & LOGIKA APLIKASI (ADVANCED)
 * ==========================================
 * Menggunakan localStorage untuk menyimpan data siswa (Nilai, Absen)
 * agar bisa diedit oleh Guru.
 */

const DB_KEY_STUDENTS = 'sikelas_students_db';
const AUTH_KEY = 'sikelas_user';

// 1. DATA AWAL (DEFAULT)
// Gunakan ini jika localStorage kosong
const defaultStudents = [
    { id: '1', nis: '2024001', name: 'Ahmad Fauzi', gender: 'Laki-laki', avatar: 'AF', color: 'linear-gradient(135deg, #4F46E5, #7C3AED)', stats: {h:15, i:0, s:0, a:0}, grades: {mtk:85, fis:88, kim:82, bio:86, ind:84, ing:80} },
    { id: '2', nis: '2024002', name: 'Anisa Safitri', gender: 'Perempuan', avatar: 'AS', color: 'linear-gradient(135deg, #EC4899, #F472B6)', stats: {h:15, i:0, s:0, a:0}, grades: {mtk:96, fis:95, kim:97, bio:94, ind:96, ing:97} },
    { id: '3', nis: '2024003', name: 'Budi Pratama', gender: 'Laki-laki', avatar: 'BP', color: 'linear-gradient(135deg, #10B981, #34D399)', stats: {h:14, i:1, s:0, a:0}, grades: {mtk:94, fis:92, kim:95, bio:93, ind:94, ing:93} },
    { id: '4', nis: '2024004', name: 'Citra Wulandari', gender: 'Perempuan', avatar: 'CW', color: 'linear-gradient(135deg, #F59E0B, #FBBF24)', stats: {h:15, i:0, s:0, a:0}, grades: {mtk:93, fis:91, kim:92, bio:93, ind:91, ing:92} },
    { id: '5', nis: '2024005', name: 'Dimas Hakim', gender: 'Laki-laki', avatar: 'DH', color: 'linear-gradient(135deg, #8B5CF6, #A78BFA)', stats: {h:13, i:0, s:2, a:0}, grades: {mtk:91, fis:90, kim:92, bio:89, ind:91, ing:91} },
    { id: '6', nis: '2024006', name: 'Eka Nugraha', gender: 'Laki-laki', avatar: 'EN', color: 'linear-gradient(135deg, #3B82F6, #60A5FA)', stats: {h:15, i:0, s:0, a:0}, grades: {mtk:88, fis:90, kim:89, bio:90, ind:89, ing:90} },
    { id: '7', nis: '2024007', name: 'Fajar Aditya', gender: 'Laki-laki', avatar: 'FA', color: 'linear-gradient(135deg, #EF4444, #F87171)', stats: {h:14, i:1, s:0, a:0}, grades: {mtk:87, fis:89, kim:88, bio:89, ind:88, ing:90} },
    { id: '8', nis: '2024008', name: 'Gita Rahayu', gender: 'Perempuan', avatar: 'GR', color: 'linear-gradient(135deg, #14B8A6, #2DD4BF)', stats: {h:15, i:0, s:0, a:0}, grades: {mtk:86, fis:88, kim:89, bio:88, ind:87, ing:90} },
    { id: '9', nis: '2024009', name: 'Hendra Wijaya', gender: 'Laki-laki', avatar: 'HW', color: 'linear-gradient(135deg, #6366F1, #818CF8)', stats: {h:14, i:0, s:1, a:0}, grades: {mtk:85, fis:86, kim:87, bio:88, ind:86, ing:85} },
    { id: '10', nis: '2024010', name: 'Indah Permata', gender: 'Perempuan', avatar: 'IP', color: 'linear-gradient(135deg, #A855F7, #C084FC)', stats: {h:15, i:0, s:0, a:0}, grades: {mtk:84, fis:85, kim:86, bio:87, ind:85, ing:84} },
    { id: '11', nis: '2024011', name: 'Joko Susanto', gender: 'Laki-laki', avatar: 'JS', color: 'linear-gradient(135deg, #F97316, #FB923C)', stats: {h:13, i:1, s:0, a:1}, grades: {mtk:83, fis:84, kim:85, bio:86, ind:84, ing:83} },
    { id: '12', nis: '2024012', name: 'Kartika Dewi', gender: 'Perempuan', avatar: 'KD', color: 'linear-gradient(135deg, #EC4899, #DB2777)', stats: {h:15, i:0, s:0, a:0}, grades: {mtk:82, fis:83, kim:84, bio:85, ind:83, ing:82} },
    { id: '13', nis: '2024013', name: 'Lukman Hakim', gender: 'Laki-laki', avatar: 'LH', color: 'linear-gradient(135deg, #059669, #10B981)', stats: {h:14, i:0, s:1, a:0}, grades: {mtk:81, fis:82, kim:83, bio:84, ind:82, ing:81} },
    { id: '14', nis: '2024014', name: 'Maya Sari', gender: 'Perempuan', avatar: 'MS', color: 'linear-gradient(135deg, #7C3AED, #8B5CF6)', stats: {h:14, i:1, s:0, a:0}, grades: {mtk:80, fis:81, kim:82, bio:83, ind:81, ing:80} },
    { id: '15', nis: '2024015', name: 'Nico Pratama', gender: 'Laki-laki', avatar: 'NP', color: 'linear-gradient(135deg, #2563EB, #3B82F6)', stats: {h:14, i:0, s:1, a:0}, grades: {mtk:80, fis:80, kim:81, bio:82, ind:80, ing:78} }
];

// 2. DATA MANAGER (CRUD)
function getStudents() {
    const data = localStorage.getItem(DB_KEY_STUDENTS);
    if (!data) {
        // Init data jika belum ada
        localStorage.setItem(DB_KEY_STUDENTS, JSON.stringify(defaultStudents));
        return defaultStudents;
    }
    return JSON.parse(data);
}

function saveStudents(studentArray) {
    localStorage.setItem(DB_KEY_STUDENTS, JSON.stringify(studentArray));
}

function addStudent(name, nis, gender) {
    const currentData = getStudents();
    const newId = (currentData.length + 1).toString();
    const initials = name.split(' ').map(n=>n[0]).join('').substring(0,2).toUpperCase();
    
    const newStudent = {
        id: newId,
        nis: nis,
        name: name,
        gender: gender,
        avatar: initials,
        color: 'linear-gradient(135deg, #64748B, #94A3B8)', // Static grey for new users
        stats: {h:0, i:0, s:0, a:0},
        grades: {mtk:0, fis:0, kim:0, bio:0, ind:0, ing:0}
    };
    
    currentData.push(newStudent);
    saveStudents(currentData);
    return newStudent;
}

// 3. AUTHENTICATION (Siswa & Guru)
function loginUser(studentId) {
    const students = getStudents();
    const student = students.find(s => s.id === studentId);
    if (student) {
        student.role = 'student'; // Force role
        localStorage.setItem(AUTH_KEY, JSON.stringify(student));
        return true;
    }
    return false;
}

function loginAsTeacher() {
    const teacher = {
        id: 'TEACHER',
        name: 'Bu Siti Aminah',
        role: 'teacher',
        avatar: 'SA',
        color: 'linear-gradient(135deg, #10B981, #059669)', // Green theme for teacher
        gender: 'Perempuan'
    };
    localStorage.setItem(AUTH_KEY, JSON.stringify(teacher));
    return true;
}

function getCurrentUser() {
    const userStr = localStorage.getItem(AUTH_KEY);
    return userStr ? JSON.parse(userStr) : null;
}

function checkAuth() {
    if (!getCurrentUser()) {
        window.location.href = 'login.html';
    }
}

function logoutUser() {
    localStorage.removeItem(AUTH_KEY);
    window.location.href = 'login.html';
}

// 4. UTILS
// Expose global students variable for older scripts expecting it (Read-only view)
const students = getStudents();

// HIGHLIGHT
function highlightCurrentUser() {
    const user = getCurrentUser();
    if (!user) return;

    // Jika Guru, tidak perlu highlight diri sendiri di tabel siswa
    if (user.role === 'teacher') return;

    // 1. Cari di PIKET (elemen .member span)
    const piketNames = document.querySelectorAll('.member span');
    piketNames.forEach(el => {
        if (el.innerText.includes(user.name)) {
            el.parentElement.style.background = 'rgba(99, 102, 241, 0.2)'; 
            el.parentElement.style.border = '1px solid #6366f1'; 
            el.parentElement.style.borderRadius = '8px';
            el.parentElement.style.padding = '4px 8px';
        }
    });

    // 2. Cari di ABSENSI & NILAI (elemen td)
    const tableCells = document.querySelectorAll('td');
    tableCells.forEach(el => {
        // Gunakan includes agar tetap terdeteksi meski ada tambahan teks (misal NIS di bawah nama)
        if (el.innerText.includes(user.name)) {
            // Pastikan ini kolom nama (bukan kolom lain yang kebetulan sama)
            // Biasanya kolom nama di index 1 (setelah no)
            const parent = el.parentElement; // tr
            const index = Array.from(parent.children).indexOf(el);
            
            // Kolom Nama biasanya index 1
            if (index === 1) {
                parent.style.background = 'rgba(99, 102, 241, 0.15)';
                el.style.fontWeight = 'bold';
                el.style.color = '#6366f1';
                
                // Cek agar ikon tidak double
                if (!el.innerHTML.includes('👈')) {
                    el.innerHTML += ' <span style="font-size:12px">👈</span>';
                }
            }
        }
    });
}
