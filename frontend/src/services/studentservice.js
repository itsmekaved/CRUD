import axios from 'axios';
import {usestate} from "react";

export function getStudents() {
  return axios.get('http://127.0.0.1:8000/home/')
    .then(response => response.data)
}

export function deleteStudent(id) {
  return axios.delete('http://127.0.0.1:8000/home/' + id + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function updateStudent(id, student) {
  return axios.put('http://127.0.0.1:8000/home/' + id + '/', {
    id:student.id.value,
    std_rollno:student.std_rollno.value,
    std_name:student.std_name.value,
    std_branch:student.std_branch.value,
    std_course:student.std_course.value,
    std_studyhours:student.std_studyhours.value,
    std_marks:student.std_marks.value
  })
   .then(response => response.data)
}

export function addStudent(student){
  return axios.post('http://127.0.0.1:8000/home/', {
    id:null,
    std_rollno:student.std_rollno.value,
    std_name:student.std_name.value,
    std_branch:student.std_branch.value,
    std_course:student.std_course.value,
    std_studyhours:student.std_studyhours.value,
    std_marks:student.std_marks.value
  })
    .then(response=>response.data)
}

