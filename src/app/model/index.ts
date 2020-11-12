interface ContactDetails {
  name: string;
  jobTitle: string;
  email: string;
  phone: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  photo: string;
}

interface Logo {
  name: string;
  logo: string;
  link?: string;
}

interface History {
  organisation: Logo,
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  technologies: string;
}

export interface CvDocument {
  contactDetails: ContactDetails;
  languages: Logo[];
  objectives?: string[];
  skills: Logo[];
  experience: History[];
  education: History[];
  profileDescription: string[];
  footer?: string;
}
