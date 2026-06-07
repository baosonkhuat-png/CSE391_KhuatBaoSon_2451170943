const students = [
    { name: 'An', math: 8, physics: 7, cs: 9, gender: 'M' },
    { name: 'Bình', math: 6, physics: 9, cs: 7, gender: 'F' },
    { name: 'Chi', math: 9, physics: 6, cs: 8, gender: 'F' },
    { name: 'Dũng', math: 5, physics: 5, cs: 6, gender: 'M' },
    { name: 'Em', math: 10, physics: 8, cs: 9, gender: 'F' },
    { name: 'Phong', math: 3, physics: 4, cs: 5, gender: 'M' },
    { name: 'Giang', math: 7, physics: 7, cs: 7, gender: 'F' },
    { name: 'Huy', math: 4, physics: 6, cs: 3, gender: 'M' },
];

function calculateAverage(student) {
    return student.math * 0.4 + student.physics * 0.3 + student.cs * 0.3;
}

function getRank(avg) {
    if (avg >= 8) return 'Giỏi';
    if (avg >= 6.5) return 'Khá';
    if (avg >= 5) return 'Trung bình';
    return 'Yếu';
}

const results = students.map((student, index) => {
    const avg = Number(calculateAverage(student).toFixed(1));
    const rank = getRank(avg);
    return { index: index + 1, name: student.name, avg, rank, gender: student.gender, math: student.math, physics: student.physics, cs: student.cs };
});

console.log('| STT | Tên    | TB   | Xếp loại    |');
console.log('|-----|--------|------|-------------|');
results.forEach(item => {
    console.log(`| ${item.index.toString().padEnd(3)} | ${item.name.padEnd(6)} | ${item.avg.toFixed(1).padEnd(4)} | ${item.rank.padEnd(11)} |`);
});

const rankCount = results.reduce((acc, item) => {
    acc[item.rank] = (acc[item.rank] || 0) + 1;
    return acc;
}, {});

console.log('\nSố sinh viên theo xếp loại:');
Object.entries(rankCount).forEach(([rank, count]) => {
    console.log(`${rank}: ${count}`);
});

const maxAvg = Math.max(...results.map(item => item.avg));
const minAvg = Math.min(...results.map(item => item.avg));
const topStudents = results.filter(item => item.avg === maxAvg).map(item => item.name);
const bottomStudents = results.filter(item => item.avg === minAvg).map(item => item.name);

console.log('\nSinh viên điểm TB cao nhất:', topStudents.join(', '), `(${maxAvg})`);
console.log('Sinh viên điểm TB thấp nhất:', bottomStudents.join(', '), `(${minAvg})`);

const totals = students.reduce((acc, student) => {
    acc.math += student.math;
    acc.physics += student.physics;
    acc.cs += student.cs;
    acc.count += 1;
    return acc;
}, { math: 0, physics: 0, cs: 0, count: 0 });

console.log('\nĐiểm TB toàn lớp:');
console.log('Math:', (totals.math / totals.count).toFixed(1));
console.log('Physics:', (totals.physics / totals.count).toFixed(1));
console.log('CS:', (totals.cs / totals.count).toFixed(1));

const genderAverages = students.reduce((acc, student) => {
    if (!acc[student.gender]) {
        acc[student.gender] = { math: 0, physics: 0, cs: 0, count: 0 };
    }
    acc[student.gender].math += student.math;
    acc[student.gender].physics += student.physics;
    acc[student.gender].cs += student.cs;
    acc[student.gender].count += 1;
    return acc;
}, {});

console.log('\nĐiểm TB theo giới tính:');
Object.entries(genderAverages).forEach(([gender, data]) => {
    console.log(`${gender}: Math ${(data.math / data.count).toFixed(1)}, Physics ${(data.physics / data.count).toFixed(1)}, CS ${(data.cs / data.count).toFixed(1)}`);
});
