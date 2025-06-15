import React, { createContext, useState, ReactNode } from "react";

type Appointment = {
  date: string;
  time: string;
  doctor: string;
  department: string;
  type: string;
  status: string;
};

type AppointmentContextType = {
  appointment: Appointment;
  setAppointment: React.Dispatch<React.SetStateAction<Appointment>>;
};

export const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export const AppointmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [appointment, setAppointment] = useState<Appointment>({
    date: "2025-06-30",
    time: "10:30",
    doctor: "Dr. Adeyemi Taylor",
    department: "Cardiology",
    type: "Follow-up",
    status: "Confirmed",
  });

  return (
    <AppointmentContext.Provider value={{ appointment, setAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};
