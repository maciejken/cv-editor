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

interface NamedImage {
  name: string;
  image: string;
}

interface HistoryItem {
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  technologies: string;
}

interface CvItem {
  organisation: NamedImage;
  history: HistoryItem[];
}

export interface CvDocument {
  contactDetails: ContactDetails;
  languages: NamedImage[];
  objectives?: string[];
  skills: NamedImage[];
  experience: CvItem[];
  education: CvItem[];
  profileDescription: string[];
  footer?: string;
}
