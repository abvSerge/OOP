export class Hospital {
  constructor() {
    this.users = [];
    this.assignments = {}; // Связь врач-пациент
  }

  addUser(user) {
    this.users.push(user);
  }

  assignDoctorPatient(doctorName, patientName) {
    const doctor = this.users.find(
      (u) => u.name === doctorName && u.role === "Врач"
    );
    const patient = this.users.find(
      (u) => u.name === patientName && u.role === "Пациент"
    );

    if (!doctor || !patient) {
      throw new Error("Врач или Пациент не найдены.");
    }

    doctor.assignPatient(patient);

    if (!this.assignments[doctorName]) {
      this.assignments[doctorName] = [];
    }
    this.assignments[doctorName].push(patientName);
  }

  getPatientHistory(patientName) {
    const patient = this.users.find(
      (u) => u.name === patientName && u.role === "Пациент"
    );
    if (!patient) {
      throw new Error("Пациент не найден.");
    }
    return patient.getHistory();
  }

  addMedicalRecord(patientName, record) {
    const patient = this.users.find(
      (u) => u.name === patientName && u.role === "Пациент"
    );
    if (!patient) {
      throw new Error("Пациент не найден.");
    }
    patient.addHistory(record);
  }

  getAssignments() {
    const assignmentsList = [];
    for (const doctor in this.assignments) {
      if (this.assignments.hasOwnProperty(doctor)) {
        const patients = this.assignments[doctor].join(", ");
        assignmentsList.push(
          `Врач ${doctor} обследует следующих пациентов: ${patients}`
        );
      }
    }
    return assignmentsList;
  }
}
