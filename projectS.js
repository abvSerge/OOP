import { Hospital } from "./hospital.js";
import { Factory } from "./users.js";

const hospital = new Hospital();

const doctor1 = Factory.createUser("Врач", "Др. Веб", "Офтальмолог");
const doctor2 = Factory.createUser("Врач", "Др. Дре", "Хирург");
const patient1 = Factory.createUser("Пациент", "Иван Иванов");
const patient2 = Factory.createUser("Пациент", "Ивана Ивановна");
const patient3 = Factory.createUser("Пациент", "Петр Петров");
const admin1 = Factory.createUser("Администратор", "322");

hospital.addUser(doctor1);
hospital.addUser(doctor2);
hospital.addUser(patient1);
hospital.addUser(patient2);
hospital.addUser(patient3);
hospital.addUser(admin1);
hospital.assignDoctorPatient("Др. Веб", "Иван Иванов");
hospital.assignDoctorPatient("Др. Веб", "Ивана Ивановна");
hospital.assignDoctorPatient("Др. Дре", "Петр Петров");

hospital.addMedicalRecord("Иван Иванов", {
  дата: "03.12.24",
  детали: "Ежегодный осмотр, всё хорошо.",
});
hospital.addMedicalRecord("Иван Иванов", {
  дата: "23.12.24",
  детали: "Повторное посещение для обследования зрения.",
});
hospital.addMedicalRecord("Петр Петров", {
  дата: "04.12.24",
  детали: "Ежегодный осмотр, всё хорошо.",
});

console.log("Назначения врачей:");
console.log(hospital.getAssignments());
doctor2.appointTreatment(patient3, "Операция");

console.log("История болезни пациента Иван Иванов:");
console.log(hospital.getPatientHistory("Иван Иванов"));
console.log("История болезни пациента Петр Петров:");
console.log(hospital.getPatientHistory("Петр Петров"));
