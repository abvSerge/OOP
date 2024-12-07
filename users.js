class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
}

class Patient extends User {
  constructor(name) {
    super(name, "Пациент");
    this.medicalHistory = [];
  }

  addHistory(entry) {
    this.medicalHistory.push(entry);
  }

  getHistory() {
    return this.medicalHistory;
  }

  appointTreatment(treatment) {
    this.addHistory({
      дата: new Date().toLocaleDateString(),
      детали: `Лечение: ${treatment}`,
    });
  }
}

class Doctor extends User {
  constructor(name, special) {
    super(name, "Врач");
    this.special = special;
    this.patients = [];
  }

  assignPatient(patient) {
    this.patients.push(patient);
  }

  getPatients() {
    return this.patients.map((p) => p.name);
  }

  appointTreatment(patient, treatment) {
    patient.appointTreatment(treatment);
  }
}

class Admin extends User {
  constructor(name) {
    super(name, "Администратор");
  }
}

export class Factory {
  static createUser(type, name, special = null) {
    switch (type) {
      case "Пациент":
        return new Patient(name);
      case "Врач":
        if (!special) throw new Error("Врач должен иметь специализацию");
        return new Doctor(name, special);
      case "Администратор":
        return new Admin(name);
      default:
        throw new Error(`Неизвестный тип пользователя: ${type}`);
    }
  }
}
