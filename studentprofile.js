function goBack() {
    window.history.back(); // Go back to the previous page
}

window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const studentName = params.get('name');
    const dob = params.get('dob');
    const fatherName = params.get('fatherName');
    const section = params.get('section');
    const courses = params.get('courses').split(',');

    const studentDetailsDiv = document.getElementById('studentDetails');
    studentDetailsDiv.innerHTML = `
        <p><strong>Name:</strong> ${studentName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Father's Name:</strong> ${fatherName}</p>
        <p><strong>Section:</strong> ${section}</p>
        <p><strong>Enrolled Courses:</strong> ${courses.join(', ')}</p>
    `;
};