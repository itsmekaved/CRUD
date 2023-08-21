import axios from 'axios';

export function getStudents2() {
  return axios.get('http://127.0.0.1:8000/list/')
    .then(response => response.data)
}

export function deleteStudent2(customer_id) {
  return axios.delete('http://127.0.0.1:8000/list/' + customer_id + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function updateStudent2(customer_id, student) {
  return axios.put('http://127.0.0.1:8000/list/' + customer_id + '/', {
    customer_id:student.customer_id.value,
    customer_pan:student.customer_pan.value,
    customer_name:student.customer_name.value,
    customer_phone:student.customer_phone.value,
  })
   .then(response => response.data)
}

export function addStudent2(student){
  return axios.post('http://127.0.0.1:8000/list/', {
    customer_id:student.customer_id.value,
    customer_pan:student.customer_pan.value,
    customer_name:student.customer_name.value,
    customer_phone:student.customer_phone.value,
  })
    .then(response=>response.data)
}


export function getStudents() {
  return axios.get('http://127.0.0.1:8000/loanlist/')
    .then(response => response.data)
}

export function deleteStudent(loan_id) {
  return axios.delete('http://127.0.0.1:8000/loanlist/' + loan_id + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function updateStudent(loan_id, student) {
  return axios.put('http://127.0.0.1:8000/loanlist/' + loan_id + '/', {
    relationship_manager: student.relationship_manager.value,
  })
   .then(response => response.data)
}

export function addStudent(student){
  return axios.post('http://127.0.0.1:8000/loanlist/', {
    loan_id:student.loan_id.value,
    loan_amount:student.loan_amount.value,
    employee_table:student.employee_table[1].customer_pan.value,
    customer_name:student.customer_name.value,
    relationship_manager: student.relationship_manager.value,
    creation_date:student.creation_date.value,
    update_date:student.update_date.value,
  })
    .then(response=>response.data)
}




