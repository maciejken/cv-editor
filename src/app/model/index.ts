export interface ContactDetails {
  name: string;
  email: string;
  phone: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  photo: string;
}

export interface Language {
  name: string;
  flag: string;
}

export interface CvDocument {
  contactDetails: ContactDetails;
  languages: Language[];
  profileDescription: string;
}
