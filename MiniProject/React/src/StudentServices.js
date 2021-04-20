import axios from 'axios'
const Student_API_BASE_URL ="http://localhost:8080/api/students";
class StudentServices(){
getStudents(){
    return axios.get(Student_API_BASE_URL);
}
}
export default new StudentServices();