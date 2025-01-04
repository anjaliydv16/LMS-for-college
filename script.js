const students = []; // Array to hold enrolled students

document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const studentName = document.getElementById('studentName').value;
    const dob = document.getElementById('dob').value;
    const fatherName = document.getElementById('fatherName').value;
    const section = document.getElementById('section').value;
    const courseName = document.getElementById('courseName').value;

    // Check if the student already exists
    let student = students.find(s => s.name === studentName);
    if (!student) {
        // If the student doesn't exist, create a new student
        student = { name: studentName, dob: dob, fatherName: fatherName, section: section, courses: [] };
        students.push(student);
    }

    // Enroll the student in the course
    student.courses.push(courseName);

    // Update the student list display
    updateStudentList();
    document.getElementById('enrollmentForm').reset(); // Reset the form
});

function updateStudentList() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = ''; // Clear the current list

    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.textContent = `${student.name} - ${student.section}`;
        
        // Create a button to view details
        const detailsButton = document.createElement('button');
        detailsButton.textContent = 'View Details';
        detailsButton.onclick = () => {
            // Navigate to the student profile page with parameters
            window.location.href = `studentProfile.html?name=${encodeURIComponent(student.name)}&dob=${encodeURIComponent(student.dob)}&fatherName=${encodeURIComponent(student.fatherName)}&section=${encodeURIComponent(student.section)}&courses=${encodeURIComponent(student.courses.join(','))}`;
        };
        
        li.appendChild(detailsButton);
        studentList.appendChild(li);
    });
}